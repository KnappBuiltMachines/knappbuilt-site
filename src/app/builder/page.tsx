import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getActiveSubscription } from "@/lib/subscription";

export const metadata = { title: "Pallet Pattern Creator — Knapp-Built Stack" };

export default async function Builder() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/builder");

  const sub = await getActiveSubscription(supabase, user.id);
  if (!sub) redirect("/pricing");

  return (
    <div className="flex h-screen flex-col bg-ink-950">
      <div className="flex items-center justify-between border-b-2 border-amber bg-ink-950 px-4 py-2">
        <Link href="/" className="font-display text-sm uppercase tracking-widest text-amber">
          ← Knapp-Built Stack
        </Link>
        <Link href="/account" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-amber">
          Account
        </Link>
      </div>
      {/* The app is served by /api/builder, which re-verifies the membership. */}
      <iframe
        src="/api/builder"
        title="Pallet Pattern Creator"
        className="min-h-0 flex-1 w-full border-0"
      />
    </div>
  );
}
