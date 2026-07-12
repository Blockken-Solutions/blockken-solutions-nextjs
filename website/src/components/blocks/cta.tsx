import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { resolveLinkHref, resolveLinkLabel } from "@/sanity/metadata";
import type { CtaBlock } from "@/sanity/types";

type CtaProps = {
  block: CtaBlock;
};

export function Cta({ block }: CtaProps) {
  const href = resolveLinkHref(block.link);
  const label = resolveLinkLabel(block.link);

  return (
    <Section className="py-12">
      <Button asChild variant={block.level === 1 ? "default" : "outline"}>
        <Link
          href={href}
          target={block.link?.openInNewTab ? "_blank" : undefined}
          rel={block.link?.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {label}
        </Link>
      </Button>
    </Section>
  );
}
