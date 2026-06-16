import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/config";

export const metadata = { title: `${SITE.product} \u2014 Pallet Pattern Creator` };

const caps = [
  ["Deeper customization", "Build patterns the way your spec demands, not the way a template forces."],
  ["Standard & custom pallets", "GMA, block, stringer, and fully custom dimensions."],
  ["Real-time 3D", "Inspect the load and pattern from any angle before production."],
  ["Board-level layout", "Deck boards, stringers, spacing, and overhang under your control."],
  ["PDF reports", "Branded, print-ready cut sheets and summaries."],
  ["Excel export", "Bill-of-materials and data that drops into your systems."],
];

const shots: {
  img: string; w: number; h: number; kicker: string; title: string; desc: string; why: string;
}[] = [
  {
    img: "/screenshots/builder.jpg", w: 1500, h: 763,
    kicker: "Pattern Engine",
    title: "50+ optimized patterns, instantly",
    desc: "Enter your case and pallet dimensions and Stack instantly generates dozens of layouts \u2014 each ranked by cubic efficiency, case support, and stability. You start from the best option, not a blank screen.",
    why: "Stop guessing at Ti-Hi. See the most efficient, most stable pattern for your exact case in seconds.",
  },
  {
    img: "/screenshots/layers-2d.jpg", w: 1500, h: 720,
    kicker: "Layer Planning",
    title: "Plan every layer, down to the case",
    desc: "Step through the load one layer at a time \u2014 including alternating and interlocked layers \u2014 with exact case placement, orientation, and dimensions called out.",
    why: "Gives your crew a clear, repeatable build map and fewer mistakes on the floor.",
  },
  {
    img: "/screenshots/mixed-3d.jpg", w: 796, h: 632,
    kicker: "Mixed-Case Loads",
    title: "Multiple case sizes on one pallet",
    desc: "Real shipments aren't one SKU. Combine different cases and box sizes, layer by layer, and see the finished unit load rendered in full 3D.",
    why: "Build and document accurate mixed loads that match what actually ships.",
  },
  {
    img: "/screenshots/truck-load.jpg", w: 1500, h: 426,
    kicker: "Trailer Loading",
    title: "Fill the trailer, keep it balanced",
    desc: "Plan how pallets fit a 53' reefer, dry van, or custom trailer \u2014 with live pallet counts, column-and-row layout, and a center-of-mass balance check.",
    why: "Maximize every trailer and cut freight cost per unit shipped.",
  },
  {
    img: "/screenshots/report-builder.jpg", w: 1500, h: 855,
    kicker: "Report Builder",
    title: "Build the spec sheet you need",
    desc: "Drag in 3D renders, 2D layer diagrams, and case, pallet, and truck stats to compose a custom, branded report \u2014 or start from a ready-made layout.",
    why: "Hand customers and crews exactly the information they need, in your branding.",
  },
];

export default function Software() {
  return (
    <PageShell
      logo="stack"
      footer="stack"
      kicker="Knapp-Built Stack\u2122"
      title={<>The <span className="text-amber">Pallet Pattern Creator</span></>}
      intro="A standalone software product built to close a real gap for packaging engineers."
    >
      <Image src="/logo.png" alt="Knapp-Built Stack - Pallet Pattern Creator" width={1657} height={949} priority className="mb-10 h-20 w-auto" />

      <div className="max-w-3xl space-y-5 text-zinc-300 leading-relaxed">
        <p>
          Knapp-Built Machines was founded on solving real manufacturing problems through
          custom equipment design. Over years of working alongside production teams and
          packaging engineers, we discovered that many of the biggest inefficiencies began long
          before products ever reached the line &mdash; they started with pallet decisions. So we
          applied the same engineering mindset we use to build machines and created Knapp-Built
          Stack&trade;: a pallet pattern creator designed by people who understand the realities of
          packaging, automation, warehousing, and transportation.
        </p>
        <p>
          That same engineering focus runs through every part of the software. Knapp-Built
          Stack&trade; goes far beyond traditional Ti-Hi calculations &mdash; build complex mixed-case
          pallet patterns, place multiple case sizes on a single pallet, customize footprints
          from quarter pallets to full and fully custom sizes, and optimize trailer loading
          across multiple trailer types. By combining flexibility, real-time visualization, and
          engineering-focused tools, it helps companies improve pallet efficiency, maximize
          trailer utilization, reduce transportation costs, and develop smarter packaging
          solutions.
        </p>
        <p className="text-zinc-200">
          Our mission remains unchanged: build practical solutions that make manufacturing work
          better &mdash; whether they're made of steel or software.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map(([t, d]) => (
          <div key={t} className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
            <h3 className="text-lg font-semibold text-white">{t}</h3>
            <p className="mt-2 text-sm text-zinc-400">{d}</p>
          </div>
        ))}
      </div>

      {/* Screenshot showcase */}
      <div className="mt-20 border-t border-ink-600 pt-14">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">See it in action</div>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Inside the software</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300 leading-relaxed">
            A look at the actual tools your team uses every day &mdash; from the pattern engine to
            print-ready engineering reports.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {shots.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={s.img} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={flip ? "md:order-2" : ""}>
                  <div className="overflow-hidden rounded-lg border border-ink-500 bg-ink-800 p-1.5 shadow-2xl shadow-black/40">
                    <Image src={s.img} alt={s.title} width={s.w} height={s.h} className="h-auto w-full rounded" />
                  </div>
                </div>
                <div className={flip ? "md:order-1" : ""}>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">{s.kicker}</div>
                  <h3 className="mt-2 text-2xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-zinc-300 leading-relaxed">{s.desc}</p>
                  <p className="mt-4 border-l-2 border-amber/70 pl-4 text-sm leading-relaxed text-zinc-400">
                    <span className="font-semibold text-amber">Why it matters &mdash; </span>{s.why}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional reports highlight */}
        <div className="mt-16 rounded-lg border border-ink-500 bg-ink-850 p-8 sm:p-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">Professional Output</div>
            <h3 className="mt-2 text-2xl font-bold text-white">Export print-ready engineering reports</h3>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              One click turns any pattern into a polished, branded Pallet Pattern Engineering
              Report &mdash; complete with dimensions, cubic efficiency, support, stability, weight
              breakdowns, and truck loading. Ready to print, email, or export to Excel.
            </p>
            <p className="mt-4 border-l-2 border-amber/70 pl-4 text-sm leading-relaxed text-zinc-400">
              <span className="font-semibold text-amber">Why it matters &mdash; </span>
              Look professional, keep specs on file, and give every job a documented paper trail.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-ink-500 bg-white p-1.5 shadow-2xl shadow-black/40">
              <Image src="/screenshots/report-standard.jpg" alt="Standard pallet pattern engineering report" width={1200} height={1528} className="h-auto w-full rounded" />
            </div>
            <div className="overflow-hidden rounded-lg border border-ink-500 bg-white p-1.5 shadow-2xl shadow-black/40">
              <Image src="/screenshots/report-mixed.jpg" alt="Mixed-case pallet pattern engineering report" width={1188} height={1442} className="h-auto w-full rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg border border-amber/50 bg-amber/5 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Start your 7-day free trial</h2>
        <p className="mt-2 text-zinc-300">Full access to the Pallet Pattern Creator &mdash; no credit card required. Add a card whenever you&apos;re ready to keep going.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/signup" className="inline-block rounded bg-amber px-8 py-3.5 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="inline-block rounded border border-ink-500 px-8 py-3.5 font-semibold uppercase tracking-wide text-zinc-200 hover:border-amber hover:text-amber">
            See Pricing
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

