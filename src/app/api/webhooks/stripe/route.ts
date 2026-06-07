import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

// Map a Stripe subscription into a row in our subscriptions table.
async function upsertSubscription(sub: Stripe.Subscription) {
  const admin = createAdminClient();
  const userId =
    (sub.metadata?.userId as string | undefined) ??
    // fall back to looking up the customer's profile
    (await (async () => {
      const customerId =
        typeof sub.customer === "string" ? sub.customer : sub.customer.id;
      const { data } = await admin
        .from("profiles")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .single();
      return data?.id as string | undefined;
    })());

  if (!userId) {
    console.error("Webhook: could not resolve userId for subscription", sub.id);
    return;
  }

  const priceId = sub.items.data[0]?.price.id ?? null;
  // current_period_end lives on the subscription (older API) or on the
  // subscription item (newer billing API) — read whichever is present.
  const anySub = sub as unknown as { current_period_end?: number };
  const anyItem = sub.items.data[0] as unknown as { current_period_end?: number } | undefined;
  const periodEnd = anyItem?.current_period_end ?? anySub.current_period_end ?? null;

  await admin.from("subscriptions").upsert(
    {
      id: sub.id,
      user_id: userId,
      status: sub.status,
      price_id: priceId,
      plan: (sub.metadata?.plan as string | undefined) ?? null,
      current_period_end: periodEnd
        ? new Date(periodEnd * 1000).toISOString()
        : null,
      cancel_at_period_end: sub.cancel_at_period_end,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" }
  );
}

export async function POST(req: Request) {
  const body = await req.text(); // raw body required for signature verification
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "invalid";
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.subscription) {
          const sub = await stripe.subscriptions.retrieve(
            session.subscription as string
          );
          // ensure userId metadata is present for future events
          if (!sub.metadata?.userId && session.client_reference_id) {
            await stripe.subscriptions.update(sub.id, {
              metadata: { ...sub.metadata, userId: session.client_reference_id },
            });
            sub.metadata = { ...sub.metadata, userId: session.client_reference_id };
          }
          await upsertSubscription(sub);
        }
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        await upsertSubscription(event.data.object as Stripe.Subscription);
        break;
      }
      case "invoice.paid":
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        // `subscription` lives at different spots across Stripe API versions;
        // read it defensively without a directive that could become "unused".
        const subId =
          ((invoice as { subscription?: string | null }).subscription ?? null) as
            | string
            | null;
        if (subId) {
          const sub = await stripe.subscriptions.retrieve(subId);
          await upsertSubscription(sub);
        }
        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
