import type { SVGProps } from "react";

import { logoMarkGeometry, logoMarkViewBox } from "@/assets/logo-mark.generated";
import { cn } from "@/lib/utils";

export type LogoMarkGraphicProps = SVGProps<SVGSVGElement> & {
  accentClassName?: string;
  ink?: string;
  accent?: string;
};

export function LogoMarkGraphic({
  className,
  accentClassName,
  ink,
  accent,
  ...props
}: LogoMarkGraphicProps) {
  const { inkPathD, accentSquare } = logoMarkGeometry;

  return (
    <svg
      viewBox={`0 0 ${logoMarkViewBox} ${logoMarkViewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block shrink-0", className)}
      {...props}
    >
      <path
        d={inkPathD}
        fill={ink ?? "currentColor"}
        fillRule="evenodd"
      />
      <rect
        x={accentSquare.x}
        y={accentSquare.y}
        width={accentSquare.size}
        height={accentSquare.size}
        fill={accent}
        className={cn(!accent && "fill-primary", accentClassName)}
      />
    </svg>
  );
}
