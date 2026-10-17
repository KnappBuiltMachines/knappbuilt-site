// src/app/page.tsx - Knapp-Built Machines home page (Oct 2026 redesign)
// Showcase layout in the same design language as betselstack.com.

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import EquipmentExplorer from "@/components/EquipmentExplorer";
import { CONTACT } from "@/lib/contact";

const CHAPTERS = [
  {
    tag: "Fabrication",
    title: ["Fabricated in stainless.", "Built to run all season."],
    body: "Conveyors, roller tables, and processing lines are cut, welded, and assembled in our own shop, then put to work in real packing operations.",
    img: "/photos/build-rollers-2.jpg",
    alt: "Stainless conveyor drive and gearmotor on a Knapp-Built roller table",
  },
  {
    tag: "The details",
    title: ["Every detail,", "dialed in."],
    body: "Drives, tensioners, frames, and fittings are designed for your product and your pace, so the line runs smoothly the day it goes in and every harvest after.",
    img: "/photos/build-detail.jpg",
    alt: "Close-up of conveyor tensioning hardware on a stainless frame",
  },
];

const STEPS = [
  ["Tell us about your line.", "Your crop, your space, your throughput, and the problem you need solved."],
  ["We design it around you.", "Equipment planned to your operation and footprint, not pulled from a catalog."],
  ["Built in our shop.", "Fabricated and assembled in-house in Hammonton, with quick lead times."],
  ["Installed and supported.", "On-site setup, maintenance, repairs, and parts to keep you running."],
];

const PRINCIPLES = [
  ["Custom design.", "Equipment built to your exact requirements, so it fits the job instead of the other way around."],
  ["High quality.", "Rigorous testing and high standards for equipment you can rely on, season after season."],
  ["Quick lead times.", "Faster delivery without cutting corners, so you are ready when the harvest is."],
  ["Fair pricing.", "Competitive, transparent pricing that respects your investment and builds long-term trust."],
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Reveal />
      <main className="kb flex-1">
        {/* ============ HERO ============ */}
        <section className="kb-hero">
          <div className="kb-floor" aria-hidden="true" />
          <div className="kb-container">
            <p className="kb-kicker rv">
              <i>Est. 2008</i> Family-owned in Hammonton, NJ
            </p>
            <h1 className="kb-display rv">
              Equipment built for the harvest.
              <span className="kb-dim">Engineered to run.</span>
            </h1>
            <p className="kb-sub rv">
              Custom agricultural packaging and vegetable processing equipment,
              designed and built for growers and packing houses.
            </p>
            <div className="kb-actions rv">
              <Link href="/contact" className="kb-btn kb-btn--primary kb-btn--lg">
                Request a quote
              </Link>
              <a href="#lineup" className="kb-textlink">
                Explore the equipment <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
          <div className="kb-hero-stage rv">
            <figure className="kb-shot kb-shot--hero">
              <img src="/photos/hero-build.jpg" alt="A custom conveyor build in the Knapp-Built Machines shop" fetchPriority="high" />
              <figcaption className="kb-hud">
                <span className="kb-hud-live">In the shop</span>
                <span><b>Custom</b> conveyor build</span>
                <span className="kb-hud-hide"><b>Hammonton</b>, NJ</span>
              </figcaption>
            </figure>
          </div>

          {/* ============ PROOF STRIP ============ */}
          <div className="kb-proof">
            <div className="kb-container kb-proof-grid kb-stagger">
              <div className="rv"><b>2008</b><span>family-owned since</span></div>
              <div className="rv"><b>45+</b><span>years of machine design experience</span></div>
              <div className="rv"><b>In-house</b><span>design, fabrication &amp; service</span></div>
              <div className="rv"><b>Custom</b><span>sized to your line and footprint</span></div>
            </div>
          </div>
        </section>

        {/* ============ EQUIPMENT EXPLORER ============ */}
        <section className="kb-section" id="lineup">
          <div className="kb-container">
            <div className="kb-head rv">
              <p className="kb-tag">The lineup</p>
              <h2 className="kb-h2">
                Washers, conveyors,
                <br />
                <span className="kb-dim">and whatever you need next.</span>
              </h2>
              <p className="kb-lede">
                Every machine starts as a 3D model built around your operation. Pick one
                to take a closer look.
              </p>
            </div>
            <div className="rv">
              <EquipmentExplorer />
            </div>
            <p className="kb-center rv">
              <Link href="/equipment" className="kb-textlink">
                See all equipment <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </section>

        {/* ============ CHAPTERS ============ */}
        {CHAPTERS.map((c, i) => (
          <section className={`kb-chapter ${i % 2 === 0 ? "kb-section--alt" : ""}`} key={c.tag}>
            <div className="kb-container">
              <div className="kb-head kb-head--center rv">
                <p className="kb-tag">{c.tag}</p>
                <h2 className="kb-h2">
                  {c.title[0]}
                  <br />
                  <span className="kb-dim">{c.title[1]}</span>
                </h2>
                <p className="kb-lede">{c.body}</p>
              </div>
              <figure className="kb-shot kb-shot--hero rv">
                <img src={c.img} alt={c.alt} loading="lazy" decoding="async" />
              </figure>
            </div>
          </section>
        ))}

        {/* ============ PROCESS ============ */}
        <section className="kb-section">
          <div className="kb-container">
            <div className="kb-head rv">
              <p className="kb-tag">How it works</p>
              <h2 className="kb-h2">
                From first call
                <br />
                <span className="kb-dim">to first harvest.</span>
              </h2>
            </div>
            <div className="kb-steps-line rv" />
            <div className="kb-steps kb-stagger">
              {STEPS.map(([t, d], n) => (
                <div className="kb-step rv" key={t}>
                  <span className="kb-step-n">{n + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FIELD ============ */}
        <section className="kb-chapter kb-section--alt">
          <div className="kb-container">
            <div className="kb-head kb-head--center rv">
              <p className="kb-tag">Rooted in local agriculture</p>
              <h2 className="kb-h2">
                From the field
                <br />
                <span className="kb-dim">to the packing house.</span>
              </h2>
              <p className="kb-lede">
                Our equipment is designed around the realities of the harvest: the crops,
                the pace, and the people who bring them in.
              </p>
            </div>
            <figure className="kb-shot kb-shot--wide rv">
              <img src="/photos/about-field.jpg" alt="Harvesting equipment working in a South Jersey field" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        {/* ============ PRINCIPLES ============ */}
        <section className="kb-section">
          <div className="kb-container">
            <div className="kb-head rv">
              <p className="kb-tag">What sets us apart</p>
              <h2 className="kb-h2">
                Built on
                <br />
                <span className="kb-dim">four principles.</span>
              </h2>
            </div>
            <div className="kb-cards kb-stagger">
              {PRINCIPLES.map(([t, d]) => (
                <div className="kb-card rv" key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ORIGIN ============ */}
        <section className="kb-origin">
          <div className="kb-container kb-split">
            <figure className="kb-shot kb-shot--43 kb-shot--clean rv">
              <img src="/photos/founders.jpg" alt="The Knapp family outside the Knapp-Built Machines shop" loading="lazy" decoding="async" style={{ objectPosition: "50% 60%" }} />
            </figure>
            <div className="rv">
              <p className="kb-tag">Family-owned since 2008</p>
              <h2 className="kb-h2">
                45 years of
                <br />
                <span className="kb-dim">building machines.</span>
              </h2>
              <p className="kb-lede">
                Founder John Knapp brings more than 45 years of hands-on experience in
                machine design, fabrication, and problem solving. What started as a small
                workshop serving local growers is still run the same way: practical
                solutions from people who understand the work.
              </p>
              <p className="kb-quote">Built with purpose. Built with integrity. Built to last.</p>
              <div className="kb-actions kb-actions--left">
                <Link href="/about" className="kb-textlink">
                  Our story <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="kb-final">
          <div className="kb-container rv">
            <h2 className="kb-display kb-display--sm">
              Tell us what your line needs.
              <span className="kb-dim">We&rsquo;ll build it.</span>
            </h2>
            <div className="kb-actions">
              <Link href="/contact" className="kb-btn kb-btn--primary kb-btn--lg">
                Request a quote
              </Link>
              <a href={CONTACT.phoneHref} className="kb-textlink">
                Call {CONTACT.phone} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
