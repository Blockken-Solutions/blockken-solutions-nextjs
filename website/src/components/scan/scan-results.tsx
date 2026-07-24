import { ScoreGauge } from "@/components/scan/score-gauge";
import { cn } from "@/lib/utils";
import type { ScanResult } from "@/lib/scan/types";

type ScanResultsProps = {
  result: ScanResult;
};

const GAUGES = [
  { label: "Snelheid", key: "performance" },
  { label: "Vindbaarheid", key: "seo" },
  { label: "Toegankelijkheid", key: "accessibility" },
  { label: "Technische kwaliteit", key: "bestPractices" },
] as const;

export function ScanResults({ result }: ScanResultsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {GAUGES.map((gauge, index) => (
        <div
          key={gauge.key}
          className={cn(
            "animate-in fade-in-0 fill-mode-both duration-500",
          )}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <ScoreGauge
            label={gauge.label}
            value={result.scores[gauge.key]}
          />
        </div>
      ))}
    </div>
  );
}
