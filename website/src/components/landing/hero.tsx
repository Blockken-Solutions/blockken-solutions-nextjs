import { Sparkles } from "lucide-react";

import { SectionLink } from "@/components/layout/section-link";
import { TrustBar } from "@/components/landing/trust-bar";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { HeroContent } from "@/content/types";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <Section
      id="hero"
      className="-mt-[var(--header-offset)] py-0 pb-8 pt-[calc(var(--header-offset)+2.5rem)] text-center sm:pt-[calc(var(--header-offset)+3.5rem)]"
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
        <Sparkles className="size-3.5 text-brand-orange" />
        {content.badge}
      </div>

      <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {content.headlineLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block text-brand-orange">{content.headlineHighlight}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        {content.subheadline}
      </p>

      {content.summary ? (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          {content.summary}
        </p>
      ) : null}

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild variant="orange" shape="pill" size="lg" className="h-11 px-6 text-base">
          <SectionLink href={content.primaryCta.href}>{content.primaryCta.label}</SectionLink>
        </Button>
        <Button
          asChild
          variant="outline"
          shape="pill"
          size="lg"
          className="h-11 border-border bg-card px-6 text-base shadow-sm"
        >
          <SectionLink href={content.secondaryCta.href}>{content.secondaryCta.label}</SectionLink>
        </Button>
      </div>

      <TrustBar items={content.trustBarItems} />
    </Section>
  );
}
