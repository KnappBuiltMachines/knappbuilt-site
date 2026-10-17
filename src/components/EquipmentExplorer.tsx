"use client";

// Interactive equipment lineup for the home page: pick a machine on the
// left, see its render on a blueprint grid on the right. Auto-advances
// until the visitor interacts, then stays where they put it.

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EQUIPMENT } from "@/lib/equipment";

export default function EquipmentExplorer() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((v) => (v + 1) % EQUIPMENT.length), 4200);
    return () => window.clearTimeout(t);
  }, [i, auto, visible]);

  const e = EQUIPMENT[i];
  const pick = (n: number) => {
    setAuto(false);
    setI(n);
  };

  return (
    <div className="kb-ex" ref={ref}>
      <div className="kb-ex-list" role="tablist" aria-label="Equipment">
        {EQUIPMENT.map((it, n) => (
          <button
            key={it.slug}
            role="tab"
            aria-selected={n === i}
            className={`kb-ex-item ${n === i ? "is-on" : ""}`}
            onClick={() => pick(n)}
          >
            <span className="kb-ex-num">{String(n + 1).padStart(2, "0")}</span>
            <span>
              <span className="kb-ex-name">{it.name}</span>
              <span className="kb-ex-cat">{it.category}</span>
            </span>
            <svg className="kb-ex-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        ))}
      </div>

      <div className="kb-ex-view" role="tabpanel" aria-live="polite">
        <span className="kb-ex-corner kb-ex-corner--l">KBM / {String(i + 1).padStart(2, "0")} &middot; {e.category}</span>
        <span className="kb-ex-corner kb-ex-corner--r">Designed &amp; built in Hammonton, NJ</span>
        <div className="kb-ex-img">
          <img key={e.img} src={e.img} alt={`${e.name} 3D model`} />
        </div>
        <div className="kb-ex-meta" key={e.slug}>
          <h3>{e.name}</h3>
          <p>{e.desc}</p>
          <Link href={`/equipment#${e.slug}`} className="kb-textlink">
            See the {e.name.toLowerCase()} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
