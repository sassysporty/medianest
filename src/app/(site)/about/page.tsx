import type { Metadata } from "next";
import { values } from "@/data/team";
import { aboutStats } from "@/data/stats";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsBar from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title: "About Us | MediaNest",
  description:
    "Learn about MediaNest — our mission, values, and how we help local businesses grow through website creation, YouTube, social media, SEO, and Etsy services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="About MediaNest"
        subtitle="We're a marketing technology company — offering done-for-you services, ready-made AI tools, and custom AI development to help businesses grow online."
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MediaNest was founded with a simple belief: every local
                  business deserves the same quality digital presence as the big
                  brands — without the big brand price tag.
                </p>
                <p>
                  After watching countless small businesses struggle with their
                  online visibility, we built MediaNest to be different. We
                  operate in three ways: done-for-you digital marketing services
                  (websites, SEO, social media, YouTube, Etsy), ready-made AI
                  tools that marketers use themselves, and custom AI tool
                  development for businesses that need something unique.
                </p>
                <p>
                  Our AI tools — PageSurge for Facebook page automation and
                  PinSurge for Pinterest pin creation — are used by marketers
                  and agencies to automate their social media content at scale.
                  Ready-made AI tools that marketers use themselves — PageSurge
                  automates Facebook pages with AI captions, scheduling, and
                  analytics. PinSurge turns any URL into publish-ready Pinterest
                  pins with AI images, text overlays, and SEO descriptions. Both
                  include free AI options so ongoing costs stay near zero.
                </p>
                <p>
                  We don&apos;t just use AI — we build it. PageSurge and
                  PinSurge are live and used by real marketers every day. We
                  practice what we preach. We launched PageSurge for Facebook,
                  then PinSurge for Pinterest, and more tools are in
                  development. We live at the intersection of digital marketing
                  and AI — not just an agency, but a marketing technology
                  company.
                </p>
              </div>
            </div>
            <StatsBar stats={aboutStats} variant="grid" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-br from-[#16123f] to-[#1e1a5a] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To empower local businesses with the digital tools, strategies, and
            support they need to compete and thrive in an increasingly online
            world. We believe that great marketing shouldn&apos;t be reserved
            for companies with massive budgets.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 bg-[#ff5e6c] text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="Why businesses choose MediaNest over other agencies."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Services + Tools + Custom Dev",
                desc: "Done-for-you marketing, two production AI tools (PageSurge and PinSurge), and custom AI development — all under one roof. No other company offers all three.",
              },
              {
                title: "Results Over Vanity Metrics",
                desc: "We focus on what actually grows your business: leads, sales, and revenue. Not just likes and impressions.",
              },
              {
                title: "Transparent & Honest",
                desc: "No long-term contracts, no hidden fees, no confusing jargon. You always know what you're getting and what it costs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        subtitle="Let's discuss how we can help your business grow online."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
