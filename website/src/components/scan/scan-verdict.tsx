import { cn } from "@/lib/utils";
import {
  getGradeLabel,
  type ScanVerdict,
} from "@/lib/scan/scan-verdict";

type ScanVerdictCardProps = {
  verdict: ScanVerdict;
};

const gradeStyles = {
  good: "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400",
  fair: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  poor: "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400",
} as const;

export function ScanVerdictCard({ verdict }: ScanVerdictCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
      <span
        className={cn(
          "inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
          gradeStyles[verdict.grade],
        )}
      >
        {getGradeLabel(verdict.grade)}
      </span>
      <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
        {verdict.headline}
      </h3>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
        {verdict.summary}
      </p>
    </div>
  );
}
