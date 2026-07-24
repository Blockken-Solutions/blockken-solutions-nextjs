import { PlanGesprekContent } from "@/components/plan-gesprek/plan-gesprek-content";
import { planGesprekPage } from "@/content/plan-gesprek";
import { getCalendlyUrl } from "@/lib/calendly/config";
import { createMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createMetadata({
  pathname: "/plan-gesprek",
  title: planGesprekPage.seo.title,
  description: planGesprekPage.seo.description,
});

export default function PlanGesprekPage() {
  const calendlyUrl = getCalendlyUrl();

  return <PlanGesprekContent content={planGesprekPage} calendlyUrl={calendlyUrl} />;
}
