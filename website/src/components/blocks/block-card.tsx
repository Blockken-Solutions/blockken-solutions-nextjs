import Link from "next/link";

import { SectionLink } from "@/components/layout/section-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { SectionDescription } from "@/components/ui/section-description";
import type { BlockItem, BlockListing } from "@/content/types";
import { contactWithBlock } from "@/lib/paths";
import { cn } from "@/lib/utils";

type BlockCardProps = {
  block: BlockItem | BlockListing;
  variant?: "preview" | "listing";
  className?: string;
};

function isBlockListing(block: BlockItem | BlockListing): block is BlockListing {
  return "includes" in block;
}

export function BlockCard({ block, variant = "preview", className }: BlockCardProps) {
  const description = isBlockListing(block) ? block.summary : block.description;
  const includes = isBlockListing(block) ? block.includes.slice(0, 3) : [];

  return (
    <Card
      className={cn(
        "group flex h-full flex-col rounded-3xl border-border/80 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-highlight/25 hover:shadow-md",
        className,
      )}
    >
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-highlight/10 ring-1 ring-brand-highlight/15 transition-colors group-hover:bg-brand-highlight/15">
            <DynamicIcon name={block.icon} className="size-5 text-brand-accent" />
          </div>
          <Badge variant="secondary" className="rounded-full">
            {block.category}
          </Badge>
        </div>

        <h3 className="mt-5 text-lg font-bold text-foreground">
          <Link
            href={`/blocks/${block.slug}`}
            className="transition-colors hover:text-brand-accent"
          >
            {block.title}
          </Link>
        </h3>

        {variant === "preview" ? (
          <SectionDescription className="mt-2 flex-1">{description}</SectionDescription>
        ) : (
          <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {variant === "listing" && includes.length > 0 ? (
          <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-highlight" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 border-t border-border pt-5">
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Button
              asChild
              variant="secondary"
              shape="pill"
              className="min-h-11 w-full sm:min-h-0 sm:h-7 sm:flex-1 sm:px-4 sm:text-[0.8rem]"
            >
              <Link href={`/blocks/${block.slug}`}>Meer info</Link>
            </Button>
            <Button
              asChild
              variant="primary"
              shape="pill"
              className="min-h-11 w-full sm:min-h-0 sm:h-7 sm:flex-1 sm:px-4 sm:text-[0.8rem]"
            >
              <SectionLink href={contactWithBlock(block.slug)}>
                <ButtonLabel>Vraag demo →</ButtonLabel>
              </SectionLink>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
