"use client";
import { useState } from "react";

export default function PortalButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function go() {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      let data: { url?: string; error?: string } = {};
      try {
        data = await res.json();
      } catch {
        // response was not JSON
      }
      if (res.ok && data.url) {
        window.location.href = data.url;
        return; // keep the button in "Opening" state during the redirect
      }
      setErr(data.error || `Could not open billing (status ${res.status}).`);
    } catch {
      setErr("Network error opening billing. Please try again.");
    }
    setLoading(false);
  }

  return (
    <span className="inline-flex flex-col gap-2">
      <button onClick={go} disabled={loading} className={className}>
        {loading ? "Opening\u2026" : "Manage billing"}
      </button>
      {err && <span className="max-w-xs text-xs text-red-400">{err}</span>}
    </span>
  );
}

