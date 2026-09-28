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
  onAccent?: boolean;
};

function FeatureList({ group, onAccent = false }: FeatureListProps) {
  return (
    <div>
      <p
        className={cn(
          "font-label text-xs",
          onAccent ? "text-primary-foreground-muted" : "text-muted-foreground",
        )}
      >
        {group.label}
      </p>
      <p className="mt-2 text-2xl font-bold tracking-tight">{group.price}</p>
      <ul className="mt-4 space-y-4">
        {group.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft">
              <Check className="size-3.5 text-brand-highlight-text" />
            </span>
            <span className="text-base leading-relaxed">{feature}</span>
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
    <li className={cn(tier.isPopular && "relative pt-6")}>
      {tier.isPopular ? (
        <Badge
          variant="outline"
          className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shadow-soft"
        >
          Meest Gekozen
        </Badge>
      ) : null}
      <Card
        variant={tier.isPopular ? "orange" : "default"}
        className="flex h-full flex-col py-0"
      >
        <CardContent className="flex flex-1 flex-col p-6 sm:p-8">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{tier.name}</h3>
            <SectionDescription
              className={cn(
                "mt-3",
                tier.isPopular && "text-primary-foreground",
              )}
            >
              {tier.audience}
            </SectionDescription>
          </div>

          <div className="mt-8">
            <FeatureList group={tier.setup} onAccent={tier.isPopular} />
          </div>

          <div className="my-6 border-t border-border" />

          <FeatureList group={tier.subscription} onAccent={tier.isPopular} />

          <div className="mt-auto pt-8">
            <Button
              asChild
              variant={tier.isPopular ? "secondary" : "primary"}
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
    <Section id="prijzen">
      <div className="max-w-3xl">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading>{content.heading}</SectionHeading>
        <SectionDescription className="mt-4 max-w-2xl">
          {content.subheading}
        </SectionDescription>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {content.tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </ul>

      <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        {content.pricingNote}
      </p>
    </Section>
  );
}
