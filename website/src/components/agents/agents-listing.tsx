"use client";

import { useState } from "react";

import { CustomAgentCard } from "@/components/agents/custom-agent-card";
import { SectionLink } from "@/components/layout/section-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section";
import type { AgentsPageContent } from "@/content/types";
import { contactWithAgent } from "@/lib/paths";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

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
      <div className="mt-8 inline-flex flex-wrap gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm">
        {content.filterCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredAgents.map((agent) => {
          const Icon = getIcon(agent.icon);
          return (
            <li key={agent.slug} id={agent.slug}>
              <Card className="flex h-full flex-col rounded-2xl border-border/80 py-0 shadow-sm">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10">
                      <Icon className="size-4 text-brand-orange" />
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      {agent.category}
                    </Badge>
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-foreground">
                    {agent.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {agent.longDescription}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {agent.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="text-base text-muted-foreground before:mr-2 before:text-brand-orange before:content-['•']"
                      >
                        {useCase}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-foreground">
                      {agent.price}
                    </span>
                    <Button asChild variant="outline" shape="pill" size="sm">
                      <SectionLink href={contactWithAgent(agent.slug)}>Vraag demo →</SectionLink>
                    </Button>
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
      <SectionHeading className="text-4xl font-bold sm:text-5xl">
        {content.heading}
      </SectionHeading>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {content.subheading}
      </p>
    </>
  );
}
