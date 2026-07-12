import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "secondary";
};

export function ServiceCard({ icon, title, description, ctaLabel, ctaHref, ctaVariant = "secondary" }: ServiceCardProps) {
  return (
    <div className="relative flex min-w-0 w-full flex-1 flex-col items-start pt-lg">
      <div className="flex h-full w-full min-w-0 flex-col items-center justify-between gap-s+ rounded-2xl bg-brand-background-neutral px-lg pb-lg pt-3xl">
        <div className="flex w-full min-w-0 flex-col items-center gap-md px-s+ text-center">
          <h3 className="w-full font-serif text-h4 text-text-primary">{title}</h3>
          <p className="w-full font-sans text-body-sm text-text-secondary">{description}</p>
        </div>
        {ctaVariant === "primary" ? (
          <Link
            href={ctaHref}
            className="flex min-h-[40px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md"
          >
            <span className="whitespace-nowrap font-sans text-btn-primary text-text-on-pink">
              {ctaLabel}
            </span>
          </Link>
        ) : (
          <Link
            href={ctaHref}
            className="group flex min-h-[40px] w-full items-center justify-center gap-xs rounded-full p-sm font-sans text-btn-secondary text-text-primary"
          >
            <span className="whitespace-nowrap">{ctaLabel}</span>
            <img
              src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664992/pampered-paws/icons/arrow-right.svg"
              alt=""
              className="size-5 transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
      <span className="absolute left-1/2 top-1 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-accent-gold">
        <img src={icon} alt="" className="size-6" />
      </span>
    </div>
  );
}
