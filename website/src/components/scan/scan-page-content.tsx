"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";
import { ScanCoreWebVitals } from "@/components/scan/scan-core-web-vitals";
import { ScanFindings } from "@/components/scan/scan-findings";
import { ScanResults } from "@/components/scan/scan-results";
import { ScanUrlForm } from "@/components/scan/scan-url-form";
import { SectionLabel } from "@/components/landing/section-label";
import { Button } from "@/components/ui/button";
import { Section, PageHeading } from "@/components/ui/section";
import type { ScanPageContent } from "@/content/types";
import { contactWithScan, scanWithUrl } from "@/lib/paths";
import { useScan } from "@/lib/scan/use-scan";
import { parseScanUrlParam } from "@/lib/scan-url";

type ScanPageContentProps = {
  content: ScanPageContent;
};

export function ScanPageContent({ content }: ScanPageContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scannedUrl = parseScanUrlParam(searchParams.get("url"));
  const scanState = useScan(scannedUrl);

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
        <PageHeading className="text-4xl font-bold sm:text-5xl">
          {content.heading}
        </PageHeading>
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
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="mt-10 space-y-10">
              <p className="text-center text-sm text-muted-foreground">
                Resultaten voor{" "}
                <span className="font-medium text-foreground">{scannedUrl}</span>
              </p>

              {scanState.status === "loading" ? (
                <div
                  className="flex flex-col items-center gap-3 py-8"
                  role="status"
                  aria-live="polite"
                >
                  <Loader2 className="size-8 animate-spin text-brand-orange" />
                  <p className="text-sm text-muted-foreground">
                    Website wordt geanalyseerd… (kan 30 seconden duren)
                  </p>
                </div>
              ) : null}

              {scanState.status === "error" ? (
                <div
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-700 dark:text-red-400"
                  role="alert"
                >
                  {scanState.message}
                </div>
              ) : null}

              {scanState.status === "success" ? (
                <>
                  <ScanResults result={scanState.result} />
                  <ScanCoreWebVitals
                    lcp={scanState.result.coreWebVitals.lcp}
                    inp={scanState.result.coreWebVitals.inp}
                    cls={scanState.result.coreWebVitals.cls}
                    hasFieldData={scanState.result.coreWebVitals.hasFieldData}
                  />
                  <ScanFindings findings={scanState.result.findings} />
                  <div className="flex justify-center pt-2">
                    <Button asChild variant="orange" shape="pill" size="lg">
                      <SectionLink
                        href={contactWithScan({
                          url: scanState.result.url,
                          performance: scanState.result.scores.performance,
                          seo: scanState.result.scores.seo,
                          accessibility: scanState.result.scores.accessibility,
                          bestPractices: scanState.result.scores.bestPractices,
                        })}
                      >
                        Plan optimalisatiegesprek →
                      </SectionLink>
                    </Button>
                  </div>
                </>
              ) : null}
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
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="orange" shape="pill" size="lg">
              <SectionLink href={content.cta.primary.href}>
                {content.cta.primary.label}
              </SectionLink>
            </Button>
            {content.cta.secondary ? (
              <Button asChild variant="outline" shape="pill" size="lg">
                <Link href={content.cta.secondary.href}>{content.cta.secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
