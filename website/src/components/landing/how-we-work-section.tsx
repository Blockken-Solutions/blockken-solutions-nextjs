import Link from "next/link";

import { SectionLabel } from "@/components/landing/section-label";
import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
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
    <Section id="hoe-het-werkt" variant="muted">
      <div className="text-center">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          {content.heading}
        </SectionHeading>
        <SectionDescription className="mx-auto mt-4 max-w-2xl">
          {content.subheading}
        </SectionDescription>
      </div>

      <ol className="relative mt-14 hidden gap-6 lg:grid lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] h-px bg-linear-to-r from-transparent via-brand-orange/40 to-transparent"
        />
        {content.steps.map((step) => {
          const Icon = getIcon(step.icon);
          return (
            <li key={step.step} className="relative text-center">
              <div className="mx-auto flex size-20 flex-col items-center justify-center gap-1">
                <span className="flex size-14 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-background shadow-sm">
                  <Icon className="size-6 text-brand-orange" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-wider text-brand-orange uppercase">
                  Stap {step.step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{step.title}</h3>
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
                    "flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-background shadow-sm",
                  )}
                >
                  <Icon className="size-5 text-brand-orange" aria-hidden="true" />
                </span>
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 border-l border-dashed border-brand-orange/30"
                  />
                ) : null}
              </div>
              <div className="min-w-0 pt-1 pb-2">
                <p className="text-xs font-bold tracking-wider text-brand-orange uppercase">
                  Stap {step.step}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild variant="orange" shape="pill" size="lg">
          <SectionLink href={content.primaryCta.href}>
            {content.primaryCta.label}
          </SectionLink>
        </Button>
        <Button asChild variant="outline" shape="pill" size="lg">
          <Link href={content.secondaryCta.href}>{content.secondaryCta.label}</Link>
        </Button>
      </div>
    </Section>
  );
}
