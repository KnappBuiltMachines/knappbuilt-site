import Link from "next/link";
import PageShell from "@/components/PageShell";
import { EQUIPMENT } from "@/lib/equipment";

export const metadata = {
  title: "Equipment",
  description:
    "Vegetable washers, bin washers, conveyors, cross-over and double conveyors, and custom stainless fabrication, built in-house in Hammonton, NJ.",
};

export default function Equipment() {
  return (
    <PageShell
      kicker="Equipment"
      title="Machines built to run."
      dim="Sized to your line."
      intro="Custom agricultural packaging and vegetable processing equipment, built in-house in Hammonton, NJ."
    >
      <nav className="kb-chips" aria-label="Jump to equipment">
        <div className="kb-container kb-chips-row">
          {EQUIPMENT.map((e) => (
            <a key={e.slug} href={`#${e.slug}`}>{e.name}</a>
          ))}
        </div>
      </nav>

      {EQUIPMENT.map((e, n) => (
        <section id={e.slug} key={e.slug} className={`kb-eq ${n % 2 ? "kb-section--alt" : ""}`}>
          <div className={`kb-container kb-split ${n % 2 ? "kb-split--flip" : ""}`}>
            <figure className="kb-eq-media rv">
              <img src={e.img} alt={`${e.name} 3D model`} loading={n < 2 ? "eager" : "lazy"} decoding="async" />
            </figure>
            <div className="rv">
              <p className="kb-eq-num">
                <b>{String(n + 1).padStart(2, "0")}</b> / {String(EQUIPMENT.length).padStart(2, "0")} &middot; {e.category}
              </p>
              <h2 className="kb-h3">{e.name}</h2>
              <p className="kb-lede">{e.desc}</p>
              <ul className="kb-eq-points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="kb-actions kb-actions--left">
                <Link href={`/contact?item=${e.slug}`} className="kb-btn kb-btn--ghost">
                  Ask about the {e.name.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="kb-final">
        <div className="kb-container rv">
          <h2 className="kb-display kb-display--sm">
            Not seeing it here?
            <span className="kb-dim">Most of what we build is made to order.</span>
          </h2>
          <div className="kb-actions">
            <Link href="/contact" className="kb-btn kb-btn--primary kb-btn--lg">Tell us what you need</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
