import { SectionLink } from "@/components/layout/section-link";
import { HeroClientLogos } from "@/components/landing/hero-client-logos";
import { HeroDecoration } from "@/components/landing/hero-decoration";
import { HeroServiceChips } from "@/components/landing/hero-service-chips";
import { HeroStats } from "@/components/landing/hero-stats";
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
  const [headlineLead, ...headlineRest] = content.headlineLines;

  return (
    <Section
      id="hero"
      className="hero-section relative isolate -mt-[var(--header-offset)] overflow-x-clip px-0 py-0"
      background={<HeroDecoration />}
      containerClassName="px-[var(--container-px)] pb-10 pt-[calc(var(--header-offset)+2.5rem)] sm:pb-12 sm:pt-[calc(var(--header-offset)+3rem)] lg:pb-14 lg:pt-[calc(var(--header-offset)+3.5rem)]"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="animate-fade-up mb-5 inline-flex">
          <span className="section-eyebrow inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs text-brand-highlight-text">
            <span className="relative flex size-2 shrink-0" aria-hidden="true">
              <span className="status-available-dot-ping absolute inline-flex size-full animate-ping rounded-full opacity-55" />
              <span className="status-available-dot relative inline-flex size-2 rounded-full" />
            </span>
            {content.badge}
          </span>
        </div>

        <h1 className="hero-title hero-title--compact animate-fade-up text-foreground">
          {headlineLead ? (
            <span className="block">
              <span className="text-brand-highlight">{headlineLead.split(" ")[0]}</span>
              {headlineLead.includes(" ")
                ? ` ${headlineLead.split(" ").slice(1).join(" ")}`
                : null}
            </span>
          ) : null}
          {headlineRest.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="animate-fade-up delay-80 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {content.subheadline}
        </p>

        {content.summary ? (
          <SectionDescription className="animate-fade-up delay-160 mx-auto mt-3 max-w-2xl">
            {content.summary}
          </SectionDescription>
        ) : null}

        <div className="animate-fade-up delay-240 mt-8 flex w-full max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row">
          <Button asChild variant="primary" shape="pill" size="cta" className="w-full sm:w-auto">
            <SectionLink href={content.primaryCta.href}>
              <ButtonLabel>{content.primaryCta.label}</ButtonLabel>
            </SectionLink>
          </Button>
          <Button asChild variant="secondary" shape="pill" size="cta" className="w-full sm:w-auto">
            <SectionLink href={content.secondaryCta.href}>
              <ButtonLabel>{content.secondaryCta.label}</ButtonLabel>
            </SectionLink>
          </Button>
        </div>

        <div className="animate-fade-up delay-240 w-full">
          <HeroStats items={content.stats} />
          <HeroServiceChips chips={content.serviceChips} />
          <TrustBar
            items={content.trustBarItems}
            layout="center"
            className="mt-6"
          />
          <HeroClientLogos label={content.clientLogosLabel} logos={content.clientLogos} />
        </div>
      </div>
    </Section>
  );
}
