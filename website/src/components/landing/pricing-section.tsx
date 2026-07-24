import Link from "next/link";
import { Check } from "lucide-react";

import { SectionLink } from "@/components/layout/section-link";
import { SectionLabel } from "@/components/landing/section-label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Card, CardContent } from "@/components/ui/card";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { PricingContent, PricingFeatureGroup, PricingTier } from "@/content/types";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  content: PricingContent;
};

type FeatureListProps = {
  group: PricingFeatureGroup;
};

function FeatureList({ group }: FeatureListProps) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {group.label}
      </p>
      <p className="mt-2 text-2xl font-bold text-foreground">{group.price}</p>
      <ul className="mt-4 space-y-4">
        {group.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-highlight/10">
              <Check className="size-3.5 text-brand-accent" />
            </span>
            <span className="text-base leading-relaxed text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type PricingCardProps = {
  tier: PricingTier;
};

function PricingCard({ tier }: PricingCardProps) {
  return (
    <li className={cn(tier.isPopular && "relative pt-4 md:pt-0")}>
      {tier.isPopular ? (
        <Badge className="absolute top-0 left-1/2 z-10 -translate-x-1/2 rounded-full border border-brand-highlight/20 bg-brand-accent px-3 py-1 font-semibold text-white">
          Meest Gekozen
        </Badge>
      ) : null}
      <Card
        className={cn(
          "flex h-full flex-col rounded-3xl py-0 shadow-sm",
          tier.isPopular
            ? "border-2 border-brand-highlight/30 bg-brand-highlight/3 transition-shadow hover:shadow-accent-glow"
            : "border-border/80",
        )}
      >
        <CardContent className="flex flex-1 flex-col p-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
            <SectionDescription className="mt-3">{tier.audience}</SectionDescription>
          </div>

          <div className="mt-8">
            <FeatureList group={tier.setup} />
          </div>

          <div className="my-6 border-t border-border" />

          <FeatureList group={tier.subscription} />

          <div className="mt-auto pt-8">
            <Button
              asChild
              variant={tier.isPopular ? "primary" : "secondary"}
              shape="pill"
              size="cta"
              className="w-full"
            >
              <SectionLink href={tier.cta.href}>
                <ButtonLabel>{tier.cta.label}</ButtonLabel>
              </SectionLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}

export function PricingSection({ content }: PricingSectionProps) {
  return (
    <Section id="prijzen" variant="muted" overhang>
      <div className="text-center">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          {content.heading}
        </SectionHeading>
        <SectionDescription className="mx-auto mt-4 max-w-2xl">
          {content.subheading}
        </SectionDescription>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {content.tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
        {content.extraAgentNote}{" "}
        <Link
          href="/faq#kosten-ai-agent"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Meer over agent-prijzen
        </Link>{" "}
        of{" "}
        <Link
          href="/faq"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          bekijk alle FAQ
        </Link>
        .
      </p>
    </Section>
  );
}
