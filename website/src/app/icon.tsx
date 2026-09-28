import { ImageResponse } from "next/og";

import { LogoMarkGraphic } from "@/components/layout/logo-mark-graphic";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <LogoMarkGraphic
        width={32}
        height={32}
        ink="#171717"
        accent="#F97316"
      />
    ),
    {
      ...size,
    },
  );
}
