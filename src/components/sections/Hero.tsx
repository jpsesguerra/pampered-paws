import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-3xl px-lg py-3xl sm:gap-6xl sm:py-6xl lg:gap-7xl lg:py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-lg sm:gap-s+">
        <div className="flex items-center justify-center gap-sm">
          <img src="/icons/chevron-right.svg" alt="" className="size-3" />
          <span className="font-sans text-label-lg text-link-primary">
            Professional pet grooming · Since 1979
          </span>
        </div>
        <h1 className="max-w-[736px] text-center font-serif text-h2 text-text-primary lg:text-display-h1">
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
        <div className="flex flex-col items-center justify-center gap-lg sm:flex-row">
          <Button withIcon href="/request-an-appointment">
            Request An Appointment
          </Button>
          <SecondaryButton href="/grooming">See grooming services</SecondaryButton>
        </div>
      </div>
      <div className="grid w-full max-w-[1240px] grid-cols-1 gap-lg sm:h-[398px] sm:grid-cols-[1fr_538px_1fr]">
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-brand-secondary-light sm:h-full">
          <Image src="/images/hero-1.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-brand-secondary-light sm:h-full">
          <Image src="/images/hero-2.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-brand-secondary-light sm:h-full">
          <Image src="/images/hero-3.png" alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
