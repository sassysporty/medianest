"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const trustItems = [
  "Web-based app",
  "One-time $39 payment",
  "No subscription",
  "Bring your own API keys",
  "Free AI option with Ollama",
];

export default function PinSurgeHero() {
  return (
    <section className="relative bg-[#08081a] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 ring-1 ring-rose-400/30 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-rose-200 font-semibold text-xs uppercase tracking-[0.2em]">
            PinSurge — Pinterest Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Turn Any URL Into{" "}
          <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500 bg-clip-text text-transparent">
            Pinterest-Ready Pins
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-[62ch] mx-auto leading-relaxed mb-5"
        >
          PinSurge scrapes your content, generates AI images, adds professional
          text overlays, writes SEO-optimized titles and descriptions, schedules
          your pins, and exports a bulk-upload CSV — all from one simple
          interface.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.28 }}
          className="text-sm md:text-base text-gray-500 max-w-[60ch] mx-auto mb-10"
        >
          Built for affiliate bloggers, e-commerce sellers, and Pinterest
          managers who work at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <a
            href="https://wa.me/393923952415?text=Hi%20MediaNest%21%20I%27d%20like%20to%20purchase%20PinSurge%20for%20%2439.%20Please%20send%20me%20the%20details%20to%20get%20started."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#08081a] px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]"
          >
            Get PinSurge — $39
            <ArrowRight
              weight="bold"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white px-7 py-3.5 rounded-full font-semibold text-base ring-1 ring-white/[0.12] transition-all duration-300 active:scale-[0.98]"
          >
            See How It Works
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.44 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-12"
        >
          {trustItems.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <CheckCircle
                weight="fill"
                className="w-4 h-4 text-emerald-400 shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.52 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {/* Card 1 — URL Input & Layouts */}
          <div className="group rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.1] overflow-hidden hover:ring-rose-400/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(232,80,91,0.15)]">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-red-400/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <span className="w-2 h-2 rounded-full bg-green-400/70" />
              <span className="ml-2 flex-1 h-4 rounded bg-white/[0.06]" />
            </div>
            <div className="p-4 space-y-3">
              <div className="text-2xl text-center">&#128279;</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 rounded-md bg-white/[0.05] px-2.5 py-1.5 ring-1 ring-white/[0.08]">
                  <span className="w-3 h-3 rounded-full bg-rose-400/40 shrink-0" />
                  <span className="h-2 flex-1 rounded bg-white/[0.12]" />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white/[0.03] px-2.5 py-1">
                  <span className="h-1.5 w-16 rounded bg-white/[0.08]" />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white/[0.03] px-2.5 py-1">
                  <span className="h-1.5 w-20 rounded bg-white/[0.08]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md ${
                      [
                        "bg-rose-400/25",
                        "bg-rose-300/20",
                        "bg-emerald-400/20",
                        "bg-rose-500/20",
                        "bg-amber-400/20",
                        "bg-rose-400/15",
                        "bg-emerald-300/15",
                        "bg-rose-300/25",
                        "bg-amber-300/20",
                      ][i]
                    } ring-1 ring-white/[0.06]`}
                  />
                ))}
              </div>
              <div className="pt-1 text-center">
                <p className="text-sm font-bold text-white">URL Input &amp; Layouts</p>
                <p className="text-xs text-gray-500 mt-0.5">Paste URLs, pick from 9 professional layouts</p>
              </div>
            </div>
          </div>

          {/* Card 2 — Text Overlay Controls */}
          <div className="group rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.1] overflow-hidden hover:ring-rose-400/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(232,80,91,0.15)]">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-red-400/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <span className="w-2 h-2 rounded-full bg-green-400/70" />
              <span className="ml-2 flex-1 h-4 rounded bg-white/[0.06]" />
            </div>
            <div className="p-4 space-y-3">
              <div className="text-2xl text-center">&#127912;</div>
              <div className="space-y-2.5">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="h-1.5 w-10 rounded bg-white/[0.1]" />
                    <span className="text-[10px] text-gray-600">72%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-rose-400/60 to-rose-300/40" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="h-1.5 w-8 rounded bg-white/[0.1]" />
                    <span className="text-[10px] text-gray-600">48%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-amber-400/60 to-amber-300/40" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                {["bg-rose-400", "bg-amber-400", "bg-emerald-400", "bg-blue-400", "bg-purple-400", "bg-pink-400", "bg-white", "bg-gray-600"].map((c, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full ${c} ${i === 0 ? "ring-2 ring-white/40" : "ring-1 ring-white/[0.1]"}`}
                  />
                ))}
              </div>
              <div className="rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-400/10 ring-1 ring-white/[0.08] p-2.5 text-center">
                <span className="text-[11px] font-semibold text-white/70 tracking-wide">
                  Sample Pin Text
                </span>
              </div>
              <div className="pt-1 text-center">
                <p className="text-sm font-bold text-white">Text Overlay Controls</p>
                <p className="text-xs text-gray-500 mt-0.5">Fine-tune fonts, sizes, colors, and overlay text</p>
              </div>
            </div>
          </div>

          {/* Card 3 — Scheduling & Board Matching */}
          <div className="group rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.1] overflow-hidden hover:ring-rose-400/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(232,80,91,0.15)]">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-red-400/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <span className="w-2 h-2 rounded-full bg-green-400/70" />
              <span className="ml-2 flex-1 h-4 rounded bg-white/[0.06]" />
            </div>
            <div className="p-4 space-y-3">
              <div className="text-2xl text-center">&#128197;</div>
              <div className="grid grid-cols-7 gap-0.5">
                {["S","M","T","W","T","F","S"].map((d, i) => (
                  <span key={i} className="text-[9px] text-gray-600 text-center font-medium">{d}</span>
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm text-[8px] flex items-center justify-center ${
                      [3, 5, 8, 11].includes(i)
                        ? "bg-rose-400/30 text-rose-300"
                        : "bg-white/[0.04] text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                {["DIY Crafts", "Home Decor", "Recipes", "Travel Tips"].map((board, i) => (
                  <div
                    key={board}
                    className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1.5 ring-1 ring-white/[0.06]"
                  >
                    <span
                      className={`w-3 h-3 rounded-sm shrink-0 flex items-center justify-center text-[8px] ${
                        i < 2 ? "bg-emerald-400/30 text-emerald-300" : "bg-white/[0.06] text-transparent"
                      }`}
                    >
                      {i < 2 ? "\u2713" : ""}
                    </span>
                    <span className="text-[11px] text-gray-400">{board}</span>
                  </div>
                ))}
              </div>
              <div className="pt-1 text-center">
                <p className="text-sm font-bold text-white">Scheduling &amp; Board Matching</p>
                <p className="text-xs text-gray-500 mt-0.5">Auto-schedule pins and match to Pinterest boards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
