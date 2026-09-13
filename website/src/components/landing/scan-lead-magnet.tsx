"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { ScanUrlForm } from "@/components/scan/scan-url-form";
import { SectionLabel } from "@/components/landing/section-label";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { ScanTeaserContent } from "@/content/types";
import { scanWithUrl } from "@/lib/paths";

type ScanLeadMagnetProps = {
  content: ScanTeaserContent;
};

export function ScanLeadMagnet({ content }: ScanLeadMagnetProps) {
  const router = useRouter();

  const handleSubmit = useCallback(
    (url: string) => {
      router.push(scanWithUrl(url));
    },
    [router],
  );

  return (
    <Section id="gratis-scan" variant="muted">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-brand-highlight/20">
          <DynamicIcon name="scan-search" className="size-6 text-brand-highlight" />
        </div>
        <SectionLabel>{content.sectionLabel}</SectionLabel>
        <SectionHeading className="text-3xl font-bold sm:text-4xl">
          {content.heading}
        </SectionHeading>
        <SectionDescription className="mx-auto mt-4 max-w-2xl">
          {content.description}
        </SectionDescription>

        <ScanUrlForm
          inputPlaceholder={content.inputPlaceholder}
          buttonLabel={content.buttonLabel}
          helperText={content.helperText}
          errorMessage={content.errorMessage}
          onSubmit={handleSubmit}
          className="mt-8"
        />
      </div>
    </Section>
  );
}
