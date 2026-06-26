import { cn } from "@/lib/cn";

type ServiceChipProps = {
  children: React.ReactNode;
  className?: string;
  icon?: "dot" | "location";
};

const ICON_SRC: Record<NonNullable<ServiceChipProps["icon"]>, string> = {
  dot: "/icons/dot.svg",
  location: "/icons/store-location.svg",
};

export function ServiceChip({ children, className, icon = "dot" }: ServiceChipProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center gap-sm rounded-full bg-surface-white py-md pl-s+ pr-xl",
        className
      )}
    >
      <img src={ICON_SRC[icon]} alt="" className={icon === "dot" ? "size-3" : "size-6"} />
      <span className="whitespace-nowrap font-sans text-label-xl leading-none text-text-primary">
        {children}
      </span>
    </div>
  );
}
