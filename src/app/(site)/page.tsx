"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesOverview } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import AnimatedSection from "@/components/ui/AnimatedSection";

const slugByTitle: Record<string, string> = Object.fromEntries(
  serviceDetails.map((s) => [s.title, s.slug])
);

const titleAliases: Record<string, string> = {
  SEO: "Search Engine Optimization",
  "Etsy Service": "Etsy Shop Services",
};

function getSlug(title: string): string | undefined {
  return slugByTitle[title] ?? slugByTitle[titleAliases[title]];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f0d2e] via-[#16123f] to-[#1e1a5a] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#ff5e6c] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#feb300] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              >
                We Build, Grow &{" "}
                <span className="relative">
                  <span className="text-[#feb300]">Scale</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-[#feb300]/40 rounded-full origin-left"
                  />
                </span>{" "}
                Your Business Online
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
              >
                Custom websites, YouTube channels, social media, SEO, and Etsy
                — your entire digital presence, handled by one team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/free-audit"
                  className="bg-[#ff5e6c] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e84d5b] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff5e6c]/20 text-center"
                >
                  Get Your Free Audit
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#16123f] transition-all text-center backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Hero visual — animated service cards floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[420px]">
                {[
                  { icon: "🌐", label: "Websites", x: "10%", y: "5%", delay: 0 },
                  { icon: "🎬", label: "YouTube", x: "55%", y: "0%", delay: 0.5 },
                  { icon: "📱", label: "Social Media", x: "0%", y: "45%", delay: 1 },
                  { icon: "🔍", label: "SEO", x: "50%", y: "40%", delay: 1.5 },
                  { icon: "🛍️", label: "Etsy", x: "25%", y: "72%", delay: 2 },
                ].map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + card.delay * 0.2 }}
                    className="absolute"
                    style={{ left: card.x, top: card.y }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + card.delay * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: card.delay * 0.3,
                      }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 flex items-center gap-3 hover:bg-white/20 transition-colors"
                    >
                      <span className="text-2xl">{card.icon}</span>
                      <span className="text-white font-semibold">{card.label}</span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Connecting lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <motion.line
                    x1="25%" y1="15%" x2="65%" y2="12%"
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <motion.line
                    x1="15%" y1="20%" x2="15%" y2="55%"
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                  <motion.line
                    x1="65%" y1="18%" x2="65%" y2="50%"
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.6 }}
                  />
                  <motion.line
                    x1="20%" y1="60%" x2="55%" y2="52%"
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#ff5e6c]/40 to-transparent" />
      </section>

      {/* Problems → Solutions Section (redesigned "Sound Familiar?") */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#ff5e6c] font-semibold text-sm uppercase tracking-widest">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 mb-4">
                Growing Online Shouldn&apos;t Be This Hard
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                You started a business because you&apos;re great at what you do
                — not because you wanted to become a digital marketer.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problems side */}
            <AnimatedSection direction="left">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 text-[#ff5e6c] rounded-lg flex items-center justify-center text-sm font-bold">✕</span>
                  Without MediaNest
                </h3>
                <div className="space-y-4">
                  {[
                    "Outdated website that doesn't bring in leads",
                    "Hours wasted posting on social media with zero ROI",
                    "Competitors outranking you on Google",
                    "No time to create YouTube content consistently",
                    "Etsy shop buried under thousands of competitors",
                  ].map((problem, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-red-400 mt-1 flex-shrink-0">●</span>
                      <p className="text-gray-700">{problem}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Solutions side */}
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm font-bold">✓</span>
                  With MediaNest
                </h3>
                <div className="space-y-4">
                  {[
                    "A modern, fast website that converts visitors into customers",
                    "Strategic content that builds your brand and generates leads",
                    "Top rankings on Google for your target keywords",
                    "A growing YouTube channel running on autopilot",
                    "An optimized Etsy shop that gets found and makes sales",
                  ].map((solution, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-green-500 mt-1 flex-shrink-0">●</span>
                      <p className="text-gray-700">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-[#ff5e6c] font-semibold text-sm uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 mb-4">
                Everything Your Business Needs
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Five core services designed to take your business from invisible
                to unstoppable.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesOverview.map((service, i) => {
              const slug = getSlug(service.title);
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <Link
                    href={slug ? `/services/${slug}` : "/services"}
                    className="block h-full"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 hover:border-[#ff5e6c]/30 transition-all duration-300 h-full group relative overflow-hidden">
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff5e6c]/5 to-[#feb300]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#16123f] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <span className="inline-block mt-3 text-xs font-semibold text-[#ff5e6c] group-hover:translate-x-1 transition-transform">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="flex justify-center gap-6 mt-10">
              <Link
                href="/services"
                className="text-[#16123f] font-semibold hover:underline"
              >
                View All Services →
              </Link>
              <Link
                href="/pricing"
                className="text-[#ff5e6c] font-semibold hover:underline"
              >
                See Pricing →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-[#ff5e6c] font-semibold text-sm uppercase tracking-widest">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Getting started is simple. We handle the heavy lifting.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[12.5%] w-[75%] h-[2px] bg-gradient-to-r from-[#ff5e6c]/30 via-[#feb300]/30 to-[#16123f]/30" />
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your online presence and find the biggest growth opportunities.", color: "#ff5e6c" },
              { step: "02", title: "Custom Strategy", desc: "We build a tailored plan with clear deliverables and transparent pricing.", color: "#feb300" },
              { step: "03", title: "We Execute", desc: "Our team creates content, builds your site, and grows your presence.", color: "#16123f" },
              { step: "04", title: "You Grow", desc: "Track results with monthly reports. More visibility, more leads, more revenue.", color: "#22c55e" },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="text-center relative">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-lg text-white relative z-10"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <span className="text-[#ff5e6c] font-semibold text-sm uppercase tracking-widest">
                  Why MediaNest
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-3 mb-8">
                  Why Businesses Choose{" "}
                  <span className="text-[#ff5e6c]">MediaNest</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "All-In-One Partner", desc: "Websites, YouTube, social, SEO, and Etsy — everything under one roof. No juggling multiple agencies." },
                    { title: "Results-Driven", desc: "Every strategy is backed by data. We track what works and optimize continuously for maximum ROI." },
                    { title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. You know exactly what you're paying for." },
                    { title: "Dedicated Support", desc: "A real team behind your growth — with regular calls, reports, and proactive recommendations." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 bg-[#ff5e6c] text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a1a2e]">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#16123f] to-[#1e1a5a] rounded-2xl p-10 text-white text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff5e6c]/10 rounded-full blur-[60px]" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#feb300]/10 rounded-full blur-[50px]" />
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="text-6xl mb-6"
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Grow Your Business?
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Get a free, personalized audit of your online presence.
                    </p>
                    <Link
                      href="/free-audit"
                      className="inline-block bg-[#ff5e6c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e84d5b] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff5e6c]/20"
                    >
                      Claim Your Free Audit
                    </Link>
                    <p className="text-gray-400 text-xs mt-3">
                      No credit card required
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-r from-[#16123f] to-[#1e1a5a] text-white py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ff5e6c]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#feb300]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Let&apos;s Build Something{" "}
              <span className="text-[#feb300]">Great</span> Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Your business deserves a digital presence that drives real results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/free-audit"
                className="inline-block bg-[#ff5e6c] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#e84d5b] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff5e6c]/20"
              >
                Start Your Project Today
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#16123f] transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
