import { Check } from "lucide-react";

import { SectionLink } from "@/components/layout/section-link";
import { SectionLabel } from "@/components/landing/section-label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
              <Check className="size-3.5 text-brand-orange" />
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
        <Badge className="absolute top-0 left-1/2 z-10 -translate-x-1/2 rounded-full border border-brand-orange/20 bg-brand-orange px-3 py-1 text-white">
          Meest Gekozen
        </Badge>
      ) : null}
      <Card
        className={cn(
          "flex h-full flex-col rounded-3xl py-0 shadow-sm",
          tier.isPopular
            ? "border-2 border-brand-orange bg-brand-orange/3 shadow-orange-glow"
            : "border-border/80",
        )}
      >
        <CardContent className="flex flex-1 flex-col p-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {tier.audience}
            </p>
          </div>

          <div className="mt-8">
            <FeatureList group={tier.setup} />
          </div>

          <div className="my-6 border-t border-border" />

          <FeatureList group={tier.subscription} />

          <div className="mt-auto pt-8">
            <Button
              asChild
              variant={tier.isPopular ? "orange" : "outline"}
              shape="pill"
              className="w-full"
            >
              <SectionLink href={tier.cta.href}>{tier.cta.label}</SectionLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}

export function PricingSection({ content }: PricingSectionProps) {
  return (
    <Section id="prijzen">
      <div className="text-center">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          {content.heading}
        </SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {content.subheading}
        </p>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {content.tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </ul>

      <div className="mt-14">
        <h3 className="text-center text-2xl font-bold text-foreground">
          {content.addons.heading}
        </h3>
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-border/80 bg-card p-6">
          <ul className="divide-y divide-border">
            {content.addons.items.map((addon) => (
              <li
                key={addon.name}
                className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="text-base text-foreground">{addon.name}</span>
                <span className="shrink-0 text-base font-semibold text-foreground sm:text-right">
                  {addon.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
