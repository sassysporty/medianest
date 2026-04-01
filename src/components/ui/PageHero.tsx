"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  tag?: string;
}

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageHero({ title, subtitle, tag }: PageHeroProps) {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#e8505b]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#f0a500]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {tag && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            {tag}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-[55ch] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
