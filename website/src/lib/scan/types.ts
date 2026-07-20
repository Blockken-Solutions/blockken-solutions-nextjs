export type CwvRating = "good" | "needs-improvement" | "poor" | "unknown";

export type CwvMetric = {
  value: string;
  rating: CwvRating;
};

export type ScanFindingSeverity = "critical" | "warning" | "info";

export type ScanFinding = {
  id: string;
  title: string;
  description: string;
  severity: ScanFindingSeverity;
};

export type ScanResult = {
  url: string;
  scannedAt: string;
  strategy: "mobile";
  scores: {
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  };
  metrics: {
    lcp: string;
    fcp: string;
    tbt: string;
    speedIndex: string;
  };
  coreWebVitals: {
    lcp: CwvMetric;
    inp: CwvMetric;
    cls: CwvMetric;
    hasFieldData: boolean;
  };
  findings: ScanFinding[];
};

export type ScanStatus = "idle" | "loading" | "success" | "error";

export type ScanState =
  | { status: "idle" }
  | { status: "loading"; url: string }
  | { status: "success"; result: ScanResult }
  | { status: "error"; message: string; url: string };
