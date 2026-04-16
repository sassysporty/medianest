"use client";

import { motion } from "framer-motion";
import { MagicWand, CalendarBlank, Key } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Feature {
  icon: Icon;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    icon: MagicWand,
    title: "Fully Automated Pipeline",
    body: "From raw URL to finished pin with image, overlay, SEO copy, board assignment, and schedule — all generated in one click. No manual steps between.",
  },
  {
    icon: CalendarBlank,
    title: "Built-In Scheduling",
    body: "Set how many pins per day and pick your start date. PinSurge spaces your pins automatically across days so your Pinterest account stays consistently active.",
  },
  {
    icon: Key,
    title: "Your Keys, Your Control",
    body: "Bring your own API keys for text and image AI. Choose from multiple providers. Use free local AI with Ollama for text — pay nothing. Use Pruna.ai for images at just $0.01 per image.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeWhatIsIt() {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[140px]" />
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
            What is PinSurge
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            One Interface. URL In, Pins Out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            PinSurge is a web-based tool that runs locally on your computer.
            Paste any URL — a blog post, product page, recipe, tutorial, or
            article — and PinSurge scrapes the content, generates a custom AI
            image, composites a professional text overlay, writes a Pinterest
            SEO-optimized title and description, assigns it to the right board,
            schedules it, and exports a CSV ready for Pinterest&apos;s bulk
            uploader. The entire pipeline runs in parallel, processing up to 10
            URLs at once.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...spring, delay: i * 0.08 }}
                className="group relative bg-white/[0.04] hover:bg-white/[0.06] ring-1 ring-white/[0.08] hover:ring-rose-400/40 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/15 ring-1 ring-rose-400/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon weight="duotone" className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
