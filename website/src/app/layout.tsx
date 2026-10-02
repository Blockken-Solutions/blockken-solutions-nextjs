import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildSiteGraph } from "@/lib/structured-data";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl-BE"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground focus:shadow-soft"
        >
          Ga naar inhoud
        </a>
        <JsonLd data={buildSiteGraph()} />
        <HashScrollHandler />
        <SiteHeader />
        <main id="main-content" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
