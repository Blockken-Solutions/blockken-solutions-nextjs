import { mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const outputDir = join(rootDir, "exports", "logo");
const fontPath = join(rootDir, "src/assets/fonts/Geist-Bold.ttf");

const BRAND_ORANGE = "oklch(0.68 0.19 45)";
const FOREGROUND = "oklch(0.145 0 0)";
const WHITE = "oklch(0.985 0 0)";

async function buildHtml({ textColor, content, fontSize }) {
  const fontBase64 = (await readFile(fontPath)).toString("base64");

  return `<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face {
        font-family: "Geist";
        src: url("data:font/truetype;base64,${fontBase64}") format("truetype");
        font-weight: 700;
        font-style: normal;
      }

      * {
        margin: 0;
        padding: 0;
      }

      body {
        background: transparent;
      }

      .logo {
        display: inline-block;
        font-family: "Geist", sans-serif;
        font-weight: 700;
        font-size: ${fontSize}px;
        letter-spacing: -0.025em;
        color: ${textColor};
        white-space: nowrap;
        line-height: 1;
      }

      .logo .dot {
        color: ${BRAND_ORANGE};
      }
    </style>
  </head>
  <body>
    <div id="logo" class="logo">${content}</div>
  </body>
</html>`;
}

async function captureLogo(page, html, filename, scale) {
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  const logo = page.locator("#logo");
  await logo.screenshot({
    path: join(outputDir, filename),
    omitBackground: true,
    scale,
  });

  return join(outputDir, filename);
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2400, height: 800 },
    deviceScaleFactor: 2,
  });

  const scale = "css";
  const wordmarkFontSize = 120;
  const iconFontSize = 240;

  const wordmarkDark = await captureLogo(
    page,
    await buildHtml({
      textColor: FOREGROUND,
      fontSize: wordmarkFontSize,
      content: 'blockken<span class="dot">.</span>solutions',
    }),
    "blockken-solutions-logo.png",
    scale,
  );

  const wordmarkWhite = await captureLogo(
    page,
    await buildHtml({
      textColor: WHITE,
      fontSize: wordmarkFontSize,
      content: 'blockken<span class="dot">.</span>solutions',
    }),
    "blockken-solutions-logo-white.png",
    scale,
  );

  const icon = await captureLogo(
    page,
    await buildHtml({
      textColor: FOREGROUND,
      fontSize: iconFontSize,
      content: 'B<span class="dot">.</span>S',
    }),
    "blockken-solutions-icon.png",
    scale,
  );

  const iconWhite = await captureLogo(
    page,
    await buildHtml({
      textColor: WHITE,
      fontSize: iconFontSize,
      content: 'B<span class="dot">.</span>S',
    }),
    "blockken-solutions-icon-white.png",
    scale,
  );

  await browser.close();

  console.log("Generated:");
  console.log(wordmarkDark);
  console.log(wordmarkWhite);
  console.log(icon);
  console.log(iconWhite);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
