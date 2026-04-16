"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_AUTORESPONSE,
} from "@/config/web3forms";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 8000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString().trim() ?? "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "MediaNest Newsletter Signup",
          _subject: "New Newsletter Subscriber — MediaNest Website",
          _template: "table",
          _autoresponse: WEB3FORMS_AUTORESPONSE,
          email,
          subscription_type: "Newsletter",
        }),
      });
      const json = await res.json();

      if (res.ok && json.success) {
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
        &#10003; You&apos;re in! Check your email.
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        {/* Honeypot — hidden from users and screen readers */}
        <div style={{ display: "none" }}>
          <input type="text" name="botcheck" />
        </div>

        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8505b]"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#e8505b] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#d4444e] transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-1 text-red-400 text-xs">
          Something went wrong. Try again or email{" "}
          <a
            href="https://wa.me/393923952415?text=Hi%20MediaNest%21%20I%27d%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            message us on WhatsApp
          </a>
        </p>
      )}
    </div>
  );
}
