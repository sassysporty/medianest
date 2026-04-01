"use client";

import { useState, type FormEvent } from "react";

export default function FreeAuditPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
                Find out exactly what&apos;s holding your business back online. Our
                experts will analyze your presence and deliver a personalized
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
                    <span className="text-amber-400 mt-1">✓</span>
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              {status === "sent" ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
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
                  {status === "error" && (
                    <div className="mb-4 bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        name="url"
                        placeholder="Website, YouTube Channel, Etsy Shop, or Social Media URL"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <select
                        name="service"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="">What do you need help with?</option>
                        <option value="youtube">YouTube Channel</option>
                        <option value="social-media">Social Media</option>
                        <option value="seo">SEO / Google Rankings</option>
                        <option value="etsy">Etsy Shop</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-amber-500 text-gray-900 py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
                    >
                      {status === "sending"
                        ? "Submitting..."
                        : "Get My Free Audit →"}
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
                icon: "📊",
                title: "Performance Analysis",
                desc: "We analyze your current metrics, traffic, engagement, and conversions to find gaps and opportunities.",
              },
              {
                icon: "🔍",
                title: "Competitor Research",
                desc: "See how you stack up against competitors in your local market and what they're doing differently.",
              },
              {
                icon: "🎯",
                title: "Quick Wins",
                desc: "Get 3-5 actionable improvements you can implement immediately for fast results.",
              },
              {
                icon: "🗺️",
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
              { value: "4.9★", label: "Client Satisfaction" },
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
