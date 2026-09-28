import Link from "next/link";

import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { contactWithScan } from "@/lib/paths";
import type { ScanVerdict } from "@/lib/scan/scan-verdict";
import type { ScanResult } from "@/lib/scan/types";

type ScanResultsCtaProps = {
  result: ScanResult;
  verdict: ScanVerdict;
  faqHref?: string;
};

export function ScanResultsCta({ result, verdict, faqHref }: ScanResultsCtaProps) {
  return (
    <div className="border border-border bg-muted px-6 py-8 text-center shadow-soft sm:px-10">
      <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {verdict.ctaHeading}
      </h3>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
        {verdict.ctaSubheading}
      </p>
      <div className="mx-auto mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          asChild
          variant="primary"
          size="cta"
          className="h-auto min-h-11 w-full whitespace-normal py-2.5 leading-snug sm:h-11 sm:w-auto sm:whitespace-nowrap sm:py-0"
        >
          <SectionLink
            href={contactWithScan({
              url: result.url,
              performance: result.scores.performance,
              seo: result.scores.seo,
              accessibility: result.scores.accessibility,
              bestPractices: result.scores.bestPractices,
            })}
          >
            <ButtonLabel>Plan kennismakingsgesprek →</ButtonLabel>
          </SectionLink>
        </Button>
        {faqHref ? (
          <Button
            asChild
            variant="secondary"
            size="cta"
            className="h-auto min-h-11 w-full whitespace-normal py-2.5 leading-snug sm:h-11 sm:w-auto sm:whitespace-nowrap sm:py-0"
          >
            <Link href={faqHref}>Veelgestelde vragen</Link>
          </Button>
        ) : null}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Gratis · 30 minuten · Geen verplichtingen
      </p>
    </div>
  );
}
