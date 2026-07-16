import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge doesn't know about this project's custom fontSize tokens
// (tailwind.config.ts), so by default it misclassifies e.g. "text-btn-secondary"
// as a text-color utility and silently drops it when combined with an actual
// color class like "text-text-primary" in the same cn() call. Registering the
// tokens here tells it they belong to the font-size group instead.
const CUSTOM_FONT_SIZE_TOKENS = [
  "display-h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body-lg",
  "body-default",
  "body-sm",
  "label-xl",
  "label-lg",
  "label-default",
  "label-sm",
  "btn-primary",
  "btn-secondary",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: CUSTOM_FONT_SIZE_TOKENS }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
