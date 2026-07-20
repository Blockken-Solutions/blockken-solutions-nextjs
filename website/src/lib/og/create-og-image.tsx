import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

type CreateOgImageOptions = {
  eyebrow?: string;
  title: string;
  description: string;
  footer?: string;
};

export function createOgImage({
  eyebrow = "blockken.solutions",
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
          {eyebrow}
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
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#a3a3a3",
              maxWidth: "800px",
            }}
          >
            {description}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#737373" }}>{footer}</div>
      </div>
    ),
    ogImageSize,
  );
}
