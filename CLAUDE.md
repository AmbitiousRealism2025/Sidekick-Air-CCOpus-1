# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sidekick Air landing page prototype — a Next.js 16 marketing site for an inflatable therapy table product.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production build
npm run build        # Build for production (standalone output)
npm run start        # Run production server

# Quality
npm run lint         # Run ESLint
npx tsc --noEmit     # Type check without emitting
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router and React 19
- **TypeScript** in strict mode
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **Framer Motion** for scroll-triggered animations
- Standalone output configured for Kilo Deploy

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Outfit + Plus Jakarta Sans fonts
│   ├── page.tsx            # Composes all landing page sections
│   ├── globals.css         # CSS variables, animations, Tailwind config
│   └── api/health/route.ts # Health check endpoint for deployment
├── components/
│   ├── sections/           # Page sections (Hero, OriginStory, Problem, etc.)
│   └── ui/                 # Reusable components (Button, Container, AirflowLines)
└── lib/
    ├── fonts.ts            # Google Fonts configuration
    ├── animations.ts       # Framer Motion animation variants
    └── utils.ts            # cn() utility for className merging
```

### Design System

CSS variables defined in `globals.css`:
- `--graphite-charcoal: #1C1C1E` — Primary dark backgrounds
- `--electric-steel-blue: #387CFF` — CTAs and highlights
- `--burnt-copper: #D36C3E` — Warm accents
- `--arctic-white: #F7F8FA` — Light sections
- `--mist-grey: #E2E2E4` — Subtle transitions

### Section Components

Each section in `components/sections/` follows this pattern:
- Uses `Container` for consistent max-width and padding
- Implements scroll-triggered animations via Framer Motion's `whileInView`
- Alternates between dark (`--graphite-charcoal`) and light (`--arctic-white`) backgrounds
- Uses `SectionDivider` for diagonal momentum dividers between sections

### Animation Patterns

Defined in `lib/animations.ts`:
- `fadeInUp` — Standard scroll reveal
- `staggerContainer` — Staggered children animations
- `breathingText` — Slow fade for atmospheric text

## Deployment

Configured for Kilo Deploy:
- `output: 'standalone'` in `next.config.ts`
- Health endpoint at `/api/health` returns `{ status: 'ok' }`
- No required environment variables (see `.env.example`)
