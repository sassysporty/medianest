"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Robot,
  FacebookLogo,
  PinterestLogo,
  ArrowRight,
  Check,
  Envelope,
} from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const pageSurgeBadges = ["From $10/mo", "Free AI Included", "Mac & Windows"];
const pinSurgeBadges = ["$39 One-Time Payment", "Web-Based", "Free AI Included"];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#08081a] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 ring-1 ring-purple-400/30 mb-6"
          >
            <Robot weight="duotone" className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-semibold text-xs uppercase tracking-[0.2em]">
              MediaNest AI Tools
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            AI Tools by{" "}
            <span className="text-[#e8505b]">
              Media<span className="text-[#e8505b]">Nest</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-[60ch] mx-auto leading-relaxed"
          >
            Powerful, affordable tools that automate your digital marketing. No
            agency required. Run them yourself — with AI doing the heavy lifting.
          </motion.p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <div className="bg-[#08081a] rounded-[2rem] p-1.5 ring-1 ring-white/[0.06]">
              <div className="bg-gradient-to-br from-[#0f0f1a] to-[#141428] rounded-[calc(2rem-6px)] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left — Visual */}
                  <div className="relative p-10 md:p-12 flex items-center justify-center bg-gradient-to-br from-purple-600/10 to-purple-600/5 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[100px]" />
                    </div>
                    <div className="relative flex flex-col items-center gap-6">
                      <div className="relative">
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-[0_20px_50px_-15px_rgba(126,34,206,0.6)]">
                          <FacebookLogo
                            weight="fill"
                            className="w-14 h-14 text-white"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg ring-4 ring-[#0f0f1a]">
                          <Robot
                            weight="fill"
                            className="w-5 h-5 text-white"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          PageSurge
                        </h3>
                        <p className="text-purple-300 text-sm font-medium mt-1">
                          Facebook Page Automation
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 ring-1 ring-purple-400/30 text-purple-200 text-[10px] font-semibold uppercase tracking-[0.15em] mt-3">
                          Monthly Plans
                        </span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {pageSurgeBadges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] ring-1 ring-white/[0.1] text-xs font-semibold text-gray-300"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right — Info */}
                  <div className="p-10 md:p-12 flex flex-col justify-center">
                    <p className="text-gray-300 leading-relaxed mb-6 text-base">
                      Generate AI captions, schedule posts across unlimited pages,
                      track analytics, manage comments, and build brand kits — all
                      from one desktop app. Free AI included. Mac and Windows.
                    </p>

                    <ul className="space-y-3 mb-8">
                      {[
                        "9 built-in studios — captions, images, video, promos, analytics, and more",
                        "Manage up to 100+ Facebook pages from a single dashboard",
                        "Free local AI with Ollama — no API bills, no usage limits",
                        "Monthly plans starting at $10 — cancel anytime, no contracts",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-gray-400"
                        >
                          <Check
                            weight="bold"
                            className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/tools/pagesurge"
                      className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(126,34,206,0.6)] w-fit"
                    >
                      Learn More
                      <ArrowRight
                        weight="bold"
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PinSurge */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <div className="bg-[#08081a] rounded-[2rem] p-1.5 ring-1 ring-white/[0.06]">
              <div className="bg-gradient-to-br from-[#0f0f1a] to-[#141428] rounded-[calc(2rem-6px)] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative p-10 md:p-12 flex items-center justify-center bg-gradient-to-br from-rose-600/10 to-rose-600/5 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-rose-500/15 rounded-full blur-[100px]" />
                    </div>
                    <div className="relative flex flex-col items-center gap-6">
                      <div className="relative">
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shadow-[0_20px_50px_-15px_rgba(225,29,72,0.6)]">
                          <PinterestLogo
                            weight="fill"
                            className="w-14 h-14 text-white"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg ring-4 ring-[#0f0f1a]">
                          <Robot
                            weight="fill"
                            className="w-5 h-5 text-white"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          PinSurge
                        </h3>
                        <p className="text-rose-300 text-sm font-medium mt-1">
                          Bulk Pinterest Pin Creation
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/10 ring-1 ring-rose-400/30 text-rose-200 text-[10px] font-semibold uppercase tracking-[0.15em] mt-3">
                          One-Time Purchase
                        </span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {pinSurgeBadges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] ring-1 ring-white/[0.1] text-xs font-semibold text-gray-300"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-10 md:p-12 flex flex-col justify-center">
                    <p className="text-gray-300 leading-relaxed mb-6 text-base">
                      Turn any URL into a fully designed, SEO-optimized Pinterest
                      pin with AI-generated images, text overlays, scheduling,
                      and a ready-to-upload CSV. Supports 10 pin layouts, 4
                      image AI providers, 5 text AI providers, and built-in
                      scheduling.
                    </p>

                    <ul className="space-y-3 mb-8">
                      {[
                        "9 pin layouts + AI custom — 4 aspect ratios for every pin style",
                        "Scrape URLs in parallel — process up to 10 at once",
                        "Free local AI with Ollama — add image AI from $0.01/image",
                        "One-time $39 purchase — no subscription, all updates included",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-gray-400"
                        >
                          <Check
                            weight="bold"
                            className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/tools/pinsurge"
                      className="group inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(225,29,72,0.6)] w-fit"
                    >
                      Learn More
                      <ArrowRight
                        weight="bold"
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 ring-1 ring-purple-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-purple-700 font-semibold text-xs uppercase tracking-[0.2em]">
                In Development
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5">
              More Tools on the Way
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-[55ch] mx-auto">
              Two tools live. More on the way — YouTube, Instagram,
              SEO, and beyond. Want early access?
            </p>

            <div className="bg-white rounded-2xl ring-1 ring-gray-200 p-8 max-w-md mx-auto mb-8">
              <Envelope
                weight="duotone"
                className="w-10 h-10 text-purple-700 mx-auto mb-4"
              />
              <p className="text-[#08081a] font-semibold mb-2">
                Join the early access list
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Email us to get notified when new tools launch.
              </p>
              <a
                href="mailto:medianestonline@gmail.com?subject=AI%20Tools%20Early%20Access"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
              >
                medianestonline@gmail.com
                <ArrowRight weight="bold" className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-link to Services */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="text-gray-600 text-lg"
          >
            Looking for done-for-you services instead?{" "}
            <Link
              href="/services"
              className="text-[#e8505b] font-semibold hover:text-[#d4444e] transition-colors inline-flex items-center gap-1"
            >
              Check out our services
              <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </motion.p>
        </div>
      </section>
    </>
  );
}
