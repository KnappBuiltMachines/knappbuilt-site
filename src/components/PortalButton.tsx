"use client";
import { useState } from "react";

export default function PortalButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  async function go() {
    setLoading(true);
    const res = await fetch("/api/stripe/portal", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else setLoading(false);
  }
  return (
    <button onClick={go} disabled={loading} className={className}>
      {loading ? "Opening…" : "Manage billing"}
    </button>
  );
}
