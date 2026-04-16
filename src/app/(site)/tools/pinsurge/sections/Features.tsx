"use client";

import { motion } from "framer-motion";
import {
  LinkSimple,
  Palette,
  TextAa,
  Layout,
  Robot,
  CalendarBlank,
  PushPin,
  MagnifyingGlass,
  Table,
  Check,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Feature {
  icon: Icon;
  emoji: string;
  title: string;
  description: string;
  bullets: string[];
  note?: string;
  hasLayoutGrid?: boolean;
}

const features: Feature[] = [
  {
    icon: LinkSimple,
    emoji: "\uD83D\uDD17",
    title: "URL Scraping Engine",
    description:
      "Paste URLs and PinSurge scrapes content in parallel. Blog posts, product pages, articles, recipes — anything with a URL works.",
    bullets: [
      "Process up to 10 URLs simultaneously",
      "Extracts title, description, images, and full text",
      "Isolated failures — one bad URL doesn't break the batch",
      "Works with any public webpage",
    ],
  },
  {
    icon: Palette,
    emoji: "\uD83C\uDFA8",
    title: "AI Image Generation",
    description:
      "Every pin gets a unique AI-generated image tailored to the scraped content. No text in the image — that's handled separately by the overlay system.",
    bullets: [
      "4 providers: Pruna AI ($0.01/img), Ideogram, Fal.ai (FLUX), Stability AI",
      "Auto NO-TEXT instruction on every prompt",
      "SVG placeholder fallback when no API key is set",
    ],
    note: "Recommended: Pruna.ai — ~5,000 images for just $5. The cheapest and best quality AI image option available.",
  },
  {
    icon: TextAa,
    emoji: "\u270F\uFE0F",
    title: "Text Overlay Studio",
    description:
      "Fine-tune how text appears on every pin. Control font size, strip height, banner color, and even give AI custom instructions for the overlay text.",
    bullets: [
      "Font size slider and strip height slider for precise control",
      "8 banner colors: Auto-detect, Dark, White, Red, Blue, Green, Black, Custom Hex",
      "Separate BG color and text color for custom themes",
      "AI Overlay Text field — give instructions like 'use 2-3 words only'",
    ],
  },
  {
    icon: Layout,
    emoji: "\uD83D\uDCD0",
    title: "9 Pin Layouts + Custom",
    description:
      "Choose from 9 professional layouts or let AI pick. Select multiple and they rotate across pins for visual variety.",
    bullets: [
      "4 aspect ratios: 9:16 (1080x1920), 2:3, 4:5, 1:1",
      "Multi-select layouts for automatic rotation",
      "Every layout exports at Pinterest-optimized dimensions",
      "Toggle layouts on/off with a single click",
    ],
    hasLayoutGrid: true,
  },
  {
    icon: Robot,
    emoji: "\uD83E\uDD16",
    title: "5 AI Text Providers",
    description:
      "PinSurge uses AI for image prompts, overlay text, titles, and descriptions. You choose your provider — or let Auto mode try them in priority order.",
    bullets: [
      "Ollama — free, runs locally, no internet needed, no API cost",
      "Groq — fast cloud inference, free tier available",
      "Gemini, OpenAI, Claude — premium options with your own API key",
      "Auto mode: tries Ollama \u2192 Groq \u2192 Gemini \u2192 OpenAI \u2192 Claude",
    ],
  },
  {
    icon: CalendarBlank,
    emoji: "\uD83D\uDCC5",
    title: "Smart Scheduling",
    description:
      "Set your pins-per-day rate and a start date. PinSurge automatically spaces pins across days in the CSV so your Pinterest stays active without flooding.",
    bullets: [
      "Pins per day selector — control your posting frequency",
      "Start date picker — plan content weeks in advance",
      "Automatic date spacing across all generated pins",
      "Dates included in the exported CSV for bulk scheduling",
    ],
  },
  {
    icon: PushPin,
    emoji: "\uD83D\uDCCC",
    title: "Board Extraction & Auto-Matching",
    description:
      "Paste your Pinterest profile URL and PinSurge pulls all your boards. Then it auto-matches each pin to the most relevant board using keyword similarity.",
    bullets: [
      "Extract up to 500 boards from your Pinterest profile",
      "Uses Pinterest's internal BoardsResource API",
      "Keyword similarity algorithm matches pins to boards",
      "Override any match manually in the CSV editor",
    ],
  },
  {
    icon: MagnifyingGlass,
    emoji: "\uD83D\uDCCA",
    title: "Pinterest SEO Expert System",
    description:
      "The AI doesn't just write generic text — it acts as a Pinterest SEO specialist. It detects your niche, identifies keywords, targets audiences, and picks emotional triggers.",
    bullets: [
      "Niche detection: sewing, DIY, recipes, tech, education, and more",
      "Keyword-rich titles under 100 characters with CTR formulas",
      "Descriptions: 100-160 words with hashtags and CTAs",
      "Niche-specific color palettes for maximum engagement",
    ],
  },
  {
    icon: Table,
    emoji: "\uD83D\uDCCB",
    title: "CSV Editor & Export",
    description:
      "Before exporting, review and edit everything in a built-in table. Tweak titles, descriptions, boards, and dates. Then one-click export a Pinterest-ready CSV.",
    bullets: [
      "Full editable table — change any field before export",
      "Import and assign board names to each pin",
      "Publish dates auto-filled from your scheduling settings",
      "CSV format matches Pinterest's bulk uploader exactly",
    ],
  },
];

const layoutNames = [
  "Text Bottom",
  "Text Top",
  "Text Center",
  "Two Images",
  "Collage",
  "Big Text",
  "Split",
  "Trio",
  "Card",
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeFeatures() {
  return (
    <section id="features" className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-rose-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-rose-300 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Inside the app
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            Everything Inside PinSurge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Every feature you see below is included in the $39 one-time
            purchase. No add-ons. No premium tiers.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => {
            const IconCmp = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: (i % 3) * 0.06 }}
                className="group relative bg-white/[0.04] hover:bg-white/[0.06] rounded-2xl p-7 ring-1 ring-white/[0.08] hover:ring-rose-400/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/15 ring-1 ring-rose-400/30 flex items-center justify-center">
                      <IconCmp
                        weight="duotone"
                        className="w-6 h-6 text-rose-300"
                      />
                    </div>
                    <span
                      aria-hidden
                      className="absolute -top-1 -right-1 text-base leading-none"
                    >
                      {f.emoji}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {f.description}
                </p>

                {f.hasLayoutGrid && (
                  <div className="grid grid-cols-3 gap-1.5 mb-4">
                    {layoutNames.map((name) => (
                      <div
                        key={name}
                        className="bg-white/[0.06] ring-1 ring-white/[0.1] rounded-lg px-2 py-1.5 text-center"
                      >
                        <span className="text-[10px] text-gray-400 font-medium leading-none">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check
                        weight="bold"
                        className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {f.note && (
                  <p className="mt-4 text-xs text-rose-200 bg-rose-500/10 rounded-lg px-3 py-2 leading-relaxed ring-1 ring-rose-400/20">
                    {f.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
