import Image from "next/image";

import { Section } from "@/components/ui/section";
import { imageUrl } from "@/sanity/image";
import type { ImageBlock } from "@/sanity/types";

type ImageBlockProps = {
  block: ImageBlock;
};

export function ImageBlockSection({ block }: ImageBlockProps) {
  if (!block.asset) {
    return null;
  }

  const imageSrc = imageUrl(block, { width: 1400 });

  return (
    <Section className="py-12">
      <figure>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={block.altText ?? ""}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {block.caption ? (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    </Section>
  );
}
