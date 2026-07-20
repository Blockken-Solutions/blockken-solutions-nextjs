import { site } from "@/content/site";
import { agentsPage } from "@/content/agents";
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

blockken.solutions bouwt razendsnelle webapplicaties en slimme AI-agents voor Belgische KMO's.
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

${pricing.extraAgentNote}

## Werkwijze

${buildHowWeWorkSummary()}

## AI Agents

${agentsPage.agents.map((agent) => `- **${agent.title}** (${agent.price}): ${agent.description} Meer info: ${absoluteUrl(`/agents/${agent.slug}`)}`).join("\n")}

## Veelgestelde vragen

${getAllFaqItems().map((item) => `- **${item.question}** ${stripFaqAnswerMarkdown(item.answer)}`).join("\n")}

## Contact

- E-mail: ${site.organization.email}
- Telefoon: ${site.contact.phone ?? ""}
- Website: ${site.url}

## Pagina's

- [Homepage](${absoluteUrl("/")})
- [Gratis Website Scan](${absoluteUrl("/gratis-scan")})
- [FAQ](${absoluteUrl("/faq")})
- [AI Agents](${absoluteUrl("/agents")})
${agentsPage.agents.map((agent) => `- [${agent.title}](${absoluteUrl(`/agents/${agent.slug}`)})`).join("\n")}
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
