import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { imageUrl } from "@/sanity/image";
import { resolveLinkHref, resolveLinkLabel } from "@/sanity/metadata";
import type { HeroBlock } from "@/sanity/types";

type HeroProps = {
  block: HeroBlock;
};

export function Hero({ block }: HeroProps) {
  const imageSrc = block.image?.asset
    ? imageUrl(block.image, { width: 1200, height: 675 })
    : null;

  return (
    <Section variant="card">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            {block.heading}
          </h1>
          {block.body ? (
            <p className="mt-4 text-lg text-muted-foreground">{block.body}</p>
          ) : null}
          {block.cta?.link ? (
            <div className="mt-8">
              <Button asChild variant={block.cta.level === 1 ? "default" : "outline"}>
                <Link
                  href={resolveLinkHref(block.cta.link)}
                  target={block.cta.link.openInNewTab ? "_blank" : undefined}
                  rel={
                    block.cta.link.openInNewTab ? "noopener noreferrer" : undefined
                  }
                >
                  {resolveLinkLabel(block.cta.link)}
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
        {imageSrc ? (
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={block.image?.altText ?? block.heading ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
