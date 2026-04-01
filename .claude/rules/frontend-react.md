---
paths:
  - "src/app/**/*.tsx"
  - "src/components/**/*.tsx"
---

# Frontend / React

- Server components by default — only add `"use client"` when you need `useState`, `useEffect`, or browser APIs
- Export `const metadata: Metadata` on every page for SEO
- Component folder rules:
  - `layout/` — site-wide (Header, Footer)
  - `ui/` — generic reusable (PageHero, CTASection, SectionHeading)
  - `sections/` — page content blocks (ServiceCard, TeamCard, etc.)
- Section backgrounds alternate: white → `bg-gray-50` → white
