import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/config";

export const metadata = { title: `${SITE.product} — Pallet Pattern Creator` };

const caps = [
  ["Deeper customization", "Build patterns the way your spec demands, not the way a template forces."],
  ["Standard & custom pallets", "GMA, block, stringer, and fully custom dimensions."],
  ["Real-time 3D", "Inspect the load and pattern from any angle before production."],
  ["Board-level layout", "Deck boards, stringers, spacing, and overhang under your control."],
  ["PDF reports", "Branded, print-ready cut sheets and summaries."],
  ["Excel export", "Bill-of-materials and data that drops into your systems."],
];

export default function Software() {
  return (
    <PageShell
      logo="stack"
      footer="stack"
      kicker="Knapp-Built Stack™"
      title={<>The <span className="text-amber">Pallet Pattern Creator</span></>}
      intro="A standalone software product built to close a real gap for packaging engineers."
    >
      <Image src="/logo.png" alt="Knapp-Built Stack — Pallet Pattern Creator" width={1657} height={949} priority className="mb-10 h-20 w-auto" />

      <p className="max-w-3xl text-zinc-300 leading-relaxed">
        Knapp-Built Stack™ is our specialized pallet pattern design and optimization software
        created for packaging professionals. Designed with packaging engineers in mind, the
        platform goes far beyond traditional Ti-Hi calculations. Users can build complex
        mixed-case pallet patterns, incorporate multiple case sizes on a single pallet,
        customize pallet footprints ranging from quarter pallets to full and custom-sized
        pallets, and optimize trailer loading configurations across multiple trailer sizes. By
        combining flexibility, visualization, and engineering-focused tools, Knapp-Built Stack
        helps companies improve pallet efficiency, maximize trailer utilization, reduce
        transportation costs, and develop smarter packaging solutions.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map(([t, d]) => (
          <div key={t} className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
            <h3 className="text-lg font-semibold text-white">{t}</h3>
            <p className="mt-2 text-sm text-zinc-400">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-amber/50 bg-amber/5 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to start designing?</h2>
        <p className="mt-2 text-zinc-300">Full access to the Pallet Pattern Creator, billed monthly.</p>
        <Link href="/pricing" className="mt-5 inline-block rounded bg-amber px-8 py-3.5 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light">
          View Plans
        </Link>
      </div>
    </PageShell>
  );
}
