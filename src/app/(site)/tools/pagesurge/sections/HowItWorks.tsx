"use client";

import { motion } from "framer-motion";
import { DownloadSimple, PlugsConnected, Rocket } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Step {
  icon: Icon;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    icon: DownloadSimple,
    title: "Choose your plan and subscribe",
    body: "Download PageSurge for Mac or Windows. Choose your plan. Email us and we'll send your activation credentials within 24 hours.",
  },
  {
    icon: PlugsConnected,
    title: "Connect your Facebook pages",
    body: "Create a free Facebook Developer app, paste your credentials, and connect every page with one click.",
  },
  {
    icon: Rocket,
    title: "Start generating and scheduling",
    body: "Pick a studio, enter a topic, generate content, and schedule it. That's the whole workflow.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeHowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-purple-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1]"
          >
            Up and Running in Under 15 Minutes
          </motion.h2>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200"
          />

          <ol className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {steps.map((step, i) => {
              const IconCmp = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ ...spring, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xl shadow-[0_12px_28px_-10px_rgba(126,34,206,0.6)] ring-4 ring-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white ring-1 ring-purple-200 flex items-center justify-center">
                      <IconCmp
                        weight="duotone"
                        className="w-4 h-4 text-purple-700"
                      />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#08081a] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.body}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
