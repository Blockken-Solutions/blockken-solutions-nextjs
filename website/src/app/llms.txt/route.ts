import { site } from "@/content/site";
import { blocksPage } from "@/content/blocks";
import { sectors } from "@/content/sectors";
import { faqPage, getAllFaqItems, stripFaqAnswerMarkdown } from "@/content/faq";
import { home } from "@/content/home";
import { pricing } from "@/content/pricing";
import { buildHowWeWorkSummary } from "@/lib/structured-data";

function absoluteUrl(pathname: string): string {
  return new URL(pathname, site.url).toString();
}

export function GET() {
  const definitionItems = faqPage.categories.find((category) => category.id === "begrippen")?.items ?? [];

  const body = `# ${site.name}

> ${site.seo.description}

## Over ons

blockken.solutions bouwt razendsnelle websites met hapklare Blocks voor Belgische KMO's.
Opgericht door ${site.author.name}, ${site.author.role}.
Vestigingsregio: ${site.organization.address.addressRegion}, ${site.organization.address.addressLocality}.
${site.footerTagline}

## Begrippen

${definitionItems.map((item) => `- **${item.question}** ${item.answer}`).join("\n")}

## Diensten

${home.services.items.map((service) => `- **${service.title}**: ${service.description}`).join("\n")}

## Pakketten & prijzen

${pricing.tiers
  .map(
    (tier) =>
      `- **${tier.name}**: ${tier.setup.price} (${tier.setup.label}) + ${tier.subscription.price} (${tier.subscription.label}). ${tier.audience}`,
  )
  .join("\n")}

${pricing.extraBlockNote}

${pricing.extraContentNote}

## Werkwijze

${buildHowWeWorkSummary()}

## Blocks

${blocksPage.blocks.map((block) => `- **${block.title}**: ${block.description} Meer info: ${absoluteUrl(`/blocks/${block.slug}`)}`).join("\n")}

## Sectoren

${sectors.map((sector) => `- **${sector.title}**: ${sector.intro} Meer info: ${absoluteUrl(`/sectoren/${sector.slug}`)}`).join("\n")}

## Veelgestelde vragen

${getAllFaqItems().map((item) => `- **${item.question}** ${stripFaqAnswerMarkdown(item.answer)}`).join("\n")}

## Contact

- E-mail: ${site.organization.email}
- Telefoon: ${site.contact.phone ?? ""}
- Website: ${site.url}

## Pagina's

- [Homepage](${absoluteUrl("/")})
- [Gratis website scan](${absoluteUrl("/gratis-scan")})
- [FAQ](${absoluteUrl("/faq")})
- [Blocks](${absoluteUrl("/blocks")})
- [Sectoren](${absoluteUrl("/sectoren")})
${blocksPage.blocks.map((block) => `- [${block.title}](${absoluteUrl(`/blocks/${block.slug}`)})`).join("\n")}
${sectors.map((sector) => `- [${sector.title}](${absoluteUrl(`/sectoren/${sector.slug}`)})`).join("\n")}
- [Privacybeleid](${absoluteUrl("/privacy")})
- [Algemene voorwaarden](${absoluteUrl("/terms")})
- [llms.txt](${absoluteUrl("/llms.txt")})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
