import Link from "next/link";

import { FaqAnswer } from "@/components/faq/faq-answer";
import { SectionLabel } from "@/components/landing/section-label";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { FaqTeaserContent } from "@/content/types";

type FaqTeaserProps = {
  content: FaqTeaserContent;
};

export function FaqTeaser({ content }: FaqTeaserProps) {
  return (
    <Section id="faq" variant="muted">
      <SectionLabel>FAQ</SectionLabel>
      <SectionHeading className="text-3xl font-bold sm:text-4xl">
        {content.heading}
      </SectionHeading>
      <SectionDescription className="mt-4 max-w-2xl">{content.subheading}</SectionDescription>

      <dl className="mt-8 grid gap-6 md:grid-cols-2">
        {content.items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-border bg-card p-5 shadow-sm"
          >
            <dt className="font-semibold text-foreground">{item.question}</dt>
            <SectionDescription as="dd" className="mt-2">
              {item.teaser ?? item.answer}
            </SectionDescription>
            <dd className="mt-3">
              <Link
                href={`/faq#${item.id}`}
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Lees volledig antwoord →
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <Button asChild variant="secondary" shape="pill" size="cta">
          <Link href={content.cta.href}>
            <ButtonLabel>{content.cta.label}</ButtonLabel>
          </Link>
        </Button>
      </div>
    </Section>
  );
}
