import { Section, SectionHeading } from "@/components/ui/section";
import type { FeaturesBlock } from "@/sanity/types";

type FeaturesProps = {
  block: FeaturesBlock;
};

export function Features({ block }: FeaturesProps) {
  return (
    <Section>
      {block.heading ? (
        <SectionHeading className="mb-10">{block.heading}</SectionHeading>
      ) : null}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {block.items?.map((item) => (
          <li
            key={item.title ?? item.description ?? "feature"}
            className="rounded-lg border border-border bg-card p-6"
          >
            {item.icon ? (
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {item.icon}
              </p>
            ) : null}
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            {item.description ? (
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
