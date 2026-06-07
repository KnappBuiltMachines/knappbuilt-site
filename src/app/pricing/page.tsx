import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SubscribeButton from "@/components/SubscribeButton";
import { PLANS } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";
import { getActiveSubscription } from "@/lib/subscription";

export const metadata = { title: "Pricing — Knapp-Built Stack" };

export default async function Pricing() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const sub = user ? await getActiveSubscription(supabase, user.id) : null;

  const perks = [
    "Full Pallet Pattern Creator access",
    "Real-time 3D load visualization",
    "PDF & Excel report export",
    "Standard & custom pallet sizes",
    "Cancel anytime",
  ];

  return (
    <PageShell
      logo="stack"
      footer="stack"
      kicker="Pricing"
      title={<>Unlock the <span className="text-amber">Pattern Creator</span></>}
      intro="Full access to the Pallet Pattern Creator, billed monthly. Cancel anytime."
    >
      {sub && (
        <div className="mb-8 rounded-md border border-amber/50 bg-amber/10 p-4 text-amber">
          You already have an active membership.{" "}
          <Link href="/builder" className="font-semibold underline">Open the builder →</Link>
        </div>
      )}
      <Image src="/logo.png" alt="Knapp-Built Stack — Pallet Pattern Creator" width={1657} height={949} priority className="h-16 w-auto" />
      <h2 className="mt-5 text-2xl font-bold text-white">One simple membership</h2>
      <div className="mt-6 max-w-md">
        {(() => {
          const p = PLANS.monthly;
          return (
            <div className="relative rounded-lg border border-amber bg-ink-800 p-8 shadow-lg shadow-amber/10">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">{p.name}</div>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-5xl font-bold text-white">{p.price}</span>
                <span className="mb-1 text-zinc-400">{p.cadence}</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">{p.note}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {perks.map((perk) => (
                  <li key={perk} className="flex gap-2 text-zinc-200"><span className="text-amber">▸</span>{perk}</li>
                ))}
              </ul>
              <div className="mt-7">
                {sub ? (
                  <Link href="/account" className="block rounded border border-ink-500 py-3 text-center font-semibold uppercase tracking-wide text-zinc-200 hover:border-amber hover:text-amber">
                    Manage in account
                  </Link>
                ) : (
                  <SubscribeButton plan="monthly" className="w-full rounded bg-amber py-3 font-semibold uppercase tracking-wide text-ink-950 transition hover:bg-amber-light disabled:opacity-60">
                    Subscribe {p.name}
                  </SubscribeButton>
                )}
              </div>
            </div>
          );
        })()}
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        Not signed in? You'll be asked to log in or create an account before checkout.{" "}
        <Link href="/signup" className="text-amber hover:underline">Create an account</Link>.
      </p>
    </PageShell>
  );
}
