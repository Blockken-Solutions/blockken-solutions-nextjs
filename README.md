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

The site runs at [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GOOGLE_PAGESPEED_API_KEY` | For `/gratis-scan` | Google PageSpeed Insights API key (server-only) |
| `RESEND_API_KEY` | For contact form | Email delivery via Resend |
| `CONTACT_EMAIL_TO` | Optional | Recipient for contact form submissions |
| `CALENDLY_URL` | For kennismakingsgesprek | Calendly event URL embedded in the contact section (server-only) |

#### PageSpeed Insights API key setup

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the **PageSpeed Insights API**
3. Create an API key under APIs & Services → Credentials
4. Restrict the key:
   - **Application restrictions:** HTTP referrers
   - **Referrers:** `blockken.solutions/*`, `*.netlify.app/*`, `localhost:*`
   - **API restrictions:** PageSpeed Insights API only
5. Add `GOOGLE_PAGESPEED_API_KEY` to Netlify environment variables (Site settings → Environment variables)

The scan runs client-side in the browser (no server proxy), so it works on Netlify Free without function timeout limits.

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

### Netlify

Build settings live in [`netlify.toml`](netlify.toml) at the repo root. After connecting the repo, clear any overrides in the Netlify UI so the file is used:

1. Go to **Site configuration → Build & deploy → Continuous deployment → Build settings**
2. Click **Edit settings**
3. Set **Base directory**, **Build command**, and **Publish directory** to empty so `netlify.toml` controls the build (or set **Publish directory** to `.next` if Netlify requires a value)
4. Save and trigger a new deploy

Do not use the old Angular path `dist/blockken-solutions/browser`. The publish directory must be `.next` (relative to `website/`), which `@netlify/plugin-nextjs` expects.

Add environment variables under **Site configuration → Environment variables** (see table above).

### Vercel

Set the project root to `website`. No CMS or webhook configuration needed.

## Tech stack

- Next.js 16 (App Router)
- React, TypeScript, Tailwind CSS, shadcn/ui
