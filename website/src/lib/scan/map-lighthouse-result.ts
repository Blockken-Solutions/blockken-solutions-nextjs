import { toFriendlyFinding } from "@/lib/scan/friendly-findings";
import type {
  CwvMetric,
  CwvRating,
  ScanFinding,
  ScanFindingSeverity,
  ScanResult,
} from "@/lib/scan/types";
import type {
  PageSpeedInsightsResponse,
  PsiAudit,
  PsiLoadingExperience,
} from "@/lib/scan/psi-types";

const PSI_CATEGORY_MAP = {
  performance: "performance",
  seo: "seo",
  accessibility: "accessibility",
  bestPractices: "best-practices",
} as const;

function scoreToPercent(score: number | null | undefined): number {
  if (score === null || score === undefined) return 0;
  return Math.round(score * 100);
}

function auditDisplayValue(
  audits: Record<string, PsiAudit>,
  id: string,
  fallback = "—",
): string {
  return audits[id]?.displayValue ?? fallback;
}

function mapCruxCategory(category: string | undefined): CwvRating {
  switch (category) {
    case "FAST":
      return "good";
    case "AVERAGE":
      return "needs-improvement";
    case "SLOW":
      return "poor";
    default:
      return "unknown";
  }
}

function formatPercentileMs(value: number | undefined): string {
  if (value === undefined) return "—";
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}s`;
  }
  return `${Math.round(value)}ms`;
}

function formatClsPercentile(value: number | undefined): string {
  if (value === undefined) return "—";
  return value.toFixed(2);
}

function extractFieldMetric(
  experience: PsiLoadingExperience | undefined,
  metricId: string,
  formatter: (value: number | undefined) => string,
): CwvMetric {
  const metric = experience?.metrics?.[metricId];
  if (!metric?.percentile && metric?.percentile !== 0) {
    return { value: "—", rating: "unknown" };
  }

  return {
    value: formatter(metric.percentile),
    rating: mapCruxCategory(metric.category),
  };
}

function hasFieldData(experience: PsiLoadingExperience | undefined): boolean {
  if (!experience?.metrics) return false;
  return Object.values(experience.metrics).some(
    (metric) => metric.percentile !== undefined || metric.category !== undefined,
  );
}

function findingSeverity(score: number): ScanFindingSeverity {
  if (score === 0) return "critical";
  if (score < 0.5) return "warning";
  return "info";
}

function extractFindings(
  lighthouse: NonNullable<PageSpeedInsightsResponse["lighthouseResult"]>,
  limit = 5,
): ScanFinding[] {
  const auditWeights = new Map<string, number>();

  for (const category of Object.values(lighthouse.categories)) {
    for (const ref of category.auditRefs ?? []) {
      const current = auditWeights.get(ref.id) ?? 0;
      auditWeights.set(ref.id, Math.max(current, ref.weight ?? 0));
    }
  }

  const failedAudits = Object.values(lighthouse.audits)
    .filter((audit) => {
      if (audit.score === null || audit.score === undefined) return false;
      if (audit.score >= 1) return false;
      if (audit.scoreDisplayMode === "notApplicable") return false;
      if (audit.scoreDisplayMode === "manual") return false;
      if (!audit.title) return false;
      return true;
    })
    .sort((a, b) => {
      const weightDiff =
        (auditWeights.get(b.id) ?? 0) - (auditWeights.get(a.id) ?? 0);
      if (weightDiff !== 0) return weightDiff;
      return (a.score ?? 1) - (b.score ?? 1);
    })
    .slice(0, limit);

  return failedAudits.map((audit) => {
    const friendly = toFriendlyFinding(
      audit.id,
      audit.title,
      audit.description ?? "",
    );

    return {
      id: audit.id,
      title: friendly.title,
      description: friendly.description,
      severity: findingSeverity(audit.score ?? 1),
    };
  });
}

export function mapPageSpeedResponse(
  url: string,
  response: PageSpeedInsightsResponse,
): ScanResult {
  const lighthouse = response.lighthouseResult;
  if (!lighthouse) {
    throw new Error("Geen Lighthouse-resultaten ontvangen.");
  }

  const { categories, audits } = lighthouse;
  const fieldExperience =
    response.loadingExperience ?? response.originLoadingExperience;

  return {
    url,
    scannedAt: new Date().toISOString(),
    strategy: "mobile",
    scores: {
      performance: scoreToPercent(categories[PSI_CATEGORY_MAP.performance]?.score),
      seo: scoreToPercent(categories[PSI_CATEGORY_MAP.seo]?.score),
      accessibility: scoreToPercent(
        categories[PSI_CATEGORY_MAP.accessibility]?.score,
      ),
      bestPractices: scoreToPercent(
        categories[PSI_CATEGORY_MAP.bestPractices]?.score,
      ),
    },
    metrics: {
      lcp: auditDisplayValue(audits, "largest-contentful-paint"),
      fcp: auditDisplayValue(audits, "first-contentful-paint"),
      tbt: auditDisplayValue(audits, "total-blocking-time"),
      speedIndex: auditDisplayValue(audits, "speed-index"),
    },
    coreWebVitals: {
      lcp: extractFieldMetric(
        fieldExperience,
        "LARGEST_CONTENTFUL_PAINT_MS",
        formatPercentileMs,
      ),
      inp: extractFieldMetric(
        fieldExperience,
        "INTERACTION_TO_NEXT_PAINT",
        formatPercentileMs,
      ),
      cls: extractFieldMetric(
        fieldExperience,
        "CUMULATIVE_LAYOUT_SHIFT_SCORE",
        formatClsPercentile,
      ),
      hasFieldData: hasFieldData(fieldExperience),
    },
    findings: extractFindings(lighthouse),
  };
}
