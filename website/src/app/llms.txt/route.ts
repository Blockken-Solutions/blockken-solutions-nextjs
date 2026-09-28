import { aeoTypicalQuestions } from "@/content/aeo-prompts";
import { site } from "@/content/site";
import { faqPage, getAllFaqItems, stripFaqAnswerMarkdown } from "@/content/faq";
import { home } from "@/content/home";
import { pricing } from "@/content/pricing";
import { buildHowWeWorkSummary } from "@/lib/structured-data";

function absoluteUrl(pathname: string): string {
  return new URL(pathname, site.url).toString();
}

export function GET() {
  const definitionItems =
    faqPage.categories.find((category) => category.id === "begrippen")?.items ?? [];

  const body = `# ${site.name}

> ${site.seo.description}

## Over ons

blockken.solutions bouwt razendsnelle websites voor Belgische KMO's — volledig beheerd, met CMS, of met maatwerk en automatisering.
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

${pricing.pricingNote}

## Werkwijze

${buildHowWeWorkSummary()}

## Typische vragen

${aeoTypicalQuestions.map((item) => `- **${item.question}** ${item.answer}`).join("\n")}

## Veelgestelde vragen

${getAllFaqItems().map((item) => `- **${item.question}** ${stripFaqAnswerMarkdown(item.answer)}`).join("\n")}

## Contact

- E-mail: ${site.organization.email}
- Telefoon: ${site.contact.phone ?? ""}
- Website: ${site.url}

## Pagina's

- [Homepage](${absoluteUrl("/")})
- [Gratis website scan](${absoluteUrl("/gratis-scan")})
- [Plan een kennismakingsgesprek](${absoluteUrl("/plan-gesprek")})
- [FAQ](${absoluteUrl("/faq")})
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
