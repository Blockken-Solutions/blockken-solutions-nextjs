# Next.js + Sanity Website Template

Monorepo-template voor een Next.js (App Router) frontend met een standalone Sanity Studio. Bedoeld om te kopiëren en per project in te richten.

## Structuur

```
├── website/    Next.js frontend (publieke website)
└── studio/     Sanity Studio (contentbeheer)
```

## Vereisten

- Node.js 20+
- [Sanity-account](https://www.sanity.io/)
- [Netlify-account](https://www.netlify.com/)

## Stappenplan na kopiëren

1. Maak een **nieuw Sanity-project** aan op [sanity.io/manage](https://sanity.io/manage).
2. Kopieer de env-voorbeelden en vul ze in:
   - `website/.env.example` → `website/.env.local`
   - `studio/.env.example` → `studio/.env`
3. Gebruik **dezelfde** `projectId` en `dataset` in beide apps.
4. Pas de Studio-identiteit aan:
   - `SANITY_STUDIO_TITLE` in `studio/.env`
   - `name` in `studio/package.json`
5. Test lokaal (zie hieronder).
6. Voeg na deploy je Netlify-URLs toe aan **CORS origins** in Sanity (met **Allow credentials**).
7. Maak **twee Netlify sites** aan vanuit dezelfde Git-repo (website + studio).

## Checklist: dit mag je niet vergeten

| Wat | Waar aanpassen |
|-----|----------------|
| Sanity project ID | `website/.env.local`, `studio/.env`, Netlify env vars (beide sites) |
| Dataset | Idem |
| Studio titel | `SANITY_STUDIO_TITLE` in `studio/.env` + Netlify (studio site) |
| Package name | `studio/package.json` → `"name"` |
| CORS origins | [sanity.io/manage](https://sanity.io/manage) → Project → API → CORS origins |
| Netlify env vars | Netlify dashboard per site (zie Deploy-sectie) |
| Brand kleuren | `website/src/app/globals.css` → `--brand-*` variabelen |
| Studio branding | `studio/theme.ts`, `studio/static/favicon.svg`, `studio/components/studio-icon.tsx` |
| Revalidate secret | `SANITY_REVALIDATE_SECRET` in website env + Sanity webhook |

Commit **nooit** `.env` of `.env.local` — die staan in `.gitignore`.

## Branding per project

### Website (Next.js)

Pas per project de brand-variabelen aan in [`website/src/app/globals.css`](website/src/app/globals.css):

| Variabele | Doel |
|-----------|------|
| `--brand-primary` | Hoofdkleur (buttons, links, accenten) |
| `--brand-accent` | Secundaire accentkleur |
| `--brand-radius` | Border radius voor cards en buttons |
| `--section-py` | Verticale padding van secties |
| `--container-max` | Maximale contentbreedte |
| `--container-px` | Horizontale padding |

Alle blocks en layout gebruiken semantische tokens (`bg-background`, `text-foreground`, `border-border`, etc.) die automatisch meekleuren.

Dark mode staat klaar via `next-themes`. De toggle staat in de header; verwijder [`website/src/components/theme/theme-toggle.tsx`](website/src/components/theme/theme-toggle.tsx) uit de header als je dark mode niet wilt.

Fonts wijzigen: pas [`website/src/app/layout.tsx`](website/src/app/layout.tsx) aan en koppel de CSS-variabele in `globals.css` (`--font-sans`).

Favicon: pas [`website/src/app/icon.tsx`](website/src/app/icon.tsx) aan of vervang door een statisch bestand in `public/`.

### Studio (Sanity)

Het default theme is een strak **zinc/neutraal** palet, aligned met de website (`#18181b` / `#fafafa`). Semantische kleuren (groen/geel/rood voor status) blijven Sanity-defaults voor leesbaarheid.

| Bestand | Doel |
|---------|------|
| `studio/theme.ts` | Sanity UI theme via `buildTheme` (kleuren, buttons, links, focus) |
| `studio/static/favicon.svg` | Favicon in browser tab |
| `studio/components/studio-icon.tsx` | Workspace-icoon in de navbar |
| `studio/sanity.config.ts` | Koppelt `brandTheme` en `StudioIcon` |
| `studio/studio.css` | Optionele extra CSS overrides (leeg by default) |
| `studio/.env` → `SANITY_STUDIO_TITLE` | Titel in browser tab |

#### Wat kun je aanpassen?

| Aanpassing | Waar | Opmerking |
|------------|------|-----------|
| Kleuren (buttons, links, focus, selecties) | `studio/theme.ts` | Hoofdmethode via `buildTheme` |
| Fonts | `studio/theme.ts` → `font` in `ThemeConfig` | Optioneel; system fonts zijn default |
| Favicon | `studio/static/favicon.svg` | Vervang de SVG; Sanity serveert `static/` automatisch |
| Workspace-icoon (navbar) | `studio/components/studio-icon.tsx` | React component, gekoppeld via `icon` in config |
| Schema-icoontjes (sidebar) | `studio/structure.ts`, schema `icon` | `@sanity/icons` per documenttype |
| Browser-titel | `SANITY_STUDIO_TITLE` in `.env` | Naam in tab en workspace-switcher |
| Extra CSS | `studio/studio.css` | Alleen voor randgevallen; theme hoort in `theme.ts` |

**Niet (meer) standaard:** custom navbar-logo (deprecated), spacing/radius/shadows via theme, navbar-achtergrondafbeeldingen. **Content-afbeeldingen** (hero's, projectfoto's) zijn gewoon Sanity media — dat is geen CMS-UI styling.

#### Theme aanpassen

Pas de Studio-branding aan in [`studio/theme.ts`](studio/theme.ts). Dit template gebruikt `buildTheme` uit `@sanity/ui/theme` (niet meer de verouderde `buildLegacyTheme`).

**Snelste aanpassing:** wijzig bovenaan de brand-kleuren (referentie voor documentatie; tokens gebruiken Sanity UI-notatie):

```ts
const brand = '#18181b'         // zinc hoofdkleur
const brandInverted = '#fafafa' // lichte tekst op donkere elementen
```

Pas `themeConfig.color` aan voor specifieke UI-onderdelen (buttons, links, focus ring, sidebar-selectie). Tokens gebruiken Sanity UI-notatie zoals `gray/900` of `white`. Houd kleuren in sync met [`website/src/app/globals.css`](website/src/app/globals.css).

**Favicon:** vervang [`studio/static/favicon.svg`](studio/static/favicon.svg).

**Navbar-icoon:** pas [`studio/components/studio-icon.tsx`](studio/components/studio-icon.tsx) aan (of vervang door een eigen SVG/PNG-component).

## On-demand revalidation

De website cached content met ISR (60 seconden). Voor directe updates na publicatie in Studio:

1. Stel `SANITY_REVALIDATE_SECRET` in op de website (lokaal + Netlify).
2. Maak een webhook in [sanity.io/manage](https://sanity.io/manage) → API → Webhooks:
   - URL: `https://jouw-website.netlify.app/api/revalidate?secret=JOUW_SECRET`
   - Trigger: Create, Update, Delete
   - Filter: `_type in ["page", "siteSettings", "project"]`
   - Projection: `{ _type, "slug": slug }`
   - HTTP method: POST


## Lokale ontwikkeling

### Studio

```bash
cd studio
cp .env.example .env
npm install
npm run dev
```

Studio draait op [http://localhost:3333](http://localhost:3333).

### Website

```bash
cd website
cp .env.example .env.local
npm install
npm run dev
```

Website draait op [http://localhost:3000](http://localhost:3000).

## Deploy naar Netlify

Deploy **website** en **studio** als twee aparte Netlify sites vanuit dezelfde repository.

### Site 1: Website (Next.js)

| Instelling | Waarde |
|------------|--------|
| Base directory | *(leeg — repo root)* |
| Package directory | `website` |
| Build command | *(uit `website/netlify.toml`)* |
| Config file | `website/netlify.toml` |

**Environment variables:**

| Variabele | Voorbeeld |
|-----------|-----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `abc123xyz` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_REVALIDATE_SECRET` | `random-secret-string` |

### Site 2: Studio (Sanity CMS)

| Instelling | Waarde |
|------------|--------|
| Base directory | *(leeg — repo root)* |
| Package directory | `studio` |
| Build command | *(uit `studio/netlify.toml`)* |
| Publish directory | `dist` |
| Config file | `studio/netlify.toml` |

**Environment variables:**

| Variabele | Voorbeeld |
|-----------|-----------|
| `SANITY_STUDIO_PROJECT_ID` | `abc123xyz` |
| `SANITY_STUDIO_DATASET` | `production` |
| `SANITY_STUDIO_TITLE` | `Mijn Website` |

### Sanity CORS instellen

Ga naar [sanity.io/manage](https://sanity.io/manage) → jouw project → **API** → **CORS origins**.

Voeg toe (vervang met je echte Netlify-URLs):

- `https://jouw-website.netlify.app`
- `https://jouw-studio.netlify.app`

Zet **Allow credentials** aan voor beide origins.

## Veelgemaakte fouten

| Probleem | Oorzaak | Oplossing |
|----------|---------|-----------|
| Lege homepage / fetch errors | Ontbrekende of verkeerde env vars op Netlify | Controleer `NEXT_PUBLIC_SANITY_*` op de website site |
| Studio start niet lokaal | Geen `studio/.env` | Kopieer `.env.example` en vul project ID in |
| Studio 404 op subroutes | SPA-routing niet geconfigureerd | `studio/netlify.toml` redirects + `studio/public/_redirects` moeten aanwezig zijn |
| CORS errors in Studio | Netlify URL niet in Sanity CORS | Voeg studio-URL toe met credentials |
| Website en Studio praten langs elkaar | Verschillende project IDs | Zelfde `projectId` en `dataset` in beide apps |

## Content setup in Studio

Na de eerste deploy maak je in Studio minimaal deze content aan.

### 1. Site settings (singleton)

Open **Site settings** en vul in:

- Site name, site URL
- Default SEO (fallback voor pagina's)
- Contactgegevens
- Header/footer navigatie (links naar pagina's)

### 2. Standaard pagina's

| Pagina | Slug | URL | Aanbevolen blocks |
|--------|------|-----|-------------------|
| Home | `home` | `/` | hero → features → testimonial → cta |
| Contact | `contact` | `/contact` | hero → contactSection → faq |
| Projecten | `projects` | `/projects` | hero → projectsGrid |

Elke pagina heeft een **Metadata**-tab voor SEO (`title`, `description`, Open Graph image, `noIndex`).

### 3. Projecten

Voeg projecten toe onder **Projects**. Deze worden automatisch getoond in het **Projects grid** block.

### Meegeleverde schema's

| Schema | Type | Doel |
|--------|------|------|
| `siteSettings` | Singleton | Globale instellingen, nav, default SEO |
| `page` | Document | Pagina's met page builder + SEO |
| `project` | Document | Portfolio-items met SEO |
| `hero`, `features`, `faq`, `contactSection`, `projectsGrid`, `testimonial` | Blocks | Page builder secties |
| `richText`, `cta`, `imageBlock` | Blocks | Algemene content (via presets) |

Schema's die je niet nodig hebt, kun je per project verwijderen uit `studio/schemaTypes/index.ts` en de bijbehorende frontend block component.

## Technische stack

- **Frontend:** Next.js 16 (App Router), React, Tailwind CSS, shadcn/ui
- **CMS:** Sanity Studio v6, GROQ, TypeGen
- **Hosting:** Netlify (OpenNext adapter voor Next.js)

## TypeGen

Types worden gegenereerd vanuit het Sanity-schema en GROQ-queries:

```bash
cd studio
npm run typegen
```

Output: `website/src/sanity/sanity.types.ts`. Draai dit na elke schema- of query-wijziging. TypeGen draait ook automatisch tijdens `sanity dev`.
