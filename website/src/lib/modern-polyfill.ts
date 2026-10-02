type URLWithOptionalCanParse = typeof URL & {
  canParse?: (url: string, base?: string) => boolean;
};

const URLConstructor = URL as URLWithOptionalCanParse;

if (typeof URL !== "undefined" && !URLConstructor.canParse) {
  URLConstructor.canParse = (url: string, base?: string): boolean => {
    try {
      return Boolean(new URL(url, base));
    } catch {
      return false;
    }
  };
}

export {};
