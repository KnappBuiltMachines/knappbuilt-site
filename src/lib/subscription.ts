// Helper to read a user's access state from Supabase.
// Access is granted by EITHER an active Stripe subscription OR a no-card
// free trial that runs for TRIAL_DAYS days from when the profile was created.
import { ACTIVE_STATUSES } from "@/lib/config";
import type { SupabaseClient } from "@supabase/supabase-js";

export const TRIAL_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;

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

export type Access = {
  allowed: boolean;
  reason: "subscription" | "trial" | "expired" | "none";
  trialDaysLeft: number; // 0 unless currently on trial
  trialEndsAt: string | null; // ISO string when known
};

// Single source of truth for "can this user use the builder?"
export async function getAccess(
  supabase: SupabaseClient,
  userId: string
): Promise<Access> {
  // 1) A paid (or Stripe-trialing) subscription always wins.
  const sub = await getActiveSubscription(supabase, userId);
  if (sub) {
    return { allowed: true, reason: "subscription", trialDaysLeft: 0, trialEndsAt: null };
  }

  // 2) Otherwise, fall back to the no-card free trial based on signup date.
  const { data: profile } = await supabase
    .from("profiles")
    .select("created_at")
    .eq("id", userId)
    .single();

  if (profile?.created_at) {
    const end = new Date(profile.created_at).getTime() + TRIAL_DAYS * DAY_MS;
    const now = Date.now();
    const trialEndsAt = new Date(end).toISOString();
    if (now < end) {
      const daysLeft = Math.max(1, Math.ceil((end - now) / DAY_MS));
      return { allowed: true, reason: "trial", trialDaysLeft: daysLeft, trialEndsAt };
    }
    return { allowed: false, reason: "expired", trialDaysLeft: 0, trialEndsAt };
  }

  return { allowed: false, reason: "none", trialDaysLeft: 0, trialEndsAt: null };
}
