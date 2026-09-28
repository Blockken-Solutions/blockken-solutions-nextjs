export const SECTION_NAV_EVENT = "sectionnav:scroll";
const CLEAN_HOME_NAV_KEY = "sectionnav:clean-home";
const PENDING_SECTION_KEY = "sectionnav:pending";

export function markCleanHomeNavigation(): void {
  sessionStorage.setItem(CLEAN_HOME_NAV_KEY, "1");
}

export function consumeCleanHomeNavigation(): boolean {
  if (sessionStorage.getItem(CLEAN_HOME_NAV_KEY) !== "1") {
    return false;
  }

  sessionStorage.removeItem(CLEAN_HOME_NAV_KEY);
  sessionStorage.removeItem(PENDING_SECTION_KEY);
  return true;
}

export function markPendingSectionScroll(id: string): void {
  sessionStorage.setItem(PENDING_SECTION_KEY, id);
}

export function peekPendingSectionScroll(): string | null {
  const id = sessionStorage.getItem(PENDING_SECTION_KEY);
  return id || null;
}

export function consumePendingSectionScroll(): string | null {
  const id = peekPendingSectionScroll();
  if (!id) {
    return null;
  }

  sessionStorage.removeItem(PENDING_SECTION_KEY);
  return id;
}

export function resetToCleanHome(): void {
  window.history.replaceState(null, "", "/");
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function parseHomeSectionId(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return null;
  }

  const path = href.slice(0, hashIndex);
  const isHomePath = path === "" || path === "/" || path.startsWith("/?");

  if (!isHomePath) {
    return null;
  }

  const id = href.slice(hashIndex + 1).split("?")[0];
  return id || null;
}

export function isHomeSectionHref(href: string): boolean {
  return parseHomeSectionId(href) !== null;
}

export function getHeaderOffset(): number {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-offset")
    .trim();

  if (!value) {
    return 96;
  }

  if (value.endsWith("rem")) {
    const rem = parseFloat(value);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * rootFontSize;
  }

  if (value.endsWith("px")) {
    return parseFloat(value);
  }

  return parseFloat(value) || 96;
}

type ScrollToSectionOptions = {
  behavior?: ScrollBehavior;
  updateHash?: boolean;
};

export function scrollToSection(
  id: string,
  { behavior = "smooth", updateHash = true }: ScrollToSectionOptions = {},
): boolean {
  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  const offset = getHeaderOffset();
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior });

  if (updateHash) {
    const nextUrl = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", nextUrl);
  }

  window.dispatchEvent(
    new CustomEvent(SECTION_NAV_EVENT, { detail: { id } }),
  );

  return true;
}

export function getHashSectionId(): string | null {
  const hash = window.location.hash.replace("#", "").split("?")[0];
  return hash || null;
}

function sectionIdsInDocumentOrder(sectionIds: string[]): string[] {
  return [...sectionIds].sort((a, b) => {
    const elementA = document.getElementById(a);
    const elementB = document.getElementById(b);

    if (!elementA && !elementB) {
      return 0;
    }

    if (!elementA) {
      return 1;
    }

    if (!elementB) {
      return -1;
    }

    return (
      elementA.getBoundingClientRect().top +
      window.scrollY -
      (elementB.getBoundingClientRect().top + window.scrollY)
    );
  });
}

export function resolveActiveSection(sectionIds: string[]): string | null {
  const activationLine = getHeaderOffset();
  let current: string | null = null;

  for (const id of sectionIdsInDocumentOrder(sectionIds)) {
    const element = document.getElementById(id);
    if (!element) {
      continue;
    }

    if (element.getBoundingClientRect().top <= activationLine + 1) {
      current = id;
    }
  }

  return current;
}

export function waitForLayout(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

type ScrollToSectionWhenReadyOptions = ScrollToSectionOptions & {
  maxAttempts?: number;
  attemptDelayMs?: number;
};

export async function scrollToSectionWhenReady(
  id: string,
  {
    maxAttempts = 40,
    attemptDelayMs = 32,
    ...scrollOptions
  }: ScrollToSectionWhenReadyOptions = {},
): Promise<boolean> {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await waitForLayout();

    if (scrollToSection(id, scrollOptions)) {
      return true;
    }

    await new Promise((resolve) => {
      window.setTimeout(resolve, attemptDelayMs);
    });
  }

  return false;
}
