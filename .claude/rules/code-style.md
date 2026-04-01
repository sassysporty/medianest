---
paths:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

# Code Style

- Prefer `interface` over `type` for object shapes
- All data arrays live in `src/data/` with types from `src/types/index.ts`
- No custom CSS — use Tailwind utilities only (design tokens in `globals.css` are the exception)
- Use `@/*` import alias, never relative paths like `../../`
