export type NormalizeScanUrlResult =
  | { ok: true; url: string }
  | { ok: false; error: string };

export function normalizeScanUrl(
  input: string,
  errorMessage: string,
): NormalizeScanUrlResult {
  const trimmed = input.trim();

  if (!trimmed) {
    return { ok: false, error: errorMessage };
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);

    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return { ok: false, error: errorMessage };
    }

    if (!parsed.hostname.includes(".")) {
      return { ok: false, error: errorMessage };
    }

    return { ok: true, url: parsed.toString() };
  } catch {
    return { ok: false, error: errorMessage };
  }
}

export function parseScanUrlParam(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const result = normalizeScanUrl(
    value,
    "Voer een geldige website-URL in (bijv. https://uw-website.be).",
  );

  return result.ok ? result.url : null;
}
