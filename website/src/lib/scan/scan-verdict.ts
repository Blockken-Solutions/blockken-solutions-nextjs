import type { ScanFinding, ScanResult } from "@/lib/scan/types";

export type ScanGrade = "good" | "fair" | "poor";

export type ScanCategoryKey =
  | "performance"
  | "seo"
  | "accessibility"
  | "bestPractices";

export type ScanVerdict = {
  grade: ScanGrade;
  headline: string;
  summary: string;
  ctaHeading: string;
  ctaSubheading: string;
  weakestCategory: ScanCategoryKey;
};

const CATEGORY_LABELS: Record<ScanCategoryKey, string> = {
  performance: "Snelheid",
  seo: "Vindbaarheid",
  accessibility: "Toegankelijkheid",
  bestPractices: "Technische kwaliteit",
};

const CATEGORY_IMPACT: Record<ScanCategoryKey, string> = {
  performance: "Trage pagina's laten bezoekers afhaken.",
  seo: "U mist waarschijnlijk bezoekers via Google.",
  accessibility: "Niet iedereen kan uw site gemakkelijk gebruiken.",
  bestPractices: "Technische fouten kunnen vertrouwen en conversie kosten.",
};

function averageScore(scores: ScanResult["scores"]): number {
  const values = [
    scores.performance,
    scores.seo,
    scores.accessibility,
    scores.bestPractices,
  ];
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function countCriticalFindings(findings: ScanFinding[]): number {
  return findings.filter((finding) => finding.severity === "critical").length;
}

function findWeakestCategory(scores: ScanResult["scores"]): ScanCategoryKey {
  const entries: [ScanCategoryKey, number][] = [
    ["performance", scores.performance],
    ["seo", scores.seo],
    ["accessibility", scores.accessibility],
    ["bestPractices", scores.bestPractices],
  ];

  return entries.reduce((weakest, current) =>
    current[1] < weakest[1] ? current : weakest,
  )[0];
}

function isStrongScore(average: number): boolean {
  return average >= 90;
}

function determineGrade(average: number, criticalCount: number): ScanGrade {
  if (average < 70 || criticalCount >= 5) return "poor";
  if (average >= 90) return "good";
  return "fair";
}

function buildHeadline(
  average: number,
  grade: ScanGrade,
  criticalCount: number,
  weakestLabel: string,
): string {
  if (isStrongScore(average)) {
    if (criticalCount === 0) {
      return "Uw website scoort uitstekend";
    }
    if (criticalCount === 1) {
      return "Uw website scoort goed, maar 1 punt verdient aandacht";
    }
    return `Uw website scoort goed, maar ${criticalCount} punten verdienen aandacht`;
  }

  if (grade === "poor") {
    return `Uw website heeft aandacht nodig — vooral op ${weakestLabel.toLowerCase()}`;
  }

  if (criticalCount === 0) {
    return "Uw website scoort redelijk, maar kan beter";
  }

  if (criticalCount === 1) {
    return "Uw website scoort redelijk, maar 1 belangrijk knelpunt vraagt aandacht";
  }

  return `Uw website scoort redelijk, maar ${criticalCount} belangrijke knelpunten vragen aandacht`;
}

function buildSummary(
  average: number,
  weakestCategory: ScanCategoryKey,
): string {
  if (isStrongScore(average)) {
    return "Uw scores zijn sterk. Enkele gerichte verbeteringen kunnen u nog meer opleveren.";
  }

  return CATEGORY_IMPACT[weakestCategory];
}

function buildCtaHeading(
  average: number,
  weakestCategory: ScanCategoryKey,
): string {
  if (isStrongScore(average)) {
    return "Sterke basis — laten we uw volledige site bekijken";
  }

  if (weakestCategory === "performance") {
    return "Trage pagina's laten bezoekers afhaken";
  }

  if (weakestCategory === "seo") {
    return "U mist waarschijnlijk bezoekers via Google";
  }

  if (weakestCategory === "accessibility") {
    return "Maak uw site bereikbaar voor iedereen";
  }

  return "Technische problemen kosten u vertrouwen en conversie";
}

function buildCtaSubheading(average: number, grade: ScanGrade): string {
  if (isStrongScore(average)) {
    return "Plan een gratis gesprek en ontdek waar u nog winst kunt halen op uw volledige website.";
  }

  if (grade === "poor") {
    return "Plan een gratis optimalisatiegesprek — we bespreken concrete stappen om snel resultaat te boeken.";
  }

  return "Plan een gratis gesprek en ontdek welke verbeteringen het meeste opleveren voor uw bedrijf.";
}

export function buildScanVerdict(result: ScanResult): ScanVerdict {
  const average = averageScore(result.scores);
  const criticalCount = countCriticalFindings(result.findings);
  const grade = determineGrade(average, criticalCount);
  const weakestCategory = findWeakestCategory(result.scores);
  const weakestLabel = CATEGORY_LABELS[weakestCategory];

  return {
    grade,
    headline: buildHeadline(average, grade, criticalCount, weakestLabel),
    summary: buildSummary(average, weakestCategory),
    ctaHeading: buildCtaHeading(average, weakestCategory),
    ctaSubheading: buildCtaSubheading(average, grade),
    weakestCategory,
  };
}

export function getGradeLabel(grade: ScanGrade): string {
  switch (grade) {
    case "good":
      return "Goed";
    case "fair":
      return "Kan beter";
    case "poor":
      return "Actie nodig";
  }
}
