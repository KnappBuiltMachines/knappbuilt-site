import PageShell from "@/components/PageShell";

export const metadata = { title: "Services — Knapp-Built Machines" };

const services = [
  ["Installation & Setup", "On-site installation and commissioning of your equipment."],
  ["Maintenance & Repair", "Preventive maintenance and fast repair to limit downtime."],
  ["Parts & Upgrades", "Genuine replacement parts and line upgrades."],
  ["Custom Engineering", "Bespoke builds engineered to your operation."],
];

export default function Services() {
  return (
    <PageShell
      kicker="Services"
      title={<>Support that keeps you <span className="text-amber">moving</span></>}
      intro="From custom builds to on-site service, we keep your packing and processing lines running."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map(([t, d]) => (
          <div key={t} className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
            <h3 className="text-xl font-semibold text-white">{t}</h3>
            <p className="mt-2 text-sm text-zinc-400">{d}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
