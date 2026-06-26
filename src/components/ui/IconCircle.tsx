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
  paw: "/icons/paw.svg",
  location: "/icons/location-pin.svg",
  calendar: "/icons/calendar.svg",
  "credit-card": "/icons/credit-card.svg",
  "graduation-cap": "/icons/graduation-cap.svg",
  star: "/icons/star.svg",
  global: "/icons/global.svg",
  "shower-head": "/icons/shower-head.svg",
  "thumbs-up": "/icons/thumbs-up.svg",
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
