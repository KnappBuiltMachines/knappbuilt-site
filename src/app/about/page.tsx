import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "About",
  description:
    "Knapp-Built Machines is a family-owned equipment manufacturer founded in 2008 in Hammonton, NJ, led by founder John Knapp's 45+ years of machine design experience.",
};

export default function About() {
  return (
    <PageShell
      kicker="About"
      title="A family-owned"
      dim="manufacturer."
      intro="Custom agricultural packaging and vegetable processing equipment for the local agriculture industry and farmers. High-quality products, quick lead times, and fair pricing."
    >
      <section className="kb-container">
        <figure className="kb-shot kb-shot--wide rv">
          <img src="/photos/about-field.jpg" alt="Harvesting equipment working in a South Jersey field" decoding="async" />
        </figure>
      </section>

      <section className="kb-section">
        <div className="kb-container kb-split">
          <div className="rv">
            <p className="kb-tag">Our story</p>
            <h2 className="kb-h2">
              Started in a small workshop.
              <br />
              <span className="kb-dim">Still built the same way.</span>
            </h2>
          </div>
          <div className="rv">
            <p className="kb-body">
              Knapp-Built Machines is a family-owned business founded in 2008 in Hammonton,
              New Jersey. What started as a small workshop serving local growers has grown
              into a company dedicated to solving real-world challenges through practical
              innovation and dependable craftsmanship.
            </p>
            <p className="kb-body">
              Founder John Knapp brings more than 45 years of hands-on experience in machine
              design, fabrication, and problem solving. Built on the values of integrity, hard
              work, and service, Knapp-Built Machines was established with a simple goal:
              create reliable solutions that help customers operate more efficiently and
              effectively.
            </p>
            <p className="kb-body">
              From custom agricultural equipment to modern packaging and software solutions,
              every project is approached with the same commitment to quality and attention to
              detail that defined the company&rsquo;s earliest days. We believe the best ideas are
              often the simplest ones &mdash; solutions designed by people who understand the
              realities of the work being done.
            </p>
            <p className="kb-body">
              Today, Knapp-Built Machines continues to combine experience, innovation, and a
              customer-first mindset to develop tools that make businesses stronger, more
              productive, and better prepared for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="kb-proof" style={{ marginTop: 0 }}>
        <div className="kb-container kb-proof-grid kb-stagger">
          <div className="rv"><b>2008</b><span>founded in Hammonton, NJ</span></div>
          <div className="rv"><b>45+</b><span>years of founder experience</span></div>
          <div className="rv"><b>In-house</b><span>design, fabrication &amp; service</span></div>
          <div className="rv"><b>Family</b><span>owned and operated</span></div>
        </div>
      </section>

      <section className="kb-section">
        <div className="kb-container">
          <div className="kb-pair kb-stagger">
            <figure className="kb-shot kb-shot--tall kb-shot--clean rv">
              <img src="/photos/founders.jpg" alt="The Knapp family outside the Knapp-Built Machines shop" loading="lazy" decoding="async" />
            </figure>
            <figure className="kb-shot kb-shot--tall kb-shot--clean rv">
              <img src="/photos/field-cucumber.jpg" alt="Walking a South Jersey cucumber field" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>

      <section className="kb-final">
        <div className="kb-container rv">
          <h2 className="kb-display kb-display--sm">
            Built with purpose.
            <span className="kb-dim">Built to last.</span>
          </h2>
          <div className="kb-actions">
            <Link href="/equipment" className="kb-btn kb-btn--primary kb-btn--lg">See our equipment</Link>
            <Link href="/contact" className="kb-textlink">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
