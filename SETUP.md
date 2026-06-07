# Setup & Deployment Guide

Estimated time: ~45–60 min. You'll need accounts on **Supabase**, **Stripe**,
and **Vercel** (all have free tiers), plus **Node.js 18.18+** installed.

────────────────────────────────────────────────────────────
## 1. Install
```bash
npm install
cp .env.local.example .env.local
```
Keep `.env.local` open — you'll paste keys into it as you go.

────────────────────────────────────────────────────────────
## 2. Supabase (auth + database)
1. Create a project at https://supabase.com (note the database password).
2. **SQL Editor → New query** → paste all of `supabase/schema.sql` → **Run**.
   This creates the `profiles` and `subscriptions` tables, RLS policies, and a
   trigger that makes a profile row on signup.
3. **Project Settings → API**: copy these into `.env.local`:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon / publishable key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - service_role / secret key → `SUPABASE_SERVICE_ROLE_KEY` (server-only secret!)
4. **Authentication → URL Configuration**:
   - Site URL: `http://localhost:3000` (add your real domain later)
   - Redirect URLs: add `http://localhost:3000/auth/callback`
5. **Authentication → Providers → Email**: for fastest testing you can turn
   **Confirm email** OFF (users log in immediately). Leave it ON for production
   and the signup page will prompt users to confirm by email.

────────────────────────────────────────────────────────────
## 3. Stripe (subscriptions)
1. In the Stripe Dashboard (Test mode), **Products → Add product**:
   "Knapp-Built Stack — Pallet Pattern Creator".
2. Add a **recurring price** on that product:
   - Monthly ($89 / month) → copy its `price_...` id
   Put it in `.env.local` as `NEXT_PUBLIC_STRIPE_PRICE_MONTHLY`. (Update the
   displayed amount in `src/lib/config.ts` if you change the price.)
3. **Developers → API keys**: copy the **Secret key** → `STRIPE_SECRET_KEY`.
4. **Billing → Customer portal**: click **Activate** (lets members manage/cancel).

### Webhook — local testing
Install the Stripe CLI, then:
```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```
The CLI prints a signing secret (`whsec_...`) → put it in `STRIPE_WEBHOOK_SECRET`.
Leave `stripe listen` running while you test checkout.

### Webhook — production (after deploy)
**Developers → Webhooks → Add endpoint**:
- URL: `https://YOUR-DOMAIN/api/webhooks/stripe`
- Events: `checkout.session.completed`, `customer.subscription.created`,
  `customer.subscription.updated`, `customer.subscription.deleted`,
  `invoice.paid`, `invoice.payment_failed`
- Copy that endpoint's signing secret into your Vercel env (`STRIPE_WEBHOOK_SECRET`).

────────────────────────────────────────────────────────────
## 4. Run locally
```bash
npm run dev
```
Test the full loop: sign up → pick a plan → pay with Stripe test card
`4242 4242 4242 4242` (any future date / any CVC) → you land on `/builder`
with the Pallet Pattern Creator loaded. Check the `subscriptions` table in
Supabase shows an `active` row.

────────────────────────────────────────────────────────────
## 5. Deploy to Vercel
1. Push this folder to a GitHub repo.
2. https://vercel.com → **New Project** → import the repo (Next.js auto-detected).
3. **Environment Variables** — add every key from `.env.local`, and set
   `NEXT_PUBLIC_SITE_URL` to your real URL (e.g. `https://knappbuiltmachines.com`).
4. Deploy. Then add the **production Stripe webhook** (step 3 above) and put its
   signing secret into Vercel env, and add your domain to Supabase **Auth → URL
   Configuration** (Site URL + `https://YOUR-DOMAIN/auth/callback`).
5. Point your domain `knappbuiltmachines.com` at Vercel (Project → Settings →
   Domains) and go live. Switch Stripe to **live mode** keys when ready.

────────────────────────────────────────────────────────────
## Notes
- Switching `current_period_end` / invoice fields: the webhook reads them
  defensively, so it works whether your Stripe API version puts period dates on
  the subscription or on its items.
- To update the builder app, just replace `protected/pallet-builder.html`.
- The contact form is a static placeholder — wire it to an email service
  (Resend, etc.) or a Supabase table when you're ready.

────────────────────────────────────────────────────────────
## Troubleshooting a failed deploy
Read the build log and match the FIRST error to one of these:

1. **"npm error No matching version found for <package>@..."** (install step)
   A dependency version doesn't exist. The versions in `package.json` are set to
   safe ranges; if you edited them, lower the floor (e.g. `"next": "^15.3.0"`).
   Then commit and redeploy.

2. **"supabaseUrl is required" / "Invalid API key"** (runtime, after it builds)
   Environment variables aren't set on the host. In Vercel → Project →
   Settings → Environment Variables, add ALL keys from `.env.local.example`
   (and set `NEXT_PUBLIC_SITE_URL` to your real URL). Redeploy.

3. **"Module not found" / TypeScript errors** (build step)
   Make sure you uploaded the whole project (including `src/`, `public/`,
   `protected/`, and the config files) and ran `npm install`. `typescript.
   ignoreBuildErrors` is already on so type quirks won't block the build.

4. **404 / "Subscription required" on the builder after deploy**
   This is expected until you (a) set env vars, (b) added the Stripe webhook
   for your live URL, and (c) completed a test subscription so a row exists in
   the `subscriptions` table.

5. **It builds but the site is blank / static host errors**
   This app is a full Next.js app (it has a server: API routes, auth, Stripe).
   Deploy it to a host that runs Next.js — **Vercel** is simplest. It will NOT
   work on a static-only host (e.g. plain GitHub Pages, Netlify "drop", or a
   cPanel file upload) because those can't run the server side.

If the error isn't here, copy the first red error line from the build log.
