# Magical Paradise — Next.js

Sri Lanka luxury travel website converted from React to Next.js 14 (App Router).

## Project Structure

```
magical-paradise-nextjs/
├── app/
│   ├── globals.css          # Tailwind base styles + scrollbar-hide utility
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   ├── Navbar.tsx           # 'use client' — scroll state, mobile menu, lang switcher
│   ├── HeroSection.tsx      # 'use client' — framer-motion animations
│   ├── PackagesSection.tsx  # 'use client' — next/image, framer-motion
│   ├── DayToursSection.tsx  # 'use client' — useRef scroll, next/image
│   ├── MaldivesSection.tsx  # 'use client' — next/image, framer-motion
│   ├── MapSection.tsx       # 'use client' — interactive pin state
│   ├── ExperiencesSection.tsx
│   ├── HotelsSection.tsx    # next/image
│   ├── TestimonialsSection.tsx
│   ├── CorporateSection.tsx # next/image
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx     # next/image
│   ├── Footer.tsx           # Server component (no client hooks)
│   └── WhatsAppButton.tsx   # 'use client' — useEffect popup timer
├── next.config.ts           # Unsplash domain allowed for next/image
├── tailwind.config.ts       # Custom colors: tropical, sand, ocean
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Key Changes from React → Next.js

| Change | Detail |
|--------|--------|
| `'use client'` directive | Added to all components using hooks or framer-motion |
| `<img>` → `<Image>` | Replaced all img tags with `next/image` for optimization |
| `next.config.ts` | Added `images.remotePatterns` for `images.unsplash.com` |
| `app/layout.tsx` | Metadata exported for SEO (title, description) |
| `app/page.tsx` | Root page replacing `App.tsx` |
| Apostrophes & quotes | Escaped as `&apos;` and `&ldquo;`/`&rdquo;` for JSX |
| Footer | Kept as Server Component (no browser APIs used) |

## Setup & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```