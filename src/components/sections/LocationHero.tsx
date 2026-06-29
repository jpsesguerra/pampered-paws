import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { type Location, getAppointmentHref } from "@/lib/data/locations";

export function LocationHero({ location }: { location: Location }) {
  return (
    <section className="flex items-center justify-center px-lg pt-2xl pb-7xl">
      <div className="relative flex w-full max-w-[1240px] flex-col items-start gap-2xl overflow-hidden rounded-[32px] bg-brand-secondary-light lg:flex-row lg:items-center lg:pl-2xl lg:h-[689px]">
        <div className="relative z-10 flex w-full flex-col items-start gap-2xl px-lg pt-2xl lg:w-fit lg:flex-none lg:px-0 lg:py-2xl">
          <div className="flex flex-col items-start gap-sm">
            <Reveal>
              <Eyebrow>{location.locationName} Location</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-[516px] font-serif text-h2 text-text-primary sm:text-display-h1">
                Your trusted Pet Grooming Salon{" "}
                <Highlight>in {location.locationName}</Highlight>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-[411px] font-sans text-label-lg text-brand-neutral-lighter">
                {location.heroSubtext}
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="flex flex-col items-start gap-sm">
              <Button withIcon href={getAppointmentHref(location)}>
                {location.heroCtaLabel}
              </Button>
              <a
                href={`tel:${location.phoneCall.replace(/[^0-9+]/g, "")}`}
                className="flex min-h-[40px] items-center justify-center rounded-full px-md py-sm font-sans text-btn-secondary text-text-primary"
              >
                or call {location.phoneCall}
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative z-0 h-[280px] w-full flex-1 overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%] lg:flex-none">
          {location.heroImage && (
            <Image
              src={location.heroImage}
              alt={`Pampered Paws ${location.locationName} storefront`}
              fill
              className="hero-edge-fade object-cover object-right"
            />
          )}
        </div>
      </div>
    </section>
  );
}
