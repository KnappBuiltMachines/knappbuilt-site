import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata = { title: "Equipment — Knapp-Built Machines" };

const items: { name: string; img: string; desc: string }[] = [
  {
    name: "Vegetable Washer",
    img: "/equipment/vegetable-washer.jpg",
    desc: "A stainless-steel wash system that gently cleans produce in a water bath, then lifts it out on an inclined dewatering conveyor. An overhead spray bar gives a final rinse before the next stage.",
  },
  {
    name: "Bin Washer",
    img: "/equipment/bin-washer.jpg",
    desc: "An enclosed wash cabinet for cleaning harvest bins, lugs, and totes. Internal spray manifolds blast away soil and debris, and a sloped hopper collects and drains the runoff.",
  },
  {
    name: "Conveyor",
    img: "/equipment/conveyor.jpg",
    desc: "Motor-driven conveyors that move product smoothly between stations. Built in stainless steel with adjustable height and lengths sized to your line.",
  },
  {
    name: "Cross-Over Conveyor",
    img: "/equipment/crossover-conveyor.jpg",
    desc: "An inclined conveyor that elevates product up and over equipment or from one line to the next, keeping flow continuous without manual handling.",
  },
  {
    name: "Double Conveyor",
    img: "/equipment/double-conveyor.jpg",
    desc: "A two-tier conveyor with an integrated work shelf — ideal for inspection, sorting, and culling, with product moving on one level and packed goods or returns on the other.",
  },
  {
    name: "Custom Fabrication",
    img: "",
    desc: "Have something specific in mind? We design and build custom stainless equipment engineered to your operation, footprint, and throughput.",
  },
];

export default function Equipment() {
  return (
    <PageShell
      kicker="Equipment"
      title={<>Machines built to <span className="text-amber">run</span></>}
      intro="Custom agricultural packaging and vegetable processing equipment, built in-house in Hammonton, NJ."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.name} className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded bg-black">
              {it.img ? (
                <Image
                  src={it.img}
                  alt={it.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-contain"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-zinc-600 text-sm">
                  Custom builds
                </div>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{it.name}</h3>
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-zinc-500">
        Looking for something not shown here? <a href="/contact" className="text-amber hover:underline">Get in touch</a> — most of what we build is made to order.
      </p>
    </PageShell>
  );
}
