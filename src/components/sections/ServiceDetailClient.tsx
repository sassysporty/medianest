"use client";

import { motion } from "framer-motion";
import type { ServiceDetail } from "@/types";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({
  service,
}: ServiceDetailClientProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0f0d2e] via-[#16123f] to-[#1e1a5a] text-white py-24 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-80 h-80 bg-[#ff5e6c] rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#feb300] rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-[#ff5e6c] rounded-full" />
            <span className="text-sm text-gray-300">{service.tagline}</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8"
          >
            {service.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {service.subServices.slice(0, 4).map((sub) => (
              <span
                key={sub.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gray-300"
              >
                {sub.icon} {sub.title}
              </span>
            ))}
            {service.subServices.length > 4 && (
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gray-300">
                +{service.subServices.length - 4} more
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
