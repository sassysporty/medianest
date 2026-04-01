"use client";

import { motion } from "framer-motion";
import type { ServiceDetail } from "@/types";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function ServiceDetailClient({
  service,
}: ServiceDetailClientProps) {
  return (
    <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#e8505b]/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#f0a500]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/[0.06] ring-1 ring-white/[0.08] rounded-full px-4 py-2 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#e8505b] rounded-full" />
            <span className="text-sm text-gray-400">{service.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-[55ch] leading-relaxed mb-8"
          >
            {service.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {service.subServices.slice(0, 4).map((sub) => (
              <span
                key={sub.title}
                className="bg-white/[0.06] ring-1 ring-white/[0.08] rounded-full px-4 py-1.5 text-sm text-gray-400"
              >
                {sub.title}
              </span>
            ))}
            {service.subServices.length > 4 && (
              <span className="bg-white/[0.06] ring-1 ring-white/[0.08] rounded-full px-4 py-1.5 text-sm text-gray-400">
                +{service.subServices.length - 4} more
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
