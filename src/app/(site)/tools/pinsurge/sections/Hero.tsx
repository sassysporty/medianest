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
          <Link
            href="mailto:medianestonline@gmail.com?subject=PinSurge%20Purchase"
            className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#08081a] px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]"
          >
            Get PinSurge — $39
            <ArrowRight
              weight="bold"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
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
          {[
            "URL Input & Layouts",
            "Text Overlay Controls",
            "Scheduling & Board Matching",
          ].map((label) => (
            <div
              key={label}
              className="aspect-[4/3] rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.08] flex items-center justify-center"
            >
              <span className="text-sm text-gray-500 font-medium px-4 text-center">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
