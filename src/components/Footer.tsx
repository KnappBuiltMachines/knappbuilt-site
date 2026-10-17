import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { EQUIPMENT } from "@/lib/equipment";

export default function Footer() {
  return (
    <footer className="kb-footer">
      <div className="kb-container">
        <div className="kb-footer-grid">
          <div>
            <Link href="/" className="kb-brand" aria-label="Knapp-Built Machines home">
              <img src="/mark.png" alt="" width={38} height={38} />
              <span className="kb-brand-name">Knapp-Built <b>Machines</b></span>
            </Link>
            <p>
              Custom agricultural packaging and vegetable processing equipment, designed,
              built, and serviced in Hammonton, NJ. Family-owned since 2008.
            </p>
            <p>
              <a href={CONTACT.phoneHref} className="kb-textlink">{CONTACT.phone}</a>
              <br />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </p>
          </div>
          <div className="kb-footer-links">
            <h4>Equipment</h4>
            {EQUIPMENT.map((e) => (
              <Link key={e.slug} href={`/equipment#${e.slug}`}>{e.name}</Link>
            ))}
          </div>
          <div className="kb-footer-links">
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Request a Quote</Link>
          </div>
        </div>
        <div className="kb-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Knapp-Built Machines. All rights reserved.</span>
          <span>Built to perform. Built to last.</span>
        </div>
      </div>
    </footer>
  );
}
