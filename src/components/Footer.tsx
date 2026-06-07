import Link from "next/link";

const STACK_BLURB =
  "Knapp-Built Stack\u2122 is advanced pallet pattern creation software designed to help packaging engineers develop optimized pallet configurations faster and more efficiently. The platform enables users to create standard and mixed-case pallet patterns, utilize multiple case sizes on a single pallet, customize pallet footprints, and optimize trailer loading configurations\u2014all within an intuitive engineering-focused environment.";

const MACHINES_BLURB =
  "Custom agricultural packaging & vegetable processing equipment. Hammonton, NJ. Founded 2008 by John & Brandon Knapp.";

export default function Footer({ variant = "machines" }: { variant?: "machines" | "stack" }) {
  const isStack = variant === "stack";
  return (
    <footer className="mt-auto border-t-2 border-amber bg-ink-950 px-5 py-10 text-sm text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:justify-between">
        <div className="max-w-md">
          <div className="font-display text-lg tracking-wide text-amber">
            {isStack ? "Knapp-Built Stack\u2122" : "Knapp-Built Machines"}
          </div>
          <p className="mt-2">{isStack ? STACK_BLURB : MACHINES_BLURB}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-1">
          <Link href="/about" className="hover:text-amber">About</Link>
          <Link href="/equipment" className="hover:text-amber">Equipment</Link>
          <Link href="/services" className="hover:text-amber">Services</Link>
          <Link href="/software" className="hover:text-amber">Stack Software</Link>
          <Link href="/pricing" className="hover:text-amber">Pricing</Link>
          <Link href="/contact" className="hover:text-amber">Contact</Link>
          <Link href="/login" className="hover:text-amber">Member Login</Link>
          <Link href="/account" className="hover:text-amber">My Account</Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-ink-700 pt-4 text-xs text-zinc-500">
        © {new Date().getFullYear()} Knapp-Built Machines. All rights reserved. knappbuiltmachines.com
      </div>
    </footer>
  );
}
