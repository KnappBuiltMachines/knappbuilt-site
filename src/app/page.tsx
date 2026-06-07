import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    t: "Custom Design",
    d: "Crafting specialized equipment tailored to meet unique customer requirements, custom equipment design ensures optimal performance and functionality. This approach allows for innovation and adaptability, resulting in solutions that precisely fit the needs of each project.",
    i: "▦",
  },
  {
    t: "High Quality",
    d: "Emphasizing excellence, high-quality products undergo rigorous testing and adhere to stringent standards. This commitment to quality ensures reliability, durability, and customer satisfaction, making them a trusted choice for any application.",
    i: "✦",
  },
  {
    t: "Quick Lead Times",
    d: "Prioritizing efficiency, quick lead times mean faster delivery of products and services without compromising quality. This approach helps businesses stay competitive by reducing downtime and meeting urgent demands.",
    i: "⚡",
  },
  {
    t: "Fair Pricing",
    d: "Offering competitive and transparent pricing, fair pricing ensures that customers receive value for their investment. It fosters trust and long-term relationships by balancing cost-effectiveness with the quality and service provided.",
    i: "◈",
  },
];

const gallery = [
  { src: "/photos/build-rollers-1.jpg", cap: "Powered roller table build" },
  { src: "/photos/build-rollers-2.jpg", cap: "Stainless drive & gearmotor" },
  { src: "/photos/build-detail.jpg", cap: "Conveyor tensioning detail" },
  { src: "/photos/build-rollers-3.jpg", cap: "Long-run roller conveyor" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-blueprint">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-ink-700">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,166,35,.12),transparent_55%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
                Hammonton, New Jersey · Est. 2008
              </p>
              <h1 className="mt-5 text-5xl font-bold uppercase leading-[1.02] text-white md:text-6xl">
                Knapp-Built <span className="text-amber">Machines</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-zinc-300">
                Custom agricultural packaging and vegetable processing equipment,
                built for local growers and farmers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#work" className="rounded bg-amber px-7 py-3.5 font-semibold uppercase tracking-wide text-ink-950 transition hover:bg-amber-light">
                  See Our Work
                </Link>
                <Link href="/contact" className="rounded border border-ink-500 px-7 py-3.5 font-semibold uppercase tracking-wide text-zinc-200 transition hover:border-amber hover:text-amber">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-500">
              <Image src="/photos/hero-build.jpg" alt="A custom conveyor build in the Knapp-Built Machines shop" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="border-b border-ink-700 px-5 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-ink-500 md:order-2">
              <Image src="/photos/founders.jpg" alt="The Knapp family outside the Knapp-Built Machines shop" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="md:order-1">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Who We Are</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">A father-son shop</h2>
              <p className="mt-5 text-zinc-300 leading-relaxed">
                Knapp-Built Machines, founded in 2008 by the father-son duo John and
                Brandon Knapp, is based in Hammonton, New Jersey. Specializing in custom
                agricultural packaging and vegetable processing equipment, the company
                caters to the local agriculture industry and farmers.
              </p>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                Knapp-Built Machines prides itself on providing high-quality products,
                quick lead times, and fair pricing — ensuring customer satisfaction and
                loyalty.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-b border-ink-700 bg-ink-850 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">What Sets Us Apart</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Built on four principles</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="bracket rounded-md border border-ink-500 bg-ink-800 p-7">
                  <div className="text-2xl text-amber">{v.i}</div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR WORK / GALLERY */}
        <section id="work" className="border-b border-ink-700 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Our Work</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Equipment from the shop floor</h2>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Conveyors, roller tables, and processing lines — fabricated in stainless and
              built to run in real packing operations.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {gallery.map((g) => (
                <figure key={g.src} className="overflow-hidden rounded-lg border border-ink-500 bg-ink-800">
                  <div className="relative aspect-[3/2]">
                    <Image src={g.src} alt={g.cap} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <figcaption className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-zinc-400">{g.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SERVING LOCAL AG */}
        <section className="border-b border-ink-700 bg-ink-850 px-5 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Rooted in Local Agriculture</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">For the people who grow our food</h2>
              <p className="mt-5 text-zinc-300 leading-relaxed">
                From the fields of South Jersey to the packing house, our equipment is
                designed around the realities of the harvest — the crops, the pace, and the
                people who bring them in.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-ink-500">
                <Image src="/photos/field-cucumber.jpg" alt="A grower in a South Jersey vegetable field" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-ink-500">
                <Image src="/photos/field-corn.jpg" alt="In the cornfield at harvest time" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* KNAPP-BUILT STACK CALLOUT */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-6xl rounded-lg border border-amber/50 bg-amber/5 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">A Separate Product</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Knapp-Built Stack<span className="align-super text-base">™</span>
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Our pallet pattern creator software — a standalone tool built for packaging
              engineers who need more customization than the usual options allow.
            </p>
            <Link href="/software" className="mt-6 inline-block rounded bg-amber px-8 py-3.5 font-semibold uppercase tracking-wide text-ink-950 transition hover:bg-amber-light">
              Learn More
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
