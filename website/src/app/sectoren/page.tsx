import Link from "next/link";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";
import { SectorsOverview } from "@/components/sectors/sector-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { sectors, sectorsPage } from "@/content/sectors";
import { contactPlanSection } from "@/lib/paths";
import { createMetadata } from "@/lib/metadata";
import { buildSectorsGraph } from "@/lib/structured-data";

export const metadata = createMetadata({
  pathname: "/sectoren",
  title: sectorsPage.seo.title,
  description: sectorsPage.seo.description,
});

export default function SectorenPage() {
  return (
    <>
      <JsonLd data={buildSectorsGraph()} />
      <Section fade={false}>
        <BackToHomeLink className="mb-6" />
        <SectorsOverview
          heading={sectorsPage.heading}
          subheading={sectorsPage.subheading}
          sectors={sectors}
        />
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Liever direct de volledige bibliotheek?{" "}
          <Link
            href="/blocks"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Bekijk alle Blocks
          </Link>
          {" · "}
          <SectionLink
            href={contactPlanSection()}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Plan een gesprek
          </SectionLink>
        </p>
      </Section>
    </>
  );
}
