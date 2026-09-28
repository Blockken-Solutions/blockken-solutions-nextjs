import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

import potrace from "potrace";
import sharp from "sharp";

const trace = promisify(potrace.trace);

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const sourcePngPath = join(rootDir, "public/logo-source.png");
const publicSvgPath = join(rootDir, "public/logo.svg");
const assetTsPath = join(rootDir, "src/assets/logo-mark.generated.ts");

const VIEW = 512;
const INK = "#171717";
const ACCENT = "#F97316";

async function readOrangeSquareFromPng(width, height) {
  const { data, info } = await sharp(sourcePngPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const srcW = info.width;
  const srcH = info.height;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let y = 0; y < srcH; y += 1) {
    for (let x = 0; x < srcW; x += 1) {
      const i = (y * srcW + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 128) continue;
      if (r > 200 && g > 80 && g < 180 && b < 80) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (!Number.isFinite(minX)) {
    throw new Error("Could not detect orange square in logo-source.png");
  }

  const scale = Math.min(width / srcW, height / srcH);
  const drawW = srcW * scale;
  const drawH = srcH * scale;
  const offsetX = (width - drawW) / 2;
  const offsetY = (height - drawH) / 2;

  return {
    x: offsetX + minX * scale,
    y: offsetY + minY * scale,
    size: (maxX - minX + 1) * scale,
    scale,
    offsetX,
    offsetY,
    srcW,
    srcH,
  };
}

async function buildTraceInput(viewSize) {
  const meta = await sharp(sourcePngPath).metadata();
  const srcW = meta.width ?? viewSize;
  const srcH = meta.height ?? viewSize;
  const scale = Math.min(viewSize / srcW, viewSize / srcH);
  const drawW = Math.round(srcW * scale);
  const drawH = Math.round(srcH * scale);
  const offsetX = Math.round((viewSize - drawW) / 2);
  const offsetY = Math.round((viewSize - drawH) / 2);

  const { data } = await sharp(sourcePngPath)
    .ensureAlpha()
    .resize(drawW, drawH)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(viewSize * viewSize * 4, 0);

  for (let y = 0; y < drawH; y += 1) {
    for (let x = 0; x < drawW; x += 1) {
      const i = (y * drawW + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 128) continue;

      const isOrange = r > 200 && g > 80 && g < 180 && b < 80;
      const isDark = r < 100 && g < 100 && b < 100;

      if (isDark && !isOrange) {
        const oxp = offsetX + x;
        const oyp = offsetY + y;
        const j = (oyp * viewSize + oxp) * 4;
        out[j] = 0;
        out[j + 1] = 0;
        out[j + 2] = 0;
        out[j + 3] = 255;
      }
    }
  }

  const traceBuffer = await sharp(out, {
    raw: { width: viewSize, height: viewSize, channels: 4 },
  })
    .png()
    .toBuffer();

  return traceBuffer;
}

function extractPathData(tracedSvg) {
  const match = tracedSvg.match(/\sd="([^"]+)"/);
  if (!match) {
    throw new Error("Potrace output did not contain a path");
  }
  return match[1];
}

async function buildGeometry() {
  const traceInput = await buildTraceInput(VIEW);
  const tracedSvg = await trace(traceInput, {
    turdSize: 2,
    optTolerance: 0.35,
    color: INK,
    background: "transparent",
  });

  const inkPathD = extractPathData(tracedSvg);
  const accentSquare = await readOrangeSquareFromPng(VIEW, VIEW);

  return {
    viewBox: VIEW,
    inkPathD,
    accentSquare: {
      x: accentSquare.x,
      y: accentSquare.y,
      size: accentSquare.size,
    },
  };
}

function publicSvg(geometry) {
  const { viewBox, inkPathD, accentSquare } = geometry;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBox} ${viewBox}" fill="none" role="img" aria-label="blockken.solutions">
  <path fill="${INK}" fill-rule="evenodd" d="${inkPathD}"/>
  <rect x="${accentSquare.x.toFixed(2)}" y="${accentSquare.y.toFixed(2)}" width="${accentSquare.size.toFixed(2)}" height="${accentSquare.size.toFixed(2)}" fill="${ACCENT}"/>
</svg>
`;
}

function assetModule(geometry) {
  const { viewBox, inkPathD, accentSquare } = geometry;

  return `export const logoMarkViewBox = ${viewBox};

export const logoMarkGeometry = {
  inkPathD: ${JSON.stringify(inkPathD)},
  accentSquare: ${JSON.stringify(accentSquare)},
} as const;
`;
}

async function main() {
  const geometry = await buildGeometry();
  await mkdir(dirname(assetTsPath), { recursive: true });
  await writeFile(publicSvgPath, `${publicSvg(geometry).trim()}\n`);
  await writeFile(assetTsPath, `${assetModule(geometry).trim()}\n`);
  console.log("Generated", publicSvgPath);
  console.log("Generated", assetTsPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
