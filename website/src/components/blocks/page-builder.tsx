import { Section } from "@/components/ui/section";
import type { Project, PageBlock, SiteSettings } from "@/sanity/types";

import { ContactSection } from "./contact-section";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { Features } from "./features";
import { Hero } from "./hero";
import { ImageBlockSection } from "./image-block";
import { ProjectsGrid } from "./projects-grid";
import { RichText } from "./rich-text";
import { Testimonial } from "./testimonial";

type PageBuilderProps = {
  blocks?: PageBlock[] | null;
  siteSettings: SiteSettings | null;
  projects: Project[];
};

export function PageBuilder({
  blocks,
  siteSettings,
  projects,
}: PageBuilderProps) {
  if (!blocks?.length) {
    return (
      <Section>
        <p className="text-muted-foreground">No content blocks found for this page.</p>
      </Section>
    );
  }

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} block={block} />;
          case "features":
            return <Features key={block._key} block={block} />;
          case "faq":
            return <Faq key={block._key} block={block} />;
          case "contactSection":
            return (
              <ContactSection
                key={block._key}
                block={block}
                siteSettings={siteSettings}
              />
            );
          case "projectsGrid":
            return (
              <ProjectsGrid
                key={block._key}
                block={block}
                projects={projects}
              />
            );
          case "testimonial":
            return <Testimonial key={block._key} block={block} />;
          case "imageBlock":
            return <ImageBlockSection key={block._key} block={block} />;
          case "richText":
            return <RichText key={block._key} block={block} />;
          case "cta":
            return <Cta key={block._key} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
