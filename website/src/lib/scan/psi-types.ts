export type PsiCategoryScore = {
  id: string;
  title: string;
  score: number | null;
  auditRefs?: { id: string; weight?: number }[];
};

export type PsiAudit = {
  id: string;
  title: string;
  description?: string;
  score: number | null;
  scoreDisplayMode?: string;
  displayValue?: string;
};

export type PsiMetric = {
  category?: string;
  percentile?: number;
  distributions?: unknown[];
};

export type PsiLoadingExperience = {
  metrics?: Record<string, PsiMetric>;
};

export type PsiLighthouseResult = {
  categories: Record<string, PsiCategoryScore>;
  audits: Record<string, PsiAudit>;
};

export type PageSpeedInsightsResponse = {
  id?: string;
  loadingExperience?: PsiLoadingExperience;
  originLoadingExperience?: PsiLoadingExperience;
  lighthouseResult?: PsiLighthouseResult;
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
};
