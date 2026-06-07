import Stripe from "stripe";

// The real key comes from the STRIPE_SECRET_KEY environment variable at runtime.
// A harmless placeholder lets `next build` import this file even before that
// variable is set. Once you add STRIPE_SECRET_KEY in Vercel, the placeholder is
// never used.
export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_placeholder_build_only",
  {
    appInfo: { name: "Knapp-Built Stack", version: "1.0.0" },
  }
);
