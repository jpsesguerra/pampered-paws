import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

const HELP_ITEMS = [
  {
    icon: "paw" as const,
    title: "Pet grooming, your way",
    description:
      "Customized grooms for dogs and cats at our Toronto, Mississauga and Scarborough salons. Tell us about your pet and we'll match the care to them — not a one-size-fits-all package.",
    ctaLabel: "Explore grooming",
    ctaHref: "/grooming",
  },
  {
    icon: "graduation-cap" as const,
    title: "Train to become a groomer",
    description:
      "Learn the craft from a team that's been grooming since 1979. Hands-on, career-focused training for people serious about doing this work well.",
    ctaLabel: "Discover the school",
    ctaHref: "/schooling",
  },
  {
    icon: "location" as const,
    title: "Open your own Pampered Paws",
    description:
      "A proven grooming brand with 45 years behind it and locations from the GTA to Tokyo. If you're ready to build something, let's talk.",
    ctaLabel: "Explore the opportunity",
    ctaHref: "/franchise",
  },
];

export function HelpSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-s+ lg:sticky lg:top-2xl lg:self-start">
          <Eyebrow>The three things we do</Eyebrow>
          <h2 className="max-w-[460px] font-serif text-h2 text-text-primary">
            One brand, three ways we can help
          </h2>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-s+">
          {HELP_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-col items-start gap-md rounded-2xl bg-surface-white py-lg pl-lg pr-2xl"
            >
              <IconCircle variant={item.icon} />
              <h3 className="font-serif text-h4 text-text-primary">{item.title}</h3>
              <p className="font-sans text-body-default text-text-secondary">{item.description}</p>
              <SecondaryButton href={item.ctaHref}>{item.ctaLabel}</SecondaryButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
