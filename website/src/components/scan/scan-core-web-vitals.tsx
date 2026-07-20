import { cn } from "@/lib/utils";
import type { CwvMetric, CwvRating } from "@/lib/scan/types";

type ScanCoreWebVitalsProps = {
  lcp: CwvMetric;
  inp: CwvMetric;
  cls: CwvMetric;
  hasFieldData: boolean;
};

const ratingLabels: Record<CwvRating, string> = {
  good: "Goed",
  "needs-improvement": "Verbetering nodig",
  poor: "Slecht",
  unknown: "Geen data",
};

const ratingStyles: Record<CwvRating, string> = {
  good: "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400",
  "needs-improvement":
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  poor: "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400",
  unknown: "border-border bg-muted text-muted-foreground",
};

function CwvCard({
  label,
  metric,
  description,
}: {
  label: string;
  metric: CwvMetric;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{metric.value}</p>
      <span
        className={cn(
          "mt-2 inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
          ratingStyles[metric.rating],
        )}
      >
        {ratingLabels[metric.rating]}
      </span>
      <p className="mt-2 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

export function ScanCoreWebVitals({
  lcp,
  inp,
  cls,
  hasFieldData,
}: ScanCoreWebVitalsProps) {
  return (
    <section aria-labelledby="scan-cwv-heading">
      <h3
        id="scan-cwv-heading"
        className="text-lg font-semibold text-foreground"
      >
        Core Web Vitals
      </h3>
      {!hasFieldData ? (
        <p className="mt-2 text-sm text-muted-foreground">
          Onvoldoende publieke data — lab-scores hierboven zijn indicatief.
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          Gebaseerd op echte gebruikersdata (Chrome UX Report).
        </p>
      )}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <CwvCard
          label="LCP"
          metric={lcp}
          description="Laadtijd van het grootste element"
        />
        <CwvCard
          label="INP"
          metric={inp}
          description="Responsiviteit bij interactie"
        />
        <CwvCard
          label="CLS"
          metric={cls}
          description="Visuele stabiliteit van de pagina"
        />
      </div>
    </section>
  );
}
