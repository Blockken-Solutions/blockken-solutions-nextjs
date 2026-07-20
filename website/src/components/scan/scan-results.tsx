import { ScoreGauge } from "@/components/scan/score-gauge";
import type { ScanMockResults } from "@/content/types";

type ScanResultsProps = {
  results: ScanMockResults;
};

export function ScanResults({ results }: ScanResultsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ScoreGauge label="Performance" value={results.performance} color="red" />
      <ScoreGauge label="SEO" value={results.seo} color="green" />
      <ScoreGauge label="Laadtijd" value={results.loadTime} color="orange" />
    </div>
  );
}
