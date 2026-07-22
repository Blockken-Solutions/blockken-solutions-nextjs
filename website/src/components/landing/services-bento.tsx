import Link from "next/link";

import { SectionLink } from "@/components/layout/section-link";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionDescription } from "@/components/ui/section-description";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import type { ServicesContent } from "@/content/types";
import { getIcon } from "@/lib/icons";

type ServicesBentoProps = {
  content: ServicesContent;
};

export function ServicesBento({ content }: ServicesBentoProps) {
  return (
    <Section id="oplossingen">
      <div className="text-center">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
          {content.heading}
        </SectionHeading>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {content.items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <li key={item.title}>
              <Card className="h-full rounded-3xl border-border/80 py-0 shadow-sm">
                <CardContent className="flex h-full flex-col p-8">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-brand-highlight/10">
                    <Icon className="size-5 text-brand-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <SectionDescription className="mt-3">{item.description}</SectionDescription>
                  {item.href ? (
                    <div className="mt-auto pt-6">
                      {item.href.startsWith("/#") ? (
                        <SectionLink
                          href={item.href}
                          className="text-sm font-medium text-foreground underline-offset-4 hover:text-brand-accent hover:underline"
                        >
                          {item.linkLabel ?? "Meer info →"}
                        </SectionLink>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-foreground underline-offset-4 hover:text-brand-accent hover:underline"
                        >
                          {item.linkLabel ?? "Meer info →"}
                        </Link>
                      )}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
