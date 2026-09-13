"use client";

import Link from "next/link";
import { useState } from "react";

import { BlockCard } from "@/components/blocks/block-card";
import { BlockCategoryFilters } from "@/components/blocks/block-category-filters";
import { CustomBlockCard } from "@/components/blocks/custom-block-card";
import { SectionLabel } from "@/components/landing/section-label";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { BlocksPreviewContent } from "@/content/types";

type BlockPreviewProps = {
  content: BlocksPreviewContent;
};

export function BlockPreview({ content }: BlockPreviewProps) {
  const [activeCategory, setActiveCategory] = useState(
    content.filterCategories[0] ?? "Alle",
  );

  const filteredBlocks =
    activeCategory === "Alle"
      ? content.blocks
      : content.blocks.filter((block) => block.category === activeCategory);

  return (
    <Section id="blocks" overlap overhang>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <SectionHeading className="max-w-2xl text-4xl font-bold sm:text-5xl">
            {content.heading}
          </SectionHeading>
          <SectionDescription className="mt-4 max-w-xl">{content.subheading}</SectionDescription>
        </div>
        <Link
          href={content.catalogLink.href}
          className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-brand-highlight/30 hover:text-brand-accent"
        >
          {content.catalogLink.label}
        </Link>
      </div>

      <BlockCategoryFilters
        categories={content.filterCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredBlocks.map((block) => (
          <li key={block.title}>
            <BlockCard block={block} variant="preview" />
          </li>
        ))}
        <li>
          <CustomBlockCard content={content.customBlock} variant="preview" />
        </li>
      </ul>
    </Section>
  );
}
