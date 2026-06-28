import { cn } from "@/lib/cn";

type IconCircleProps = {
  variant?:
    | "paw"
    | "location"
    | "calendar"
    | "credit-card"
    | "graduation-cap"
    | "star"
    | "global"
    | "shower-head"
    | "thumbs-up";
  className?: string;
};

const ICON_SRC: Record<NonNullable<IconCircleProps["variant"]>, string> = {
  paw: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665057/pampered-paws/icons/paw.svg",
  location: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665056/pampered-paws/icons/location-pin.svg",
  calendar: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665042/pampered-paws/icons/calendar.svg",
  "credit-card": "https://res.cloudinary.com/du0witbcr/image/upload/v1782665045/pampered-paws/icons/credit-card.svg",
  "graduation-cap": "https://res.cloudinary.com/du0witbcr/image/upload/v1782665051/pampered-paws/icons/graduation-cap.svg",
  star: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665065/pampered-paws/icons/star.svg",
  global: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665049/pampered-paws/icons/global.svg",
  "shower-head": "https://res.cloudinary.com/du0witbcr/image/upload/v1782665063/pampered-paws/icons/shower-head.svg",
  "thumbs-up": "https://res.cloudinary.com/du0witbcr/image/upload/v1782665067/pampered-paws/icons/thumbs-up.svg",
};

const ICON_SIZE: Record<NonNullable<IconCircleProps["variant"]>, string> = {
  paw: "size-7",
  location: "size-5",
  calendar: "size-5",
  "credit-card": "size-5",
  "graduation-cap": "size-6",
  star: "size-6",
  global: "size-6",
  "shower-head": "size-6",
  "thumbs-up": "size-6",
};

export function IconCircle({ variant = "paw", className }: IconCircleProps) {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-secondary-light",
        className
      )}
    >
      <img src={ICON_SRC[variant]} alt="" className={ICON_SIZE[variant]} />
    </span>
  );
}
