import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";

const EVENTS = [
  {
    icon: "location" as const,
    year: "1979 — The salon",
    description:
      "Pampered Paws opens in Toronto, founded on one rule that still holds: the haircut you ask for is the haircut you get.",
  },
  {
    icon: "graduation-cap" as const,
    year: "1986 — The school",
    description:
      "Demand for skilled groomers outpaced supply — Lesley would train someone, and a vet clinic would hire them away. So she opened a grooming school to train the next generation properly, in both classic dog-show technique and modern pet styling.",
  },
  {
    icon: "star" as const,
    year: "1995 — A national standard",
    description:
      "Lesley founded the National Agency of Pet Grooming Schools, registering the trademark that lets qualified groomers in Canada call themselves licensed — to this day, the recognized mark for the profession.",
  },
  {
    icon: "global" as const,
    year: "1996 — Going international",
    description:
      "Pampered Paws began franchising, opening its first international location in Tokyo.",
  },
  {
    icon: "paw" as const,
    year: "Today",
    description:
      "Salons across the GTA, an internationally recognized school, and graduates running their own businesses in more than 20 countries.",
  },
];

export function Timeline() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl">
        <div className="flex flex-col items-start gap-s+">
          <Eyebrow>How we grew</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            Four decades of building the craft
          </h2>
        </div>
        <div className="flex w-full flex-col items-start gap-3xl lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-1 flex-col items-start gap-sm">
            {EVENTS.map((event) => (
              <div
                key={event.year}
                className="flex w-full items-start gap-lg rounded-2xl bg-surface-white p-lg"
              >
                <IconCircle variant={event.icon} />
                <div className="flex flex-1 flex-col items-start gap-xxs">
                  <h3 className="font-serif text-h5 text-text-primary">{event.year}</h3>
                  <p className="font-sans text-body-default text-text-secondary">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-[400px] w-full flex-1 overflow-hidden rounded-2xl lg:h-auto">
            <Image src="/images/timeline-photo.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
