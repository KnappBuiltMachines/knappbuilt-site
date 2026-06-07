import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { PLANS, SITE, type PlanKey } from "@/lib/config";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { plan } = (await req.json()) as { plan: PlanKey };
  const selected = PLANS[plan];
  if (!selected?.priceId) {
    return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
  }

  // Reuse or create a Stripe customer, stored on the profile.
  const admin = createAdminClient();
  const { data: profile } = await admin
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .single();

  let customerId = profile?.stripe_customer_id ?? undefined;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email ?? undefined,
      metadata: { userId: user.id },
    });
    customerId = customer.id;
    await admin
      .from("profiles")
      .update({ stripe_customer_id: customerId })
      .eq("id", user.id);
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: selected.priceId, quantity: 1 }],
    client_reference_id: user.id,
    subscription_data: { metadata: { userId: user.id, plan } },
    allow_promotion_codes: true,
    success_url: `${SITE.url}/builder?checkout=success`,
    cancel_url: `${SITE.url}/pricing?checkout=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
