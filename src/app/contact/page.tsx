"use client";
import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";
import { CONTACT } from "@/lib/contact";
import { EQUIPMENT } from "@/lib/equipment";

const TOPICS = ["New equipment", ...EQUIPMENT.map((e) => e.name), "Service or repair", "Parts", "Something else"];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  // /contact?item=bin-washer pre-selects that machine
  useEffect(() => {
    const item = new URLSearchParams(window.location.search).get("item");
    const match = EQUIPMENT.find((e) => e.slug === item);
    if (match) setTopic(match.name);
  }, []);

  function sendEmail(ev: React.FormEvent) {
    ev.preventDefault();
    const subject = encodeURIComponent(
      `${topic} inquiry${name ? ` from ${name}` : ""}`
    );
    const lines = [
      message,
      "",
      `\u2014 ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Topic: ${topic}`,
    ].filter(Boolean);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <PageShell
      kicker="Contact"
      title="Let's talk about"
      dim="your line."
      intro={`We're based in ${CONTACT.city}. Reach out about new equipment, custom builds, service, or parts.`}
    >
      <section className="kb-section" style={{ paddingTop: 24 }}>
        <div className="kb-container kb-contact">
          <div className="kb-info kb-stagger">
            <a href={CONTACT.phoneHref} className="rv">
              <span className="kb-card-icon" style={{ marginBottom: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
              </span>
              <span><small>Call</small><strong>{CONTACT.phone}</strong></span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="rv">
              <span className="kb-card-icon" style={{ marginBottom: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>
              </span>
              <span><small>Email</small><strong>{CONTACT.email}</strong></span>
            </a>
            <div className="kb-info-card rv">
              <span className="kb-card-icon" style={{ marginBottom: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <span><small>Shop</small><strong>{CONTACT.city}</strong></span>
            </div>
          </div>

          <form className="kb-form rv" onSubmit={sendEmail}>
            <h2>Request a quote</h2>
            <p className="kb-body" style={{ fontSize: 15.5 }}>
              Tell us about your crop, your space, and what you need the equipment to do.
            </p>
            <div className="kb-form-grid">
              <label className="kb-field">
                <span>Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
              </label>
              <label className="kb-field">
                <span>Phone</span>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
              </label>
              <label className="kb-field">
                <span>Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              </label>
              <label className="kb-field">
                <span>Interested in</span>
                <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="kb-field kb-field--full">
                <span>Message</span>
                <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
              </label>
            </div>
            <button type="submit" className="kb-btn kb-btn--primary kb-btn--lg kb-btn--block">
              Send inquiry
            </button>
            <p className="kb-fine">Opens your email app with the message ready to send to {CONTACT.email}.</p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
