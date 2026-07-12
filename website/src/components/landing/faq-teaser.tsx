import Link from "next/link";

import { SectionLabel } from "@/components/landing/section-label";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import type { FaqTeaserContent } from "@/content/types";

type FaqTeaserProps = {
  content: FaqTeaserContent;
};

export function FaqTeaser({ content }: FaqTeaserProps) {
  return (
    <Section id="faq" variant="muted" className="rounded-t-3xl">
      <SectionLabel>FAQ</SectionLabel>
      <SectionHeading className="text-3xl font-bold sm:text-4xl">
        {content.heading}
      </SectionHeading>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{content.subheading}</p>

      <dl className="mt-8 grid gap-6 md:grid-cols-2">
        {content.items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <dt className="font-semibold text-foreground">{item.question}</dt>
            <dd className="mt-2 text-base leading-relaxed text-muted-foreground">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <Button asChild variant="outline" shape="pill">
          <Link href={content.cta.href}>{content.cta.label}</Link>
        </Button>
      </div>
    </Section>
  );
}
