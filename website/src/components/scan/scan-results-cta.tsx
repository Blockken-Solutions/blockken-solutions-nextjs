import Link from "next/link";

import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
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
    <div className="rounded-2xl border border-border bg-muted/30 px-6 py-8 text-center sm:px-10">
      <h3 className="text-xl font-bold text-foreground sm:text-2xl">
        {verdict.ctaHeading}
      </h3>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
        {verdict.ctaSubheading}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild variant="primary" shape="pill" size="lg">
          <SectionLink
            href={contactWithScan({
              url: result.url,
              performance: result.scores.performance,
              seo: result.scores.seo,
              accessibility: result.scores.accessibility,
              bestPractices: result.scores.bestPractices,
            })}
          >
            Plan optimalisatiegesprek →
          </SectionLink>
        </Button>
        {faqHref ? (
          <Button asChild variant="secondary" shape="pill" size="lg">
            <Link href={faqHref}>Veelgestelde vragen</Link>
          </Button>
        ) : null}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Gratis · 15 minuten · Geen verplichtingen
      </p>
    </div>
  );
}
