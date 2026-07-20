import { ScoreGauge } from "@/components/scan/score-gauge";
import type { ScanResult } from "@/lib/scan/types";

type ScanResultsProps = {
  result: ScanResult;
};

export function ScanResults({ result }: ScanResultsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ScoreGauge
        label="Performance"
        value={result.scores.performance}
        color="red"
      />
      <ScoreGauge label="SEO" value={result.scores.seo} color="green" />
      <ScoreGauge label="LCP (lab)" value={result.metrics.lcp} color="orange" />
      <ScoreGauge
        label="Toegankelijkheid"
        value={result.scores.accessibility}
        color="blue"
      />
      <ScoreGauge
        label="Best Practices"
        value={result.scores.bestPractices}
        color="orange"
      />
    </div>
  );
}
