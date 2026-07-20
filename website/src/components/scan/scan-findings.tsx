import { cn } from "@/lib/utils";
import type { ScanFinding } from "@/lib/scan/types";

type ScanFindingsProps = {
  findings: ScanFinding[];
};

const severityLabels = {
  critical: "Kritiek",
  warning: "Waarschuwing",
  info: "Info",
} as const;

const severityStyles = {
  critical: "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400",
  warning:
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  info: "border-border bg-muted text-muted-foreground",
} as const;

export function ScanFindings({ findings }: ScanFindingsProps) {
  if (findings.length === 0) {
    return (
      <section aria-labelledby="scan-findings-heading">
        <h3
          id="scan-findings-heading"
          className="text-lg font-semibold text-foreground"
        >
          Verbeterpunten
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Geen kritieke problemen gevonden in deze scan.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="scan-findings-heading">
      <h3
        id="scan-findings-heading"
        className="text-lg font-semibold text-foreground"
      >
        Verbeterpunten
      </h3>
      <ul className="mt-4 space-y-3">
        {findings.map((finding) => (
          <li
            key={finding.id}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-medium text-foreground">{finding.title}</h4>
              <span
                className={cn(
                  "inline-flex rounded-full border px-2 py-0.5 text-xs font-medium",
                  severityStyles[finding.severity],
                )}
              >
                {severityLabels[finding.severity]}
              </span>
            </div>
            {finding.description ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {finding.description}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
