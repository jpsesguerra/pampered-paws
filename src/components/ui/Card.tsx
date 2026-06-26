import { IconCircle } from "@/components/ui/IconCircle";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/cn";

type CardProps = {
  variant?: "small" | "medium";
  icon?: "paw" | "location" | "calendar" | "credit-card";
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function Card({
  variant = "small",
  icon = "paw",
  title,
  description,
  ctaLabel,
  ctaHref,
  className,
}: CardProps) {
  const isMedium = variant === "medium";

  return (
    <div
      className={cn(
        "flex flex-col items-start gap-lg rounded-2xl",
        isMedium ? "bg-surface-white py-lg pl-lg pr-2xl" : "bg-brand-background-neutral p-lg",
        className
      )}
    >
      <div className={cn("flex w-full gap-md", isMedium ? "flex-col items-start" : "items-center")}>
        <IconCircle variant={icon} />
        <h3
          className={cn(
            "font-serif text-text-primary",
            isMedium ? "text-h4" : "text-h5"
          )}
        >
          {title}
        </h3>
      </div>
      <p
        className={cn(
          "w-full font-sans text-body-default",
          isMedium ? "text-text-primary" : "text-text-secondary"
        )}
      >
        {description}
      </p>
      {!isMedium && ctaLabel && ctaHref && (
        <SecondaryButton href={ctaHref}>{ctaLabel}</SecondaryButton>
      )}
    </div>
  );
}
