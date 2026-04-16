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
  Robot,
  ArrowRight,
  Lightning,
  ChartLineUp,
  CurrencyDollar,
  Headset,
  X,
  Check,
  Code,
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
                Your Digital Growth Partner —{" "}
                <br className="hidden md:block" />
                <span className="relative inline-block">
                  <span className="text-[#f0a500]">Services & AI Tools</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#f0a500]/50 origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ ...spring, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-[55ch]"
              >
                From custom websites and SEO to AI-powered tools and custom AI
                development — MediaNest gives you everything to grow your
                business online. Let us handle it, use our tools, or have us
                build you a custom one.
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
                  href="/tools"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-[#08081a] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] backdrop-blur-sm active:scale-[0.98]"
                >
                  Explore AI Tools
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
                { icon: <Storefront weight="duotone" className="w-5 h-5" />, label: "Etsy", desc: "From $39", delay: 0.4, href: "/services/etsy-service" },
                { icon: <Robot weight="duotone" className="w-5 h-5" />, label: "AI Tools", desc: "From $10/mo", delay: 0.5, href: "/tools/pagesurge", accent: true },
              ].map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: 0.7 + card.delay }}
                  className="group"
                >
                  <Link href={card.href || "/services"}>
                    <div className={`${card.accent ? "bg-purple-500/10 ring-1 ring-purple-400/30" : "bg-white/[0.04] ring-1 ring-white/[0.08]"} rounded-2xl p-1.5`}>
                      <div className={`${card.accent ? "bg-purple-500/10 hover:bg-purple-500/15" : "bg-white/[0.04] hover:bg-white/[0.07]"} rounded-[calc(1rem-2px)] px-5 py-4 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}>
                        <div className="flex items-center gap-3">
                          <span className={card.accent ? "text-purple-400" : "text-[#e8505b]"}>{card.icon}</span>
                          <span className="text-white font-medium">{card.label}</span>
                        </div>
                        <span className="text-gray-500 text-sm font-medium">{card.desc}</span>
                      </div>
                    </div>
                  </Link>
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
                      "Paying hundreds per month for AI tools, schedulers, and content apps that don't talk to each other",
                      "No control — you either do everything yourself manually or hand everything to an expensive agency",
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
                      "One affordable AI tool that generates content, schedules posts, and tracks results — with free AI built in",
                      "Your choice — hire us to handle it, or use our AI tools and keep full control yourself",
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
              Done-For-You Services
            </motion.h2>
            <motion.p variants={fadeUp} transition={spring} className="text-gray-500 text-lg max-w-[55ch] leading-relaxed">
              Six expert-managed services to take your business from invisible
              to unstoppable. We do the work — you see the results.
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

            {/* AI Tools Creation card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.4 }}
            >
              <Link href="/services/ai-tools-creation" className="block h-full group">
                <div className="bg-[#f1f1f4] ring-1 ring-black/[0.04] rounded-[1.75rem] p-1.5 h-full">
                  <div className="bg-white rounded-[calc(1.75rem-6px)] p-7 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
                    <div className="w-12 h-12 rounded-2xl bg-[#0f0f1a] text-white flex items-center justify-center mb-5 group-hover:bg-[#e8505b] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <Robot weight="duotone" className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f0f1a] mb-2 tracking-tight">
                      AI Tools Creation
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      We build custom AI tools, chatbots, and automation systems
                      tailored to your business. You tell us what you need — we
                      build it, you own it.
                    </p>
                    <div className="flex items-center justify-between mt-5">
                      <span className="text-sm font-semibold text-[#e8505b] flex items-center gap-1.5 group-hover:translate-x-0">
                        Learn more
                        <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">Custom Quote</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-400 text-sm mt-6"
          >
            Prefer to do it yourself?{" "}
            <Link href="/tools" className="text-purple-700 font-semibold hover:text-purple-600 transition-colors inline-flex items-center gap-1">
              Check out our AI Tools <ArrowRight weight="bold" className="w-3 h-3" />
            </Link>
          </motion.p>
        </div>
      </section>

      {/* AI Tools Showcase */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-purple-50/60 via-white to-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mb-14"
          >
            <motion.p variants={fadeUp} transition={spring} className="text-purple-700 font-semibold text-xs uppercase tracking-[0.2em]">
              AI Tools
            </motion.p>
            <motion.h2 variants={fadeUp} transition={spring} className="text-3xl md:text-5xl font-bold text-[#0f0f1a] tracking-tight mt-3 mb-4 leading-[1.1]">
              AI Tools — Built for Marketers{" "}
              <br className="hidden md:block" />
              Who Want Control
            </motion.h2>
            <motion.p variants={fadeUp} transition={spring} className="text-gray-500 text-lg max-w-[62ch] leading-relaxed">
              Not everyone needs an agency. Some marketers want powerful tools they
              can run themselves. That&apos;s why we build AI-powered desktop and
              web apps that automate the hard parts of digital marketing.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <div className="bg-[#08081a] rounded-[2rem] p-1.5 ring-1 ring-white/[0.06]">
              <div className="bg-gradient-to-br from-[#0f0f1a] to-[#141428] rounded-[calc(2rem-6px)] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left — Dashboard Preview */}
                  <div className="relative p-8 md:p-10 lg:p-12 flex items-center justify-center bg-gradient-to-br from-purple-600/10 to-purple-600/5 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[100px]" />
                    </div>
                    <div className="relative w-full max-w-sm">
                      <div className="bg-white/[0.04] ring-1 ring-white/[0.1] rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-3 h-3 rounded-full bg-[#e8505b]/60" />
                          <span className="w-3 h-3 rounded-full bg-[#f0a500]/60" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                          <span className="ml-auto text-[10px] text-gray-600 font-mono">PageSurge v1.0</span>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white/[0.04] rounded-xl p-4 ring-1 ring-white/[0.06]">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <Robot weight="duotone" className="w-4 h-4 text-purple-300" />
                              </div>
                              <div>
                                <div className="text-xs text-white font-semibold">Caption Studio</div>
                                <div className="text-[10px] text-gray-500">3 captions generated</div>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-white/[0.06] rounded-full w-full" />
                              <div className="h-2 bg-white/[0.06] rounded-full w-4/5" />
                              <div className="h-2 bg-white/[0.06] rounded-full w-3/5" />
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {["23 Pages", "142 Posts", "12.4K Reach"].map((stat) => (
                              <div key={stat} className="bg-white/[0.04] rounded-lg p-2.5 ring-1 ring-white/[0.06] text-center">
                                <div className="text-xs font-bold text-white">{stat.split(" ")[0]}</div>
                                <div className="text-[9px] text-gray-500">{stat.split(" ")[1]}</div>
                              </div>
                            ))}
                          </div>
                          <div className="bg-emerald-500/10 rounded-lg px-3 py-2 ring-1 ring-emerald-400/20 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] text-emerald-300 font-medium">Scheduling 30 posts across 5 pages...</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-xs text-gray-600 mt-4">PageSurge Dashboard Preview</p>
                    </div>
                  </div>

                  {/* Right — Product Info */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 ring-1 ring-purple-400/30 mb-5 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-purple-200 font-semibold text-[10px] uppercase tracking-[0.2em]">Flagship Product</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                      PageSurge — Facebook Page Automation
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-[50ch]">
                      Generate AI captions, schedule posts, manage unlimited
                      Facebook pages, and track analytics — all from one desktop
                      app. Free AI included with Ollama. Works on Mac and Windows.
                    </p>

                    <ul className="space-y-3 mb-8">
                      {[
                        "Manage up to 100+ Facebook accounts and unlimited pages",
                        "9 built-in studios — captions, images, video, analytics, and more",
                        "Starts at just $10/month — no contracts",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <Check weight="bold" className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/tools/pagesurge"
                      className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(126,34,206,0.6)] w-fit"
                    >
                      Learn More About PageSurge
                      <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Custom AI Dev card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="mt-8"
          >
            <div className="bg-[#0f0f1a] rounded-2xl ring-1 ring-white/[0.08] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#e8505b]/15 ring-1 ring-[#e8505b]/30 flex items-center justify-center shrink-0">
                <Code weight="duotone" className="w-7 h-7 text-[#e8505b]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  Need Something Custom?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[55ch]">
                  PageSurge doesn&apos;t fit your exact workflow? We&apos;ll build a custom
                  AI tool specifically for your business. From AI chatbots to content
                  automation to data analysis — tell us what you need and we&apos;ll make it.
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
                <a
                  href="mailto:medianestonline@gmail.com?subject=Custom%20AI%20Tool%20Project"
                  className="group inline-flex items-center gap-2 bg-[#e8505b] hover:bg-[#d4444e] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                >
                  Discuss Your Project
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-[11px] text-gray-600">No fixed pricing — just a conversation.</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-400 text-sm mt-10"
          >
            More AI tools coming soon. Stay tuned.
          </motion.p>
        </div>
      </section>

      {/* How It Works — Two Tracks */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} transition={spring} className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em]">
              How it works
            </motion.p>
            <motion.h2 variants={fadeUp} transition={spring} className="text-3xl md:text-5xl font-bold text-[#0f0f1a] tracking-tight mt-3 leading-[1.1]">
              Two Ways to Grow With MediaNest
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Track 1 — Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
            >
              <div className="bg-emerald-50/80 ring-1 ring-emerald-200/50 rounded-[2rem] p-2 h-full">
                <div className="bg-white rounded-[calc(2rem-8px)] p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Headset weight="bold" className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-bold text-[#0f0f1a] text-lg tracking-tight">Let Us Handle It</span>
                      <span className="text-emerald-600 text-xs font-semibold ml-2 uppercase tracking-wider">Services</span>
                    </div>
                  </div>

                  <div className="space-y-5 flex-1">
                    {[
                      { step: "01", title: "Free Audit", desc: "We analyze your online presence and find the biggest growth opportunities." },
                      { step: "02", title: "Custom Strategy", desc: "We build a tailored plan with clear deliverables and transparent pricing." },
                      { step: "03", title: "We Execute", desc: "Our team creates content, builds your site, and grows your presence." },
                      { step: "04", title: "You Grow", desc: "Track results with monthly reports. More visibility, more leads, more revenue." },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...spring, delay: i * 0.08 }}
                        className="flex gap-4"
                      >
                        <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0f0f1a] tracking-tight">{item.title}</h3>
                          <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      href="/free-audit"
                      className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                    >
                      Get Your Free Audit
                      <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Track 2 — AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
            >
              <div className="bg-purple-50/80 ring-1 ring-purple-200/50 rounded-[2rem] p-2 h-full">
                <div className="bg-white rounded-[calc(2rem-8px)] p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Robot weight="bold" className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-bold text-[#0f0f1a] text-lg tracking-tight">Do It Yourself</span>
                      <span className="text-purple-600 text-xs font-semibold ml-2 uppercase tracking-wider">AI Tools</span>
                    </div>
                  </div>

                  <div className="space-y-5 flex-1">
                    {[
                      { step: "01", title: "Pick Your Tool", desc: "Browse our AI tools and choose what fits your workflow." },
                      { step: "02", title: "Subscribe", desc: "Choose a plan starting at $10/month. Email us and get set up in 24 hours." },
                      { step: "03", title: "Automate", desc: "Connect your accounts, generate content with AI, and schedule everything." },
                      { step: "04", title: "Scale", desc: "Manage more pages, more platforms, and more clients without extra effort." },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...spring, delay: i * 0.08 }}
                        className="flex gap-4"
                      >
                        <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0f0f1a] tracking-tight">{item.title}</h3>
                          <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      href="/tools"
                      className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                    >
                      Explore AI Tools
                      <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <p className="text-gray-400 text-xs mt-3">
                      Need a tool that doesn&apos;t exist yet?{" "}
                      <Link href="/services/ai-tools-creation" className="text-purple-600 font-semibold hover:text-purple-500">
                        We&apos;ll build it for you.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  { icon: <Lightning weight="duotone" className="w-5 h-5" />, title: "Services + Tools Under One Roof", desc: "Whether you want us to manage everything or prefer to run your own marketing with our AI tools — MediaNest has you covered. One company, two ways to grow." },
                  { icon: <ChartLineUp weight="duotone" className="w-5 h-5" />, title: "Results-driven", desc: "Every strategy is backed by data. We optimize continuously for maximum ROI." },
                  { icon: <CurrencyDollar weight="duotone" className="w-5 h-5" />, title: "Transparent pricing", desc: "No hidden fees, no surprise charges. You know exactly what you're paying for." },
                  { icon: <Headset weight="duotone" className="w-5 h-5" />, title: "Dedicated support", desc: "A real team behind your growth — with regular calls and proactive recommendations." },
                  { icon: <Robot weight="duotone" className="w-5 h-5" />, title: "AI-Powered Everything", desc: "We use AI tools ourselves, we sell ready-made AI tools, and we build custom AI tools for your business. No other agency offers all three." },
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
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/free-audit"
                        className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#08081a] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                      >
                        Get Your Free Audit
                        <ArrowRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      <Link
                        href="/tools"
                        className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
                      >
                        Explore AI Tools
                      </Link>
                    </div>
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
            Whether you want expert-managed services or powerful AI tools you
            run yourself — we&apos;ve got you covered.
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
              href="/tools"
              className="inline-flex items-center justify-center border border-white/15 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#08081a] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              See AI Tools
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
