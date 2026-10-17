"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/contact";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/equipment", label: "Equipment" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="kb-header">
      <div className="kb-container kb-header-inner">
        <Link href="/" className="kb-brand" aria-label="Knapp-Built Machines home">
          <img src="/mark.png" alt="" width={38} height={38} />
          <span className="kb-brand-name">
            Knapp-Built <b>Machines</b>
            <span className="kb-brand-tag">Hammonton, NJ &middot; Est. 2008</span>
          </span>
        </Link>

        <nav className="kb-nav" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`kb-nav-link ${isActive(l.href) ? "is-active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="kb-nav-actions">
          <a href={CONTACT.phoneHref} className="kb-phone">
            <PhoneIcon />
            <span>{CONTACT.phone}</span>
          </a>
          <Link href="/contact" className="kb-btn kb-btn--primary">Request a Quote</Link>
          <button
            className="kb-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="kb-container">
          <div className="kb-mobile">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""}>
                {l.label}
              </Link>
            ))}
            <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
            <Link href="/contact" className="kb-btn kb-btn--primary kb-btn--block">Request a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
