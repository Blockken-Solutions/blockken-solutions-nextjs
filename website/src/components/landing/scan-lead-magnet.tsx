"use client";

import { useState } from "react";

import { ScoreGauge } from "@/components/landing/score-gauge";
import { SectionLabel } from "@/components/landing/section-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section, SectionHeading } from "@/components/ui/section";
import type { ScanLeadMagnetContent } from "@/content/types";

type ScanLeadMagnetProps = {
  content: ScanLeadMagnetContent;
};

export function ScanLeadMagnet({ content }: ScanLeadMagnetProps) {
  const [url, setUrl] = useState("");
  const [showResults, setShowResults] = useState(true);

  const handleScan = () => {
    if (url.trim()) {
      setShowResults(true);
    }
  };

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

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1.5 pl-5 shadow-sm">
            <Input
              type="url"
              placeholder={content.inputPlaceholder}
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              className="h-10 flex-1 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            />
            <Button
              variant="orange"
              shape="pill"
              size="lg"
              className="shrink-0"
              onClick={handleScan}
            >
              {content.buttonLabel}
            </Button>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            {content.helperText}
          </p>
        </div>

        {showResults ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <ScoreGauge
              label="Performance"
              value={content.mockResults.performance}
              color="red"
            />
            <ScoreGauge
              label="SEO"
              value={content.mockResults.seo}
              color="green"
            />
            <ScoreGauge
              label="Laadtijd"
              value={content.mockResults.loadTime}
              color="orange"
            />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
