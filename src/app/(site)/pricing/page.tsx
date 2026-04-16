import type { Metadata } from "next";
import Link from "next/link";
import { pricingPlans } from "@/data/pricing";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Pricing | LocalPro Services",
  description:
    "Transparent pricing for YouTube automation, social media management, SEO, and Etsy services. Find the right plan for your business.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No surprise charges. Pick a service and a tier that fits your business — or let us build a custom package."
      />

      {Object.entries(pricingPlans).map(([service, tiers]) => (
        <section
          key={service}
          className="py-16 odd:bg-white even:bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              {service}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-8 flex flex-col ${
                    tier.highlighted
                      ? "bg-blue-800 text-white ring-4 ring-blue-300 scale-[1.02]"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="text-amber-400 text-sm font-semibold uppercase tracking-wide mb-2">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-gray-900"}`}
                  >
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-blue-800"}`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm ${tier.highlighted ? "text-blue-200" : "text-gray-500"}`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-6 ${tier.highlighted ? "text-blue-100" : "text-gray-500"}`}
                  >
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span
                          className={`mt-0.5 ${tier.highlighted ? "text-amber-400" : "text-green-500"}`}
                        >
                          ✓
                        </span>
                        <span
                          className={
                            tier.highlighted ? "text-blue-50" : "text-gray-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
                        : "bg-blue-800 text-white hover:bg-blue-900"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* AI Tools Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            AI Tools Pricing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* PageSurge — Monthly Plans */}
            <div>
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-[0.15em]">
                  Monthly Subscription
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    name: "Starter",
                    price: "$10",
                    features: [
                      "3 Facebook accounts",
                      "15 pages",
                      "All 9 studios",
                      "Free AI with Ollama",
                    ],
                  },
                  {
                    name: "Pro",
                    price: "$20",
                    highlighted: true,
                    features: [
                      "10 Facebook accounts",
                      "50 pages",
                      "All 9 studios",
                      "Priority support",
                      "Free AI with Ollama",
                    ],
                  },
                  {
                    name: "Agency",
                    price: "$40",
                    features: [
                      "100+ Facebook accounts",
                      "Unlimited pages",
                      "All 9 studios",
                      "Dedicated support",
                      "Free AI with Ollama",
                    ],
                  },
                ].map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-xl p-6 flex flex-col ${
                      plan.highlighted
                        ? "bg-purple-700 text-white ring-2 ring-purple-300"
                        : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <h3
                      className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span
                        className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-purple-700"}`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${plan.highlighted ? "text-purple-200" : "text-gray-500"}`}
                      >
                        /mo
                      </span>
                    </div>
                    <ul className="space-y-2 mb-4 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <span
                            className={`mt-0.5 ${plan.highlighted ? "text-purple-200" : "text-green-500"}`}
                          >
                            ✓
                          </span>
                          <span
                            className={
                              plan.highlighted ? "text-purple-100" : "text-gray-600"
                            }
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link
                  href="/tools/pagesurge"
                  className="text-sm font-semibold text-purple-700 hover:text-purple-600 transition-colors"
                >
                  View full details →
                </Link>
              </div>
            </div>

            {/* PinSurge — One-Time Purchase */}
            <div>
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-[0.15em]">
                  One-Time Purchase
                </span>
              </div>
              <div className="flex justify-center">
                <div className="rounded-xl p-8 bg-gray-50 border border-gray-200 max-w-sm w-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    PinSurge — Pinterest Automation
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-rose-600">$39</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">one-time payment</p>
                  <ul className="space-y-2.5 mb-6 text-left">
                    {[
                      "Unlimited URL processing",
                      "9 pin layouts + AI custom option",
                      "4 AI image providers (Pruna AI, Ideogram, Fal.ai, Stability AI)",
                      "5 AI text providers (Ollama free, Groq, Gemini, OpenAI, Claude)",
                      "Professional text overlay system with full controls",
                      "Pinterest board extraction up to 500 boards",
                      "Auto board-pin matching by keyword",
                      "Built-in scheduling (pins per day + start date)",
                      "Editable CSV editor with one-click export",
                      "Light and dark theme",
                      "Free local AI with Ollama",
                      "All future updates included",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:medianestonline@gmail.com?subject=PinSurge%20Purchase"
                    className="block text-center py-3 rounded-lg font-semibold bg-rose-600 text-white hover:bg-rose-500 transition-colors"
                  >
                    Get PinSurge — $39
                  </a>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Email us to purchase — access within 24 hours.
                  </p>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    PinSurge is the tool. AI providers have their own pricing.
                    Start free with Ollama for text. Recommended for images:
                    Pruna.ai — ~5,000 images for $5.
                  </p>
                  <div className="text-center mt-4">
                    <Link
                      href="/tools/pinsurge"
                      className="text-sm font-semibold text-rose-600 hover:text-rose-500 transition-colors"
                    >
                      View full details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison note */}
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 leading-relaxed bg-gray-50 rounded-xl px-6 py-4 ring-1 ring-gray-200/70">
              PageSurge = monthly subscription for ongoing Facebook automation.
              PinSurge = one-time purchase for Pinterest pin creation. Different
              tools, different models — pick what fits your workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-gray-500 mb-6">
            Most of our clients combine 2-3 services for maximum impact. We
            offer bundled packages at discounted rates tailored to your specific
            goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>

      {/* AI Tools Creation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Tools Creation — Custom Projects
          </h2>
          <p className="text-gray-500 mb-8">
            Every business is different. We scope and price each custom AI tool
            project individually based on complexity, features, and timeline.
            Contact us for a free consultation and custom quote.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left mb-8">
            {[
              "Discovery call",
              "Requirements document",
              "Design and development",
              "Testing and QA",
              "Delivery and deployment",
              "30 days of post-launch support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a
            href="mailto:medianestonline@gmail.com?subject=Custom%20AI%20Tool%20Quote"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Get a Custom Quote →
          </a>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan Is Right?"
        subtitle="Book a free 30-minute strategy call and we'll recommend the perfect plan for your business."
        buttonText="Book Your Free Call"
      />
    </>
  );
}
