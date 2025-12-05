# Sidekick Air Landing Page — Implementation Plan

## Executive Summary

This plan outlines the complete implementation strategy for the Sidekick Air landing page prototype. The project delivers a visually stunning, deployment-ready Next.js 15 application showcasing the revolutionary inflatable therapy table for healthcare professionals.

---

## Phase 1: Project Foundation

### 1.1 Project Initialization

```bash
npx create-next-app@latest sidekick-air --typescript --tailwind --eslint --app --src-dir
```

**Required Configuration:**
- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS
- `output: 'standalone'` in next.config.ts
- ESLint enabled

### 1.2 Directory Structure

```
sidekick-air/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, metadata
│   │   ├── page.tsx                # Landing page composition
│   │   ├── globals.css             # CSS variables, animations, base styles
│   │   └── api/
│   │       └── health/
│   │           └── route.ts        # Health check endpoint for Kilo Deploy
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # "Reimagining Recovery" hero
│   │   │   ├── OriginStory.tsx     # Drew Freedman's story
│   │   │   ├── Problem.tsx         # Pain points section
│   │   │   ├── Difference.tsx      # Product features & benefits
│   │   │   ├── Standard.tsx        # Future vision with AI
│   │   │   ├── App.tsx             # Sidekick Care App showcase
│   │   │   └── CTA.tsx             # Join the Movement section
│   │   └── ui/
│   │       ├── Button.tsx          # Primary/secondary button variants
│   │       ├── SectionDivider.tsx  # Diagonal momentum dividers
│   │       ├── AnimatedText.tsx    # Breathing rhythm text reveals
│   │       └── AirflowLines.tsx    # Subtle motion graphics
│   └── lib/
│       ├── fonts.ts                # Font configurations
│       └── animations.ts           # Framer Motion variants
├── public/
│   ├── images/                     # Optimized hero/product images
│   └── fonts/                      # Self-hosted font files (if needed)
├── next.config.ts                  # Standalone output + optimizations
├── tailwind.config.ts              # Custom design tokens
├── package.json
├── tsconfig.json
└── .env.example
```

---

## Phase 2: Design System

### 2.1 Color Palette (CSS Variables)

```css
:root {
  /* Core Palette */
  --graphite-charcoal: #1C1C1E;    /* Foundation/background */
  --electric-steel-blue: #387CFF;  /* CTA buttons, highlights */
  --burnt-copper: #D36C3E;         /* Warm accents, dividers */
  --arctic-white: #F7F8FA;         /* Light backgrounds */
  --mist-grey: #E2E2E4;            /* Transitions, hover states */

  /* Extended Palette */
  --deep-charcoal: #121214;        /* Darker sections */
  --copper-glow: #E8845A;          /* Gradient end */
  --steel-light: #5A9AFF;          /* Gradient variant */
}
```

### 2.2 Typography Strategy

**Display Font:**
- Primary: **Clash Display** or **Cabinet Grotesk** (bold, distinctive, NOT Inter/Roboto)
- For hero headlines and section titles
- Source: Google Fonts or Fontshare

**Body Font:**
- Secondary: **Satoshi** or **Plus Jakarta Sans**
- Highly readable, modern, complementary
- For paragraphs and UI text

**Implementation:**
```typescript
// lib/fonts.ts
import localFont from 'next/font/local'
// or
import { Clash_Display } from '@next/font/google'
```

### 2.3 Visual Concept

**Layout Approach:**
- Asymmetric editorial grid for dynamic energy
- Full-bleed hero section
- Alternating light/dark section backgrounds
- Diagonal section dividers (momentum motif)

**Hero Treatment:**
- Full-viewport cinematic composition
- Therapist + athlete + Sidekick Air in action
- Subtle particle/airflow animation
- Headline with staggered letter animation

**Motion Philosophy:**
- Orchestrated page load sequence
- Scroll-triggered section reveals (intersection observer)
- Breathing rhythm for text fades
- Parallax depth on background layers

**Atmospheric Elements:**
- Subtle film grain overlay (CSS noise)
- Gradient meshes for depth
- Airflow line graphics (SVG)
- Diagonal momentum dividers

---

## Phase 3: Section Implementation

### 3.1 Hero Section — "Reimagining Recovery"

**Content:**
```
Tagline: "Reimagining Recovery"
Subhead: "Professional Strength. Limitless Mobility."
CTA: "Discover Sidekick Air" → scrolls to features
```

**Visual:**
- 16:9 hero image: therapist performing recovery on athlete field-side
- Subtle glow effects on Sidekick Air seams
- Animated airflow particles rising

**Animation:**
- Staggered headline reveal (word-by-word)
- Subhead fades in after headline
- CTA slides up with spring physics
- Background parallax on scroll

### 3.2 Origin Story Section

**Content:**
- Drew Freedman's 25-year journey
- The paddleboard "aha moment"
- Birth of Sidekick Air as continuation of purpose

**Visual:**
- Warm natural tones (burnt copper gradients)
- Introspective mood photography
- Timeline: paddleboard → sketch → prototype

**Animation:**
- Scroll-triggered text reveals
- Image fade-ins with parallax

### 3.3 Problem Section

**Content:**
Pain points with visual icons:
- Excessive weight (35-45 lbs)
- Awkward balance
- Bulky storage
- Setup fatigue
- Durability trade-offs
- Freight limitations
- Lack of branding
- Environmental impact

**Visual:**
- Split scene: struggle vs. solution
- Gritty realism → bright innovation transition
- Icon system with burnt copper accents

**Animation:**
- Pain point cards stagger in
- Transition wipe to solution imagery

### 3.4 Sidekick Air Difference Section

**Content:**
Key features:
- Inflates in minutes
- Rock-solid 6" surface
- 800+ lb capacity
- Packs to yoga mat size
- Modular frame system
- Color customization available

**Visual:**
- Exploded CAD render animation
- Lifestyle imagery grid (gym, clinic, home, field)
- Feature callouts with motion energy

**Animation:**
- CAD parts assemble on scroll
- Feature cards slide in from edges

### 3.5 New Industry Standard Section

**Content:**
- Drop-stitch technology explanation
- Future AI Clinical Coach teaser
- QR code integration preview

**Visual:**
- Futuristic feel, clean technology cues
- Therapist scanning QR with digital overlay
- Abstract tech pattern backgrounds

**Animation:**
- Digital elements glitch/reveal
- Interface mockup slides in

### 3.6 Sidekick Care App Section

**Content:**
App features (10 bullet points):
- Setup guides, treatment protocols, client tracking
- Professional network, scheduling
- Continuing education, wearable integration

**Visual:**
- Tablet/phone mockup with app UI
- Feature icons with hover states
- Therapist using tablet beside table

**Animation:**
- Device floats in with shadow
- Feature list staggered reveal

### 3.7 Join the Movement CTA

**Content:**
```
"Join the Movement"
"Be part of the future of therapeutic care."
[Email signup form]
[Social links]
```

**Visual:**
- Diverse therapists with Sidekick Air
- Multiple environments montage
- Empowering, warm tone

**Animation:**
- Final section parallax
- Form elements animate on focus

---

## Phase 4: Technical Implementation

### 4.1 Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',

  images: {
    remotePatterns: [
      // Add external image domains if needed
    ],
    unoptimized: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
```

### 4.2 Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "tailwindcss": "^3.4.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "eslint": "^8.x",
    "eslint-config-next": "^15.x"
  }
}
```

### 4.3 Animation Library Setup

```typescript
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const breathingText = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
}
```

### 4.4 Responsive Breakpoints

```typescript
// tailwind.config.ts
screens: {
  'sm': '375px',   // Mobile
  'md': '768px',   // Tablet
  'lg': '1024px',  // Laptop
  'xl': '1440px',  // Desktop
  '2xl': '1920px', // Large desktop
}
```

---

## Phase 5: Quality Assurance

### 5.1 Build Verification

```bash
# Local build test
npm run build

# Production mode test
npm run build && npm run start

# Type checking
npx tsc --noEmit

# Lint check
npm run lint
```

### 5.2 Responsive Testing

| Breakpoint | Width | Focus Areas |
|------------|-------|-------------|
| Mobile | 375px | Hero stacking, touch targets, text size |
| Tablet | 768px | Grid layouts, section spacing |
| Laptop | 1024px | Full layouts, animations |
| Desktop | 1440px | Visual polish, whitespace |

### 5.3 Performance Targets

- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### 5.4 Accessibility Checklist

- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Alt text on all images
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Keyboard navigation support
- [ ] Focus visible states
- [ ] Skip link for main content
- [ ] Reduced motion preference respected

---

## Phase 6: Deployment

### 6.1 Pre-Deployment Checklist

- [ ] `npm run build` completes without errors
- [ ] All environment variables documented in `.env.example`
- [ ] Health check endpoint responds at `/api/health`
- [ ] No hardcoded localhost URLs
- [ ] Images optimized and properly imported
- [ ] Console clear of errors/warnings

### 6.2 Kilo Deploy Process

1. Push code to GitHub repository
2. Navigate to Kilo Deploy dashboard
3. Click "New Deployment"
4. Select GitHub integration
5. Choose repository and branch (main)
6. Add environment variables if needed
7. Click Deploy
8. Monitor build logs
9. Test deployment URL

### 6.3 Environment Variables

```bash
# .env.example
# No secrets required for static landing page
# Add if integrating with external services:
# NEXT_PUBLIC_API_URL=
# NEXT_PUBLIC_ANALYTICS_ID=
```

---

## Implementation Timeline

### Milestone 1: Foundation
- Project setup and configuration
- Design system implementation (colors, fonts, CSS variables)
- Base component structure

### Milestone 2: Core Sections
- Hero section with animations
- Origin Story section
- Problem section with icons
- Sidekick Air Difference section

### Milestone 3: Complete & Polish
- New Industry Standard section
- Sidekick Care App section
- CTA section
- Animation refinement
- Responsive polish

### Milestone 4: Quality & Deploy
- Build verification
- Cross-browser testing
- Performance optimization
- Accessibility audit
- Deploy to Kilo Deploy

---

## Design Excellence Reminders

**DO:**
- Make bold, unexpected typographic choices
- Create atmospheric depth with layered backgrounds
- Use generous whitespace OR controlled density (commit to one)
- Implement orchestrated animations with staggered timing
- Add micro-interactions that surprise and delight
- Design for the scroll — reward users as they explore

**DON'T:**
- Use Inter, Roboto, Arial, or system fonts
- Default to purple gradients on white backgrounds
- Create cookie-cutter layouts with predictable patterns
- Add motion without purpose
- Compromise the vision for "safety"

---

## Reference Materials

**Template Inspiration:**
- https://therapyflow-template.webflow.io/
- https://xpedition.webflow.io/home-one
- https://healers-tnc.webflow.io/
- https://hollow-template.webflow.io/

**Image Search Themes:**
- "sports therapist athlete recovery field"
- "physical therapy hands detail close up"
- "inflatable structure texture macro"
- "modern healthcare technology interface"

---

*Plan created: December 5, 2025*
*Ready for implementation upon approval*
