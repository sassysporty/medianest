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
