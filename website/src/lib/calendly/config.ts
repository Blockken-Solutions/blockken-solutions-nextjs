export function getCalendlyUrl(): string | null {
  const base = process.env.CALENDLY_URL?.trim();
  if (!base) {
    return null;
  }

  try {
    const url = new URL(base);
    url.searchParams.set("utm_source", "blockken-solutions");
    url.searchParams.set("primary_color", "d97706");
    url.searchParams.set("background_color", "ffffff");
    url.searchParams.set("text_color", "1a1a1a");
    url.searchParams.set("hide_gdpr_banner", "1");
    return url.toString();
  } catch {
    return null;
  }
}
