"use client";
import { useState } from "react";
import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/config";

const CONTACT_EMAIL = "knapp-built@hotmail.com";
const CONTACT_PHONE = "609.217.7869";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail() {
    const subject = encodeURIComponent(
      name ? `Website inquiry from ${name}` : "Website inquiry"
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <PageShell
      kicker="Contact"
      title={<>Get in <span className="text-amber">touch</span></>}
      intro={`We're based in ${SITE.city}. Reach out about equipment, service, or Stack software.`}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5 text-zinc-300">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber">Phone</div>
            <p className="mt-1">
              <a href={`tel:+1${CONTACT_PHONE.replace(/\./g, "")}`} className="hover:text-amber">
                {CONTACT_PHONE}
              </a>
            </p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber">Email</div>
            <p className="mt-1">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-amber">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber">Location</div>
            <p className="mt-1">{SITE.city}</p>
          </div>
        </div>

        <div className="bracket rounded-md border border-ink-500 bg-ink-800 p-6">
          <label className="block text-xs uppercase tracking-widest text-zinc-400">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-zinc-100 outline-none focus:border-amber"
          />
          <label className="mt-4 block text-xs uppercase tracking-widest text-zinc-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-zinc-100 outline-none focus:border-amber"
          />
          <label className="mt-4 block text-xs uppercase tracking-widest text-zinc-400">Message</label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded border border-ink-500 bg-ink-900 px-3 py-2 text-zinc-100 outline-none focus:border-amber"
          />
          <button
            onClick={sendEmail}
            className="mt-4 w-full rounded bg-amber py-3 font-semibold uppercase tracking-wide text-ink-950 hover:bg-amber-light"
          >
            Email Us
          </button>
          <p className="mt-3 text-xs text-zinc-500">
            Opens your email app with the message ready to send to {CONTACT_EMAIL}.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
