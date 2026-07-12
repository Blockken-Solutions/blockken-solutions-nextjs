import { Section, SectionHeading } from "@/components/ui/section";
import type { PageDocument, Project, SiteSettings } from "@/sanity/types";

import { PageBuilder } from "@/components/blocks/page-builder";

type PageContentProps = {
  page: PageDocument | null;
  siteSettings: SiteSettings | null;
  projects: Project[];
};

export function PageContent({
  page,
  siteSettings,
  projects,
}: PageContentProps) {
  if (!page) {
    return (
      <Section>
        <SectionHeading>Welcome</SectionHeading>
        <p className="mt-4 text-muted-foreground">
          Create a page with slug <strong>home</strong> in Sanity Studio to
          populate this page.
        </p>
      </Section>
    );
  }

  return (
    <PageBuilder
      blocks={page.content}
      siteSettings={siteSettings}
      projects={projects}
    />
  );
}
