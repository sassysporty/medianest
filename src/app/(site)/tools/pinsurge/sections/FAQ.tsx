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
    q: "Is this a monthly subscription?",
    a: "No. PinSurge is a one-time purchase of $39. You pay once, you use it forever, and all future updates are included free.",
  },
  {
    q: "Do I need to pay for AI separately?",
    a: "It depends on what you choose. For text generation (prompts, titles, descriptions), Ollama is completely free — it runs locally on your computer with no API key and no internet required. For image generation, Pruna.ai costs about $0.01 per image — roughly 5,000 images for $5. You can also use free tiers from Groq and Google Gemini for text. So realistically, most users spend $0-5 per month on AI costs.",
  },
  {
    q: "What AI providers are supported?",
    a: "Text AI: Ollama (free/local), Groq (free tier), Google Gemini (free tier), OpenAI, and Claude. Image AI: Pruna AI ($0.01/img), Ideogram, Fal.ai (FLUX), and Stability AI. You bring your own API keys and configure them in the Settings panel.",
  },
  {
    q: "Is it a desktop app or web app?",
    a: "PinSurge is a web-based app built with Flask (Python). It runs locally on your computer through your browser — no cloud hosting needed. Everything stays on your machine.",
  },
  {
    q: "How many URLs can I process at once?",
    a: "No hard limit. PinSurge processes up to 10 URLs in parallel. Paste as many as you want and they process in batches. If one URL fails, the rest continue normally.",
  },
  {
    q: "Can I customize pin designs?",
    a: "Yes. You choose from 9 layouts (plus AI-chosen custom), 4 aspect ratios, adjustable font size and strip height, 8 banner color presets or custom hex colors with separate BG and text color, and an AI Overlay Text field where you can give instructions like 'use 2-3 words only' or 'focus on the keyword'.",
  },
  {
    q: "How does board matching work?",
    a: "Click Extract Boards and paste your Pinterest profile URL. PinSurge pulls up to 500 of your boards automatically. Then click Auto-Match Boards to URLs and it uses keyword similarity to assign each pin to the most relevant board. You can override any match in the CSV editor.",
  },
  {
    q: "What does the scheduling feature do?",
    a: "You set a pins-per-day rate (like 10 pins/day) and a start date. PinSurge automatically assigns publish dates to each pin, spacing them evenly across days. These dates are included in the exported CSV so Pinterest's bulk uploader handles the timing.",
  },
  {
    q: "What if I don't have any image API key?",
    a: "PinSurge generates a styled SVG placeholder pin instead. You still get the full pipeline — scraping, text overlay, SEO titles and descriptions, board matching, and CSV export — just with a placeholder image instead of an AI-generated one. You can add an image API key anytime later.",
  },
  {
    q: "What do I do with the CSV file?",
    a: "Upload it to Pinterest using their free bulk upload feature in Pinterest Business. The CSV includes image URLs, titles, descriptions, board names, and publish dates — everything Pinterest needs. Just upload and you're done.",
  },
  {
    q: "Are my API keys safe?",
    a: "Yes. All API keys are stored locally in a .env file on your computer. They are never sent to MediaNest servers. Keys are only used to communicate directly between your computer and the AI provider you chose.",
  },
  {
    q: "How do I get help?",
    a: "Email medianestonline@gmail.com. We respond to all support questions within 24 hours. A setup guide is included with your purchase.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-rose-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
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
                    ? "ring-rose-300 shadow-[0_12px_30px_-15px_rgba(225,29,72,0.25)]"
                    : "ring-gray-200/70 hover:ring-rose-200"
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
                        ? "bg-rose-700 text-white rotate-45"
                        : "bg-rose-100 text-rose-700"
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
