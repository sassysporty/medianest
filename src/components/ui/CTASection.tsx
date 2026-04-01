"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref = "/free-audit",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#16123f] to-[#1e1a5a] text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-300 mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={buttonHref}
            className="inline-block bg-[#ff5e6c] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#e84d5b] transition-colors"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
