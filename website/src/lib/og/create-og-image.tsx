import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

type CreateOgImageOptions = {
  title: string;
  description: string;
  footer?: string;
};

let logoDataUrl: string | undefined;

async function getLogoDataUrl(): Promise<string> {
  if (!logoDataUrl) {
    const logoBuffer = await readFile(join(process.cwd(), "public/logo.svg"));
    logoDataUrl = `data:image/svg+xml;base64,${logoBuffer.toString("base64")}`;
  }

  return logoDataUrl;
}

export async function createOgImage({
  title,
  description,
  footer = "Gebouwd in België.",
}: CreateOgImageOptions) {
  const logoSrc = await getLogoDataUrl();

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
          background: "#ffffff",
          color: "#0a0a0a",
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
          <img src={logoSrc} width={56} height={56} alt="" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            blockken
            <span style={{ color: "#f97316" }}>.</span>
            solutions
          </div>
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
              color: "#525252",
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
            color: "#737373",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "4px",
              background: "#f97316",
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
