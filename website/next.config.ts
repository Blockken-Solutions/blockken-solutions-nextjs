import type { NextConfig } from "next";

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

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
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
