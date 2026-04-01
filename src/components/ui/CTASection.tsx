"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
}

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref = "/free-audit",
}: CTASectionProps) {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#e8505b]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-[#f0a500]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={spring}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-lg text-gray-400 mb-10 max-w-[45ch] mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
        >
          <Link
            href={buttonHref}
            className="group inline-flex items-center gap-2 bg-[#e8505b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d4444e] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            {buttonText}
            <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
