import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortalButton from "@/components/PortalButton";
import { createClient } from "@/lib/supabase/server";
import { getAccess, getActiveSubscription } from "@/lib/subscription";

export const metadata = { title: "My Account ‚Äî Knapp-Built Stack" };

export default async function Account() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/account");

  const sub = await getActiveSubscription(supabase, user.id);
  const access = await getAccess(supabase, user.id);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-blueprint px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white">My Account</h1>
          <p className="mt-2 text-zinc-400">{user.email}</p>

          <div className="mt-8 rounded-lg border border-ink-500 bg-ink-800 p-6">
            <h2 className="text-xl font-semibold text-white">Membership</h2>

            {sub ? (
              <div className="mt-3 space-y-1 text-sm text-zinc-300">
                <p>Status: <span className="font-semibold text-amber uppercase">{sub.status}</span></p>
                {sub.plan && <p>Plan: <span className="capitalize">{sub.plan}</span></p>}
                {sub.current_period_end && (
                  <p>{sub.cancel_at_period_end ? "Ends" : "Renews"}: {new Date(sub.current_period_end).toLocaleDateString()}</p>
                )}
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/builder" className="rounded bg-amber px-5 py-2.5 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light">Open Builder</Link>
                  <PortalButton className="rounded border border-ink-500 px-5 py-2.5 font-semibold uppercase tracking-wide text-zinc-200 hover:border-amber hover:text-amber" />
                </div>
              </div>
            ) : access.reason === "trial" ? (
              <div className="mt-3 space-y-1 text-sm text-zinc-300">
                <p>Status: <span className="font-semibold text-amber uppercase">Free trial</span></p>
                <p><span className="font-semibold text-amber">{access.trialDaysLeft} day{access.trialDaysLeft === 1 ? "" : "s"} left</span>{access.trialEndsAt && <> ¬∑ ends {new Date(access.trialEndsAt).toLocaleDateString()}</>}</p>
                <p className="text-zinc-400">No card on file yet. Subscribe anytime to keep access when your trial ends.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/builder" className="rounded bg-amber px-5 py-2.5 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light">Open Builder</Link>
                  <Link href="/pricing" className="rounded border border-amber px-5 py-2.5 font-semibold uppercase tracking-wide text-amber hover:bg-amber hover:text-ink-950">Subscribe</Link>
                </div>
              </div>
            ) : (
              <div className="mt-3 text-sm text-zinc-300">
                <p>{access.reason === "expired" ? "Your free trial has ended." : "No active membership."}</p>
                <Link href="/pricing" className="mt-4 inline-block rounded bg-amber px-5 py-2.5 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light">
                  {access.reason === "expired" ? "Subscribe to continue" : "Choose a plan"}
                </Link>
              </div>
            )}
          </div>

          <form action="/auth/signout" method="post" className="mt-6">
            <button className="text-sm text-zinc-400 underline hover:text-amber">Sign out</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

