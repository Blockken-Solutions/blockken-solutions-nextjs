import { Suspense, type ReactNode } from "react";

import { ContactDetails } from "@/components/landing/contact-details";
import { ContactForm } from "@/components/landing/contact-form";
import { ContactPlanCta } from "@/components/landing/contact-plan-cta";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { FooterCtaContent } from "@/content/types";

type FooterCtaProps = {
  content: FooterCtaContent;
};

type ContactColumnProps = {
  heading: string;
  description: string;
  children: ReactNode;
  className?: string;
};

function ContactColumn({
  heading,
  description,
  children,
  className,
}: ContactColumnProps) {
  return (
    <div className={className}>
      <div className="mb-6">
        <p className="text-base font-semibold text-foreground">{heading}</p>
        <SectionDescription className="mt-2">{description}</SectionDescription>
      </div>
      {children}
    </div>
  );
}

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

        <div className="mt-10 border-b border-border pb-12 mb-12 sm:mt-12">
          <ContactPlanCta content={content.calendly} variant="banner" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-10">
            <ContactDetails
              heading={content.directContact.heading}
              description={content.directContact.description}
            />
          </div>

          <ContactColumn
            heading={content.form.heading}
            description={content.form.description}
            className="lg:border-l lg:border-border lg:pl-10"
          >
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </ContactColumn>
        </div>
      </div>
    </Section>
  );
}
