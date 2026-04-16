"use client";

import { motion } from "framer-motion";
import { Buildings, UserFocus, Storefront, Check } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Profile {
  icon: Icon;
  title: string;
  tagline: string;
  bullets: string[];
}

const profiles: Profile[] = [
  {
    icon: Buildings,
    title: "Digital Marketing Agencies",
    tagline: "Run every client page from one dashboard.",
    bullets: [
      "Manage all client pages in a single workspace",
      "Assign team members to specific pages",
      "Separate Brand Kit per client account",
      "Scale confidently to 100+ pages",
    ],
  },
  {
    icon: UserFocus,
    title: "Solo Marketers and Freelancers",
    tagline: "Handle multiple clients without burning out.",
    bullets: [
      "Juggle multiple client accounts with ease",
      "Bulk-schedule a full week in 90 minutes on Monday",
      "Spend the rest of the week on strategy, not captions",
    ],
  },
  {
    icon: Storefront,
    title: "Business Owners",
    tagline: "Stay active on Facebook without hiring anyone.",
    bullets: [
      "Keep your page active without a social media manager",
      "Set up your Brand Kit once — it applies forever",
      "Batch a month of content in a single afternoon",
    ],
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeWhoItsFor() {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-purple-300 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Who it's for
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
          >
            Built for People Who Manage Multiple Pages
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
                className="group relative bg-white/[0.04] hover:bg-white/[0.06] ring-1 ring-white/[0.08] hover:ring-purple-400/40 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 ring-1 ring-purple-400/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <IconCmp weight="duotone" className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-purple-200/70 text-sm mb-5 leading-relaxed">
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
