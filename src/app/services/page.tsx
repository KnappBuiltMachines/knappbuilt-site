import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CONTACT } from "@/lib/contact";

export const metadata = {
  title: "Services",
  description:
    "Installation and setup, maintenance and repair, parts and upgrades, and custom engineering for packing and processing lines.",
};

const ICONS: Record<string, React.ReactNode> = {
  install: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />,
  repair: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
  parts: <><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z" /><path d="M3.3 7L12 12l8.7-5M12 22V12" /></>,
  engineering: <><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6M9 10h.01M15 10h.01" /></>,
};

const SERVICES = [
  {
    icon: "install",
    t: "Installation & setup",
    d: "On-site installation and commissioning of your equipment, so it runs right from day one.",
    points: ["On-site installation", "Commissioning and startup"],
  },
  {
    icon: "repair",
    t: "Maintenance & repair",
    d: "Preventive maintenance and fast repair to limit downtime when it matters most.",
    points: ["Preventive maintenance", "Fast repair to limit downtime"],
  },
  {
    icon: "parts",
    t: "Parts & upgrades",
    d: "Replacement parts and line upgrades to keep older equipment productive.",
    points: ["Replacement parts", "Line upgrades"],
  },
  {
    icon: "engineering",
    t: "Custom engineering",
    d: "Bespoke builds engineered to your operation, footprint, and throughput.",
    points: ["Designed around your operation", "Built in our Hammonton shop"],
  },
];

export default function Services() {
  return (
    <PageShell
      kicker="Services"
      title="Support that keeps"
      dim="your line moving."
      intro="From custom builds to on-site service, we keep your packing and processing lines running."
    >
      <section className="kb-section" style={{ paddingTop: 24 }}>
        <div className="kb-container">
          <div className="kb-cards kb-cards--2 kb-stagger">
            {SERVICES.map((s) => (
              <div className="kb-card rv" key={s.t}>
                <span className="kb-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[s.icon]}
                  </svg>
                </span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kb-chapter kb-section--alt">
        <div className="kb-container kb-split">
          <div className="rv">
            <p className="kb-tag">In the shop</p>
            <h2 className="kb-h2">
              The people who built it
              <br />
              <span className="kb-dim">are the ones who service it.</span>
            </h2>
            <p className="kb-lede">
              We design, fabricate, and support our equipment ourselves, so when you call,
              you are talking to the shop that knows your machine.
            </p>
            <div className="kb-actions kb-actions--left">
              <Link href="/contact" className="kb-btn kb-btn--primary">Request service</Link>
              <a href={CONTACT.phoneHref} className="kb-textlink">
                Call {CONTACT.phone} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <figure className="kb-shot kb-shot--43 rv">
            <img src="/photos/build-rollers-1.jpg" alt="Powered roller table being built in the Knapp-Built Machines shop" loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>
    </PageShell>
  );
}
