import type { Metadata } from "next";
import PageSurgeHero from "./sections/Hero";
import PageSurgeProblem from "./sections/Problem";
import PageSurgeWhatIsIt from "./sections/WhatIsIt";
import PageSurgeFeatures from "./sections/Features";
import PageSurgeFreeAI from "./sections/FreeAI";
import PageSurgeHowItWorks from "./sections/HowItWorks";
import PageSurgeWhoItsFor from "./sections/WhoItsFor";
import PageSurgeSocialProof from "./sections/SocialProof";
import PageSurgePricing from "./sections/Pricing";
import PageSurgeFAQ from "./sections/FAQ";
import PageSurgeFinalCTA from "./sections/FinalCTA";

export const metadata: Metadata = {
  title: "PageSurge — Facebook Page Automation Desktop App | MediaNest",
  description:
    "PageSurge generates AI captions, schedules posts, and manages unlimited Facebook pages — all from one desktop app. No agency needed. No monthly AI bills.",
};

export default function PageSurgePage() {
  return (
    <>
      <PageSurgeHero />
      <PageSurgeProblem />
      <PageSurgeWhatIsIt />
      <PageSurgeFeatures />
      <PageSurgeFreeAI />
      <PageSurgeHowItWorks />
      <PageSurgeWhoItsFor />
      <PageSurgeSocialProof />
      <PageSurgePricing />
      <PageSurgeFAQ />
      <PageSurgeFinalCTA />
    </>
  );
}
