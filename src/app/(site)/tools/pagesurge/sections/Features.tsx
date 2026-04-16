"use client";

import { motion } from "framer-motion";
import {
  TextAa,
  Image as ImageIcon,
  Megaphone,
  VideoCamera,
  ChartBar,
  ChatsCircle,
  Palette,
  Binoculars,
  UsersThree,
  Check,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Feature {
  icon: Icon;
  emoji: string;
  title: string;
  description: string;
  bullets: string[];
  badge?: string;
  note?: string;
}

const features: Feature[] = [
  {
    icon: TextAa,
    emoji: "✍️",
    title: "Caption Studio",
    description: "Generate on-brand captions in seconds, in any voice.",
    bullets: [
      "5 caption formats (story, list, hook, CTA, question)",
      "Built-in hook checker scores every opener",
      "Bulk-schedule 30 posts in one click",
    ],
  },
  {
    icon: ImageIcon,
    emoji: "🎨",
    title: "Image Studio",
    description: "AI visuals that match your brand — no Canva required.",
    bullets: [
      "8 ready-made layouts for feed and story",
      "Exports at 1080×1080, ready to post",
      "SVG fallback when AI images aren't needed",
    ],
    note: "💡 Recommended: Pruna.ai — generate around 5,000 images for just $5. The cheapest and best quality AI image option available.",
  },
  {
    icon: Megaphone,
    emoji: "📣",
    title: "Promo Studio",
    description:
      "Paste a product link — PageSurge writes the whole promo. Perfect for affiliate marketers and dropshippers who need to promote products daily across multiple pages.",
    bullets: [
      "Auto-generates captions and hashtags",
      "Places your link in the first comment",
      "Built for affiliates, dropshippers, and e-commerce",
    ],
  },
  {
    icon: VideoCamera,
    emoji: "🎬",
    title: "Video Studio",
    description: "Turn any video into weeks of Facebook content.",
    bullets: [
      "Extract from YouTube, TikTok, Instagram",
      "Split long videos into scroll-stopping clips",
      "Smart scheduling across multiple pages",
    ],
  },
  {
    icon: ChartBar,
    emoji: "📊",
    title: "Analytics",
    description: "Real Facebook data — not guesses.",
    bullets: [
      "Live metrics via Facebook Graph API",
      "7, 30, and 90-day performance views",
      "Best posting times per page, automatically",
    ],
  },
  {
    icon: ChatsCircle,
    emoji: "💬",
    title: "Inbox Studio",
    description: "Every comment from every page, in one place.",
    bullets: [
      "Unified comments inbox across all pages",
      "AI reply suggestions in one click",
      "Priority inbox flags hot leads",
    ],
    badge: "Pro / Agency",
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "Brand Kit",
    description: "Lock every page to its own identity — automatically.",
    bullets: [
      "Per-page brand colors, logo, and voice",
      "Applied automatically to every post",
      "Switch between pages without reconfiguring",
    ],
  },
  {
    icon: Binoculars,
    emoji: "🔍",
    title: "Competitor Studio",
    description:
      "Track what your competitors are posting and how their audience responds. Monitor competitor pages, analyze their posting patterns, and find content gaps you can exploit.",
    bullets: [
      "Monitor competitor Facebook pages",
      "Analyze posting frequency and engagement",
      "Spot content gaps and trending topics",
      "Available on Agency plan only",
    ],
    badge: "Agency Only",
  },
  {
    icon: UsersThree,
    emoji: "👥",
    title: "Team Management",
    description:
      "Assign team members to specific pages with role-based access control. Perfect for agencies with multiple account managers.",
    bullets: [
      "Invite team members with email",
      "Assign pages per team member",
      "Role-based permissions (viewer, editor, admin)",
      "Available on Agency plan only",
    ],
    badge: "Agency Only",
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PageSurgeFeatures() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-purple-700 font-semibold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Inside the app
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5"
          >
            Everything Inside PageSurge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Nine powerful studios. One dashboard. Zero extra tools needed.
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
                className="group relative bg-white rounded-2xl p-7 ring-1 ring-gray-200/70 hover:ring-purple-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(126,34,206,0.25)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <IconCmp
                        weight="duotone"
                        className="w-6 h-6 text-purple-700"
                      />
                    </div>
                    <span
                      aria-hidden
                      className="absolute -top-1 -right-1 text-base leading-none"
                    >
                      {f.emoji}
                    </span>
                  </div>
                  {f.badge && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold ring-1 ring-emerald-200">
                      {f.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#08081a] mb-1.5 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {f.description}
                </p>

                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check
                        weight="bold"
                        className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {f.note && (
                  <p className="mt-4 text-xs text-purple-700 bg-purple-50 rounded-lg px-3 py-2 leading-relaxed ring-1 ring-purple-100">
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
