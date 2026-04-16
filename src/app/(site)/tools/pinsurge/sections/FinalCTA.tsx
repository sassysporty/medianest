"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CurrencyDollar, Robot, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Point {
  icon: Icon;
  text: string;
}

const points: Point[] = [
  { icon: CurrencyDollar, text: "One-time $39 — no subscription" },
  { icon: Robot, text: "Free AI with Ollama — add image AI from $0.01/image" },
  { icon: ShieldCheck, text: "3-day money back guarantee" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeFinalCTA() {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[900px] h-[600px] bg-rose-600/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Stop Making Pins{" "}
          <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500 bg-clip-text text-transparent">
            One at a Time
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 max-w-[62ch] mx-auto leading-relaxed mb-10"
        >
          Paste your URLs. Let AI handle the images, overlays, titles,
          descriptions, board matching, and scheduling. Export to Pinterest.
          Done.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
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
            href="/tools"
            className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white px-7 py-3.5 rounded-full font-semibold text-base ring-1 ring-white/[0.12] transition-all duration-300 active:scale-[0.98]"
          >
            Compare All Tools
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-300"
        >
          {points.map((p) => {
            const IconCmp = p.icon;
            return (
              <li key={p.text} className="inline-flex items-center gap-2">
                <IconCmp
                  weight="duotone"
                  className="w-4 h-4 text-emerald-400 shrink-0"
                />
                <span>{p.text}</span>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
