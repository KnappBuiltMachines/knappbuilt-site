// Central place for plan + brand config.
export const SITE = {
  name: "Knapp-Built Machines",
  product: "Knapp-Built Stack\u2122",
  tagline: "Pallet Pattern Creator",
  city: "Hammonton, NJ",
  founded: 2008,
  founders: "John Knapp & Brandon Knapp",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export type PlanKey = "monthly";

export const PLANS: Record<
  PlanKey,
  { name: string; priceId: string | undefined; price: string; cadence: string; note: string }
> = {
  monthly: {
    name: "Monthly",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY,
    price: "$89",
    cadence: "/month",
    note: "Billed monthly. Cancel anytime.",
  },
};

// status values that count as paid access
export const ACTIVE_STATUSES = ["active", "trialing"];
