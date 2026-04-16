import type { Metadata } from "next";
import PinSurgeHero from "./sections/Hero";
import PinSurgeProblem from "./sections/Problem";
import PinSurgeWhatIsIt from "./sections/WhatIsIt";
import PinSurgeHowItWorks from "./sections/HowItWorks";
import PinSurgeFeatures from "./sections/Features";
import PinSurgeAPIKeys from "./sections/APIKeys";
import PinSurgeWhoItsFor from "./sections/WhoItsFor";
import PinSurgeSocialProof from "./sections/SocialProof";
import PinSurgePricing from "./sections/Pricing";
import PinSurgeFAQ from "./sections/FAQ";
import PinSurgeFinalCTA from "./sections/FinalCTA";

export const metadata: Metadata = {
  title: "PinSurge — Pinterest Pin Automation Tool | MediaNest",
  description:
    "PinSurge turns any URL into Pinterest-ready pins with AI images, text overlays, SEO titles, descriptions, scheduling, and CSV export. One-time $39 purchase.",
};

export default function PinSurgePage() {
  return (
    <>
      <PinSurgeHero />
      <PinSurgeProblem />
      <PinSurgeWhatIsIt />
      <PinSurgeHowItWorks />
      <PinSurgeFeatures />
      <PinSurgeAPIKeys />
      <PinSurgeWhoItsFor />
      <PinSurgeSocialProof />
      <PinSurgePricing />
      <PinSurgeFAQ />
      <PinSurgeFinalCTA />
    </>
  );
}
