import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/config";

export const metadata = { title: "Contact — Knapp-Built Machines" };

export default function Contact() {
  return (
    <PageShell
      kicker="Contact"
      title={<>Get in <span className="text-amber">touch</span></>}
      intro={`We're based in ${SITE.city}. Reach out about equipment, service, or Stack software.`}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-zinc-300">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber">Phone</div>
            <p>[Placeholder] (XXX) XXX-XXXX</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber">Email</div>
            <p>[Placeholder] info@knappbuiltmachines.com</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber">Location</div>
            <p>{SITE.city}</p>
          </div>
        </div>
        {/* Static placeholder form (wire to email service / Supabase later) */}
        <div className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
          <label className="block text-xs uppercase tracking-widest text-zinc-400">Name</label>
          <input className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-zinc-100 outline-none focus:border-amber" />
          <label className="mt-4 block text-xs uppercase tracking-widest text-zinc-400">Email</label>
          <input type="email" className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-zinc-100 outline-none focus:border-amber" />
          <label className="mt-4 block text-xs uppercase tracking-widest text-zinc-400">Message</label>
          <textarea rows={4} className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-zinc-100 outline-none focus:border-amber" />
          <button className="mt-4 w-full rounded bg-amber py-3 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light">
            Send (placeholder)
          </button>
          <p className="mt-3 text-xs text-zinc-500">Hook this up to an email service or Supabase table — see README.</p>
        </div>
      </div>
    </PageShell>
  );
}
