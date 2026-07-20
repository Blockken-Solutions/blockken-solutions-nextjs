"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";
import { ScanResults } from "@/components/scan/scan-results";
import { ScanUrlForm } from "@/components/scan/scan-url-form";
import { SectionLabel } from "@/components/landing/section-label";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import type { ScanPageContent } from "@/content/types";
import { scanWithUrl } from "@/lib/paths";
import { parseScanUrlParam } from "@/lib/scan-url";

type ScanPageContentProps = {
  content: ScanPageContent;
};

export function ScanPageContent({ content }: ScanPageContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scannedUrl = parseScanUrlParam(searchParams.get("url"));

  const handleSubmit = useCallback(
    (url: string) => {
      router.push(scanWithUrl(url));
    },
    [router],
  );

  return (
    <Section fade={false}>
      <div className="mx-auto max-w-4xl">
        <BackToHomeLink className="mb-6" />
        <SectionLabel>Gratis Scan</SectionLabel>
        <SectionHeading className="text-4xl font-bold sm:text-5xl">
          {content.heading}
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {content.subheading}
        </p>

        <section className="mt-12" aria-labelledby="scan-intro-heading">
          <h2
            id="scan-intro-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            {content.intro.heading}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {content.intro.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="scan-steps-heading">
          <h2
            id="scan-steps-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            Hoe werkt het?
          </h2>
          <ol className="mt-6 space-y-4">
            {content.howItWorks.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-sm font-bold text-brand-orange">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12"
          aria-labelledby="scan-form-heading"
        >
          <h2 id="scan-form-heading" className="text-center text-2xl font-bold text-foreground">
            Start uw scan
          </h2>
          <ScanUrlForm
            defaultUrl={searchParams.get("url") ?? ""}
            inputPlaceholder={content.form.inputPlaceholder}
            buttonLabel={content.form.buttonLabel}
            helperText={content.form.helperText}
            errorMessage={content.form.errorMessage}
            onSubmit={handleSubmit}
            className="mt-8"
          />

          {scannedUrl ? (
            <div className="mt-10">
              <p className="mb-6 text-center text-sm text-muted-foreground">
                Resultaten voor{" "}
                <span className="font-medium text-foreground">{scannedUrl}</span>
              </p>
              <ScanResults results={content.mockResults} />
            </div>
          ) : null}
        </section>

        <div className="mt-16 rounded-3xl border border-border bg-card px-8 py-12 text-center shadow-sm sm:px-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {content.cta.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            {content.cta.subheading}
          </p>
          <div className="mt-8">
            <Button asChild variant="orange" shape="pill" size="lg">
              <SectionLink href={content.cta.primary.href}>
                {content.cta.primary.label}
              </SectionLink>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
