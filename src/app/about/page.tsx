import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata = { title: "About — Knapp-Built Machines" };

export default function About() {
  return (
    <PageShell
      kicker="About"
      title={<>A family-owned <span className="text-amber">manufacturer</span></>}
      intro="Founded in 2008 in Hammonton, New Jersey by the father-son duo John & Brandon Knapp."
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-ink-500 md:order-2">
          <Image src="/photos/founders.jpg" alt="John and Brandon Knapp outside the Knapp-Built Machines shop" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="md:order-1">
          <p className="text-zinc-300 leading-relaxed">
            Knapp-Built Machines specializes in custom agricultural packaging and vegetable
            processing equipment, serving the local agriculture industry and farmers. The
            company prides itself on high-quality products, quick lead times, and fair pricing.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Our Story</h2>
        <div className="mt-6 space-y-5 text-zinc-300 leading-relaxed">
          <p>
            Founded in 2008, Knapp-Built Machines began in a small garage with a simple
            mission: build reliable, high-quality equipment that local blueberry farmers
            could depend on. What started as a father-and-son operation quickly grew through
            hard work, innovation, and a commitment to serving the agricultural community.
          </p>
          <p>
            John Knapp and his son, Brandon Knapp, combined decades of hands-on industry
            experience to design and manufacture equipment that delivered exceptional
            performance without the excessive costs often associated with larger
            manufacturers. Their practical knowledge of farming operations allowed them to
            create solutions that were not only durable and efficient but also tailored to the
            real-world needs of growers.
          </p>
          <p>
            For more than two decades, John and Brandon have dedicated themselves to improving
            machinery for local farmers and businesses. Their philosophy has always been
            simple: build equipment the right way, stand behind your work, and continually
            look for ways to improve. Every machine reflects their commitment to craftsmanship,
            attention to detail, and relentless pursuit of quality.
          </p>
          <p>
            As the company has grown, so has its reputation for dependable equipment and
            outstanding customer support. Knapp-Built Machines continually invests in improving
            product quality, increasing equipment performance, and developing innovative
            solutions that help customers operate more efficiently and profitably.
          </p>
          <p>
            Beyond building machines, John and Brandon are passionate about serving their
            community. They believe strong relationships, honest business practices, and
            helping others succeed are the foundation of lasting success. Their faith plays an
            important role in guiding both their personal lives and business decisions. The
            values of integrity, humility, service, and stewardship&mdash;rooted in the
            teachings of Jesus Christ&mdash;remain at the heart of everything they do.
          </p>
          <p>
            Today, Knapp-Built Machines continues to build on the same principles that started
            it all in that small garage: hard work, quality craftsmanship, innovative thinking,
            and a genuine commitment to helping customers and the community thrive.
          </p>
        </div>
        <p className="mt-10 border-l-2 border-amber pl-5 font-display text-2xl font-bold uppercase tracking-wide text-amber">
          Built with Purpose. Built with Integrity. Built to Last.
        </p>
      </div>
    </PageShell>
  );
}
