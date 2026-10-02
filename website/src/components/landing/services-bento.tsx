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
    <Section id="oplossingen" variant="peach">
      <div className="max-w-3xl">
        <SectionLabel className="mb-4">{content.sectionLabel}</SectionLabel>
        <SectionHeading>{content.heading}</SectionHeading>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
        {content.items.map((item, index) => {
          const Icon = getIcon(item.icon);
          const isAccent = index % 3 === 1;
          return (
            <li key={item.title}>
              <Card
                variant={isAccent ? "orange" : "default"}
                className="h-full py-0"
              >
                <CardContent className="flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary-soft">
                    <Icon className="size-5 text-brand-highlight-text" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <SectionDescription
                    className={
                      isAccent
                        ? "mt-3 text-primary-foreground"
                        : "mt-3"
                    }
                  >
                    {item.description}
                  </SectionDescription>
                  {item.href ? (
                    <div className="mt-auto pt-6">
                      {item.href.startsWith("/#") ? (
                        <SectionLink
                          href={item.href}
                          className="text-base font-bold underline-offset-4 hover:underline"
                        >
                          {item.linkLabel ?? "Meer info →"}
                        </SectionLink>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-base font-bold underline-offset-4 hover:underline"
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
