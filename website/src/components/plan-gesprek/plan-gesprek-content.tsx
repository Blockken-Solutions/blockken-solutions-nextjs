import { CalendlyEmbed } from "@/components/calendly/calendly-embed";
import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLabel } from "@/components/landing/section-label";
import { Section, PageHeading } from "@/components/ui/section";
import type { PlanGesprekPageContent } from "@/content/types";

type PlanGesprekContentProps = {
  content: PlanGesprekPageContent;
  calendlyUrl: string | null;
};

export function PlanGesprekContent({ content, calendlyUrl }: PlanGesprekContentProps) {
  return (
    <Section fade={false}>
      <div className="mx-auto max-w-4xl">
        <BackToHomeLink className="mb-6" />
        <SectionLabel>{content.sectionLabel}</SectionLabel>
        <PageHeading className="text-4xl font-bold sm:text-5xl">
          {content.heading}
        </PageHeading>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {content.subheading}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {content.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-3xl border border-border bg-card shadow-sm">
          <CalendlyEmbed url={calendlyUrl} layout="page" />
        </div>
      </div>
    </Section>
  );
}
