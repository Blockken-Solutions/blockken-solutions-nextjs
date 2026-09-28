# SEO / AEO prelaunch checklist

Uitvoeren vlak voor of direct na go-live van de refactor.

## Google Rich Results Test

Test deze URL's (vervang host indien staging):

- `https://blockken.solutions/`
- `https://blockken.solutions/faq`
- `https://blockken.solutions/gratis-scan`

Tool: [Rich Results Test](https://search.google.com/test/rich-results)

Verwacht:

- `/faq`: FAQPage + WebPage
- `/`: WebPage, HowTo, Offer (geen FAQPage op homepage)
- `/gratis-scan`: WebPage, SoftwareApplication, HowTo

## Google Search Console

1. Property `https://blockken.solutions`
2. Sitemap: `https://blockken.solutions/sitemap.xml` (6 indexeerbare pagina's)
3. URL-inspectie: homepage, `/faq`, `/gratis-scan`
4. Monitor 301's van oude `/blocks/*` en `/sectoren/*` bookmarks

## AI spot-check (handmatig)

Vraag in ChatGPT / Perplexity / Gemini:

- "Wat doet blockken.solutions?"
- "Wat kost een website voor een KMO in België?"
- "Hoe vindbaar ben ik in ChatGPT met mijn website?"

Vergelijk antwoorden met `/llms.txt` en `/faq`. Bij afwijking: content of llms.txt bijsturen.

## Lighthouse baseline (lokaal)

```bash
cd website
npm run build && npm start
# andere terminal:
npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-home.html
npx lighthouse http://localhost:3000/gratis-scan --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-gratis-scan.html
npx lighthouse http://localhost:3000/faq --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-faq.html
npx lighthouse http://localhost:3000/plan-gesprek --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-plan-gesprek.html
```

Calendly laadt enkel op `/plan-gesprek`; andere pagina's zouden hoger scoren op best practices dan vóór de refactor.

### Baseline na refactor-implementatie (lokaal, productie-build, 28 sep 2026)

| Route | Perf | A11y | Best practices | SEO | LCP | CLS |
|-------|------|------|----------------|-----|-----|-----|
| `/` | 95 | 97 | 100 | 100 | 3,0 s | 0 |
| `/gratis-scan` | 76 | 96 | 100 | 100 | 2,9 s | 0,428 |
| `/faq` | 95 | 96 | 100 | 100 | 2,9 s | 0 |
| `/plan-gesprek` | 94 | 100 | 73 | 100 | 3,1 s | 0 |

JSON-rapporten: `website/lighthouse-reports/*.json` (lokaal gegenereerd, niet committen).

**Opmerkingen**

- `/plan-gesprek`: best practices ~73 door Calendly third-party cookies (verwacht zolang embed actief is).
- `/gratis-scan`: CLS ~0,43 bij cold load — verder onderzoeken (layout shift bij hydratatie/fonts); SEO blijft 100.
