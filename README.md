# blockken.solutions

Landing page for blockken.solutions — a Next.js app with hardcoded Dutch content.

## Structure

```
website/    Next.js frontend
```

## Requirements

- Node.js 20+

## Local development

```bash
cd website
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000). No environment variables are required.

## Content

All copy lives in [`website/src/content/`](website/src/content/):

| File | Purpose |
|------|---------|
| `site.ts` | Site name, URL, SEO defaults, footer tagline |
| `home.ts` | Landing page sections (hero, services, agents, scan, about, CTA) |
| `navigation.ts` | Header nav links |
| `types.ts` | TypeScript interfaces for all content |

To update text, edit the relevant content file and restart the dev server.

## Components

Landing sections are in [`website/src/components/landing/`](website/src/components/landing/). Each accepts a typed `content` prop, composed in [`website/src/app/page.tsx`](website/src/app/page.tsx).

## Branding

Update brand tokens in [`website/src/app/globals.css`](website/src/app/globals.css):

| Variable | Purpose |
|----------|---------|
| `--brand-primary` | Near-black text |
| `--brand-orange` | Accent color for CTAs and highlights |
| `--brand-radius` | Border radius |
| `--section-py` | Section vertical padding |
| `--container-max` | Max content width |

## Deploy

Deploy the `website/` directory to Netlify or Vercel. No CMS or webhook configuration needed.

## Tech stack

- Next.js 16 (App Router)
- React, TypeScript, Tailwind CSS, shadcn/ui
