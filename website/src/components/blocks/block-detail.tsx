import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";

import { ContentSection } from "@/components/blocks/content-section";
import { BlockExtraInfo } from "@/components/blocks/block-extra-info";
import { BlockWalkthroughSection } from "@/components/blocks/block-walkthrough";
import { SectionLink } from "@/components/layout/section-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { Section, PageHeading } from "@/components/ui/section";
import { getBlockBySlug } from "@/content/blocks";
import type { BlockListing } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

type BlockDetailProps = {
  block: BlockListing;
};

export function BlockDetail({ block }: BlockDetailProps) {
  const relatedBlocks = (block.relatedSlugs ?? [])
    .map((slug) => getBlockBySlug(slug))
    .filter((relatedBlock): relatedBlock is BlockListing => Boolean(relatedBlock))
    .slice(0, 2);

  return (
    <>
      <Section fade={false} className="pb-0">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/blocks"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Alle Blocks
          </Link>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-brand-highlight/15 bg-linear-to-br from-brand-highlight/10 via-background to-muted/20 p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-brand-highlight/15 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-background shadow-sm ring-1 ring-brand-highlight/20">
                <DynamicIcon name={block.icon} className="size-9 text-brand-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <Badge variant="secondary" className="rounded-full">
                  {block.category}
                </Badge>
                <PageHeading className="mt-4 text-4xl font-bold sm:text-5xl">
                  {block.title}
                </PageHeading>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {block.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section fade={false} className="pt-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <BlockWalkthroughSection
            blockTitle={block.title}
            walkthrough={block.demoWalkthrough}
          />

          <ContentSection id="block-summary-heading" label="Overzicht" title="Wat doet het?">
            <p className="text-lg leading-relaxed text-muted-foreground">{block.summary}</p>
          </ContentSection>

          <ContentSection id="block-includes-heading" label="Inbegrepen" title="Wat zit erin?">
            <ul className="grid gap-3 sm:grid-cols-2">
              {block.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-highlight/10">
                    <Check className="size-3.5 text-brand-accent" aria-hidden />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </ContentSection>

          <div className="rounded-3xl border border-brand-highlight/20 bg-brand-highlight/5 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-foreground">Wat levert het op?</h2>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                  {block.outcome}
                </p>
              </div>
            </div>
          </div>

          <BlockExtraInfo blockFaq={block.blockFaq} />

          {relatedBlocks.length > 0 ? (
            <ContentSection
              id="related-blocks-heading"
              label="Combinatie"
              title="Past goed samen met"
            >
              <ul className="grid gap-4 sm:grid-cols-2">
                {relatedBlocks.map((relatedBlock) => (
                  <li key={relatedBlock.slug}>
                    <Link
                      href={`/blocks/${relatedBlock.slug}`}
                      className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-brand-highlight/25 hover:shadow-md"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-highlight/10">
                        <DynamicIcon
                          name={relatedBlock.icon}
                          className="size-4 text-brand-accent"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground transition-colors group-hover:text-brand-accent">
                          {relatedBlock.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {relatedBlock.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </ContentSection>
          ) : null}
        </div>

        <div className="mx-auto mt-14 max-w-6xl rounded-3xl border border-dashed border-brand-highlight/25 bg-brand-highlight/3 p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-foreground">
            Niet zeker of dit Block past bij uw zaak?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Bekijk onze sectorpagina&apos;s of plan een vrijblijvend gesprek — wij adviseren graag.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" shape="pill" size="cta">
              <SectionLink href={contactPlanSection()}>
                <ButtonLabel>Plan een gesprek →</ButtonLabel>
              </SectionLink>
            </Button>
            <Button asChild variant="secondary" shape="pill" size="cta">
              <Link href="/sectoren">Bekijk sectoren</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
