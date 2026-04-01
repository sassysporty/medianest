export interface ICPProfile {
  name: string;
  segment: string;
  description: string;
  demographics: {
    businessSize: string;
    revenue: string;
    location: string;
    industries: string[];
    decisionMaker: string;
  };
  psychographics: {
    painPoints: string[];
    goals: string[];
    fears: string[];
    buyingTriggers: string[];
  };
  behavior: {
    budget: string;
    platforms: string[];
    contentPreferences: string[];
    researchBehavior: string;
  };
  serviceMatch: string[];
  messagingAngle: string;
}

export const primaryICP: ICPProfile = {
  name: "The Overwhelmed Local Business Owner",
  segment: "Primary",
  description:
    "Small business owner (1-50 employees) who knows they need to be online but has no time, skills, or team to handle digital marketing. They've tried DIY or hired cheap freelancers with poor results.",
  demographics: {
    businessSize: "1-50 employees",
    revenue: "$100K - $5M annual revenue",
    location: "US-based, serving local/regional markets",
    industries: [
      "Home services (plumbing, HVAC, landscaping, cleaning)",
      "Health & wellness (dentists, chiropractors, gyms, salons)",
      "Food & hospitality (restaurants, cafes, catering)",
      "Professional services (law firms, accounting, real estate)",
      "Retail & boutiques (clothing, gifts, specialty shops)",
      "Automotive (repair shops, detailing, dealerships)",
    ],
    decisionMaker:
      "Business owner or spouse/partner. Decides fast when they see clear ROI proof.",
  },
  psychographics: {
    painPoints: [
      "Website is outdated or doesn't exist — losing customers to competitors",
      "Posted on social media inconsistently with zero results",
      "Invisible on Google — competitors rank above them for local searches",
      "Wasting money on ads that don't convert",
      "No time to learn digital marketing while running the business",
      "Hired cheap freelancers before and got burned",
    ],
    goals: [
      "More local customers walking through the door",
      "Phone ringing with qualified leads",
      "Professional online presence that builds trust",
      "Consistent flow of new business without cold calling",
      "Rank #1 on Google for their service + city",
    ],
    fears: [
      "Wasting money on another agency that over-promises and under-delivers",
      "Being locked into a long contract",
      "Not understanding what they're paying for",
      "Competitors getting ahead while they fall behind",
    ],
    buyingTriggers: [
      "Losing a customer who said 'I found someone on Google'",
      "Competitor launched a new website or started posting on social",
      "Seasonal slowdown — need to fill the pipeline",
      "Word of mouth isn't enough anymore",
      "Someone recommended digital marketing at a networking event",
    ],
  },
  behavior: {
    budget: "$500 - $3,000/month for marketing services",
    platforms: [
      "Facebook (personal + business page)",
      "Google Search (searching for solutions)",
      "YouTube (watching how-to content)",
      "Local business groups (BNI, Chamber of Commerce)",
    ],
    contentPreferences: [
      "Before/after case studies with real numbers",
      "Video testimonials from similar businesses",
      "Simple explanations — no marketing jargon",
      "Free audits or assessments (low-risk entry point)",
    ],
    researchBehavior:
      "Googles 'marketing agency near me', asks friends/networking groups, reads Google reviews, wants to talk to a real person before committing.",
  },
  serviceMatch: [
    "Website Creation",
    "SEO (Local)",
    "Social Media Management",
    "YouTube Automation",
  ],
  messagingAngle:
    "You run the business, we run your marketing. No jargon, no BS — just more customers.",
};

export const secondaryICP: ICPProfile = {
  name: "The Ambitious Etsy Seller",
  segment: "Secondary",
  description:
    "Side-hustle to full-time Etsy seller making handmade or digital products. Has great products but struggles with visibility, SEO, and scaling beyond organic word-of-mouth.",
  demographics: {
    businessSize: "Solo or 1-3 person team",
    revenue: "$1K - $20K/month on Etsy",
    location: "US-based, selling nationwide via Etsy",
    industries: [
      "Handmade goods (candles, jewelry, pottery, soap)",
      "Digital products (printables, templates, planners)",
      "Vintage & curated items",
      "Custom/personalized products (engravings, prints)",
      "Craft supplies & materials",
    ],
    decisionMaker:
      "Shop owner (often women 25-45). Makes decisions based on community recommendations and proof of results.",
  },
  psychographics: {
    painPoints: [
      "Listings not getting views despite great products and reviews",
      "Don't understand how Etsy's search algorithm works",
      "Spending hours on listings with no improvement in sales",
      "Etsy Ads eating budget with poor ROAS",
      "Seasonal sales spikes but flat revenue the rest of the year",
      "Overwhelmed by constant Etsy policy and algorithm changes",
    ],
    goals: [
      "Consistent monthly revenue (not just holiday spikes)",
      "Star Seller status",
      "First page rankings for their product keywords",
      "Scale from side-hustle to full-time income",
      "Expand to multiple revenue streams (own website, social)",
    ],
    fears: [
      "Investing in optimization and seeing no results",
      "Etsy changing the algorithm and tanking their shop",
      "Not being able to compete with larger sellers",
      "Losing their shop due to policy violations",
    ],
    buyingTriggers: [
      "Sales plateau — stuck at the same revenue for months",
      "Seeing competitors with worse products ranking higher",
      "Holiday season approaching — need to prepare",
      "Just got a bad month and need to turn things around",
      "Heard about Etsy SEO in a Facebook group or YouTube video",
    ],
  },
  behavior: {
    budget: "$350 - $1,500/month",
    platforms: [
      "Etsy seller forums and Facebook groups",
      "YouTube (Etsy seller tips channels)",
      "Instagram (product showcasing)",
      "Pinterest (driving traffic to listings)",
    ],
    contentPreferences: [
      "Revenue screenshots and before/after listing views",
      "Step-by-step Etsy SEO breakdowns",
      "Success stories from similar sellers",
      "Free shop audits or listing reviews",
    ],
    researchBehavior:
      "Asks in Etsy seller Facebook groups, watches YouTube tutorials, reads blog posts about Etsy SEO, compares agencies in seller communities.",
  },
  serviceMatch: ["Etsy Service", "Social Media Management (Pinterest/IG)"],
  messagingAngle:
    "You make amazing products. We make sure people find them.",
};

export const tertiaryICP: ICPProfile = {
  name: "The Content-Curious Entrepreneur",
  segment: "Tertiary",
  description:
    "Business owner or personal brand who wants to build authority through YouTube but has zero time or skills to produce content consistently.",
  demographics: {
    businessSize: "1-20 employees or solopreneur",
    revenue: "$200K - $2M annual revenue",
    location: "US-based",
    industries: [
      "Coaches & consultants",
      "Real estate agents",
      "Financial advisors",
      "Fitness trainers & wellness practitioners",
      "Home service companies wanting authority content",
      "E-commerce brands wanting product reviews/demos",
    ],
    decisionMaker:
      "Business owner or marketing manager. Values time savings and authority building.",
  },
  psychographics: {
    painPoints: [
      "Knows YouTube is powerful but has no time to create content",
      "Tried filming themselves — hated the results",
      "Can't afford a full-time video team",
      "Sees competitors growing on YouTube and feels left behind",
      "Doesn't understand YouTube SEO, thumbnails, or algorithm",
    ],
    goals: [
      "Build authority and trust through video content",
      "Generate inbound leads from YouTube",
      "Create a passive content machine that runs without them",
      "Monetize channel (AdSense, sponsors, lead gen)",
      "Repurpose content to social media",
    ],
    fears: [
      "Investing $1,500+/mo with no subscriber growth",
      "Content not representing their brand properly",
      "Losing control of their channel's direction",
      "Taking too long to see ROI",
    ],
    buyingTriggers: [
      "Competitor's YouTube channel started getting traction",
      "Client said 'I found you on YouTube' to a competitor",
      "Attended a conference where speakers emphasized video",
      "Has content ideas but no execution capability",
    ],
  },
  behavior: {
    budget: "$1,500 - $7,500/month",
    platforms: [
      "YouTube (as a viewer, aspiring creator)",
      "LinkedIn (professional networking)",
      "Podcasts (business/marketing)",
      "Industry conferences and masterminds",
    ],
    contentPreferences: [
      "Channel growth case studies with subscriber/view metrics",
      "ROI calculations (cost of service vs. leads generated)",
      "Behind-the-scenes of the production process",
      "Sample videos and thumbnails from managed channels",
    ],
    researchBehavior:
      "Searches 'YouTube management agency', asks in mastermind groups, evaluates based on portfolio of managed channels, wants a strategy call before committing.",
  },
  serviceMatch: ["YouTube Automation", "Website Creation"],
  messagingAngle:
    "Your expertise, our production. A full YouTube team for a fraction of the cost of hiring in-house.",
};
