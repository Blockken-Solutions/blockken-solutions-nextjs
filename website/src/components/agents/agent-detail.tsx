import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionLink } from "@/components/layout/section-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, PageHeading } from "@/components/ui/section";
import { getAgentBySlug } from "@/content/agents";
import type { AgentListing } from "@/content/types";
import { contactWithAgent, homeSection } from "@/lib/paths";
import { getIcon } from "@/lib/icons";

type AgentDetailProps = {
  agent: AgentListing;
};

export function AgentDetail({ agent }: AgentDetailProps) {
  const Icon = getIcon(agent.icon);
  const relatedAgents = (agent.relatedSlugs ?? [])
    .map((slug) => getAgentBySlug(slug))
    .filter((relatedAgent): relatedAgent is AgentListing => Boolean(relatedAgent))
    .slice(0, 2);

  return (
    <Section fade={false}>
      <div className="mx-auto max-w-3xl">
        <Link
          href="/agents"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Alle agents
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-highlight/10">
            <Icon className="size-7 text-brand-accent" aria-hidden="true" />
          </div>
          <div>
            <Badge variant="secondary" className="rounded-full">
              {agent.category}
            </Badge>
            <PageHeading className="mt-3 text-4xl font-bold sm:text-5xl">
              {agent.title}
            </PageHeading>
            <p className="mt-2 text-lg font-semibold text-foreground">{agent.price}</p>
            {agent.includedInTier ? (
              <p className="mt-2 text-sm text-muted-foreground">
                Inbegrepen in pakket{" "}
                <SectionLink
                  href={homeSection("prijzen")}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {agent.includedInTier}
                </SectionLink>
                .
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {agent.longDescription}
        </p>

        <section className="mt-10" aria-labelledby="agent-use-cases-heading">
          <h2 id="agent-use-cases-heading" className="text-2xl font-bold text-foreground">
            Ideaal voor
          </h2>
          <ul className="mt-4 space-y-3">
            {agent.useCases.map((useCase) => (
              <li
                key={useCase}
                className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-highlight" />
                {useCase}
              </li>
            ))}
          </ul>
        </section>

        {relatedAgents.length > 0 ? (
          <section className="mt-10" aria-labelledby="related-agents-heading">
            <h2 id="related-agents-heading" className="text-2xl font-bold text-foreground">
              Gerelateerde agents
            </h2>
            <ul className="mt-4 space-y-3">
              {relatedAgents.map((relatedAgent) => (
                <li key={relatedAgent.slug}>
                  <Link
                    href={`/agents/${relatedAgent.slug}`}
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {relatedAgent.title}
                  </Link>
                  <span className="text-muted-foreground"> — {relatedAgent.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" shape="pill" size="lg">
            <SectionLink href={contactWithAgent(agent.slug)}>
              Vraag demo aan →
            </SectionLink>
          </Button>
          <Button asChild variant="secondary" shape="pill" size="lg">
            <Link href="/agents">Bekijk andere agents</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Vragen over prijs of implementatie?{" "}
          <Link
            href="/faq#kosten-ai-agent"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Bekijk FAQ over agent-prijzen
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
