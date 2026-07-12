import { Section, SectionHeading } from "@/components/ui/section";
import type { FaqBlock } from "@/sanity/types";

type FaqProps = {
  block: FaqBlock;
};

export function Faq({ block }: FaqProps) {
  return (
    <Section variant="muted" containerClassName="max-w-3xl">
      {block.heading ? (
        <SectionHeading className="mb-10">{block.heading}</SectionHeading>
      ) : null}
      <div className="space-y-4">
        {block.items?.map((item) => (
          <details
            key={item.question ?? item.answer ?? "faq"}
            className="rounded-lg border border-border bg-card p-5"
          >
            <summary className="cursor-pointer font-medium text-foreground">
              {item.question}
            </summary>
            <p className="mt-3 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
