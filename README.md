# Pampered Paws

Next.js (App Router) + Tailwind CSS marketing site for Pampered Paws — pet grooming, grooming school, and franchising. Sanity CMS integration is planned for Phase 3 (see `/src/sanity`, currently a placeholder).

## Stack

- Next.js 14 (App Router), TypeScript, React 18
- Tailwind CSS 3 — design tokens in `tailwind.config.ts` / `src/app/globals.css`, sourced from the project's Figma file
- Hosting target: Hostinger, running as a persistent Node.js process (`next build` + `next start`), not static export

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                  App Router pages, one folder per route
  components/
    ui/                 Primitives: Button, Card, ServiceChip, IconCircle, etc.
    sections/           Composed page sections (Hero, BookingSteps, FAQList, etc.)
    layout/             Header, Footer
  lib/
    cn.ts               className merge helper (clsx + tailwind-merge)
    data/               Placeholder content arrays (blog, resources, programs, locations, pricing)
  sanity/               Empty — Phase 3
public/
  images/               Static images exported from Figma (Figma-hosted URLs are temporary; migrate to Cloudinary/Sanity before launch)
  icons/                SVG icons exported from Figma
```

## Notes for Phase 3 (Sanity)

- Content in `src/lib/data/*.ts` is hardcoded placeholder data mirroring the structure of the CMS CSV exports (Blog, Resources, Locations, Programs, Pricing). This will be replaced by Sanity GROQ queries.
- `next.config.mjs` `images.remotePatterns` includes `cdn.prod.website-files.com` (legacy CSV image URLs) and `*.figma.com` (temporary Figma asset URLs) — both need to be removed once content is migrated to Cloudinary/Sanity.
- The Resources collection has ~22 published entries; only a handful have real excerpt copy transcribed from the source CSV — the rest are flagged `PLACEHOLDER_EXCERPT` and need real content before launch.
- FAQ answers for Grooming/Schooling/Franchising were not present in the source CSV (blank `Answer` column) — current copy was written to fill the gap and should be reviewed by the business owner.
