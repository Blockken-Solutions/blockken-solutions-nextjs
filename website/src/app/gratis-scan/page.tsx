import { Suspense } from "react";

import { ScanPageContent } from "@/components/scan/scan-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { scanPage } from "@/content/scan";
import { createMetadata } from "@/lib/metadata";
import { buildWebPageSchema } from "@/lib/structured-data";

export const metadata = createMetadata({
  pathname: "/gratis-scan",
  title: scanPage.seo.title,
  description: scanPage.seo.description,
});

export default function GratisScanPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema(
          "/gratis-scan",
          scanPage.seo.title,
          scanPage.seo.description,
        )}
      />
      <Suspense fallback={null}>
        <ScanPageContent content={scanPage} />
      </Suspense>
    </>
  );
}
