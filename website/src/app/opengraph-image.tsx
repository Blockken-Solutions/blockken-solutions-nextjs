import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#f97316",
            fontWeight: 700,
          }}
        >
          blockken.solutions
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Web, AI & Automatisering voor KMO&apos;s
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#a3a3a3",
              maxWidth: "800px",
            }}
          >
            Razendsnelle webapplicaties en slimme AI-agents — veilig, op maat,
            gebouwd in België.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#737373" }}>{site.footerTagline}</div>
      </div>
    ),
    { ...size },
  );
}
