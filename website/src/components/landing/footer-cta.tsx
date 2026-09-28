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
        <p className="text-base font-bold tracking-tight text-foreground">
          {heading}
        </p>
        <SectionDescription className="mt-2">{description}</SectionDescription>
      </div>
      {children}
    </div>
  );
}

export function FooterCta({ content }: FooterCtaProps) {
  return (
    <Section id="contact" className="pb-16" variant="muted">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-5 py-10 text-primary-foreground shadow-soft-lg sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading className="text-primary-foreground">
            {content.heading}
          </SectionHeading>
          <SectionDescription className="mt-4 text-primary-foreground">
            {content.subheading}
          </SectionDescription>
        </div>

        <div className="mt-10 mb-8 border-b border-white/20 pb-8 sm:mt-12 sm:mb-12 sm:pb-12">
          <ContactPlanCta content={content.calendly} variant="banner" />
        </div>

        <div className="grid items-start gap-12 rounded-2xl bg-card p-6 text-foreground shadow-soft-lg sm:p-8 lg:grid-cols-2 lg:gap-0">
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
