import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonOwnProps = {
  withIcon?: boolean;
  href?: string;
};

type ButtonProps = ButtonOwnProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({ withIcon = false, href, className, children, ...props }: ButtonProps) {
  const content = (
    <>
      <span
        className={cn(
          "flex flex-col items-center rounded-full bg-brand-accent-dark px-xl py-md",
          withIcon && "mr-[-20px]"
        )}
      >
        <span className="font-sans text-btn-primary text-text-on-pink whitespace-nowrap">
          {children}
        </span>
      </span>
      {withIcon && (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-brand-accent-dark bg-brand-primary-pink">
          <img src="/icons/paw.svg" alt="" className="size-7" />
        </span>
      )}
    </>
  );

  const classes = cn(
    "inline-flex min-h-[40px] items-center justify-center rounded-full",
    className
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
