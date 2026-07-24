import { ScoreGauge } from "@/components/scan/score-gauge";
import type { ScanResult } from "@/lib/scan/types";

type ScanResultsProps = {
  result: ScanResult;
};

export function ScanResults({ result }: ScanResultsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ScoreGauge label="Snelheid" value={result.scores.performance} />
      <ScoreGauge label="Vindbaarheid" value={result.scores.seo} />
      <ScoreGauge
        label="Toegankelijkheid"
        value={result.scores.accessibility}
      />
      <ScoreGauge
        label="Technische kwaliteit"
        value={result.scores.bestPractices}
      />
    </div>
  );
}
