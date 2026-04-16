"use client";

import { motion } from "framer-motion";
import { Clock, Wrench, CurrencyDollar } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface ProblemItem {
  icon: Icon;
  title: string;
  body: string;
}

const problems: ProblemItem[] = [
  {
    icon: Clock,
    title: "Every pin takes 10+ minutes",
    body: "Pick an image. Open Canva. Design the layout. Write a title overlay. Switch to ChatGPT for the description. Copy to a spreadsheet. Assign a board. Set a date. Now do that 50 more times.",
  },
  {
    icon: Wrench,
    title: "Too many tools, none talk to each other",
    body: "Canva for design. ChatGPT for copy. A spreadsheet for tracking. Pinterest for uploading. You spend more time switching between apps than actually creating content.",
  },
  {
    icon: CurrencyDollar,
    title: "AI subscriptions add up fast",
    body: "ChatGPT Plus, Canva Pro, Midjourney, a scheduling tool — suddenly you're paying $100+ per month just to make Pinterest pins.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeProblem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          Creating Pinterest Pins Manually Is a Full-Time Job
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...spring, delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-200/70 hover:ring-rose-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-5">
                  <Icon weight="duotone" className="w-6 h-6 text-rose-700" />
                </div>
                <h3 className="text-xl font-bold text-[#08081a] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="mt-16 md:mt-20 text-center text-lg md:text-xl text-[#08081a] font-semibold max-w-2xl mx-auto"
        >
          PinSurge replaces the entire workflow.{" "}
          <span className="text-rose-600">
            Paste URLs. Get finished pins. Upload to Pinterest.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
