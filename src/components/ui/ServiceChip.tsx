import { cn } from "@/lib/cn";

type ServiceChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function ServiceChip({ children, className }: ServiceChipProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-sm rounded-full bg-surface-white py-md pl-s+ pr-xl",
        className
      )}
    >
      <img src="/icons/store-location.svg" alt="" className="size-6" />
      <span className="whitespace-nowrap font-sans text-label-xl leading-none text-text-primary">
        {children}
      </span>
    </div>
  );
}
