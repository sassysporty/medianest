"use client";

import { motion } from "framer-motion";
import {
  LinkSimple,
  MagnifyingGlass,
  ImageSquare,
  PaintBrush,
  Sparkle,
  DownloadSimple,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Step {
  icon: Icon;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    icon: LinkSimple,
    title: "Paste Your URLs",
    body: "Enter one or more URLs into the sidebar — blog posts, product pages, recipes, anything. Each URL gets a unique pin ID and appears as a card. No limit on how many you can paste.",
  },
  {
    icon: MagnifyingGlass,
    title: "Auto-Scrape Content",
    body: "PinSurge scrapes each URL in parallel (up to 10 at once) using BeautifulSoup. It extracts the title, description, images, and main text content. If one URL fails, the rest continue — failures are isolated.",
  },
  {
    icon: ImageSquare,
    title: "Generate AI Images",
    body: "The scraped content goes to your chosen image AI provider. PinSurge generates an image-only prompt and automatically appends a NO TEXT instruction so no words get baked into the image. Choose from Pruna AI ($0.01/img), Ideogram, Fal.ai, or Stability AI.",
  },
  {
    icon: PaintBrush,
    title: "Add Text Overlays",
    body: "A professional text banner is composited onto each image automatically. Title in serif font, auto-wrapped to 3 lines. Subtitle auto-extracted from keywords. You control font size, strip height, banner color (auto-detect, 7 presets, or custom hex), and can give AI free-text instructions for the overlay.",
  },
  {
    icon: Sparkle,
    title: "AI Writes SEO Titles & Descriptions",
    body: "AI generates Pinterest-optimized titles (keyword-rich, under 100 characters) and descriptions (100-160 words with hashtags and CTAs). The AI acts as a Pinterest SEO expert — analyzing your niche, detecting product types, and picking emotional triggers.",
  },
  {
    icon: DownloadSimple,
    title: "Schedule, Match Boards & Export CSV",
    body: "Set pins per day and a start date. Auto-match pins to your Pinterest boards by keyword similarity (supports up to 500 boards extracted from your profile). Review everything in the built-in CSV editor, then download a Pinterest-ready CSV for bulk upload.",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeHowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-rose-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1]"
          >
            From URL to Pinterest in 6 Steps
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const IconCmp = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: (i % 3) * 0.08 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-rose-700 text-white flex items-center justify-center font-bold text-lg shadow-[0_12px_28px_-10px_rgba(225,29,72,0.6)] ring-4 ring-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white ring-1 ring-rose-200 flex items-center justify-center">
                      <IconCmp
                        weight="duotone"
                        className="w-3.5 h-3.5 text-rose-700"
                      />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#08081a] mb-1.5 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
