import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/agents/upsell-bestel-assistent",
        destination: "/agents",
        permanent: true,
      },
      {
        source: "/agents/storing-nazorg-bot",
        destination: "/agents/support-agent-247",
        permanent: true,
      },
      {
        source: "/agents/triage-agenda-planner",
        destination: "/agents/afspraak-doorverwijzer",
        permanent: true,
      },
    ];
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
