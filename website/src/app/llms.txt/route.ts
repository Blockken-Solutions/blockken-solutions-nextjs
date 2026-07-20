import { site } from "@/content/site";
import { agentsPage } from "@/content/agents";
import { getAllFaqItems } from "@/content/faq";
import { home } from "@/content/home";

function absoluteUrl(pathname: string): string {
  return new URL(pathname, site.url).toString();
}

export function GET() {
  const body = `# ${site.name}

> ${site.seo.description}

## Over ons

blockken.solutions bouwt razendsnelle webapplicaties en slimme AI-agents voor Belgische KMO's.
Opgericht door ${site.author.name}, ${site.author.role}.
${site.footerTagline}

## Diensten

${home.services.items.map((service) => `- **${service.title}**: ${service.description}`).join("\n")}

## AI Agents

${agentsPage.agents.map((agent) => `- **${agent.title}** (${agent.price}): ${agent.description}`).join("\n")}

## Veelgestelde vragen

${getAllFaqItems().slice(0, 5).map((item) => `- **${item.question}** ${item.answer}`).join("\n")}

## Contact

- E-mail: ${site.organization.email}
- Website: ${site.url}

## Pagina's

- [Homepage](${absoluteUrl("/")})
- [Gratis Website Scan](${absoluteUrl("/gratis-scan")})
- [FAQ](${absoluteUrl("/faq")})
- [AI Agents](${absoluteUrl("/agents")})
- [Privacybeleid](${absoluteUrl("/privacy")})
- [Algemene voorwaarden](${absoluteUrl("/terms")})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
