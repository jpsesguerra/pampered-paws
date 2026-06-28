import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const VALUES = [
  {
    icon: "paw" as const,
    title: "Customized experience",
    description: "Every groom is built around your pet, their coat and their temperament.",
  },
  {
    icon: "paw" as const,
    title: "Cleanliness",
    description: "Spotless salons and sanitized tools, every pet, every time.",
  },
  {
    icon: "paw" as const,
    title: "Transparency",
    description: "Clear pricing, clear process, clear communication.",
  },
];

export function TeamSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col rounded-[32px] bg-surface-white p-lg sm:p-2xl">
        <div className="flex flex-col items-start gap-2xl sm:flex-row sm:items-stretch">
          <Reveal className="flex w-full flex-col items-start gap-2xl sm:w-[376px] sm:shrink-0">
            <div className="flex flex-col items-start gap-lg">
              <Eyebrow>Our team</Eyebrow>
              <h2 className="font-serif text-h2 text-text-primary">
                The people behind 45 years of grooming
              </h2>
              <p className="font-sans text-body-default text-text-primary">
                For over four decades, GTA pet owners have trusted Pampered
                Paws with the pets they love. We&rsquo;re not the cheapest and
                we&rsquo;re not a luxury label — we&rsquo;re the groomers who
                refuse to compromise on your pet&rsquo;s comfort, and who
                believe that should be available to anyone who feels the
                same.
              </p>
            </div>
            <a
              href="/locations"
              className="flex min-h-[48px] items-center justify-center rounded-full bg-brand-neutral-dark px-xl py-sm font-sans text-label-lg text-text-on-pink"
            >
              Find a Salon Near You
            </a>
          </Reveal>
          <Reveal delay={200} className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl bg-brand-secondary-light sm:h-auto sm:flex-1">
            <Image
              src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664988/pampered-paws/images/team-photo.png"
              alt="The Pampered Paws team"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
        <div className="flex flex-col items-start gap-lg pb-xl pt-7xl sm:flex-row sm:items-stretch">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={(i * 100) as 0 | 100 | 200} className="w-full min-w-0 sm:flex-1">
              <Card variant="small" {...value} className="w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
