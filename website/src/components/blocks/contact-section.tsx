import { Section, SectionHeading } from "@/components/ui/section";
import type { ContactSectionBlock, SiteSettings } from "@/sanity/types";

type ContactSectionProps = {
  block: ContactSectionBlock;
  siteSettings: SiteSettings | null;
};

export function ContactSection({ block, siteSettings }: ContactSectionProps) {
  return (
    <Section containerClassName="max-w-3xl">
      {block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
      {block.body ? (
        <p className="mt-4 text-lg text-muted-foreground">{block.body}</p>
      ) : null}
      {block.showContactDetails && siteSettings ? (
        <dl className="mt-8 space-y-3 text-foreground">
          {siteSettings.email ? (
            <div>
              <dt className="font-medium">Email</dt>
              <dd>
                <a href={`mailto:${siteSettings.email}`} className="underline">
                  {siteSettings.email}
                </a>
              </dd>
            </div>
          ) : null}
          {siteSettings.phone ? (
            <div>
              <dt className="font-medium">Phone</dt>
              <dd>
                <a href={`tel:${siteSettings.phone}`} className="underline">
                  {siteSettings.phone}
                </a>
              </dd>
            </div>
          ) : null}
          {siteSettings.address ? (
            <div>
              <dt className="font-medium">Address</dt>
              <dd className="whitespace-pre-line">{siteSettings.address}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
    </Section>
  );
}
