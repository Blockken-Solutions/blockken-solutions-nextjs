import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Section } from "@/components/ui/section";
import { resolveLinkHref } from "@/sanity/metadata";
import type { RichTextBlock, SanityLink } from "@/sanity/types";

type RichTextProps = {
  block: RichTextBlock;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 text-foreground">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 text-2xl font-semibold text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 text-xl font-semibold text-foreground">{children}</h3>
    ),
  },
  marks: {
    link: ({
      value,
      children,
    }: {
      value?: SanityLink;
      children: ReactNode;
    }) => {
      const href = resolveLinkHref(value);

      return (
        <Link
          href={href}
          className="underline"
          target={value?.openInNewTab ? "_blank" : undefined}
          rel={value?.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    },
  },
};

export function RichText({ block }: RichTextProps) {
  if (!block.content?.length) {
    return null;
  }

  return (
    <Section containerClassName="max-w-3xl">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <PortableText value={block.content} components={components} />
      </div>
    </Section>
  );
}
