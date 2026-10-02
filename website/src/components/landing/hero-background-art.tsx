import { cn } from "@/lib/utils";

type HeroBackgroundArtProps = {
  className?: string;
};

export function HeroBackgroundArt({ className }: HeroBackgroundArtProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMin meet"
      className={cn("block h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-fill-a" gradientUnits="userSpaceOnUse" x1="0" y1="290" x2="0" y2="720">
          <stop offset="0" stopColor="#fdba74" stopOpacity=".6" />
          <stop offset=".35" stopColor="#ffd9b0" stopOpacity=".38" />
          <stop offset="1" stopColor="#ffedd5" stopOpacity=".1" />
        </linearGradient>
        <linearGradient id="hero-tint-a" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0" stopColor="#fde68a" stopOpacity=".25" />
          <stop offset=".5" stopColor="#f97316" stopOpacity="0" />
          <stop offset="1" stopColor="#f97316" stopOpacity=".3" />
        </linearGradient>
        <linearGradient id="hero-fill-b" gradientUnits="userSpaceOnUse" x1="0" y1="400" x2="0" y2="720">
          <stop offset="0" stopColor="#fdba74" stopOpacity=".5" />
          <stop offset=".5" stopColor="#ffe3c4" stopOpacity=".4" />
          <stop offset="1" stopColor="#faf1e5" stopOpacity=".2" />
        </linearGradient>
        <linearGradient id="hero-fill-c" gradientUnits="userSpaceOnUse" x1="0" y1="540" x2="0" y2="720">
          <stop offset="0" stopColor="#ffedd5" stopOpacity=".75" />
          <stop offset="1" stopColor="#faf1e5" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="hero-edge-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".18" stopColor="#fff" stopOpacity=".85" />
          <stop offset=".5" stopColor="#fdba74" stopOpacity=".7" />
          <stop offset=".82" stopColor="#f97316" stopOpacity=".75" />
          <stop offset="1" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-echo" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1440" y2="0">
          <stop offset="0" stopColor="#f97316" stopOpacity="0" />
          <stop offset=".25" stopColor="#fdba74" stopOpacity=".9" />
          <stop offset=".8" stopColor="#f97316" stopOpacity=".8" />
          <stop offset="1" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f4ef" stopOpacity="0" />
          <stop offset=".55" stopColor="#f7f4ef" stopOpacity="0" />
          <stop offset="1" stopColor="#f7f4ef" stopOpacity=".55" />
        </linearGradient>
        <filter id="hero-blur-70" filterUnits="userSpaceOnUse" x="-300" y="-300" width="2040" height="1320">
          <feGaussianBlur stdDeviation="70" />
        </filter>
        <filter id="hero-blur-14" filterUnits="userSpaceOnUse" x="-100" y="-100" width="1640" height="920">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="hero-soft" filterUnits="userSpaceOnUse" x="-100" y="-100" width="1640" height="920">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id="hero-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves={2} stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 .1  0 0 0 0 .09  0 0 0 0 .08  0 0 0 .6 -.2" />
        </filter>
        <path
          id="hero-edge-a"
          d="M-40 400 C160 300 330 330 500 470 C620 570 800 610 960 520 C1120 430 1260 280 1480 300"
        />
        <path
          id="hero-edge-b"
          d="M-40 500 C140 430 320 450 480 540 C620 620 820 650 980 590 C1140 530 1280 410 1480 420"
        />
        <path
          id="hero-edge-c"
          d="M-40 600 C200 560 380 590 560 640 C700 680 860 690 1020 650 C1180 610 1320 540 1480 550"
        />
      </defs>
      <rect width="1440" height="720" fill="#f7f4ef" />
      <g filter="url(#hero-blur-70)">
        <ellipse cx="720" cy="110" rx="540" ry="170" fill="#ffe3c4" fillOpacity=".7" />
        <ellipse cx="1260" cy="330" rx="380" ry="170" fill="#f97316" fillOpacity=".2" />
        <ellipse cx="190" cy="430" rx="300" ry="140" fill="#fde68a" fillOpacity=".4" />
      </g>
      <path
        d="M-40 400 C160 300 330 330 500 470 C620 570 800 610 960 520 C1120 430 1260 280 1480 300 L1480 740 L-40 740Z"
        fill="url(#hero-fill-a)"
      />
      <path
        d="M-40 400 C160 300 330 330 500 470 C620 570 800 610 960 520 C1120 430 1260 280 1480 300 L1480 740 L-40 740Z"
        fill="url(#hero-tint-a)"
      />
      <use
        href="#hero-edge-a"
        fill="none"
        stroke="#f97316"
        strokeOpacity=".5"
        strokeWidth="16"
        filter="url(#hero-blur-14)"
      />
      <use
        href="#hero-edge-a"
        fill="none"
        stroke="url(#hero-edge-stroke)"
        strokeWidth="1.6"
        filter="url(#hero-soft)"
      />
      <g fill="none" stroke="url(#hero-echo)" strokeLinecap="round">
        <use href="#hero-edge-a" transform="translate(0 -16)" strokeWidth="1.2" opacity=".5" />
        <use href="#hero-edge-a" transform="translate(0 -34)" strokeWidth="1" opacity=".36" />
        <use href="#hero-edge-a" transform="translate(0 -54)" strokeWidth="1" opacity=".24" />
        <use href="#hero-edge-a" transform="translate(0 -78)" strokeWidth=".8" opacity=".14" />
      </g>
      <path
        d="M-40 500 C140 430 320 450 480 540 C620 620 820 650 980 590 C1140 530 1280 410 1480 420 L1480 740 L-40 740Z"
        fill="url(#hero-fill-b)"
      />
      <use
        href="#hero-edge-b"
        fill="none"
        stroke="#fdba74"
        strokeOpacity=".5"
        strokeWidth="12"
        filter="url(#hero-blur-14)"
      />
      <use
        href="#hero-edge-b"
        fill="none"
        stroke="url(#hero-edge-stroke)"
        strokeWidth="1.4"
        filter="url(#hero-soft)"
      />
      <path
        d="M-40 600 C200 560 380 590 560 640 C700 680 860 690 1020 650 C1180 610 1320 540 1480 550 L1480 740 L-40 740Z"
        fill="url(#hero-fill-c)"
      />
      <use
        href="#hero-edge-c"
        fill="none"
        stroke="url(#hero-edge-stroke)"
        strokeWidth="1.2"
        strokeOpacity=".8"
        filter="url(#hero-soft)"
      />
      <rect width="1440" height="720" filter="url(#hero-grain)" opacity=".35" />
      <rect y="620" width="1440" height="100" fill="url(#hero-fade)" />
    </svg>
  );
}
