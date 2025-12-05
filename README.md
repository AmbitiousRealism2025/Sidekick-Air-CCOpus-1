# Sidekick Air Landing Page

A visually stunning, deployment-ready landing page for Sidekick Air — the revolutionary inflatable therapy table.

## Design Rationale

### Aesthetic Direction
The design blends **athletic performance energy** with **clinical professionalism**:
- Dark, cinematic hero with Electric Steel Blue and Burnt Copper accents
- Alternating dark/light sections for visual rhythm
- Diagonal dividers conveying forward momentum
- Subtle film grain and airflow particle animations for atmosphere

### Typography
- **Display**: Outfit — Bold, geometric, modern (headlines)
- **Body**: Plus Jakarta Sans — Clean, readable (paragraphs)

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Graphite Charcoal | `#1C1C1E` | Primary backgrounds |
| Electric Steel Blue | `#387CFF` | CTAs, highlights, energy |
| Burnt Copper | `#D36C3E` | Warm accents, emotional |
| Arctic White | `#F7F8FA` | Light sections |
| Mist Grey | `#E2E2E4` | Transitions, subtle |

### Memorable Moment
The orchestrated hero animation with rising airflow particles and staggered text reveals — representing the inflation concept and the "breath of fresh air" Sidekick Air brings to the industry.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── page.tsx           # Landing page composition
│   ├── globals.css        # Design system, animations
│   └── api/health/        # Health check endpoint
├── components/
│   ├── sections/          # Page sections (Hero, Origin, etc.)
│   └── ui/                # Reusable components
└── lib/
    ├── fonts.ts           # Font configuration
    ├── animations.ts      # Framer Motion variants
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm (or pnpm/yarn/bun)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This project is configured for **Kilo Deploy** with:
- `output: 'standalone'` for optimized deployment
- Health check endpoint at `/api/health`
- No required environment variables

### Deploy to Kilo

1. Push to GitHub
2. Connect repository in Kilo Deploy
3. Deploy!

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Fonts**: Google Fonts (Outfit, Plus Jakarta Sans)

## Sections

1. **Hero** — Full viewport, animated headline, airflow particles
2. **Origin Story** — Drew's journey, timeline format
3. **Problem** — Pain points grid with icons
4. **Difference** — Feature stats, benefits list
5. **Standard** — AI future vision, phone mockup
6. **App** — Sidekick Care features showcase
7. **CTA** — Email signup, footer

## License

Proprietary — Sidekick Air
