import { cn } from "@/lib/cn";

type HeadingLevel = "display-h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  level: HeadingLevel;
  className?: string;
  children: React.ReactNode;
};

const SIZE_CLASS: Record<HeadingLevel, string> = {
  "display-h1": "text-display-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
};

export function Heading({ as = "h2", level, className, children }: HeadingProps) {
  const Tag = as;
  return (
    <Tag className={cn("font-serif text-text-primary", SIZE_CLASS[level], className)}>
      {children}
    </Tag>
  );
}
