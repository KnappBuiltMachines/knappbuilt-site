-- ════════════════════════════════════════════════════════════════
-- Knapp-Built Stack — database schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query).
-- ════════════════════════════════════════════════════════════════

-- 1) PROFILES: one row per auth user, holds Stripe customer id
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  stripe_customer_id text unique,
  created_at timestamptz default now()
);

-- 2) SUBSCRIPTIONS: mirrors Stripe subscription state (written by webhook)
create table if not exists public.subscriptions (
  id text primary key,                       -- Stripe subscription id (sub_...)
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null,                      -- active, trialing, past_due, canceled, ...
  price_id text,
  plan text,                                 -- e.g. 'monthly'
  current_period_end timestamptz,
  cancel_at_period_end boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists subscriptions_user_id_idx on public.subscriptions(user_id);

-- 3) Row Level Security: users can read only their own rows.
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;

drop policy if exists "own profile read" on public.profiles;
create policy "own profile read" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "own profile update" on public.profiles;
create policy "own profile update" on public.profiles
  for update using (auth.uid() = id);

drop policy if exists "own subscriptions read" on public.subscriptions;
create policy "own subscriptions read" on public.subscriptions
  for select using (auth.uid() = user_id);
-- NOTE: inserts/updates to subscriptions happen via the webhook using the
-- service-role key, which bypasses RLS. No client write policy is needed.

-- 4) Auto-create a profile row when a user signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
