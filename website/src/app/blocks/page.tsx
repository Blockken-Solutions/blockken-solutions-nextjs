import Link from "next/link";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";
import {
  BlocksListing,
  BlocksPageHeader,
} from "@/components/blocks/blocks-listing";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { blocksPage } from "@/content/blocks";
import { contactPlanSection } from "@/lib/paths";
import { createMetadata } from "@/lib/metadata";
import { buildBlocksGraph } from "@/lib/structured-data";

export const metadata = createMetadata({
  pathname: "/blocks",
  title: blocksPage.seo.title,
  description: blocksPage.seo.description,
});

export default function BlocksPage() {
  return (
    <>
      <JsonLd data={buildBlocksGraph()} />
      <Section fade={false}>
        <BackToHomeLink className="mb-6" />
        <BlocksPageHeader content={blocksPage} />
        <div className="mt-10">
          <BlocksListing content={blocksPage} />
        </div>
        <p className="mt-12 rounded-2xl border border-border/80 bg-muted/30 px-5 py-4 text-center text-sm text-muted-foreground sm:text-left">
          Op zoek naar een Block op maat?{" "}
          <Link
            href="/faq"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Bekijk onze FAQ
          </Link>{" "}
          of{" "}
          <SectionLink
            href={contactPlanSection()}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            plan een gratis kennismakingsgesprek
          </SectionLink>
          .
        </p>
      </Section>
    </>
  );
}
