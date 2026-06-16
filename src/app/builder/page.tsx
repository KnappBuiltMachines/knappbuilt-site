import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAccess } from "@/lib/subscription";

export const metadata = { title: "Pallet Pattern Creator ‚Äî Knapp-Built Stack" };

export default async function Builder() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/builder");

  const access = await getAccess(supabase, user.id);
  if (!access.allowed) redirect("/pricing");

  return (
    <div className="flex h-screen flex-col bg-ink-950">
      <div className="flex items-center justify-between border-b-2 border-amber bg-ink-950 px-4 py-2">
        <Link href="/" className="font-display text-sm uppercase tracking-widest text-amber">
          ‚Üê Knapp-Built Stack
        </Link>
        <Link href="/account" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-amber">
          Account
        </Link>
      </div>

      {access.reason === "trial" && (
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-amber/40 bg-amber/10 px-4 py-2 text-center text-sm text-amber">
          <span>
            Free trial ‚Äî <strong>{access.trialDaysLeft} day{access.trialDaysLeft === 1 ? "" : "s"} left</strong>. No card on file yet.
          </span>
          <Link href="/pricing" className="font-semibold underline hover:text-amber-light">
            Subscribe to keep access ‚Üí
          </Link>
        </div>
      )}

      {/* The app is served by /api/builder, which re-verifies access. */}
      <iframe
        src="/api/builder"
        title="Pallet Pattern Creator"
        className="min-h-0 flex-1 w-full border-0"
      />
    </div>
  );
}

