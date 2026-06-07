import PageShell from "@/components/PageShell";

export const metadata = { title: "Equipment — Knapp-Built Machines" };

const items = [
  "Pallet Nailing Machines",
  "Cutting & Notching Lines",
  "Stackers & Conveyors",
  "Custom Fabrication",
  "Agricultural Equipment",
  "Replacement Parts",
];

export default function Equipment() {
  return (
    <PageShell
      kicker="Equipment"
      title={<>Machines built to <span className="text-amber">run</span></>}
      intro="Replace these placeholders with your real product lineup, photos, and specs."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it} className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
            <div className="aspect-video rounded bg-ink-700 grid place-items-center text-zinc-600 text-sm">
              [ photo ]
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{it}</h3>
            <p className="mt-1 text-sm text-zinc-400">[Placeholder description / specs.]</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
