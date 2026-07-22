"use client";

import Link from "next/link";
import { useState } from "react";

import { AgentCategoryFilters } from "@/components/agents/agent-category-filters";
import { CustomAgentCard } from "@/components/agents/custom-agent-card";
import { SectionLink } from "@/components/layout/section-link";
import { SectionLabel } from "@/components/landing/section-label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { AgentsPreviewContent } from "@/content/types";
import { contactWithAgent } from "@/lib/paths";
import { getIcon } from "@/lib/icons";
type AgentPreviewProps = {
  content: AgentsPreviewContent;
};

export function AgentPreview({ content }: AgentPreviewProps) {
  const [activeCategory, setActiveCategory] = useState(
    content.filterCategories[0] ?? "Alle",
  );

  const filteredAgents =
    activeCategory === "Alle"
      ? content.agents
      : content.agents.filter((agent) => agent.category === activeCategory);

  return (
    <Section id="ai-agents" overlap overhang>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <SectionHeading className="max-w-2xl text-4xl font-bold sm:text-5xl">
            {content.heading}
          </SectionHeading>
          <SectionDescription className="mt-4 max-w-xl">{content.subheading}</SectionDescription>
        </div>
        <Link
          href={content.marketplaceLink.href}
          className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-foreground hover:underline"
        >
          {content.marketplaceLink.label}
        </Link>
      </div>

      <AgentCategoryFilters
        categories={content.filterCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredAgents.map((agent) => {
          const Icon = getIcon(agent.icon);
          return (
            <li key={agent.title}>
              <Card className="flex h-full flex-col rounded-3xl border-border/80 py-0 shadow-sm">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-brand-highlight/10">
                      <Icon className="size-5 text-brand-accent" />
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      {agent.category}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    <Link
                      href={`/agents/${agent.slug}`}
                      className="hover:text-brand-accent"
                    >
                      {agent.title}
                    </Link>
                  </h3>
                  <SectionDescription className="mt-2 flex-1">
                    {agent.description}
                  </SectionDescription>
                  <div className="mt-6 space-y-4 border-t border-border pt-5">
                    <p className="text-base font-semibold text-foreground">{agent.price}</p>
                    <div className="flex flex-col gap-2.5">
                      <Button asChild variant="secondary" shape="pill" size="sm" className="w-full">
                        <Link href={`/agents/${agent.slug}`}>Meer info</Link>
                      </Button>
                      <Button asChild variant="primary" shape="pill" size="sm" className="w-full">
                        <SectionLink href={contactWithAgent(agent.slug)}>
                          Vraag demo →
                        </SectionLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          );
        })}
        <li>
          <CustomAgentCard content={content.customAgent} variant="preview" />
        </li>
      </ul>
    </Section>
  );
}
