import { createElement } from "react";

import { getIcon } from "@/lib/icons";

type DynamicIconProps = {
  name?: string | null;
  className?: string;
};

export function DynamicIcon({ name, className }: DynamicIconProps) {
  return createElement(getIcon(name), {
    className,
    "aria-hidden": true,
  });
}
