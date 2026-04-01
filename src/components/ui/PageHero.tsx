"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  tag?: string;
}

export default function PageHero({ title, subtitle, tag }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#16123f] via-[#1e1a5a] to-[#16123f] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#ff5e6c] font-semibold uppercase tracking-wide text-sm"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mt-2 mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
