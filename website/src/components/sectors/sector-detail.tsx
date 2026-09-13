import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";

import { CatalogHero } from "@/components/blocks/catalog-hero";
import { ContentSection } from "@/components/blocks/content-section";
import { SectionLink } from "@/components/layout/section-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { Section, PageHeading } from "@/components/ui/section";
import { getBlockBySlug, getBlocksBySlugs } from "@/content/blocks";
import type { SectorListing } from "@/content/types";
import { contactPlanSection, contactWithSector, homeSection } from "@/lib/paths";
import { cn } from "@/lib/utils";

const SECTOR_ICONS: Record<string, string> = {
  voedingsretail: "shopping-bag",
  garages: "wrench",
  kappers: "users",
  horeca: "clipboard-list",
  dienstverleners: "hammer",
};

type SectorDetailProps = {
  sector: SectorListing;
};

export function SectorDetail({ sector }: SectorDetailProps) {
  const recommendedBlocks = getBlocksBySlugs(sector.recommendedBlockSlugs);
  const sectorIcon = SECTOR_ICONS[sector.slug] ?? "sparkles";

  function getUseCaseForBlock(blockSlug: string) {
    return sector.blockUseCases.find((useCase) => useCase.blockSlug === blockSlug);
  }

  return (
    <>
      <Section fade={false} className="pb-0">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/sectoren"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Alle sectoren
          </Link>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-brand-highlight/15 bg-linear-to-br from-brand-highlight/10 via-background to-muted/20 p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-brand-highlight/10 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-background shadow-sm ring-1 ring-brand-highlight/20">
                <DynamicIcon name={sectorIcon} className="size-9 text-brand-accent" />
              </div>
              <div>
                <PageHeading className="text-4xl font-bold sm:text-5xl">
                  {sector.title}
                </PageHeading>
                <p className="mt-2 text-base font-medium text-brand-highlight-text">
                  {sector.subtitle}
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {sector.intro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section fade={false} className="pt-10">
        <div className="mx-auto max-w-5xl space-y-12">
          <ContentSection
            id="sector-pain-heading"
            label="Herkenbaar?"
            title="Typische uitdagingen"
          >
            <ul className="grid gap-4 md:grid-cols-2">
              {sector.painPoints.map((point) => {
                const block = getBlockBySlug(point.blockSlug);
                return (
                  <li
                    key={point.pain}
                    className="relative rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                  >
                    <Quote
                      className="size-5 text-brand-highlight/60"
                      aria-hidden
                    />
                    <p className="mt-3 text-base leading-relaxed text-foreground">
                      &ldquo;{point.pain}&rdquo;
                    </p>
                    {block ? (
                      <Link
                        href={`/blocks/${block.slug}`}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-highlight/10 px-3 py-1.5 text-sm font-medium text-brand-accent transition-colors hover:bg-brand-highlight/15"
                      >
                        <DynamicIcon name={block.icon} className="size-3.5" />
                        {block.title}
                      </Link>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </ContentSection>

          <ContentSection
            id="sector-bundle-heading"
            label="Aanbeveling"
            title="Deze combinatie werkt het best"
          >
            <p className="-mt-3 mb-6 text-muted-foreground">{sector.bundleStory}</p>
            <ul className="grid gap-4 sm:grid-cols-3">
              {recommendedBlocks.map((block, index) => {
                const useCase = getUseCaseForBlock(block.slug);

                return (
                <li key={block.slug} className="relative">
                  {index < recommendedBlocks.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-10 -right-2 z-10 hidden h-px w-4 bg-brand-highlight/40 sm:block"
                    />
                  ) : null}
                  <Link
                    href={`/blocks/${block.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-highlight/25 hover:shadow-md"
                  >
                    <span className="text-xs font-bold tracking-wider text-brand-accent uppercase">
                      Block {index + 1}
                    </span>
                    <div className="mt-3 flex size-11 items-center justify-center rounded-xl bg-brand-highlight/10">
                      <DynamicIcon name={block.icon} className="size-5 text-brand-accent" />
                    </div>
                    <h3 className="mt-4 font-bold text-foreground transition-colors group-hover:text-brand-accent">
                      {block.title}
                    </h3>
                    <Badge variant="secondary" className="mt-3 w-fit rounded-full">
                      {block.category}
                    </Badge>
                    {useCase ? (
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {useCase.detail}
                      </p>
                    ) : null}
                    {useCase?.outcome ? (
                      <p className="mt-3 text-sm font-medium text-brand-highlight-text">
                        {useCase.outcome}
                      </p>
                    ) : null}
                  </Link>
                </li>
                );
              })}
            </ul>
          </ContentSection>

          <ContentSection
            id="sector-package-heading"
            label="Investering"
            title="Typisch pakket voor deze sector"
          >
            <div className="rounded-3xl border border-brand-highlight/20 bg-card p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Aanbevolen startpunt
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {sector.typicalPackage.tierName}
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    {sector.typicalPackage.setupPrice} setup ·{" "}
                    {sector.typicalPackage.monthlyPrice}
                  </p>
                </div>
                <Button asChild variant="secondary" shape="pill">
                  <SectionLink href={homeSection("prijzen")}>
                    Alle pakketten →
                  </SectionLink>
                </Button>
              </div>

              <ul className="mt-6 space-y-2 text-base leading-relaxed text-muted-foreground">
                <li>{sector.typicalPackage.includedBlocksNote}</li>
                <li>{sector.typicalPackage.extraBlockNote}</li>
                <li>
                  Aanbevolen Blocks:{" "}
                  {recommendedBlocks.map((block) => block.title).join(" · ")}
                </li>
              </ul>

              <p className="mt-6 rounded-xl bg-brand-highlight/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Pilot: </span>
                {sector.typicalPackage.pilotSetupPrice}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {sector.typicalPackage.roiScenario}
              </p>
            </div>
          </ContentSection>

          <div className="rounded-3xl border border-brand-highlight/25 bg-linear-to-r from-brand-highlight/10 to-transparent p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-brand-highlight-text uppercase">
              Pilot
            </p>
            <p className="mt-2 text-xl font-bold text-foreground">Pilotklanten gezocht</p>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {sector.pilotNote}
            </p>
            <Button asChild variant="primary" shape="pill" size="cta" className="mt-6">
              <SectionLink href={contactWithSector(sector.slug)}>
                <ButtonLabel>Ik wil meedoen →</ButtonLabel>
              </SectionLink>
            </Button>
          </div>

          <div className="rounded-3xl border border-dashed border-brand-highlight/25 bg-brand-highlight/[0.03] p-6 text-center sm:p-8">
            <p className="text-lg font-semibold text-foreground">
              Past dit bij uw zaak?
            </p>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Plan een gratis gesprek — we bekijken samen welke Blocks het meeste opleveren.
            </p>
            <Button asChild variant="primary" shape="pill" size="cta" className="mt-6">
              <SectionLink href={contactWithSector(sector.slug)}>
                <ButtonLabel>Plan een gratis gesprek →</ButtonLabel>
              </SectionLink>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

type SectorsOverviewProps = {
  heading: string;
  subheading: string;
  sectors: SectorListing[];
};

export function SectorsOverview({
  heading,
  subheading,
  sectors: sectorItems,
}: SectorsOverviewProps) {
  return (
    <>
      <CatalogHero label="Sectoren" title={heading} description={subheading} />

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {sectorItems.map((sector) => {
          const sectorIcon = SECTOR_ICONS[sector.slug] ?? "sparkles";
          return (
            <li key={sector.slug}>
              <Card
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-3xl border-border/80 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-highlight/25 hover:shadow-md",
                )}
              >
                <div className="h-1.5 bg-linear-to-r from-brand-highlight/80 via-brand-highlight/40 to-transparent" />
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-highlight/10 ring-1 ring-brand-highlight/15 transition-colors group-hover:bg-brand-highlight/15">
                      <DynamicIcon name={sectorIcon} className="size-5 text-brand-accent" />
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      {sector.recommendedBlockSlugs.length} Blocks
                    </Badge>
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-foreground">
                    <Link
                      href={`/sectoren/${sector.slug}`}
                      className="transition-colors hover:text-brand-accent"
                    >
                      {sector.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand-highlight-text">
                    {sector.subtitle}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                    {sector.intro}
                  </p>
                  <p className="mt-4 rounded-xl bg-muted/50 px-3 py-2 text-sm font-medium text-foreground">
                    {sector.bundleStory}
                  </p>
                  <Link
                    href={`/sectoren/${sector.slug}`}
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-brand-accent hover:underline"
                  >
                    Bekijk aanbevolen Blocks →
                  </Link>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 rounded-3xl border border-border/80 bg-muted/30 p-6 text-center sm:p-8">
        <p className="text-lg font-semibold text-foreground">
          Niet zeker welke sector het dichtst aanleunt?
        </p>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Geen probleem — in een kort gesprek brengen we samen in kaart wat past bij uw zaak.
        </p>
        <Button asChild variant="primary" shape="pill" size="cta" className="mt-6">
          <SectionLink href={contactPlanSection()}>
            <ButtonLabel>Plan een gesprek →</ButtonLabel>
          </SectionLink>
        </Button>
      </div>
    </>
  );
}
