import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata = { title: "About \u2014 Knapp-Built Machines" };

export default function About() {
  return (
    <PageShell
      kicker="About"
      title={<>A family-owned <span className="text-amber">manufacturer</span></>}
    >
      <p className="max-w-3xl text-lg text-zinc-300 leading-relaxed">
        Knapp-Built Machines specializes in custom agricultural packaging and vegetable
        processing equipment, serving the local agriculture industry and farmers. The
        company prides itself on high-quality products, quick lead times, and fair pricing.
      </p>

      <div className="relative mt-10 aspect-[4/3] max-w-3xl overflow-hidden rounded-lg border border-ink-500">
        <Image src="/photos/about-field.jpg" alt="Knapp-Built harvesting equipment working in a South Jersey field" fill sizes="(max-width:768px) 100vw, 768px" className="object-cover" />
      </div>

      <div className="mt-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Our Story</h2>
        <div className="mt-6 space-y-5 text-zinc-300 leading-relaxed">
          <p>
            Knapp-Built Machines is a family-owned business founded in 2008 in Hammonton,
            New Jersey. What started as a small workshop serving local growers has grown
            into a company dedicated to solving real-world challenges through practical
            innovation and dependable craftsmanship.
          </p>
          <p>
            Founder John Knapp brings more than 45 years of hands-on experience in machine
            design, fabrication, and problem solving. Built on the values of integrity, hard
            work, and service, Knapp-Built Machines was established with a simple goal:
            create reliable solutions that help customers operate more efficiently and
            effectively.
          </p>
          <p>
            From custom agricultural equipment to modern packaging and software solutions,
            every project is approached with the same commitment to quality and attention to
            detail that defined the company's earliest days. We believe the best ideas are
            often the simplest ones&mdash;solutions designed by people who understand the
            realities of the work being done.
          </p>
          <p>
            Today, Knapp-Built Machines continues to combine experience, innovation, and a
            customer-first mindset to develop tools that make businesses stronger, more
            productive, and better prepared for the future.
          </p>
        </div>
        <p className="mt-10 border-l-2 border-amber pl-5 font-display text-2xl font-bold uppercase tracking-wide text-amber">
          Built with Purpose. Built with Integrity. Built to Last.
        </p>
      </div>
    </PageShell>
  );
}

