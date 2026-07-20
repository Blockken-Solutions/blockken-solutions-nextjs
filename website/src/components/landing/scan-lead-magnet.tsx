"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { ScanUrlForm } from "@/components/scan/scan-url-form";
import { SectionLabel } from "@/components/landing/section-label";
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
    <Section id="gratis-scan" variant="elevated" overlap>
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
        <div className="text-center">
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <SectionHeading className="text-3xl font-bold sm:text-4xl">
            {content.heading}
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {content.description}
          </p>
        </div>

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
