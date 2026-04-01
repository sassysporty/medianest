import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails, getServiceBySlug } from "@/data/service-details";
import { pricingPlans } from "@/data/pricing";
import { servicesFull } from "@/data/services";
import CTASection from "@/components/ui/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceDetailClient from "@/components/sections/ServiceDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const serviceToPricingKey: Record<string, string> = {
  "website-creation": "Website Creation",
  "youtube-automation": "YouTube Automation",
  "social-media-management": "Social Media Management",
  seo: "SEO",
  "etsy-service": "Etsy Service",
};

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | MediaNest`,
    description: service.heroSubtitle,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pricingKey = serviceToPricingKey[slug];
  const tiers = pricingKey ? pricingPlans[pricingKey] : [];
  const serviceMeta = servicesFull.find((s) => s.title === pricingKey);

  return (
    <>
      {/* Animated Hero */}
      <ServiceDetailClient service={service} />

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#ff5e6c] font-semibold text-sm uppercase tracking-widest">
                Overview
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                What We Do
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {service.overview}
              </p>
              {serviceMeta?.price && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-5 py-3">
                  <span className="text-sm text-gray-600">Starting at</span>
                  <span className="text-2xl font-bold text-[#16123f]">
                    {serviceMeta.price}
                  </span>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm">✓</span>
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {service.overviewPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle={`Everything we offer under ${service.title} — pick what you need or get the full package.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((sub, i) => (
              <div
                key={sub.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#ff5e6c]/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5e6c]/5 to-[#feb300]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{sub.icon}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#16123f] transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e6c]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#feb300]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Our proven process delivers results — here's what to expect."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] w-[75%] h-[2px] bg-gradient-to-r from-[#ff5e6c]/30 via-[#feb300]/30 to-[#16123f]/30" />

            {service.process.map((step, i) => {
              const colors = ["#ff5e6c", "#feb300", "#16123f", "#22c55e"];
              return (
                <div key={step.step} className="relative">
                  <div className="text-center">
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-lg text-white relative z-10 shadow-lg"
                      style={{
                        backgroundColor: colors[i % colors.length],
                        boxShadow: `0 4px 20px ${colors[i % colors.length]}30`,
                      }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {tiers.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Pricing Plans"
              subtitle="Transparent pricing with no hidden fees. Pick the plan that fits your needs."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl ${
                    tier.highlighted
                      ? "bg-gradient-to-br from-[#16123f] to-[#1e1a5a] text-white ring-4 ring-blue-300/50 scale-[1.02] shadow-lg shadow-[#16123f]/20"
                      : "bg-white border border-gray-200 hover:-translate-y-1"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="inline-block w-fit bg-[#feb300] text-[#16123f] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
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
                      className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-[#16123f]"}`}
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
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span
                          className={`mt-0.5 ${tier.highlighted ? "text-[#feb300]" : "text-green-500"}`}
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
                    className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                      tier.highlighted
                        ? "bg-[#ff5e6c] text-white hover:bg-[#e84d5b] hover:shadow-lg hover:shadow-[#ff5e6c]/20"
                        : "bg-[#16123f] text-white hover:bg-[#1e1a5a]"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              Need a custom package?{" "}
              <Link
                href="/contact"
                className="text-[#ff5e6c] font-semibold hover:underline"
              >
                Contact us
              </Link>{" "}
              for a tailored quote.
            </p>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`Why Choose Us for ${service.title}`}
            subtitle="What sets us apart from the competition."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyUs.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#ff5e6c]/20 transition-all"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
                  style={{
                    backgroundColor: ["#ff5e6c", "#feb300", "#16123f", "#22c55e", "#8b5cf6", "#06b6d4"][i % 6],
                  }}
                >
                  {i + 1}
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={service.ctaTitle}
        subtitle={service.ctaSubtitle}
        buttonText="Get Your Free Consultation"
      />
    </>
  );
}
