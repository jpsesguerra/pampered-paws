import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-7xl py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-s+">
        <div className="flex items-center justify-center gap-sm">
          <img src="/icons/chevron-right.svg" alt="" className="size-3" />
          <span className="font-sans text-label-lg text-link-primary">
            Professional pet grooming · Since 1979
          </span>
        </div>
        <h1 className="max-w-[736px] text-center font-serif text-display-h1 text-text-primary">
          Your pet, groomed exactly the way{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-2 h-[0.4em] -rotate-1 rounded-full bg-brand-secondary-light/60" />
            <span className="relative">you want</span>
          </span>
        </h1>
        <p className="max-w-[536px] text-center font-sans text-label-lg text-brand-neutral-lighter">
          Forty-five years of expert grooming across the GTA — built around
          your pet&rsquo;s coat, temperament and your standards. No
          compromises, no surprises, just clean, careful work by people
          who&rsquo;ve done this for decades.
        </p>
        <div className="flex items-center justify-center gap-lg">
          <Button withIcon href="/request-an-appointment">
            Request An Appointment
          </Button>
          <SecondaryButton href="/grooming">See grooming services</SecondaryButton>
        </div>
      </div>
      <div className="grid h-[398px] w-full max-w-[1240px] grid-cols-[1fr_538px_1fr] gap-lg">
        <div className="relative h-full overflow-hidden rounded-2xl bg-brand-secondary-light">
          <Image src="/images/hero-1.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative h-full overflow-hidden rounded-2xl bg-brand-secondary-light">
          <Image src="/images/hero-2.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative h-full overflow-hidden rounded-2xl bg-brand-secondary-light">
          <Image src="/images/hero-3.png" alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
