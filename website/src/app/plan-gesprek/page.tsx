import { PlanGesprekContent } from "@/components/plan-gesprek/plan-gesprek-content";
import { JsonLd } from "@/components/seo/json-ld";
import { planGesprekPage } from "@/content/plan-gesprek";
import { getCalendlyUrl } from "@/lib/calendly/config";
import { createMetadata } from "@/lib/metadata";
import { buildPlanGesprekGraph } from "@/lib/structured-data";

export const dynamic = "force-dynamic";

export const metadata = createMetadata({
  pathname: "/plan-gesprek",
  title: planGesprekPage.seo.title,
  description: planGesprekPage.seo.description,
});

export default function PlanGesprekPage() {
  const calendlyUrl = getCalendlyUrl();

  return (
    <>
      <JsonLd data={buildPlanGesprekGraph()} />
      <PlanGesprekContent content={planGesprekPage} calendlyUrl={calendlyUrl} />
    </>
  );
}
