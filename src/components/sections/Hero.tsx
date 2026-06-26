import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";

const BALLS = [
  { src: "/icons/ball-3.svg", className: "left-[69%] top-[5%] rotate-[33deg] hidden sm:block" },
  { src: "/icons/ball-1.svg", className: "left-[67%] top-[38%] -rotate-[17deg] hidden sm:block" },
  { src: "/icons/ball-2.svg", className: "left-[13%] top-[3%] -rotate-[30deg] hidden sm:block" },
  { src: "/icons/ball-4.svg", className: "left-[8%] top-[38%] rotate-[25deg] hidden sm:block" },
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-3xl overflow-hidden px-lg py-3xl sm:gap-6xl sm:py-6xl lg:gap-7xl lg:py-7xl">
      {BALLS.map((ball) => (
        <img
          key={ball.src}
          src={ball.src}
          alt=""
          aria-hidden
          className={`pointer-events-none absolute z-0 size-14 ${ball.className}`}
        />
      ))}
      <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-center gap-lg sm:gap-s+">
        <Eyebrow>Professional pet grooming · Since 1979</Eyebrow>
        <h1 className="max-w-[736px] text-center font-serif text-h2 text-text-primary lg:text-display-h1">
          Your pet, groomed exactly the way{" "}
          <Highlight>you want</Highlight>
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
      <div className="relative z-10 grid w-full max-w-[1240px] grid-cols-1 gap-lg sm:h-[398px] sm:grid-cols-[1fr_538px_1fr]">
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-brand-secondary-light p-md sm:h-full">
          <div className="relative size-full overflow-hidden rounded-xl">
            <Image src="/images/Cat.png" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-brand-secondary-light p-md sm:h-full">
          <div className="relative size-full overflow-hidden rounded-xl">
            <Image src="/images/Dog.png" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-brand-secondary-light p-md sm:h-full">
          <div className="relative size-full overflow-hidden rounded-xl">
            <Image src="/images/Lesley.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
