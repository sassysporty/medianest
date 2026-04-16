"use client";

import { motion } from "framer-motion";
import { Lock, Infinity as InfinityIcon, CurrencyDollar } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Point {
  icon: Icon;
  title: string;
  body: string;
}

const points: Point[] = [
  {
    icon: Lock,
    title: "Completely private",
    body: "Your content never leaves your computer. No cloud logging, no training data.",
  },
  {
    icon: InfinityIcon,
    title: "No usage limits",
    body: "No cap, no credits, no throttling. Generate 10 captions or 10,000 — same price.",
  },
  {
    icon: CurrencyDollar,
    title: "Zero ongoing cost",
    body: "Ollama is free forever. No token bills, no surprise overages, no monthly AI fees.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeFreeAI() {
  return (
    <section className="relative bg-[#1a0b2e] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[50%] -translate-x-1/2 w-[900px] h-[600px] bg-purple-600/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[160px]" />
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-200 font-semibold text-xs uppercase tracking-[0.2em]">
              Powered by Ollama
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Free AI. Forever.{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              No API Bills.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg md:text-xl text-purple-100/80 leading-relaxed"
          >
            PageSurge ships with{" "}
            <span className="text-white font-semibold">Ollama</span> — a free,
            open-source AI that runs locally on your computer. We set it up
            automatically on first launch. Generate unlimited captions at zero
            cost, with zero data sent to third parties.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.15 }}
            className="mt-4 text-sm text-purple-200/70 bg-white/[0.04] ring-1 ring-white/[0.08] rounded-xl px-5 py-3 inline-block leading-relaxed"
          >
            For AI images, we recommend{" "}
            <span className="text-white font-semibold">Pruna.ai</span> —
            approximately 5,000 image generations for just $5. Multiple other
            image API providers are also supported.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {points.map((p, i) => {
            const IconCmp = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: i * 0.08 }}
                className="group relative bg-white/[0.04] ring-1 ring-white/[0.1] hover:ring-emerald-400/40 rounded-2xl p-7 backdrop-blur-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <IconCmp weight="duotone" className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-purple-100/70 leading-relaxed text-sm">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-center text-sm text-purple-200/70"
        >
          Prefer Claude, ChatGPT, or Gemini?{" "}
          <span className="text-white">
            Those are supported too. Just paste your API key.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
