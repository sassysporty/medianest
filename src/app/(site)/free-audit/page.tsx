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
  url?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  "Website Creation",
  "YouTube Automation",
  "Social Media Management",
  "SEO",
  "Etsy Service",
  "AI Tools",
  "AI Tool Creation",
] as const;

export default function FreeAuditPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (status === "error") {
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
    const url = fd.get("website_url")?.toString().trim() ?? "";
    if (!url) errs.url = "Website URL is required.";
    else if (!/^https?:\/\/.+/.test(url))
      errs.url = "URL must start with http:// or https://";

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

    // Collect checked services into a single string
    const services = SERVICE_OPTIONS.filter(
      (s) => formData.get(`service_${s}`) === "on"
    );
    formData.delete("botcheck");

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (!key.startsWith("service_")) {
        data[key] = value.toString();
      }
    });
    if (services.length > 0) {
      data["services_interested_in"] = services.join(", ");
    }

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
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 font-semibold uppercase tracking-wide text-sm">
                100% Free &middot; No Obligation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Get Your Free Business Audit
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Find out exactly what&apos;s holding your business back online.
                Our experts will analyze your presence and deliver a personalized
                action plan within 48 hours.
              </p>
              <div className="space-y-4">
                {[
                  "Detailed analysis of your current online presence",
                  "Competitor benchmarking in your local market",
                  "Specific, actionable recommendations you can implement today",
                  "Custom growth roadmap with projected results",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">&#10003;</span>
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              {status === "sent" ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">&#127881;</div>
                  <h3 className="text-2xl font-bold mb-2">
                    Audit Request Received!
                  </h3>
                  <p className="text-gray-500">
                    We&apos;ll deliver your personalized audit within 48 hours.
                    Check your email for a confirmation.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-1">
                    Claim Your Free Audit
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Limited to 10 audits per month — spots fill up fast.
                  </p>

                  {bannerVisible && status === "error" && (
                    <div className="mb-4 bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm flex items-start justify-between animate-[fadeIn_0.3s_ease-out]">
                      <span>
                        Something went wrong. Please try again or email us at{" "}
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
                        className="ml-2 text-red-600 hover:text-red-800 font-bold"
                        aria-label="Dismiss"
                      >
                        &times;
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Web3Forms hidden fields */}
                    <input
                      type="hidden"
                      name="access_key"
                      value={WEB3FORMS_ACCESS_KEY}
                    />
                    <input
                      type="hidden"
                      name="from_name"
                      value="MediaNest Free Audit Request"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Free Audit Request — MediaNest Website"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value={WEB3FORMS_AUTORESPONSE}
                    />

                    {/* Honeypot */}
                    <div style={{ display: "none" }}>
                      <input type="text" name="botcheck" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="audit-name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="audit-name"
                          name="name"
                          required
                          className={inputBase}
                          placeholder="Your Name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="audit-email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="audit-email"
                          name="email"
                          required
                          className={inputBase}
                          placeholder="you@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="audit-url"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Website URL *
                      </label>
                      <input
                        type="url"
                        id="audit-url"
                        name="website_url"
                        required
                        className={inputBase}
                        placeholder="https://yourwebsite.com"
                      />
                      {errors.url && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.url}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Which services are you interested in?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICE_OPTIONS.map((service) => (
                          <label
                            key={service}
                            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name={`service_${service}`}
                              className="rounded border-gray-300 text-[#e8505b] focus:ring-[#e8505b]"
                            />
                            {service}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="audit-message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message or additional details
                      </label>
                      <textarea
                        id="audit-message"
                        name="message"
                        rows={3}
                        className={inputBase}
                        placeholder="Anything else you'd like us to know..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#e8505b] text-white py-3 rounded-full font-bold text-lg hover:bg-[#d4444e] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
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
                        "Get My Free Audit \u2192"
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      No credit card required. No strings attached.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            What&apos;s Included in Your Free Audit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "\uD83D\uDCCA",
                title: "Performance Analysis",
                desc: "We analyze your current metrics, traffic, engagement, and conversions to find gaps and opportunities.",
              },
              {
                icon: "\uD83D\uDD0D",
                title: "Competitor Research",
                desc: "See how you stack up against competitors in your local market and what they\u2019re doing differently.",
              },
              {
                icon: "\uD83C\uDFAF",
                title: "Quick Wins",
                desc: "Get 3-5 actionable improvements you can implement immediately for fast results.",
              },
              {
                icon: "\uD83D\uDDFA\uFE0F",
                title: "Growth Roadmap",
                desc: "A custom 90-day plan showing exactly how to grow your online presence step by step.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Audits Delivered" },
              { value: "92%", label: "Take Action on Recommendations" },
              { value: "48hr", label: "Average Delivery Time" },
              { value: "4.9\u2605", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-amber-400">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
