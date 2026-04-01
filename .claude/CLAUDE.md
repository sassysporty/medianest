# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

LocalPro — a Next.js 16 service website for local businesses. Stack: React 19, TypeScript (strict), Tailwind CSS v4.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |

IMPORTANT: Always run `npm run build` after making changes to verify nothing is broken.

## Architecture Decisions

- Content data is separated from components — edit `src/data/*.ts`, never inline data arrays in pages
- Site-wide config (contact info, nav links, hours) is centralized in `src/config/site.ts`
- `"use client"` is only used where state or browser APIs are needed — keep everything else as server components
- The contact API route (`POST /api/contact`) currently logs to console — it needs a real email service integration before production

## Non-Obvious Conventions

- Brand rendering: "Local" in `text-blue-800` + "Pro" in `text-amber-500` — keep this consistent everywhere the brand name appears
- Every new page must end with a `<CTASection />` driving users to `/contact`
- Page heroes use `<PageHero />` — do not create custom hero sections
- Design tokens are CSS custom properties in `globals.css` — do not add Tailwind config overrides

## When Compacting

Preserve the full list of modified files, pending tasks, and any test failures encountered.
