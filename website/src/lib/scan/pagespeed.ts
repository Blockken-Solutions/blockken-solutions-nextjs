import { mapPageSpeedResponse } from "@/lib/scan/map-lighthouse-result";
import type { PageSpeedInsightsResponse } from "@/lib/scan/psi-types";
import type { ScanResult } from "@/lib/scan/types";

const PSI_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const PSI_TIMEOUT_MS = 90_000;

const PSI_CATEGORIES = [
  "performance",
  "seo",
  "accessibility",
  "best-practices",
] as const;

function getApiKey(): string {
  const key = process.env.GOOGLE_PAGESPEED_API_KEY?.trim();
  if (!key) {
    throw new Error(
      "Scan is tijdelijk niet beschikbaar. Neem contact op via wouter@blockken.solutions.",
    );
  }
  return key;
}

function buildPageSpeedUrl(targetUrl: string): URL {
  const url = new URL(PSI_ENDPOINT);
  url.searchParams.set("url", targetUrl);
  url.searchParams.set("strategy", "mobile");
  url.searchParams.set("locale", "nl");
  url.searchParams.set("key", getApiKey());

  for (const category of PSI_CATEGORIES) {
    url.searchParams.append("category", category);
  }

  return url;
}

function mapHttpError(status: number): string {
  if (status === 400) {
    return "De opgegeven URL kon niet worden geanalyseerd. Controleer het adres.";
  }
  if (status === 403) {
    return "Scan is tijdelijk niet beschikbaar. Probeer het later opnieuw.";
  }
  if (status === 429) {
    return "Te veel scans op dit moment. Probeer het over enkele minuten opnieuw.";
  }
  return "De scan is mislukt. Probeer het later opnieuw.";
}

export async function runPageSpeedScan(targetUrl: string): Promise<ScanResult> {
  const response = await fetch(buildPageSpeedUrl(targetUrl), {
    signal: AbortSignal.timeout(PSI_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(mapHttpError(response.status));
  }

  const data = (await response.json()) as PageSpeedInsightsResponse;

  if (data.error?.message) {
    throw new Error(
      "De opgegeven URL kon niet worden geanalyseerd. Controleer het adres.",
    );
  }

  return mapPageSpeedResponse(targetUrl, data);
}
