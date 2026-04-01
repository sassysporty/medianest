import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | LocalPro Services",
  description:
    "See real results from our YouTube automation, social media, SEO, and Etsy clients. Detailed case studies with measurable outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Real Results for Real Businesses"
        subtitle="Don't just take our word for it — see exactly how we've helped local businesses grow with detailed case studies and measurable outcomes."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className={`rounded-2xl overflow-hidden ${i % 2 === 0 ? "bg-white border border-gray-200" : "bg-gray-50"}`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-6 text-white">
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wide">
                  {study.service}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">
                  {study.title}
                </h2>
                <p className="text-blue-200 text-sm mt-1">
                  {study.client} &middot; {study.industry} &middot;{" "}
                  {study.duration}
                </p>
              </div>

              <div className="p-8">
                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {study.results.map((r) => (
                    <div
                      key={r.metric}
                      className="bg-blue-50 rounded-lg p-4 text-center"
                    >
                      <div className="text-xl md:text-2xl font-bold text-blue-800">
                        {r.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {r.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      The Challenge
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Our Solution
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <div className="border-l-4 border-amber-500 pl-6 py-2">
                    <p className="text-gray-600 italic leading-relaxed">
                      &ldquo;{study.testimonial}&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-2">
                      — {study.client}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Be Our Next Success Story?"
        subtitle="Book a free strategy call and let's discuss how we can deliver similar results for your business."
        buttonText="Get Your Free Strategy Call"
      />
    </>
  );
}
