"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/config";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pw,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${SITE.url}/auth/callback?next=/builder`,
      },
    });
    if (error) {
      setErr(error.message);
      setLoading(false);
      return;
    }
    // If email confirmation is OFF, a session exists immediately.
    if (data.session) {
      window.location.href = "/builder";
      return;
    }
    setDone(true);
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-blueprint px-5 py-20">
        <div className="mx-auto w-full max-w-md rounded-lg border border-ink-500 bg-ink-800 p-8">
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="mt-1 text-sm text-zinc-400">Start your 7-day free trial ‚Äî no credit card required.</p>
          {done ? (
            <div className="mt-6 rounded border border-amber/50 bg-amber/10 p-4 text-sm text-amber">
              Check your email to confirm your account, then come back and{" "}
              <Link href="/login" className="font-semibold underline">log in</Link>.
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-400">Full name</label>
                <input required value={name} onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2.5 text-zinc-100 outline-none focus:border-amber" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-400">Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2.5 text-zinc-100 outline-none focus:border-amber" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-400">Password</label>
                <input type="password" required minLength={6} value={pw} onChange={(e) => setPw(e.target.value)}
                  className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2.5 text-zinc-100 outline-none focus:border-amber" />
              </div>
              {err && <p className="text-sm text-red-400">{err}</p>}
              <button disabled={loading} className="w-full rounded bg-amber py-3 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light disabled:opacity-60">
                {loading ? "Creating‚Ä¶" : "Sign Up"}
              </button>
            </form>
          )}
          <p className="mt-5 text-center text-sm text-zinc-400">
            Already a member? <Link href="/login" className="text-amber hover:underline">Log in</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

