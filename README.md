# Knapp-Built Machines — website + Knapp-Built Stack™ membership

Production-ready Next.js SaaS site for **Knapp-Built Machines** (Hammonton, NJ),
with member-gated access to the **Knapp-Built Stack™ Pallet Pattern Creator**.

**Stack:** Next.js (App Router) · React · Tailwind CSS · Supabase (auth + DB) ·
Stripe (subscriptions) · deploys to Vercel.

## Pages
- `/` Home · `/about` · `/equipment` · `/services` · `/contact`
- `/software` — Stack product page · `/pricing` — monthly membership
- `/login`, `/signup`, `/account` — auth + billing management
- `/builder` — the gated app (only loads for members with an active subscription)

## How gating actually works
1. Visitor signs up / logs in (Supabase auth, secure HTTP-only cookies).
2. They subscribe via **Stripe Checkout** (`/api/stripe/checkout`).
3. Stripe calls our **webhook** (`/api/webhooks/stripe`), which writes their
   subscription status into the `subscriptions` table using the service-role key.
4. `/builder` is a server component that checks the session **and** an active
   subscription before rendering. The app HTML itself is served by
   `/api/builder`, which **re-checks** auth + subscription and streams the file
   from the non-public `protected/` folder. So the builder is never reachable by
   URL without a paid, logged-in session.

> The actual Pallet Pattern Creator app is `protected/pallet-builder.html`
> (your existing builder). Replace that file anytime to ship updates.

## Quick start
```bash
npm install
cp .env.local.example .env.local   # then fill in your keys
npm run dev                          # http://localhost:3000
```
Full, click-by-click setup (Supabase, Stripe, Vercel) is in **SETUP.md**.

## Customizing content
- Company facts live in `src/lib/config.ts` (`SITE`).
- Prices/plan copy in `src/lib/config.ts` (`PLANS`).
- Page text marked `[Placeholder]` in About/Equipment/Services/Contact — edit freely.
- Brand colors/fonts in `tailwind.config.ts` and `src/app/layout.tsx`.
