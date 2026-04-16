"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star, ArrowRight } from "@phosphor-icons/react";

interface Plan {
  name: string;
  price: number;
  cta: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: 10,
    cta: "Get Starter",
    tagline: "Perfect for running your own pages.",
    features: [
      "1 Facebook account",
      "Up to 20 pages",
      "1 computer",
      "Caption Studio",
      "Image Studio",
      "Promo Studio",
      "Video Studio",
      "Basic Dashboard",
    ],
  },
  {
    name: "Pro",
    price: 20,
    cta: "Get Pro",
    tagline: "For serious marketers and small teams.",
    featured: true,
    features: [
      "Everything in Starter, plus:",
      "5 Facebook accounts",
      "Up to 50 pages",
      "3 computers",
      "Advanced Analytics",
      "Inbox Studio",
      "Brand Kit",
    ],
  },
  {
    name: "Agency",
    price: 40,
    cta: "Get Agency",
    tagline: "Built to scale across clients and teams.",
    features: [
      "Everything in Pro, plus:",
      "100 Facebook accounts",
      "Unlimited pages",
      "10 computers",
      "Competitor Studio",
      "Team Management",
      "Page-level access control",
    ],
  },
];

const guarantees = [
  "All updates included",
  "Mac and Windows",
  "Free AI with Ollama",
  "3-day money-back guarantee",
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgePricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px]" />
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
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            Simple Pricing. No Surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Simple monthly plans. Cancel anytime. No contracts.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...spring, delay: i * 0.08 }}
              className={`relative rounded-2xl flex flex-col ${
                plan.featured
                  ? "bg-gradient-to-b from-purple-600/20 to-purple-600/5 ring-2 ring-purple-400/60 md:-translate-y-4 md:scale-[1.03] shadow-[0_30px_60px_-20px_rgba(126,34,206,0.7),0_0_80px_-20px_rgba(168,85,247,0.3)] p-9"
                  : "bg-white/[0.04] ring-1 ring-white/[0.08] p-8"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-[#08081a] text-xs font-bold uppercase tracking-wider shadow-[0_8px_24px_-5px_rgba(16,185,129,0.6)]">
                    <Star weight="fill" className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400">{plan.tagline}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm ${
                      idx === 0 && f.startsWith("Everything")
                        ? "text-purple-200 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    <Check
                      weight="bold"
                      className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/393923952415?text=${encodeURIComponent(`Hi MediaNest! I'd like to get the PageSurge ${plan.name} plan ($${plan.price}/mo). Please send me details on how to get started.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#08081a] px-6 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]"
              >
                {plan.cta}
                <ArrowRight
                  weight="bold"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Message us on WhatsApp — we&apos;ll set you up within 24 hours.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-300"
        >
          {guarantees.map((g) => (
            <li key={g} className="inline-flex items-center gap-2">
              <Check
                weight="bold"
                className="w-4 h-4 text-emerald-400 shrink-0"
              />
              <span>{g}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
