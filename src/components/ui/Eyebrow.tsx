import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center justify-center gap-sm", className)}>
      <img src="/icons/chevron-right.svg" alt="" className="size-3" />
      <span className="whitespace-nowrap text-center font-sans text-label-xl leading-none text-text-primary">
        {children}
      </span>
    </div>
  );
}
