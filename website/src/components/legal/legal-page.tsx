import Link from "next/link";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, PageHeading } from "@/components/ui/section";
import type { LegalPageContent } from "@/content/types";
import { buildWebPageSchema } from "@/lib/structured-data";

type LegalPageProps = {
  content: LegalPageContent;
  pathname: string;
  alternateLegalHref?: string;
  alternateLegalLabel?: string;
};

export function LegalPage({
  content,
  pathname,
  alternateLegalHref,
  alternateLegalLabel,
}: LegalPageProps) {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema(
          pathname,
          content.seo.title,
          content.seo.description,
        )}
      />
      <Section containerClassName="max-w-3xl">
        <BackToHomeLink className="mb-6" />
        <PageHeading className="text-4xl font-bold">
          {content.title}
        </PageHeading>

        {alternateLegalHref && alternateLegalLabel ? (
          <p className="mt-4 text-sm text-muted-foreground">
            <Link
              href={alternateLegalHref}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {alternateLegalLabel}
            </Link>
          </p>
        ) : null}

        <article className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <SectionDescription key={paragraph} className="mt-3">
                  {paragraph}
                </SectionDescription>
              ))}
              {section.list ? (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </Section>
    </>
  );
}
