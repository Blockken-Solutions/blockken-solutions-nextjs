import Link from "next/link";

import {
  AgentsListing,
  AgentsPageHeader,
} from "@/components/agents/agents-listing";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { agentsPage } from "@/content/agents";
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
      <Section>
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
          <Link
            href="/#contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            plan een gratis strategiegesprek
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
