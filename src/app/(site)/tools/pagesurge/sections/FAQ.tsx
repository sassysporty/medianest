"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Do I pay monthly?",
    a: "Yes. PageSurge uses a simple monthly subscription. Cancel anytime with no penalties.",
  },
  {
    q: "Does it work on Mac and Windows?",
    a: "Yes. PageSurge ships as a native desktop app for both macOS and Windows. One subscription covers both platforms.",
  },
  {
    q: "Do I need to pay for AI?",
    a: "No. PageSurge includes free Ollama AI that runs locally on your computer — unlimited generation at zero cost. If you prefer, you can optionally plug in Claude, ChatGPT, or Gemini by pasting your own API key.",
  },
  {
    q: "How does the Facebook connection work?",
    a: "PageSurge connects through the official Facebook Graph API. You create a free Facebook Developer app (takes about 10 minutes — we walk you through it), paste the credentials, and connect every page with one click.",
  },
  {
    q: "Can I connect multiple Facebook accounts?",
    a: "Yes. Starter supports 1 Facebook account, Pro supports 5, and Agency supports 100. Each account can manage multiple pages within the plan's page limit.",
  },
  {
    q: "What counts as a machine?",
    a: "A machine is one computer installation. Starter includes 1 machine, Pro includes 3, and Agency includes 10. You can deactivate a machine anytime from the dashboard to free up a slot for a new install.",
  },
  {
    q: "Can I extract videos from TikTok and Instagram?",
    a: "Yes. The Video Studio pulls clips from YouTube, TikTok, and Instagram. Some platforms require cookie authentication — PageSurge guides you through it the first time.",
  },
  {
    q: "What if I need more pages than my plan allows?",
    a: "You can upgrade to a higher tier anytime. All your existing data, connections, scheduled posts, and Brand Kits carry over — nothing is reset or lost.",
  },
  {
    q: "Is my Facebook data safe?",
    a: "Yes. PageSurge only uses the official Facebook Graph API with the permissions you approve. Your content and analytics are stored locally on your computer — not on our servers.",
  },
  {
    q: "Do I need help setting up?",
    a: "A step-by-step setup guide is included in the app. If you get stuck, there's a built-in feedback button and our support team responds within 24 hours.",
  },
  {
    q: "How much does AI image generation cost?",
    a: "PageSurge supports multiple image API providers. We recommend Pruna.ai where you can generate approximately 5,000 images for just $5. You can also use other providers by pasting your own API key.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Email us at medianestonline@gmail.com anytime to cancel. There are no contracts, no penalties, and no cancellation fees. Your access continues until the end of your billing period.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-purple-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1]"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.li
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: Math.min(i * 0.03, 0.2) }}
                className={`bg-white rounded-2xl ring-1 transition-all duration-300 ${
                  isOpen
                    ? "ring-purple-300 shadow-[0_12px_30px_-15px_rgba(126,34,206,0.25)]"
                    : "ring-gray-200/70 hover:ring-purple-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-[#08081a] tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-purple-700 text-white rotate-45"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    <Plus weight="bold" className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
