"use client";

import { motion } from "framer-motion";
import { ChatText, ImageSquare, Check, ShieldCheck } from "@phosphor-icons/react";

interface Provider {
  name: string;
  detail: string;
  free?: boolean;
}

const textProviders: Provider[] = [
  {
    name: "Ollama",
    detail:
      "FREE. Runs locally on your computer. No API key needed. No internet required. No usage limits. This is the default and recommended starting point.",
    free: true,
  },
  {
    name: "Groq",
    detail:
      "FREE tier available. Fast cloud AI. Sign up at groq.com and paste your API key.",
    free: true,
  },
  {
    name: "Google Gemini",
    detail:
      "Free tier available. Paste your API key from Google AI Studio.",
    free: true,
  },
  {
    name: "OpenAI (ChatGPT)",
    detail: "Paid. Use your existing OpenAI API key.",
  },
  {
    name: "Claude (Anthropic)",
    detail: "Paid. Use your existing Anthropic API key.",
  },
];

const imageProviders: Provider[] = [
  {
    name: "Pruna AI",
    detail:
      "$0.01 per image. ~5,000 images for $5. RECOMMENDED. Best price-to-quality ratio. Sign up at pruna.ai.",
  },
  {
    name: "Ideogram",
    detail:
      "Pay per use. Great for stylistic variety. Use your Ideogram API key.",
  },
  {
    name: "Fal.ai (FLUX)",
    detail:
      "Pay per use. High quality FLUX model. Use your Fal.ai API key.",
  },
  {
    name: "Stability AI (SD 3.5 Large)",
    detail:
      "Pay per use. Stable Diffusion 3.5. Use your Stability API key.",
  },
  {
    name: "No API key?",
    detail:
      "PinSurge generates a styled SVG placeholder so you can still use the full pipeline without image AI.",
    free: true,
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function PinSurgeAPIKeys() {
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
            API Configuration
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5"
          >
            Bring Your Own API Keys. Start Free.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            PinSurge is the tool — you choose which AI services power it. Start
            with completely free options and upgrade only if you want to.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Text AI Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={spring}
            className="bg-white rounded-2xl p-8 ring-1 ring-gray-200/70"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                <ChatText weight="duotone" className="w-6 h-6 text-rose-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#08081a] tracking-tight">
                  Text AI
                </h3>
                <p className="text-sm text-gray-500">
                  For prompts, titles, descriptions
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              5 providers supported. Use one or let Auto mode try all.
            </p>
            <ul className="space-y-4 mb-5">
              {textProviders.map((p) => (
                <li key={p.name} className="flex items-start gap-2.5">
                  <Check
                    weight="bold"
                    className={`w-4 h-4 mt-0.5 shrink-0 ${p.free ? "text-emerald-600" : "text-gray-400"}`}
                  />
                  <div>
                    <span className="font-semibold text-sm text-[#08081a]">
                      {p.name}
                    </span>
                    {p.free && (
                      <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700">
                        Free
                      </span>
                    )}
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 ring-1 ring-gray-100">
              In Auto mode, PinSurge tries providers in order: Ollama &rarr;
              Groq &rarr; Gemini &rarr; OpenAI &rarr; Claude. It uses the first
              one that responds successfully.
            </p>
          </motion.div>

          {/* Image AI Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...spring, delay: 0.08 }}
            className="bg-white rounded-2xl p-8 ring-1 ring-gray-200/70"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                <ImageSquare
                  weight="duotone"
                  className="w-6 h-6 text-rose-700"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#08081a] tracking-tight">
                  Image AI
                </h3>
                <p className="text-sm text-gray-500">For pin images</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              4 providers supported. Choose based on your budget and quality
              needs.
            </p>
            <ul className="space-y-4 mb-5">
              {imageProviders.map((p) => (
                <li key={p.name} className="flex items-start gap-2.5">
                  <Check
                    weight="bold"
                    className={`w-4 h-4 mt-0.5 shrink-0 ${p.free ? "text-emerald-600" : "text-gray-400"}`}
                  />
                  <div>
                    <span className="font-semibold text-sm text-[#08081a]">
                      {p.name}
                    </span>
                    {p.free && (
                      <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700">
                        Free
                      </span>
                    )}
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 ring-1 ring-gray-100">
              All API keys are stored locally in a .env file on your computer.
              Keys are never sent to MediaNest servers — only to the AI provider
              you choose.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.2 }}
          className="flex items-center justify-center gap-3 text-center"
        >
          <ShieldCheck
            weight="duotone"
            className="w-5 h-5 text-emerald-600 shrink-0"
          />
          <p className="text-[#08081a] font-semibold text-sm md:text-base">
            You can start using PinSurge with $0 in AI costs. Install Ollama for
            free text AI, and use SVG placeholders or Pruna.ai at $0.01/image.
            Most users spend less than $5/month on AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
