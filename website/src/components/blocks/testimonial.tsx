import Image from "next/image";

import { Section } from "@/components/ui/section";
import { imageUrl } from "@/sanity/image";
import type { TestimonialBlock } from "@/sanity/types";

type TestimonialProps = {
  block: TestimonialBlock;
};

export function Testimonial({ block }: TestimonialProps) {
  const avatarSrc = block.image?.asset
    ? imageUrl(block.image, { width: 128, height: 128 })
    : null;

  return (
    <Section variant="muted" containerClassName="max-w-3xl text-center">
      <blockquote className="text-2xl font-medium leading-relaxed text-foreground">
        &ldquo;{block.quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex flex-col items-center gap-4">
        {avatarSrc ? (
          <div className="relative size-16 overflow-hidden rounded-full">
            <Image
              src={avatarSrc}
              alt={block.author ?? ""}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : null}
        <div>
          <p className="font-semibold text-foreground">{block.author}</p>
          {block.role ? (
            <p className="text-sm text-muted-foreground">{block.role}</p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
