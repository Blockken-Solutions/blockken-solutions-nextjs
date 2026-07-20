import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import type { LegalPageContent } from "@/content/types";
import { buildWebPageSchema } from "@/lib/structured-data";

type LegalPageProps = {
  content: LegalPageContent;
  pathname: string;
};

export function LegalPage({ content, pathname }: LegalPageProps) {
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
        <SectionHeading className="text-4xl font-bold">
          {content.title}
        </SectionHeading>

        <article className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
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
