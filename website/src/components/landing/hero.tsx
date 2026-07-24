import { SectionLink } from "@/components/layout/section-link";
import { SectionLabel } from "@/components/landing/section-label";
import { TrustBar } from "@/components/landing/trust-bar";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { SectionDescription } from "@/components/ui/section-description";
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
      <SectionLabel className="mb-8">{content.badge}</SectionLabel>

      <h1 className="font-lcp mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {content.headlineLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block text-brand-highlight">{content.headlineHighlight}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {content.subheadline}
      </p>

      {content.summary ? (
        <SectionDescription className="mx-auto mt-4 max-w-2xl">
          {content.summary}
        </SectionDescription>
      ) : null}

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild variant="primary" shape="pill" size="cta">
          <SectionLink href={content.primaryCta.href}>
            <ButtonLabel>{content.primaryCta.label}</ButtonLabel>
          </SectionLink>
        </Button>
        <Button asChild variant="secondary" shape="pill" size="cta">
          <SectionLink href={content.secondaryCta.href}>
            <ButtonLabel>{content.secondaryCta.label}</ButtonLabel>
          </SectionLink>
        </Button>
      </div>

      <TrustBar items={content.trustBarItems} />
    </Section>
  );
}
