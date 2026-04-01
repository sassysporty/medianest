export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  testimonial?: string;
  duration: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "From 500 to 50K Subscribers in 6 Months",
    client: "HomeFixIt DIY",
    industry: "Home Improvement",
    service: "YouTube Automation",
    challenge:
      "A local handyman wanted to build authority through YouTube but had no time to script, edit, or optimize videos consistently.",
    solution:
      "We took over full channel management — producing 3 videos per week with professional editing, SEO-optimized titles, and custom thumbnails. Implemented a content calendar based on trending DIY searches.",
    results: [
      { metric: "Subscribers", value: "500 → 50,000" },
      { metric: "Monthly Views", value: "2K → 450K" },
      { metric: "Revenue (AdSense + Sponsors)", value: "$0 → $4,200/mo" },
      { metric: "Lead Generation", value: "35 new clients from YouTube" },
    ],
    testimonial:
      "I went from struggling to post once a month to having a full content machine running without me lifting a finger. The leads alone paid for the service 10x over.",
    duration: "6 months",
  },
  {
    title: "3X Engagement & 200% More Leads via Social Media",
    client: "Bella's Boutique",
    industry: "Retail / Fashion",
    service: "Social Media Management",
    challenge:
      "A local boutique was posting inconsistently on Instagram and Facebook with no strategy, resulting in flat engagement and zero online sales.",
    solution:
      "We built a cohesive brand presence across Instagram, Facebook, and Pinterest. Created a content mix of product showcases, styling tips, behind-the-scenes, and local community content. Launched targeted ad campaigns for seasonal promotions.",
    results: [
      { metric: "Instagram Followers", value: "800 → 8,500" },
      { metric: "Monthly Engagement Rate", value: "1.2% → 5.8%" },
      { metric: "Online Inquiries", value: "200% increase" },
      { metric: "Monthly Revenue from Social", value: "$0 → $6,800" },
    ],
    testimonial:
      "They turned our Instagram from a dead page into our #1 source of new customers. The content they create is exactly what our audience wants to see.",
    duration: "8 months",
  },
  {
    title: "Page 1 Rankings & 180% Traffic Growth with Local SEO",
    client: "GreenLeaf Landscaping",
    industry: "Home Services",
    service: "SEO",
    challenge:
      "A landscaping company was invisible on Google despite serving a large metro area for 10 years. Zero blog content and an unoptimized Google Business Profile.",
    solution:
      "Optimized their Google Business Profile, built local citations across 50+ directories, launched a blog strategy targeting local keywords like 'landscaping [city]' and seasonal lawn care guides. Fixed technical SEO issues and built quality local backlinks.",
    results: [
      { metric: "Organic Traffic", value: "180% increase" },
      { metric: "Google Map Pack Rankings", value: "Top 3 for 12 keywords" },
      { metric: "Blog Traffic", value: "0 → 3,200 visitors/mo" },
      { metric: "Inbound Leads", value: "45 new leads/month" },
    ],
    testimonial:
      "We went from not showing up on Google at all to being the first result people see. Our phone hasn't stopped ringing since they started our SEO campaign.",
    duration: "5 months",
  },
  {
    title: "Etsy Shop Revenue from $2K to $15K/Month",
    client: "Woodland Candle Co.",
    industry: "Handmade / Etsy",
    service: "Etsy Service",
    challenge:
      "A candle maker had beautiful products but poor listings — blurry photos, no keyword strategy, and generic descriptions. Sales were flat at $2K/month despite great reviews.",
    solution:
      "Performed a full shop audit and restructured all 45 listings with optimized titles, researched tags, and compelling descriptions. Set up Etsy Ads targeting high-intent keywords. Created seasonal listing strategies for holiday peaks.",
    results: [
      { metric: "Monthly Revenue", value: "$2,000 → $15,000" },
      { metric: "Listing Views", value: "350% increase" },
      { metric: "Conversion Rate", value: "2.1% → 4.8%" },
      { metric: "Star Seller Status", value: "Achieved in 3 months" },
    ],
    testimonial:
      "I couldn't believe the difference just optimizing my listings made. They understood exactly how Etsy's algorithm works and my sales exploded during the holiday season.",
    duration: "4 months",
  },
];
