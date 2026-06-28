import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("flex w-fit items-center gap-sm", className)}>
      <img src="https://res.cloudinary.com/du0witbcr/image/upload/v1782665047/pampered-paws/icons/dot.svg" alt="" className="size-3 shrink-0" />
      <span className="whitespace-nowrap text-center font-sans text-label-xl leading-none text-text-primary">
        {children}
      </span>
    </div>
  );
}
