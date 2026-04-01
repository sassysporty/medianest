---
name: add-component
description: Create a new reusable component in the appropriate folder
arguments:
  - name: component-name
    description: Name of the component (e.g., "PricingCard", "FeatureGrid")
---

Create a new component named `{{ component-name }}`:

1. Determine the right folder:
   - `src/components/ui/` for generic reusable primitives
   - `src/components/sections/` for page section components
   - `src/components/layout/` for site-wide layout pieces
2. Add TypeScript props interface
3. Follow existing patterns (Tailwind classes, brand colors)
4. Run `npm run build` to verify
