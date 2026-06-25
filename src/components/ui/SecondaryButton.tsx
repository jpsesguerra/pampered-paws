import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SecondaryButtonOwnProps = {
  href?: string;
};

type SecondaryButtonProps = SecondaryButtonOwnProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function SecondaryButton({ href, className, children, ...props }: SecondaryButtonProps) {
  const classes = cn(
    "inline-flex min-h-[40px] items-center justify-center gap-xs rounded-full p-sm font-sans text-btn-secondary text-text-primary",
    className
  );

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <img src="/icons/arrow-right.svg" alt="" className="size-5" />
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
