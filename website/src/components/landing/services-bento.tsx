import { SectionLabel } from "@/components/landing/section-label";
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
                <CardContent className="p-8">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-brand-orange/10">
                    <Icon className="size-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
