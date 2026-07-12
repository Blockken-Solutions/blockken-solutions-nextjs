import { LegalPage } from "@/components/legal/legal-page";
import { termsPage } from "@/content/legal/terms";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  pathname: "/terms",
  title: termsPage.seo.title,
  description: termsPage.seo.description,
});

export default function TermsPage() {
  return <LegalPage content={termsPage} pathname="/terms" />;
}
