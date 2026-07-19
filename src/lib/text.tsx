import type { ReactNode } from "react";
import { RegisteredMark } from "@/components/ui/RegisteredMark";

// Splits a plain string on "®" and renders each mark as a proper <sup>,
// for brand text that lives in data arrays instead of directly in JSX.
export function withRegisteredMark(text: string): ReactNode {
  const segments = text.split("®");
  if (segments.length === 1) return text;
  return segments.flatMap((segment, i) => (i === 0 ? [segment] : [<RegisteredMark key={i} />, segment]));
}
