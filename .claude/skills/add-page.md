---
name: add-page
description: Scaffold a new page with hero, content sections, and CTA
arguments:
  - name: page-name
    description: The URL slug for the new page (e.g., "pricing", "portfolio")
---

Create a new page at `src/app/{{ page-name }}/page.tsx` following the LocalPro conventions:

1. Use `PageHero` for the hero section
2. Add content sections with alternating backgrounds
3. End with `CTASection`
4. Export metadata for SEO
5. Extract content data to `src/data/` if needed
6. Run `npm run build` to verify
