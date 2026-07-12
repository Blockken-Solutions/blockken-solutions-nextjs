import { readFile } from "node:fs/promises";

import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

const BRAND_ORANGE = "#f97316";
const FOREGROUND = "#262626";

async function loadGeistBold(): Promise<ArrayBuffer> {
  const font = await readFile(
    new URL("../assets/fonts/Geist-Bold.ttf", import.meta.url),
  );

  return font.buffer.slice(font.byteOffset, font.byteOffset + font.byteLength);
}

export default async function Icon() {
  const geistBold = await loadGeistBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "Geist",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.025em",
        }}
      >
        <span style={{ color: FOREGROUND }}>B</span>
        <span style={{ color: BRAND_ORANGE }}>.</span>
        <span style={{ color: FOREGROUND }}>S</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
