"use client";

import { motion } from "framer-motion";
import { Clock, ChartLineDown, CurrencyDollar } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface ProblemItem {
  icon: Icon;
  title: string;
  body: string;
}

const problems: ProblemItem[] = [
  {
    icon: Clock,
    title: "You spend hours writing captions",
    body: "Every page needs fresh content daily. Writing manually eats your entire week.",
  },
  {
    icon: ChartLineDown,
    title: "Inconsistent posting kills reach",
    body: "Miss a few days and Facebook buries your page in the feed.",
  },
  {
    icon: CurrencyDollar,
    title: "AI tools cost a fortune",
    body: "ChatGPT, Canva, Buffer, Hootsuite subscriptions add up to hundreds monthly.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeProblem() {
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
          Managing Facebook Pages Is Exhausting
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
                className="bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-200/70 hover:ring-purple-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                  <Icon weight="duotone" className="w-6 h-6 text-purple-700" />
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
          There is a better way.{" "}
          <span className="text-purple-700">
            One tool. One price. Everything you need.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
