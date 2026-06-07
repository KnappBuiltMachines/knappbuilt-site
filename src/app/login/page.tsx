"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/builder";
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
    if (error) {
      setErr(error.message);
      setLoading(false);
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-ink-500 bg-ink-800 p-8">
      <h1 className="text-2xl font-bold text-white">Member Login</h1>
      <p className="mt-1 text-sm text-zinc-400">Access {`\u201cStack\u201d`} — the Pallet Pattern Creator.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-400">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2.5 text-zinc-100 outline-none focus:border-amber" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-400">Password</label>
          <input type="password" required value={pw} onChange={(e) => setPw(e.target.value)}
            className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2.5 text-zinc-100 outline-none focus:border-amber" />
        </div>
        {err && <p className="text-sm text-red-400">{err}</p>}
        <button disabled={loading} className="w-full rounded bg-amber py-3 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light disabled:opacity-60">
          {loading ? "Signing in…" : "Log In"}
        </button>
      </form>
      <p className="mt-5 text-center text-sm text-zinc-400">
        No account? <Link href="/signup" className="text-amber hover:underline">Create one</Link>.
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-blueprint px-5 py-20">
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
