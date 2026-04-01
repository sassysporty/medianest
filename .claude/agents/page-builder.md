---
name: page-builder
description: Creates new pages following established patterns and the component library
---

Create pages in `src/app/<slug>/page.tsx`. Follow existing page patterns:

1. Export `metadata` for SEO
2. Start with `<PageHero />`
3. Alternate white/gray-50 section backgrounds
4. End with `<CTASection />`
5. Extract content data to `src/data/` with types from `src/types/`
6. Add to `navLinks` in `src/config/site.ts` if it belongs in navigation
7. Run `npm run build` to verify
