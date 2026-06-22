import Link from "next/link";

const MACHINES_BLURB =
  "Custom agricultural packaging & vegetable processing equipment. Hammonton, NJ. Founded 2008.";

export default function Footer({ variant = "machines" }: { variant?: "machines" | "stack" }) {
  void variant;
  return (
    <footer className="mt-auto border-t-2 border-amber bg-ink-950 px-5 py-10 text-sm text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:justify-between">
        <div className="max-w-md">
          <div className="font-display text-lg tracking-wide text-amber">Knapp-Built Machines</div>
          <p className="mt-2">{MACHINES_BLURB}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-1">
          <Link href="/about" className="hover:text-amber">About</Link>
          <Link href="/equipment" className="hover:text-amber">Equipment</Link>
          <Link href="/services" className="hover:text-amber">Services</Link>
          <Link href="/contact" className="hover:text-amber">Contact</Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-ink-700 pt-4 text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Knapp-Built Machines. All rights reserved. knappbuiltmachines.com
      </div>
    </footer>
  );
}
