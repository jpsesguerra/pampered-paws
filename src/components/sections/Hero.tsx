import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { Reveal } from "@/components/ui/Reveal";

// Each paw starts closer to the hero's center and animates outward to its resting
// spot, tilting slightly further on the way before settling into its final angle.
const BALLS = [
  { src: "/icons/ball-3.svg", className: "left-[88%] top-[2%] hidden lg:block", toRot: 33, fromX: -70, fromY: 50, fromRot: 45, delay: 0 },
  { src: "/icons/ball-1.svg", className: "left-[92%] top-[62%] hidden lg:block", toRot: -17, fromX: -60, fromY: -50, fromRot: -27, delay: 100 },
  { src: "/icons/ball-2.svg", className: "left-[2%] top-[2%] hidden lg:block", toRot: -30, fromX: 60, fromY: 50, fromRot: -20, delay: 200 },
  { src: "/icons/ball-4.svg", className: "left-[1%] top-[62%] hidden lg:block", toRot: 25, fromX: 60, fromY: -50, fromRot: 35, delay: 300 },
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
          className={`ball-expand pointer-events-none absolute z-0 size-14 ${ball.className}`}
          style={
            {
              "--ball-from-x": `${ball.fromX}px`,
              "--ball-from-y": `${ball.fromY}px`,
              "--ball-from-rot": `${ball.fromRot}deg`,
              "--ball-to-rot": `${ball.toRot}deg`,
              animationDelay: `${ball.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
      <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-center gap-lg sm:gap-s+">
        <Reveal>
          <Eyebrow>Professional pet grooming · Since 1979</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-[736px] text-center font-serif text-h2 text-text-primary lg:text-display-h1">
            Your pet, groomed exactly the way{" "}
            <Highlight>you want</Highlight>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="max-w-[536px] text-center font-sans text-label-lg text-brand-neutral-lighter">
            Forty-five years of expert grooming across the GTA — built around
            your pet&rsquo;s coat, temperament and your standards. No
            compromises, no surprises, just clean, careful work by people
            who&rsquo;ve done this for decades.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col items-center justify-center gap-lg sm:flex-row">
            <Button withIcon href="/request-an-appointment">
              Request An Appointment
            </Button>
            <SecondaryButton href="/grooming">See grooming services</SecondaryButton>
          </div>
        </Reveal>
      </div>
      <Reveal delay={400} className="w-full max-w-[1240px]">
        <div className="relative z-10 grid w-full grid-cols-1 gap-lg sm:grid-cols-[1fr_1.625fr_1fr] sm:items-stretch">
          <div className="relative aspect-[331/398] w-full overflow-hidden rounded-[32px] bg-brand-secondary-light">
            <Image src="/images/Cat.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-[538/398] w-full overflow-hidden rounded-[32px] bg-brand-secondary-light">
            <Image src="/images/Lesley.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-[331/398] w-full overflow-hidden rounded-[32px] bg-brand-secondary-light">
            <Image src="/images/Dog.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
