"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesOverview } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import {
  Globe,
  YoutubeLogo,
  ChatCircleDots,
  MagnifyingGlass,
  Storefront,
  ArrowRight,
  Lightning,
  ChartLineUp,
  CurrencyDollar,
  Headset,
  X,
  Check,
} from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

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

const serviceIcons: Record<string, React.ReactNode> = {
  "Website Creation": <Globe weight="duotone" className="w-7 h-7" />,
  "YouTube Automation": <YoutubeLogo weight="duotone" className="w-7 h-7" />,
  "Social Media Management": <ChatCircleDots weight="duotone" className="w-7 h-7" />,
  SEO: <MagnifyingGlass weight="duotone" className="w-7 h-7" />,
  "Etsy Service": <Storefront weight="duotone" className="w-7 h-7" />,
};

export default function Home() {
  return (
    <>
      {/* Hero — Asymmetric Layout */}
      <section className="relative bg-[#08081a] text-white overflow-hidden min-h-[100dvh] flex items-center">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#e8505b]/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#f0a500]/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...spring, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              >
                We build, grow &{" "}
                <span className="relative inline-block">
                  <span className="text-[#f0a500]">scale</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#f0a500]/50 origin-left"
                  />
                </span>
                <br className="hidden md:block" />
                your business online
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...spring, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-[55ch]"
              >
                Custom websites, YouTube channels, social media, SEO, and Etsy
                — your entire digital presence, handled by one expert team.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...spring, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/free-audit"
                  className="group inline-flex items-center justify-center gap-2 bg-[#e8505b] text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-[#d4444e] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  Get your free audit
                  <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-[#08081a] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] backdrop-blur-sm active:scale-[0.98]"
                >
                  Explore services
                </Link>
              </motion.div>
            </div>

            {/* Right — 5 cols — Floating service pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:flex flex-col gap-4"
            >
              {[
                { icon: <Globe weight="duotone" className="w-5 h-5" />, label: "Websites", desc: "From $199", delay: 0 },
                { icon: <YoutubeLogo weight="duotone" className="w-5 h-5" />, label: "YouTube", desc: "From $159/mo", delay: 0.1 },
                { icon: <ChatCircleDots weight="duotone" className="w-5 h-5" />, label: "Social Media", desc: "From $79/mo", delay: 0.2 },
                { icon: <MagnifyingGlass weight="duotone" className="w-5 h-5" />, label: "SEO", desc: "From $59/mo", delay: 0.3 },
                { icon: <Storefront weight="duotone" className="w-5 h-5" />, label: "Etsy", desc: "From $39", delay: 0.4 },
              ].map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: 0.7 + card.delay }}
                  className="group"
                >
                  {/* Double-bezel card */}
                  <div className="bg-white/[0.04] ring-1 ring-white/[0.08] rounded-2xl p-1.5">
                    <div className="bg-white/[0.04] rounded-[calc(1rem-2px)] px-5 py-4 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] hover:bg-white/[0.07] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#e8505b]">{card.icon}</span>
                        <span className="text-white font-medium">{card.label}</span>
                      </div>
                      <span className="text-gray-500 text-sm font-medium">{card.desc}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions — Editorial Split */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={fadeUp} transition={spring} className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em]">
              The challenge
            </motion.p>
            <motion.h2 variants={fadeUp} transition={spring} className="text-3xl md:text-5xl font-bold text-[#0f0f1a] tracking-tight mt-3 mb-4 leading-[1.1]">
              Growing online shouldn&apos;t<br className="hidden md:block" /> be this hard
            </motion.h2>
            <motion.p variants={fadeUp} transition={spring} className="text-gray-500 text-lg max-w-[55ch] mb-16 leading-relaxed">
              You started a business because you&apos;re great at what you do — not because you wanted to become a full-time digital marketer.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring }}
            >
              <div className="bg-red-50/80 ring-1 ring-red-200/50 rounded-[1.75rem] p-2">
                <div className="bg-white rounded-[calc(1.75rem-8px)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-9 h-9 rounded-xl bg-red-100 text-[#e8505b] flex items-center justify-center">
                      <X weight="bold" className="w-4 h-4" />
                    </span>
                    <span className="font-semibold text-[#0f0f1a]">Without MediaNest</span>
                  </div>
                  <div className="space-y-5">
                    {[
                      "Outdated website that doesn't bring in leads",
                      "Hours wasted posting with zero engagement",
                      "Competitors outranking you on Google",
                      "No time to create YouTube content",
                      "Etsy shop buried under thousands of sellers",
                    ].map((problem, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...spring, delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2.5 shrink-0" />
                        <p className="text-gray-600 leading-relaxed">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
            >
              <div className="bg-emerald-50/80 ring-1 ring-emerald-200/50 rounded-[1.75rem] p-2">
                <div className="bg-white rounded-[calc(1.75rem-8px)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Check weight="bold" className="w-4 h-4" />
                    </span>
                    <span className="font-semibold text-[#0f0f1a]">With MediaNest</span>
                  </div>
                  <div className="space-y-5">
                    {[
                      "A modern website that converts visitors into customers",
                      "Strategic content that generates real leads",
                      "Top Google rankings for your target keywords",
                      "A growing YouTube channel running on autopilot",
                      "An optimized Etsy shop that gets found and sells",
                    ].map((solution, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...spring, delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                        <p className="text-gray-600 leading-relaxed">{solution}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services — Asymmetric Bento */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mb-16"
          >
            <motion.p variants={fadeUp} transition={spring} className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em]">
              What we do
            </motion.p>
            <motion.h2 variants={fadeUp} transition={spring} className="text-3xl md:text-5xl font-bold text-[#0f0f1a] tracking-tight mt-3 mb-4 leading-[1.1]">
              Everything your business needs
            </motion.h2>
            <motion.p variants={fadeUp} transition={spring} className="text-gray-500 text-lg max-w-[55ch] leading-relaxed">
              Five core services designed to take your business from invisible to unstoppable.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesOverview.map((service, i) => {
              const slug = getSlug(service.title);
              const isLarge = i < 2;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.08 }}
                  className={isLarge ? "lg:col-span-1" : ""}
                >
                  <Link href={slug ? `/services/${slug}` : "/services"} className="block h-full group">
                    {/* Double-bezel card */}
                    <div className="bg-[#f1f1f4] ring-1 ring-black/[0.04] rounded-[1.75rem] p-1.5 h-full">
                      <div className="bg-white rounded-[calc(1.75rem-6px)] p-7 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
                        <div className="w-12 h-12 rounded-2xl bg-[#0f0f1a] text-white flex items-center justify-center mb-5 group-hover:bg-[#e8505b] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          {serviceIcons[service.title] || <Globe weight="duotone" className="w-6 h-6" />}
                        </div>
                        <h3 className="text-lg font-bold text-[#0f0f1a] mb-2 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#e8505b]">
                          <span>Learn more</span>
                          <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8 mt-12"
          >
            <Link href="/services" className="text-[#0f0f1a] font-semibold text-sm hover:text-[#e8505b] transition-colors flex items-center gap-1.5">
              View all services <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
            <Link href="/pricing" className="text-gray-400 font-semibold text-sm hover:text-[#0f0f1a] transition-colors flex items-center gap-1.5">
              See pricing <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mb-16"
          >
            <motion.p variants={fadeUp} transition={spring} className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em]">
              Our process
            </motion.p>
            <motion.h2 variants={fadeUp} transition={spring} className="text-3xl md:text-5xl font-bold text-[#0f0f1a] tracking-tight mt-3 leading-[1.1]">
              How it works
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free audit", desc: "We analyze your online presence and find the biggest growth opportunities.", color: "#e8505b" },
              { step: "02", title: "Custom strategy", desc: "We build a tailored plan with clear deliverables and transparent pricing.", color: "#f0a500" },
              { step: "03", title: "We execute", desc: "Our team creates content, builds your site, and grows your presence.", color: "#0f0f1a" },
              { step: "04", title: "You grow", desc: "Track results with monthly reports. More visibility, more leads, more revenue.", color: "#10b981" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.1 }}
              >
                <div className="bg-white ring-1 ring-black/[0.04] rounded-[1.75rem] p-1.5 h-full">
                  <div className="bg-white rounded-[calc(1.75rem-6px)] p-7 h-full">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm text-white mb-5"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#0f0f1a] mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Asymmetric Split */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em]"
              >
                Why MediaNest
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={spring}
                className="text-3xl md:text-5xl font-bold text-[#0f0f1a] tracking-tight mt-3 mb-12 leading-[1.1]"
              >
                Why businesses choose{" "}
                <span className="text-[#e8505b]">MediaNest</span>
              </motion.h2>

              <div className="space-y-6">
                {[
                  { icon: <Lightning weight="duotone" className="w-5 h-5" />, title: "All-in-one partner", desc: "Websites, YouTube, social, SEO, and Etsy — everything under one roof." },
                  { icon: <ChartLineUp weight="duotone" className="w-5 h-5" />, title: "Results-driven", desc: "Every strategy is backed by data. We optimize continuously for maximum ROI." },
                  { icon: <CurrencyDollar weight="duotone" className="w-5 h-5" />, title: "Transparent pricing", desc: "No hidden fees, no surprise charges. You know exactly what you're paying for." },
                  { icon: <Headset weight="duotone" className="w-5 h-5" />, title: "Dedicated support", desc: "A real team behind your growth — with regular calls and proactive recommendations." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...spring, delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#f1f1f4] text-[#0f0f1a] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f0f1a] tracking-tight">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
              className="lg:col-span-5 lg:mt-12"
            >
              <div className="bg-[#08081a] rounded-[2rem] p-1.5">
                <div className="bg-gradient-to-br from-[#0f0f1a] to-[#141428] rounded-[calc(2rem-6px)] p-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#e8505b]/10 rounded-full blur-[80px]" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f0a500]/8 rounded-full blur-[60px]" />
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.08] flex items-center justify-center">
                      <ChartLineUp weight="duotone" className="w-8 h-8 text-[#e8505b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                      Ready to grow your business?
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-[30ch] mx-auto leading-relaxed">
                      Get a free, personalized audit of your online presence.
                    </p>
                    <Link
                      href="/free-audit"
                      className="group inline-flex items-center gap-2 bg-[#e8505b] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#d4444e] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                    >
                      Claim your free audit
                      <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <p className="text-gray-600 text-xs mt-4">No credit card required</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#08081a] text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#e8505b]/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#f0a500]/6 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={spring}
            className="text-3xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.1]"
          >
            Let&apos;s build something{" "}
            <span className="text-[#f0a500]">great</span> together
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-400 mb-10 max-w-[45ch] mx-auto leading-relaxed"
          >
            Your business deserves a digital presence that drives real results.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/free-audit"
              className="group inline-flex items-center justify-center gap-2 bg-[#e8505b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d4444e] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              Start your project
              <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/15 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#08081a] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
