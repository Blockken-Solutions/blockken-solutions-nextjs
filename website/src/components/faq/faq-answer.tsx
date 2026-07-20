import type { ReactNode } from "react";
import Link from "next/link";

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

type FaqAnswerProps = {
  text: string;
  className?: string;
};

export function FaqAnswer({ text, className }: FaqAnswerProps) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = MARKDOWN_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    parts.push(
      isExternal ? (
        <a
          key={`${match.index}-${href}`}
          href={href}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {label}
        </a>
      ) : (
        <Link
          key={`${match.index}-${href}`}
          href={href}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {label}
        </Link>
      ),
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <span className={className}>{parts}</span>;
}
