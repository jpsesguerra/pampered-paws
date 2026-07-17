import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";

const HIGHLIGHTS = [
  {
    icon: "paw" as const,
    title: "Four decades of experience",
    description: "We've been grooming since 1979",
    ctaLabel: "Learn more about us",
    href: "/about-us",
  },
  {
    icon: "location" as const,
    title: "Three Salon locations across the GTA",
    description: "Toronto, Mississauga & Scarborough",
    ctaLabel: "Find a salon",
    href: "/locations",
  },
  {
    icon: "graduation-cap" as const,
    title: "We're a professional grooming school",
    description: "Training the next generation",
    ctaLabel: "View our programs",
    href: "/schooling#programs",
  },
];

export function LegacyHighlightsSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <h2 className="max-w-[784px] text-center font-serif text-h2 text-text-primary">
          The groomer generations of GTA pet owners have trusted
        </h2>
        <div className="flex w-full flex-col items-stretch gap-lg lg:flex-row">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-1 flex-col items-center gap-lg rounded-2xl bg-surface-white p-lg text-center"
            >
              <IconCircle variant={item.icon} />
              <h3 className="font-serif text-h4 text-text-primary">{item.title}</h3>
              <p className="font-sans text-body-default text-text-primary">{item.description}</p>
              <Button href={item.href} className="w-full">
                {item.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
