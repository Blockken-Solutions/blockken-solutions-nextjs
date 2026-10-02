import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const legacyRedirects = [
  { source: "/agents", destination: "/#prijzen", permanent: true },
  { source: "/agents/:slug", destination: "/#prijzen", permanent: true },
  { source: "/blocks", destination: "/#prijzen", permanent: true },
  { source: "/blocks/:slug", destination: "/#prijzen", permanent: true },
  { source: "/sectoren", destination: "/#prijzen", permanent: true },
  { source: "/sectoren/:slug", destination: "/#prijzen", permanent: true },
];

const modernPolyfillPath = path.join(configDir, "src/lib/modern-polyfill.ts");
const modernPolyfillTurbopack = "./src/lib/modern-polyfill.ts";

const polyfillWebpackAlias: Record<string, string> = {
  "../build/polyfills/polyfill-module": modernPolyfillPath,
  "next/dist/build/polyfills/polyfill-module": modernPolyfillPath,
};

const polyfillTurbopackAlias: Record<string, string> = {
  "../build/polyfills/polyfill-module": modernPolyfillTurbopack,
  "next/dist/build/polyfills/polyfill-module": modernPolyfillTurbopack,
};

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  turbopack: {
    resolveAlias: polyfillTurbopackAlias,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve ??= {};
      config.resolve.alias = {
        ...config.resolve.alias,
        ...polyfillWebpackAlias,
      };
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
