"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Adil",
    role: "Affiliate Blogger",
    initials: "AD",
    quote:
      "I paste 20 blog post URLs and get 20 fully designed pins with overlays, titles, descriptions, and board assignments in about 10 minutes. The auto-matching feature alone saves me hours every week.",
  },
  {
    name: "Awais",
    role: "Pinterest VA",
    initials: "AW",
    quote:
      "I was using Canva, ChatGPT, and a spreadsheet. PinSurge replaced all three. The text overlay quality is honestly better than what I was designing manually in Canva.",
  },
  {
    name: "Usama",
    role: "E-commerce Seller",
    initials: "US",
    quote:
      "The SEO descriptions are seriously good. My pin impressions went up noticeably in the first two weeks after switching to PinSurge-generated descriptions and titles.",
  },
  {
    name: "Marcus",
    role: "Digital Marketing Freelancer",
    initials: "MA",
    quote:
      "At $0.01 per image with Pruna, I generated 500 pin images for my client for about $5. The scheduling feature spaces them out perfectly. This tool pays for itself in one session.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeSocialProof() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-rose-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Social proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1]"
          >
            What Pinterest Marketers Are Saying
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...spring, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 ring-1 ring-gray-200/70 hover:ring-rose-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(225,29,72,0.2)] transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    weight="fill"
                    className="w-4 h-4 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#08081a] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                weight="fill"
                className="w-5 h-5 text-amber-400"
              />
            ))}
          </div>
          <p className="text-[#08081a] font-semibold">
            Rated 5.0 by Pinterest marketers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
