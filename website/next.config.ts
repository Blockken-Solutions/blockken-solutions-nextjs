import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const agentToBlockRedirects = [
  { source: "/agents", destination: "/blocks", permanent: true },
  { source: "/agents/lead-pre-kwalificator", destination: "/blocks/aanvraagfilter", permanent: true },
  { source: "/blocks/slim-eerste-contact", destination: "/blocks/aanvraagfilter", permanent: true },
  { source: "/agents/support-agent-247", destination: "/blocks/digitale-receptie", permanent: true },
  { source: "/agents/email-review-assistent", destination: "/blocks/review-hulp", permanent: true },
  { source: "/agents/afspraak-doorverwijzer", destination: "/blocks/digitale-receptie", permanent: true },
  { source: "/agents/offerte-generator", destination: "/blocks", permanent: true },
  { source: "/agents/factuur-extractor", destination: "/blocks", permanent: true },
  { source: "/agents/:slug", destination: "/blocks/:slug", permanent: true },
  { source: "/agents/upsell-bestel-assistent", destination: "/blocks", permanent: true },
  { source: "/agents/storing-nazorg-bot", destination: "/blocks/digitale-receptie", permanent: true },
  { source: "/agents/triage-agenda-planner", destination: "/blocks/digitale-receptie", permanent: true },
];

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return agentToBlockRedirects;
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
