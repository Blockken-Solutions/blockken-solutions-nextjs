import { FaqContent } from "@/components/faq/faq-content";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPage } from "@/content/faq";
import { createMetadata } from "@/lib/metadata";
import { buildFaqGraph } from "@/lib/structured-data";

export const metadata = createMetadata({
  pathname: "/faq",
  title: faqPage.seo.title,
  description: faqPage.seo.description,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={buildFaqGraph()} />
      <FaqContent content={faqPage} />
    </>
  );
}
