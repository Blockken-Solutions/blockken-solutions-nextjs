"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";
import { ScanCoreWebVitals } from "@/components/scan/scan-core-web-vitals";
import { ScanFindings } from "@/components/scan/scan-findings";
import { ScanLoadingSteps } from "@/components/scan/scan-loading-steps";
import { ScanResults } from "@/components/scan/scan-results";
import { ScanResultsCta } from "@/components/scan/scan-results-cta";
import { ScanUrlForm } from "@/components/scan/scan-url-form";
import { ScanVerdictCard } from "@/components/scan/scan-verdict";
import { SectionLabel } from "@/components/landing/section-label";
import { Button } from "@/components/ui/button";
import { Section, PageHeading } from "@/components/ui/section";
import type { ScanPageContent } from "@/content/types";
import { scanWithUrl } from "@/lib/paths";
import { buildScanVerdict } from "@/lib/scan/scan-verdict";
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
  const isScanning = Boolean(scannedUrl);
  const showMarketing = !isScanning;
  const showBottomCta = !isScanning || scanState.status === "success";
  const successVerdict =
    scanState.status === "success" ? buildScanVerdict(scanState.result) : null;

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

        {showMarketing ? (
          <>
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
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-highlight/10 text-sm font-bold text-brand-accent">
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
          </>
        ) : null}

        <section
          className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12"
          aria-labelledby="scan-form-heading"
        >
          <h2 id="scan-form-heading" className="text-center text-2xl font-bold text-foreground">
            Start uw scan
          </h2>

          {showMarketing ? (
            <ul className="mx-auto mt-6 max-w-xl space-y-2 text-sm text-muted-foreground">
              {content.painPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-brand-accent" aria-hidden="true">
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

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
              {scanState.status === "loading" ? <ScanLoadingSteps /> : null}

              {scanState.status === "error" ? (
                <div
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-700 dark:text-red-400"
                  role="alert"
                >
                  {scanState.message}
                </div>
              ) : null}

              {scanState.status === "success" && successVerdict ? (
                <>
                  <p className="text-center text-sm text-muted-foreground">
                    Resultaten voor{" "}
                    <span className="font-medium text-foreground">{scannedUrl}</span>
                  </p>
                  <ScanVerdictCard verdict={successVerdict} />
                  <ScanResults result={scanState.result} />
                  <ScanCoreWebVitals
                    lcp={scanState.result.coreWebVitals.lcp}
                    inp={scanState.result.coreWebVitals.inp}
                    cls={scanState.result.coreWebVitals.cls}
                    hasFieldData={scanState.result.coreWebVitals.hasFieldData}
                  />
                  <ScanFindings findings={scanState.result.findings} />
                  <ScanResultsCta
                    result={scanState.result}
                    verdict={successVerdict}
                    faqHref={content.cta.secondary?.href}
                  />
                </>
              ) : null}
            </div>
          ) : null}
        </section>

        {showBottomCta ? (
          <div className="mt-16 rounded-3xl border border-border bg-card px-8 py-12 text-center shadow-sm sm:px-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {content.cta.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              {content.cta.subheading}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="primary" shape="pill" size="lg">
                <SectionLink href={content.cta.primary.href}>
                  {content.cta.primary.label}
                </SectionLink>
              </Button>
              {content.cta.secondary ? (
                <Button asChild variant="secondary" shape="pill" size="lg">
                  <Link href={content.cta.secondary.href}>{content.cta.secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
