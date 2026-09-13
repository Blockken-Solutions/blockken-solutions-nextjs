"use client";

import Link from "next/link";
import { useState } from "react";

import { BlockCard } from "@/components/blocks/block-card";
import { BlockCategoryFilters } from "@/components/blocks/block-category-filters";
import { CatalogHero } from "@/components/blocks/catalog-hero";
import { CustomBlockCard } from "@/components/blocks/custom-block-card";
import { SectionLink } from "@/components/layout/section-link";
import type { BlocksPageContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";

type BlocksListingProps = {
  content: BlocksPageContent;
};

export function BlocksListing({ content }: BlocksListingProps) {
  const [activeCategory, setActiveCategory] = useState(
    content.filterCategories[0] ?? "Alle",
  );

  const filteredBlocks =
    activeCategory === "Alle"
      ? content.blocks
      : content.blocks.filter((block) => block.category === activeCategory);

  return (
    <>
      <BlockCategoryFilters
        categories={content.filterCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredBlocks.map((block) => (
          <li key={block.slug} id={block.slug}>
            <BlockCard block={block} variant="listing" />
          </li>
        ))}
        <li id="block-op-maat">
          <CustomBlockCard content={content.customBlock} variant="listing" />
        </li>
      </ul>
    </>
  );
}

type BlocksPageHeaderProps = {
  content: BlocksPageContent;
};

export function BlocksPageHeader({ content }: BlocksPageHeaderProps) {
  return (
    <CatalogHero
      label="Bibliotheek"
      title={content.heading}
      description={content.subheading}
    >
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="primary" shape="pill" size="cta">
          <SectionLink href={contactPlanSection()}>
            <ButtonLabel>Plan een gesprek →</ButtonLabel>
          </SectionLink>
        </Button>
        <Button asChild variant="secondary" shape="pill" size="cta">
          <Link href="/sectoren">Bekijk per sector</Link>
        </Button>
      </div>
    </CatalogHero>
  );
}
