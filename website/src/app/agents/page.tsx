import Link from "next/link";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";
import {
  AgentsListing,
  AgentsPageHeader,
} from "@/components/agents/agents-listing";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { agentsPage } from "@/content/agents";
import { contactPlanSection } from "@/lib/paths";
import { createMetadata } from "@/lib/metadata";
import { buildAgentsGraph } from "@/lib/structured-data";

export const metadata = createMetadata({
  pathname: "/agents",
  title: agentsPage.seo.title,
  description: agentsPage.seo.description,
});

export default function AgentsPage() {
  return (
    <>
      <JsonLd data={buildAgentsGraph()} />
      <Section fade={false}>
        <BackToHomeLink className="mb-6" />
        <AgentsPageHeader content={agentsPage} />
        <AgentsListing content={agentsPage} />
        <p className="mt-12 text-muted-foreground">
          Op zoek naar een agent op maat?{" "}
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
            plan een gratis strategiegesprek
          </SectionLink>
          .
        </p>
      </Section>
    </>
  );
}
