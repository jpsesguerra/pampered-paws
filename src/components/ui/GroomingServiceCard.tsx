import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { IconCircle } from "@/components/ui/IconCircle";

type GroomingServiceCardProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  includesHeading: string;
  includes: string[];
  bestFor: string;
  ctaHref: string;
  ctaLabel: string;
};

export function GroomingServiceCard({
  image,
  eyebrow,
  title,
  description,
  includesHeading,
  includes,
  bestFor,
  ctaHref,
  ctaLabel,
}: GroomingServiceCardProps) {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-start gap-s+ rounded-[32px] bg-surface-white p-lg">
      <div className="flex w-full flex-1 flex-col items-start gap-s+">
        <div className="relative h-[380px] w-full overflow-hidden rounded-xl">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
        <div className="flex w-full flex-col items-start gap-md">
          <span className="font-sans text-label-default text-text-primary">{eyebrow}</span>
          <h3 className="font-serif text-h3 text-text-primary">{title}</h3>
          <p className="font-sans text-body-default text-text-primary">{description}</p>
          <div className="flex w-full flex-col items-start gap-sm">
            <h4 className="font-sans text-label-lg text-text-primary">{includesHeading}</h4>
            <ul className="flex w-full flex-col items-start gap-xxs pl-lg">
              {includes.map((item) => (
                <li
                  key={item}
                  className="w-full list-disc font-sans text-body-default text-text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center gap-lg rounded-xl bg-brand-background-neutral px-lg py-md">
            <IconCircle variant="star" />
            <div className="flex flex-1 flex-col items-start gap-xxs">
              <span className="font-sans text-label-lg text-text-primary">Best for:</span>
              <p className="font-sans text-body-default text-text-primary">{bestFor}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-s+">
        <Button href="/request-an-appointment">Request an Appointment</Button>
        <SecondaryButton href={ctaHref}>{ctaLabel}</SecondaryButton>
      </div>
    </div>
  );
}
