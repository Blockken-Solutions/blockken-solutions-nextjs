import { ImageResponse } from "next/og";

import { LogoMarkGraphic } from "@/components/layout/logo-mark-graphic";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

type CreateOgImageOptions = {
  title: string;
  description: string;
  footer?: string;
};

export async function createOgImage({
  title,
  description,
  footer = "Gebouwd in België.",
}: CreateOgImageOptions) {
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
          background: "#F7F4EF",
          color: "#1C1917",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <LogoMarkGraphic width={56} height={56} ink="#171717" accent="#F97316" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            blockken
            <span style={{ color: "#F97316" }}>.</span>
            solutions
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#57534E",
              maxWidth: "800px",
            }}
          >
            {description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 22,
            fontWeight: 700,
            color: "#1C1917",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "6px",
              background: "#F97316",
              borderRadius: "999px",
            }}
          />
          {footer}
        </div>
      </div>
    ),
    ogImageSize,
  );
}
