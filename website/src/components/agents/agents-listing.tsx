"use client";

import Link from "next/link";
import { useState } from "react";

import { AgentCategoryFilters } from "@/components/agents/agent-category-filters";
import { CustomAgentCard } from "@/components/agents/custom-agent-card";
import { SectionLink } from "@/components/layout/section-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Card, CardContent } from "@/components/ui/card";
import { Section, PageHeading } from "@/components/ui/section";
import type { AgentsPageContent } from "@/content/types";
import { contactWithAgent } from "@/lib/paths";
import { getIcon } from "@/lib/icons";
type AgentsListingProps = {
  content: AgentsPageContent;
};

export function AgentsListing({ content }: AgentsListingProps) {
  const [activeCategory, setActiveCategory] = useState(
    content.filterCategories[0] ?? "Alle",
  );

  const filteredAgents =
    activeCategory === "Alle"
      ? content.agents
      : content.agents.filter((agent) => agent.category === activeCategory);

  return (
    <>
      <AgentCategoryFilters
        categories={content.filterCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredAgents.map((agent) => {
          const Icon = getIcon(agent.icon);
          return (
            <li key={agent.slug} id={agent.slug}>
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
                  <h2 className="mt-4 text-lg font-bold text-foreground">
                    <Link
                      href={`/agents/${agent.slug}`}
                      className="hover:text-brand-accent"
                    >
                      {agent.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {agent.longDescription}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {agent.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="text-base text-muted-foreground before:mr-2 before:text-brand-highlight before:content-['•']"
                      >
                        {useCase}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-4 border-t border-border pt-5">
                    <p className="text-base font-semibold text-foreground">
                      {agent.price}
                    </p>
                    <div className="flex flex-col gap-2.5 sm:flex-row">
                      <Button asChild variant="secondary" shape="pill" size="sm" className="sm:flex-1">
                        <Link href={`/agents/${agent.slug}`}>Meer info</Link>
                      </Button>
                      <Button asChild variant="primary" shape="pill" size="sm" className="sm:flex-1">
                        <SectionLink href={contactWithAgent(agent.slug)}>
                          <ButtonLabel>Vraag demo →</ButtonLabel>
                        </SectionLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          );
        })}
        <li id="agent-op-maat">
          <CustomAgentCard content={content.customAgent} variant="listing" />
        </li>
      </ul>
    </>
  );
}

type AgentsPageHeaderProps = {
  content: AgentsPageContent;
};

export function AgentsPageHeader({ content }: AgentsPageHeaderProps) {
  return (
    <>
      <PageHeading className="text-4xl font-bold sm:text-5xl">
        {content.heading}
      </PageHeading>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {content.subheading}
      </p>
    </>
  );
}
