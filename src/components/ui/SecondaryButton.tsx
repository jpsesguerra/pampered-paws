import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SecondaryButtonOwnProps = {
  href?: string;
  icon?: string;
};

type SecondaryButtonProps = SecondaryButtonOwnProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function SecondaryButton({
  href,
  icon = "https://res.cloudinary.com/du0witbcr/image/upload/v1782664992/pampered-paws/icons/arrow-right.svg",
  className,
  children,
  ...props
}: SecondaryButtonProps) {
  const classes = cn(
    "group inline-flex min-h-[40px] items-center justify-center gap-xs rounded-full p-sm font-sans text-btn-secondary text-text-primary",
    className
  );

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <img
        src={icon}
        alt=""
        className="size-5 transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:translate-x-1"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
