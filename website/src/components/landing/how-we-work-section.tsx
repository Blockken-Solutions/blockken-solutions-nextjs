import { SectionLabel } from "@/components/landing/section-label";
import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { HowWeWorkContent } from "@/content/types";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

type HowWeWorkSectionProps = {
  content: HowWeWorkContent;
};

export function HowWeWorkSection({ content }: HowWeWorkSectionProps) {
  return (
    <Section id="hoe-het-werkt" variant="default">
      <div className="max-w-3xl">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading>{content.heading}</SectionHeading>
        <SectionDescription className="mt-4 max-w-2xl">
          {content.subheading}
        </SectionDescription>
      </div>

      <ol className="relative mt-14 hidden gap-6 lg:grid lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] h-1 bg-border"
        />
        {content.steps.map((step) => {
          const Icon = getIcon(step.icon);
          return (
            <li key={step.step} className="relative text-center">
              <div className="mx-auto flex size-20 flex-col items-center justify-center gap-1">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary shadow-soft">
                  <Icon className="size-6 text-primary-foreground" aria-hidden="true" />
                </span>
                <span className="font-label mt-2 text-xs text-brand-highlight-text">
                  Stap {step.step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>

      <ol className="relative mt-14 space-y-0 lg:hidden">
        {content.steps.map((step, index) => {
          const Icon = getIcon(step.icon);
          const isLast = index === content.steps.length - 1;
          return (
            <li key={step.step} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-soft",
                  )}
                >
                  <Icon className="size-5 text-primary-foreground" aria-hidden="true" />
                </span>
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1 flex-1 bg-border"
                  />
                ) : null}
              </div>
              <div className="min-w-0 pt-1 pb-2">
                <p className="font-label text-xs text-brand-highlight-text">
                  Stap {step.step}
                </p>
                <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
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
    </Section>
  );
}
