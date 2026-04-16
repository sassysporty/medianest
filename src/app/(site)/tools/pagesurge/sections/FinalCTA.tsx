"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Laptop, Robot, ArrowRight } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Point {
  icon: Icon;
  text: string;
}

const points: Point[] = [
  { icon: Lock, text: "Flexible monthly plans — cancel anytime" },
  { icon: Laptop, text: "Mac and Windows — download instantly" },
  { icon: Robot, text: "Free AI included — no ongoing AI costs" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeFinalCTA() {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[900px] h-[600px] bg-purple-600/25 rounded-full blur-[180px]" />
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
          Start Growing Your Facebook Pages{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Today
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 max-w-[62ch] mx-auto leading-relaxed mb-10"
        >
          Join marketers and agencies using PageSurge to manage Facebook at
          scale — without the burnout, without the subscriptions, without the
          chaos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
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
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white px-7 py-3.5 rounded-full font-semibold text-base ring-1 ring-white/[0.12] transition-all duration-300 active:scale-[0.98]"
          >
            View Pricing
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
