"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-[#feb300] text-sm font-medium">
        ✓ You&apos;re in! Check your email.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff5e6c]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#ff5e6c] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#e84d5b] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
