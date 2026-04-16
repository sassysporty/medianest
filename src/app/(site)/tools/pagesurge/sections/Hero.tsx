"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const trustItems = [
  "Works on Mac and Windows",
  "Cancel anytime — no contracts",
  "No monthly AI bills",
];

export default function PageSurgeHero() {
  return (
    <section className="relative bg-[#08081a] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 ring-1 ring-purple-400/30 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-purple-200 font-semibold text-xs uppercase tracking-[0.2em]">
            PageSurge — Facebook Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Grow Every Facebook Page{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            on Autopilot
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-[62ch] mx-auto leading-relaxed mb-5"
        >
          PageSurge generates AI captions, schedules posts, and manages unlimited
          Facebook pages — all from one desktop app. No agency needed. No monthly
          AI bills.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.28 }}
          className="text-sm md:text-base text-gray-500 max-w-[60ch] mx-auto mb-10"
        >
          Used by digital agencies and solo marketers managing up to 100 Facebook
          pages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <Link
            href="#pricing"
            className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#08081a] px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]"
          >
            Get PageSurge Now
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
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400"
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.52 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] ring-1 ring-white/[0.08]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-gray-400">
            Join the early adopters — launching April 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
