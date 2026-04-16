"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Lock, ArrowsClockwise, Robot, ShieldCheck } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const featuresLeft = [
  "Unlimited URL processing",
  "9 pin layouts + AI custom",
  "4 aspect ratios (9:16, 2:3, 4:5, 1:1)",
  "4 AI image providers supported",
  "5 AI text providers supported",
  "Professional text overlay system",
  "Font size and strip height controls",
  "8 banner colors + custom hex",
];

const featuresRight = [
  "Pinterest board extraction (up to 500)",
  "Auto board-pin matching",
  "Built-in scheduling (pins per day + start date)",
  "Editable CSV editor",
  "One-click Pinterest CSV export",
  "Light and dark theme",
  "Free local AI with Ollama",
  "All future updates included",
];

interface Guarantee {
  icon: Icon;
  text: string;
}

const guarantees: Guarantee[] = [
  { icon: Lock, text: "One-time payment — no subscription ever" },
  { icon: ArrowsClockwise, text: "All future updates included free" },
  { icon: Robot, text: "Free AI with Ollama — $0 text generation" },
  { icon: ShieldCheck, text: "3-day money back guarantee" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgePricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-rose-600/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-rose-300 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            One Price. Everything Included.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            No monthly subscription. No feature tiers. No usage limits. Pay once
            — use PinSurge forever.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={spring}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-b from-rose-600/20 to-rose-600/5 ring-2 ring-rose-400/60 rounded-2xl p-9 shadow-[0_30px_60px_-20px_rgba(225,29,72,0.5),0_0_80px_-20px_rgba(244,63,94,0.3)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-[#08081a] text-xs font-bold uppercase tracking-wider shadow-[0_8px_24px_-5px_rgba(16,185,129,0.6)]">
                Complete Package
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                PinSurge
              </h3>
              <div className="flex items-baseline justify-center gap-2 mt-4">
                <span className="text-6xl font-bold text-white tracking-tight">
                  $39
                </span>
                <span className="text-gray-400 text-sm">one-time payment</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {[...featuresLeft, ...featuresRight].map((f, idx) => (
                <li
                  key={f}
                  className={`flex items-start gap-2.5 text-sm text-gray-300 list-none ${idx < featuresLeft.length ? "" : ""}`}
                >
                  <Check
                    weight="bold"
                    className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/393923952415?text=Hi%20MediaNest%21%20I%27d%20like%20to%20purchase%20PinSurge%20for%20%2439.%20Please%20send%20me%20the%20details%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#08081a] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]"
              >
                Get PinSurge — $39
                <ArrowRight
                  weight="bold"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Message us on WhatsApp — you&apos;ll receive access within 24
                hours.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {guarantees.map((g) => {
            const IconCmp = g.icon;
            return (
              <li
                key={g.text}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <IconCmp
                  weight="duotone"
                  className="w-4 h-4 text-emerald-400 shrink-0"
                />
                <span>{g.text}</span>
              </li>
            );
          })}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.3 }}
          className="mt-8 text-center text-xs text-gray-500 max-w-xl mx-auto"
        >
          Note: PinSurge is the tool. AI providers are separate services with
          their own pricing. Start free with Ollama (text) and add image AI when
          ready — Pruna.ai costs about $5 for 5,000 images.
        </motion.p>
      </div>
    </section>
  );
}
