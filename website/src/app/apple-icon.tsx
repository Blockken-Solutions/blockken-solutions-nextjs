import { ImageResponse } from "next/og";

import { LogoMarkGraphic } from "@/components/layout/logo-mark-graphic";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <LogoMarkGraphic
          width={160}
          height={160}
          ink="#171717"
          accent="#F97316"
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
