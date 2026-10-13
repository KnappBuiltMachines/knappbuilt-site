"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/equipment", label: "Equipment" },
  { href: "/services", label: "Services" },
];

export default function Navbar({ logo = "machines" }: { logo?: "machines" | "stack" }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-amber bg-ink-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo variant={logo} />
        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm uppercase tracking-wide text-zinc-400 transition hover:text-amber">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded bg-amber px-4 py-2 text-sm font-semibold uppercase tracking-wide text-ink-950 transition hover:bg-amber-light">
            Contact Us
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-amber" aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-ink-600 bg-ink-900 px-5 py-3">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm uppercase tracking-wide text-zinc-300 hover:text-amber">
              {l.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-ink-600 pt-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="block rounded bg-amber py-2 text-center text-sm font-semibold uppercase text-ink-950">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
