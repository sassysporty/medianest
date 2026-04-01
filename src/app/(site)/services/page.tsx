import type { Metadata } from "next";
import Link from "next/link";
import { servicesFull } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import { faqs, processSteps } from "@/data/faq";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";

export const metadata: Metadata = {
  title: "Services | MediaNest",
  description:
    "Website creation, YouTube automation, social media management, SEO, and Etsy services for local businesses.",
};

const titleToSlug: Record<string, string> = Object.fromEntries(
  serviceDetails.map((s) => {
    const titleMap: Record<string, string> = {
      "website-creation": "Website Creation",
      "youtube-automation": "YouTube Automation",
      "social-media-management": "Social Media Management",
      seo: "SEO",
      "etsy-service": "Etsy Service",
    };
    const title =
      Object.values(titleMap).find(
        (t) => t.toLowerCase() === s.title.toLowerCase()
      ) ?? s.title;
    return [title, s.slug];
  })
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions designed specifically for local businesses. Pick what you need, or let us build a custom package."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesFull.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                variant="full"
                href={
                  titleToSlug[service.title]
                    ? `/services/${titleToSlug[service.title]}`
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How We Work" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-[#16123f] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore Each Service"
            subtitle="Dive deep into what each service includes, pricing, and how we deliver results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{s.tagline}</p>
                <span className="text-sm font-semibold text-[#ff5e6c] group-hover:translate-x-1 inline-block transition-transform">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-lg p-6 bg-white"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure What You Need?"
        subtitle="Book a free consultation and we'll recommend the right services for your business and budget."
        buttonText="Get Your Free Consultation"
      />
    </>
  );
}
