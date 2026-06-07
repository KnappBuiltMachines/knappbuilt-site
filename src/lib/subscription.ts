// Helper to read a user's current subscription from Supabase.
import { ACTIVE_STATUSES } from "@/lib/config";
import type { SupabaseClient } from "@supabase/supabase-js";

export type Subscription = {
  id: string;
  user_id: string;
  status: string;
  price_id: string | null;
  plan: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean | null;
};

export async function getActiveSubscription(
  supabase: SupabaseClient,
  userId: string
): Promise<Subscription | null> {
  const { data } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .order("current_period_end", { ascending: false })
    .limit(1);

  const sub = data?.[0] as Subscription | undefined;
  if (sub && ACTIVE_STATUSES.includes(sub.status)) return sub;
  return null;
}
