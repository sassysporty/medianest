"use client";

import { motion } from "framer-motion";
import { Target, ShoppingBag, UsersThree, Check } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Profile {
  icon: Icon;
  title: string;
  tagline: string;
  bullets: string[];
}

const profiles: Profile[] = [
  {
    icon: Target,
    title: "Affiliate Bloggers",
    tagline:
      "You publish blog posts and drive traffic from Pinterest. PinSurge turns every post into multiple pin variations automatically — different layouts, different overlays, all SEO-optimized.",
    bullets: [
      "Turn every blog post into pins automatically",
      "Create a full week of pins in 30 minutes",
      "Multiple layout variations per URL",
      "SEO-optimized titles drive more clicks",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Sellers",
    tagline:
      "You have hundreds of products that need Pinterest visibility. Paste your product URLs, let AI generate images and descriptions, auto-match to boards, and bulk upload.",
    bullets: [
      "Paste product URLs for instant pin creation",
      "AI generates product-focused images",
      "Auto-match to relevant product boards",
      "Scale Pinterest without hiring a VA",
    ],
  },
  {
    icon: UsersThree,
    title: "Pinterest Managers & VAs",
    tagline:
      "You manage Pinterest for multiple clients. PinSurge's batch processing, board extraction, smart matching, and CSV export mean you handle more clients in less time.",
    bullets: [
      "Batch process pins for multiple clients",
      "Board extraction from any profile",
      "Scheduling keeps every account active",
      "CSV export for each client separately",
    ],
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeWhoItsFor() {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[140px]" />
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
            Who it&apos;s for
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
          >
            Built for Pinterest Marketers Who Work at Scale
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {profiles.map((p, i) => {
            const IconCmp = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: i * 0.08 }}
                className="group relative bg-white/[0.04] hover:bg-white/[0.06] ring-1 ring-white/[0.08] hover:ring-rose-400/40 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/15 ring-1 ring-rose-400/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <IconCmp weight="duotone" className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-rose-200/70 text-sm mb-5 leading-relaxed">
                  {p.tagline}
                </p>
                <ul className="space-y-2.5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check
                        weight="bold"
                        className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
