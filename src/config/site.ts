import type { NavLink } from "@/types";

export const siteConfig = {
  name: "MediaNest",
  tagline: "Your Digital Growth Partner",
  description:
    "MediaNest helps local businesses grow with website creation, YouTube automation, social media management, SEO, and Etsy services. Get a free audit today.",
  contact: {
    phone: "",
    phoneHref: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  },
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tools", label: "AI Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const serviceSubLinks = [
  { href: "/services/website-creation", label: "Website Creation" },
  { href: "/services/youtube-automation", label: "YouTube Automation" },
  { href: "/services/social-media-management", label: "Social Media" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/etsy-service", label: "Etsy Service" },
  { href: "/services/ai-tools-creation", label: "AI Tools Creation" },
];

export const aiToolsSubLinks = [
  { href: "/tools/pagesurge", label: "PageSurge — Facebook Automation" },
  { href: "/services/ai-tools-creation", label: "Custom AI Tool Development" },
];
