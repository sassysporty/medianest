"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Robot,
  Article,
  Crosshair,
  ChartBar,
  Gear,
  Sparkle,
  ArrowRight,
  Check,
  Envelope,
  Code,
  ShieldCheck,
  CurrencyDollar,
  Lightbulb,
  CaretDown,
  Buildings,
  ShoppingCart,
  Megaphone,
  ForkKnife,
  PinterestLogo,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

interface Service {
  icon: Icon;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: Robot,
    title: "AI Chatbots",
    desc: "Customer support bots, sales bots, FAQ bots, and internal company bots that use AI to understand and respond naturally. Deployed on your website, Facebook Messenger, WhatsApp, or any platform.",
  },
  {
    icon: Article,
    title: "AI Content Generators",
    desc: "Custom tools that generate blog posts, social media captions, product descriptions, email newsletters, or any content type specific to your industry and brand voice.",
  },
  {
    icon: Crosshair,
    title: "Lead Generation Tools",
    desc: "AI-powered systems that find prospects, qualify leads, send personalized outreach, and feed your sales pipeline automatically.",
  },
  {
    icon: ChartBar,
    title: "AI Analytics Dashboards",
    desc: "Custom dashboards that use AI to analyze your business data, surface insights, predict trends, and generate reports automatically.",
  },
  {
    icon: Gear,
    title: "Workflow Automation",
    desc: "Connect your existing tools with AI-powered automation. CRM to email to social media to analytics — all running on autopilot with smart decision-making.",
  },
  {
    icon: Sparkle,
    title: "Custom AI Agents",
    desc: "Fully custom AI systems built to handle any repetitive business task. Data entry, document processing, scheduling, monitoring — anything that eats your team's time.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "You tell us what problem you're trying to solve. We ask questions, understand your workflow, and figure out exactly what needs to be built. This call is free.",
  },
  {
    step: "02",
    title: "Proposal and Quote",
    desc: "We send you a detailed proposal with features, timeline, and pricing. Everything is transparent — no hidden costs. You approve before we write a single line of code.",
  },
  {
    step: "03",
    title: "Design and Build",
    desc: "Our team designs and develops your custom AI tool. You get regular progress updates and can test the tool during development. We iterate based on your feedback.",
  },
  {
    step: "04",
    title: "Delivery and Support",
    desc: "We deliver the finished tool, help you set it up, train your team if needed, and provide 30 days of post-launch support. After that, the tool is fully yours.",
  },
];

const whyPoints = [
  {
    icon: Lightbulb,
    title: "We're Marketers First",
    desc: "We understand business problems because we solve them every day. We don't just write code — we build tools that actually drive revenue and save time.",
  },
  {
    icon: ShieldCheck,
    title: "Proof in Production",
    desc: "PageSurge (Facebook automation) and PinSurge (Pinterest automation) are our own AI tools used by real marketers every day. We build what works — not what looks good in a demo. When we build a custom tool for you, it gets the same level of quality and real-world testing.",
  },
  {
    icon: Check,
    title: "You Own Everything",
    desc: "Every tool we build is yours. No licensing fees back to us. No dependency. No vendor lock-in. We hand over the code and you own it forever.",
  },
  {
    icon: CurrencyDollar,
    title: "Affordable for Real Businesses",
    desc: "We're not a Silicon Valley dev shop charging $50,000 per project. We build powerful AI tools at prices that small businesses and agencies can actually afford.",
  },
];

const useCases = [
  {
    icon: Buildings,
    industry: "Real Estate Agency",
    desc: "Built an AI tool that generates property descriptions, social media posts, and email campaigns for new listings automatically.",
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce Store",
    desc: "Built a custom AI chatbot that handles 80% of customer questions and recommends products based on browsing behavior.",
  },
  {
    icon: Megaphone,
    industry: "Marketing Agency",
    desc: "Built a client reporting tool that uses AI to analyze campaign data and generate monthly performance reports in seconds.",
  },
  {
    icon: ForkKnife,
    industry: "Local Restaurant Chain",
    desc: "Built a review monitoring tool that uses AI to analyze customer reviews across platforms and suggests response templates.",
  },
  {
    icon: PinterestLogo,
    industry: "Pinterest Marketing Agency",
    desc: "Built a bulk pin creation tool that scrapes product URLs, generates AI images, adds text overlays, writes SEO descriptions, and exports ready-to-upload CSV files for Pinterest.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a custom tool?",
    a: "It depends on complexity. Simple tools can be ready in 1-2 weeks. Complex systems with multiple integrations may take 4-8 weeks. We give you a timeline in our proposal before you commit.",
  },
  {
    q: "Do I need to know anything about AI or coding?",
    a: "No. You tell us the problem — we handle everything technical. We explain everything in plain language throughout the process.",
  },
  {
    q: "What technologies do you use?",
    a: "We use the best tools for each project — Python, JavaScript, React, various AI models (Claude, GPT, Gemini, open-source models), and whatever databases and APIs your project needs. We choose based on what works best for your specific tool.",
  },
  {
    q: "Can I request changes after delivery?",
    a: "The 30-day post-launch support covers bug fixes and minor adjustments. For larger feature additions, we offer ongoing development at agreed rates.",
  },
  {
    q: "Do I own the code?",
    a: "Yes. 100%. We hand over all source code, documentation, and deployment instructions. You can host it yourself, hire another developer to modify it, or come back to us for updates. No lock-in.",
  },
  {
    q: "How do I get started?",
    a: "Email us at medianestonline@gmail.com with a brief description of what you need. We'll schedule a free discovery call within 48 hours.",
  },
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-semibold text-[#08081a] pr-4 group-hover:text-[#e8505b] transition-colors">
          {q}
        </span>
        <CaretDown
          weight="bold"
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

export default function AIToolsCreationPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#08081a] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#e8505b]/15 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8505b]/10 ring-1 ring-[#e8505b]/30 mb-6"
          >
            <Code weight="duotone" className="w-4 h-4 text-[#e8505b]" />
            <span className="text-[#e8505b] font-semibold text-xs uppercase tracking-[0.2em]">
              Custom Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            We Build Custom AI Tools{" "}
            <span className="text-[#e8505b]">For Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-[60ch] mx-auto leading-relaxed mb-10"
          >
            Need an AI chatbot, a content automation system, a lead generation
            tool, or something entirely unique? Tell us what you need — we&apos;ll
            design, build, and deliver it. You own the tool. No ongoing fees to us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="mailto:medianestonline@gmail.com?subject=Custom%20AI%20Tool%20Project"
              className="group inline-flex items-center gap-2 bg-[#e8505b] hover:bg-[#d4444e] text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98]"
            >
              Discuss Your Project
              <ArrowRight
                weight="bold"
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </a>
            <span className="text-gray-500 text-sm">
              Free initial consultation — no commitment required
            </span>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5"
            >
              What Can We Build for You?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Every business has unique challenges. We build AI-powered solutions
              that solve yours.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => {
              const IconCmp = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ ...spring, delay: (i % 3) * 0.06 }}
                  className="group bg-gray-50 rounded-2xl p-7 ring-1 ring-gray-200/70 hover:ring-[#e8505b]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8505b]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <IconCmp
                      weight="duotone"
                      className="w-6 h-6 text-[#e8505b]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#08081a] mb-1.5 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Build With Us */}
      <section className="bg-[#08081a] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#e8505b]/10 rounded-full blur-[160px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
            >
              Why Build With Us?
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyPoints.map((point, i) => {
              const IconCmp = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.08 }}
                  className="bg-white/[0.04] rounded-2xl p-7 ring-1 ring-white/[0.08]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8505b]/15 ring-1 ring-[#e8505b]/30 flex items-center justify-center mb-5">
                    <IconCmp
                      weight="duotone"
                      className="w-6 h-6 text-[#e8505b]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5"
            >
              From Idea to Working Tool
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Typically 1 to 8 weeks from discovery call to deployed tool.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#e8505b] text-white flex items-center justify-center font-bold text-lg mx-auto mb-5 shadow-[0_12px_28px_-10px_rgba(232,80,91,0.6)]">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-[#08081a] mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#08081a] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
            >
              Built for Every Industry
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc, i) => {
              const IconCmp = uc.icon;
              return (
                <motion.div
                  key={uc.industry}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.08 }}
                  className="bg-white/[0.04] rounded-2xl p-7 ring-1 ring-white/[0.08]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <IconCmp
                      weight="duotone"
                      className="w-5 h-5 text-[#e8505b]"
                    />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {uc.industry}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {uc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-500 text-sm mt-10"
          >
            These are example projects to show what&apos;s possible. Every tool
            we build is custom to your specific needs.
          </motion.p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5"
            >
              Every Project Is Unique
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We don&apos;t believe in one-size-fits-all pricing. Every custom
              tool is scoped individually based on what you need.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="bg-gray-50 rounded-2xl p-8 md:p-10 ring-1 ring-gray-200/70 mb-10"
          >
            <h3 className="font-bold text-[#08081a] mb-5 tracking-tight">
              What affects pricing:
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Complexity of the tool",
                "Number of AI features",
                "Integrations with external platforms",
                "Design and UI requirements",
                "Timeline and priority",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-gray-700"
                >
                  <Check
                    weight="bold"
                    className="w-4 h-4 text-[#e8505b] shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-gray-600 leading-relaxed mb-8">
              Most projects range from a few hundred to a few thousand dollars
              depending on scope. We&apos;ll give you an exact quote before any
              work begins.
            </p>
            <a
              href="mailto:medianestonline@gmail.com?subject=Custom%20AI%20Tool%20Quote"
              className="group inline-flex items-center gap-2 bg-[#e8505b] hover:bg-[#d4444e] text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 active:scale-[0.98]"
            >
              Get Your Custom Quote
              <ArrowRight
                weight="bold"
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Free consultation. No commitment. Honest pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08081a] leading-[1.1] mb-5"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="bg-white rounded-2xl ring-1 ring-gray-200/70 px-6 md:px-8"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#08081a] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-[#e8505b]/15 rounded-full blur-[180px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <Envelope
              weight="duotone"
              className="w-12 h-12 text-[#e8505b] mx-auto mb-6"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              Have an Idea? Let&apos;s Build It.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-[50ch] mx-auto">
              Every great tool starts with a conversation. Tell us what problem
              you&apos;re trying to solve and we&apos;ll show you what&apos;s
              possible.
            </p>
            <a
              href="mailto:medianestonline@gmail.com?subject=Custom%20AI%20Tool%20Project"
              className="group inline-flex items-center gap-2 bg-[#e8505b] hover:bg-[#d4444e] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 active:scale-[0.98]"
            >
              Start Your Project
              <ArrowRight
                weight="bold"
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-gray-400">
              {[
                {
                  icon: Check,
                  text: "Free consultation — no commitment",
                },
                {
                  icon: ShieldCheck,
                  text: "Transparent pricing — no surprises",
                },
                {
                  icon: Code,
                  text: "You own everything we build",
                },
              ].map((item) => {
                const IconCmp = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2"
                  >
                    <IconCmp
                      weight="bold"
                      className="w-4 h-4 text-emerald-400"
                    />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg">
            Looking for a ready-made tool instead?{" "}
            <Link
              href="/tools"
              className="text-purple-700 font-semibold hover:text-purple-600 transition-colors inline-flex items-center gap-1"
            >
              Browse our AI Tools{" "}
              <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
