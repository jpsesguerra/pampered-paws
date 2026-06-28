type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export function ServiceCard({ icon, title, description, ctaLabel }: ServiceCardProps) {
  return (
    <div className="relative flex min-w-0 w-full flex-1 flex-col items-start pt-lg">
      <div className="flex h-full w-full min-w-0 flex-col items-center justify-between gap-s+ rounded-2xl bg-brand-background-neutral px-lg pb-lg pt-3xl">
        <div className="flex w-full min-w-0 flex-col items-center gap-md px-s+ text-center">
          <h3 className="w-full font-serif text-h4 text-text-primary">{title}</h3>
          <p className="w-full font-sans text-body-sm text-text-secondary">{description}</p>
        </div>
        <div className="flex min-h-[40px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md">
          <span className="whitespace-nowrap font-sans text-btn-primary text-text-on-pink">
            {ctaLabel}
          </span>
        </div>
      </div>
      <span className="absolute left-1/2 top-1 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-secondary-light">
        <img src={icon} alt="" className="size-6" />
      </span>
    </div>
  );
}
