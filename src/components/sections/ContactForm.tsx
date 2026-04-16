"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_AUTORESPONSE,
} from "@/config/web3forms";

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (status === "sent" || status === "error") {
      setBannerVisible(true);
      const timer = setTimeout(() => setBannerVisible(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  function validate(form: HTMLFormElement): FieldErrors {
    const fd = new FormData(form);
    const errs: FieldErrors = {};

    if (!fd.get("name")?.toString().trim()) errs.name = "Name is required.";
    const email = fd.get("email")?.toString().trim() ?? "";
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!fd.get("subject")?.toString().trim())
      errs.subject = "Please select a subject.";
    if (!fd.get("message")?.toString().trim())
      errs.message = "Message is required.";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("sent");
        form.reset();
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function dismissBanner() {
    setBannerVisible(false);
  }

  const inputBase =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8505b] focus:border-transparent transition-colors";

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>

      {bannerVisible && status === "sent" && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start justify-between animate-[fadeIn_0.3s_ease-out]">
          <span>
            Message sent successfully! We&apos;ll get back to you within 24
            hours.
          </span>
          <button
            onClick={dismissBanner}
            className="ml-4 text-green-600 hover:text-green-800 font-bold"
            aria-label="Dismiss"
          >
            &times;
          </button>
        </div>
      )}

      {bannerVisible && status === "error" && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 flex items-start justify-between animate-[fadeIn_0.3s_ease-out]">
          <span>
            Something went wrong. Please try again or email us directly at{" "}
            <a
              href="https://wa.me/393923952415?text=Hi%20MediaNest%21%20I%27d%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              message us on WhatsApp
            </a>
          </span>
          <button
            onClick={dismissBanner}
            className="ml-4 text-red-600 hover:text-red-800 font-bold"
            aria-label="Dismiss"
          >
            &times;
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Web3Forms hidden fields */}
        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
        <input
          type="hidden"
          name="from_name"
          value="MediaNest Contact Form"
        />
        <input
          type="hidden"
          name="_subject"
          value="New Contact Message — MediaNest Website"
        />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_autoresponse"
          value={WEB3FORMS_AUTORESPONSE}
        />

        {/* Honeypot — hidden from users and screen readers */}
        <div style={{ display: "none" }}>
          <input type="text" name="botcheck" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputBase}
              placeholder="John Smith"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputBase}
              placeholder="john@business.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className={`${inputBase} bg-white`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="PageSurge Support">PageSurge Support</option>
            <option value="PinSurge Support">PinSurge Support</option>
            <option value="AI Tool Creation Project">
              AI Tool Creation Project
            </option>
            <option value="Service Inquiry">Service Inquiry</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputBase}
            placeholder="Tell us about your project or question..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 bg-[#e8505b] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#d4444e] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
