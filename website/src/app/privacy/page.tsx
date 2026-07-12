import { LegalPage } from "@/components/legal/legal-page";
import { privacyPage } from "@/content/legal/privacy";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  pathname: "/privacy",
  title: privacyPage.seo.title,
  description: privacyPage.seo.description,
});

export default function PrivacyPage() {
  return <LegalPage content={privacyPage} pathname="/privacy" />;
}
