import { Suspense } from "react";

import { ContactDetails } from "@/components/landing/contact-details";
import { ContactForm } from "@/components/landing/contact-form";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { FooterCtaContent } from "@/content/types";

type FooterCtaProps = {
  content: FooterCtaContent;
};

export function FooterCta({ content }: FooterCtaProps) {
  return (
    <Section id="contact" overlap className="pb-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card px-8 py-14 shadow-sm sm:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading className="text-3xl font-bold sm:text-4xl">
            {content.heading}
          </SectionHeading>
          <SectionDescription className="mt-4">{content.subheading}</SectionDescription>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-12">
            <ContactDetails />
          </div>

          <div className="lg:border-l lg:border-border lg:pl-12">
            <div className="mb-6">
              <p className="text-base font-semibold text-foreground">Stuur een bericht</p>
              <SectionDescription className="mt-2">
                Vul het formulier in en ik neem contact met u op.
              </SectionDescription>
            </div>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </Section>
  );
}
