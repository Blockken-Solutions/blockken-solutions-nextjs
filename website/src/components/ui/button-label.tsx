import { ArrowRight } from "lucide-react";

const ARROW_SUFFIX = /\s*→\s*$/;

type ButtonLabelProps = {
  children: string;
  showArrow?: boolean;
};

export function ButtonLabel({ children, showArrow = true }: ButtonLabelProps) {
  const text = children.replace(ARROW_SUFFIX, "");

  if (!showArrow) {
    return text;
  }

  return (
    <>
      {text}
      <ArrowRight data-icon="inline-end" aria-hidden="true" />
    </>
  );
}
