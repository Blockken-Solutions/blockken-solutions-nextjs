"use client";

import Link from "next/link";
import { useState } from "react";

import { CustomAgentCard } from "@/components/agents/custom-agent-card";
import { SectionLabel } from "@/components/landing/section-label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import type { AgentsPreviewContent } from "@/content/types";
import { contactWithAgent } from "@/lib/paths";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

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
    <Section id="ai-agents" variant="muted">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <SectionHeading className="max-w-2xl text-4xl font-bold sm:text-5xl">
            {content.heading}
          </SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{content.subheading}</p>
        </div>
        <Link
          href={content.marketplaceLink.href}
          className="shrink-0 text-sm font-medium text-foreground hover:underline"
        >
          {content.marketplaceLink.label}
        </Link>
      </div>

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

      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredAgents.map((agent) => {
          const Icon = getIcon(agent.icon);
          return (
            <li key={agent.title}>
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
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {agent.title}
                  </h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                    {agent.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-foreground">{agent.price}</span>
                    <Button asChild variant="outline" shape="pill" size="sm">
                      <Link href={contactWithAgent(agent.slug)}>Vraag demo →</Link>
                    </Button>
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
