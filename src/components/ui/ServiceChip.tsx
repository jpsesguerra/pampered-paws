import { cn } from "@/lib/cn";

type ServiceChipProps = {
  children: React.ReactNode;
  className?: string;
  icon?: "dot" | "location";
  size?: "default" | "sm";
};

const ICON_SRC: Record<NonNullable<ServiceChipProps["icon"]>, string> = {
  dot: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665047/pampered-paws/icons/dot.svg",
  location: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665066/pampered-paws/icons/store-location.svg",
};

export function ServiceChip({ children, className, icon = "dot", size = "default" }: ServiceChipProps) {
  const isSmall = size === "sm";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-surface-white",
        isSmall ? "gap-xs py-sm pl-md pr-lg" : "gap-sm py-md pl-s+ pr-xl",
        className
      )}
    >
      <img
        src={ICON_SRC[icon]}
        alt=""
        className={icon === "dot" ? (isSmall ? "size-2" : "size-3") : isSmall ? "size-4" : "size-6"}
      />
      <span
        className={cn(
          "whitespace-nowrap font-sans leading-none text-text-primary",
          isSmall ? "text-label-sm" : "text-label-xl"
        )}
      >
        {children}
      </span>
    </div>
  );
}
