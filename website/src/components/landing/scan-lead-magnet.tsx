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
      <div className="mx-auto max-w-4xl rounded-3xl border border-border/60 bg-card p-6 shadow-soft-lg sm:p-10">
        <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary shadow-soft">
          <DynamicIcon name="scan-search" className="size-6 text-primary-foreground" />
        </div>
        <SectionLabel>{content.sectionLabel}</SectionLabel>
        <SectionHeading>
          {content.heading}
        </SectionHeading>
        <SectionDescription className="mt-4 max-w-2xl">
          {content.description}
        </SectionDescription>

        <ScanUrlForm
          inputPlaceholder={content.inputPlaceholder}
          buttonLabel={content.buttonLabel}
          helperText={content.helperText}
          errorMessage={content.errorMessage}
          onSubmit={handleSubmit}
          layout="stacked"
          className="mt-8"
        />
      </div>
    </Section>
  );
}
