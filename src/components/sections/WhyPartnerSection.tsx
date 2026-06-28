import { IconCircle } from "@/components/ui/IconCircle";

const REASONS = [
  {
    icon: "location" as const,
    title: "A name that's meant quality since 1979.",
    description:
      "Most grooming franchises are a decade old, if that. Pampered Paws has spent more than 45 years building a reputation pet owners trust — the kind of brand equity a new business usually takes years to earn.",
  },
  {
    icon: "paw" as const,
    title: "Proven beyond one market",
    description:
      "Our locations span Canada and Japan, with Lexington in the United States. A model that works across very different markets is a model that travels — and that's what de-risks your investment.",
  },
  {
    icon: "calendar" as const,
    title: "A built-in advantage: our grooming school",
    description:
      "Pampered Paws runs its own professional grooming school, with graduates operating businesses in more than 20 countries. You're connected to a pipeline of trained talent, with the option to host training programs as a second revenue stream.",
  },
];

export function WhyPartnerSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <h2 className="text-center font-serif text-h3 text-text-primary">
          Why partner with Pampered Paws
        </h2>
        <div className="flex w-full flex-col items-start gap-lg lg:flex-row lg:items-stretch">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex w-full flex-1 flex-col items-start gap-lg rounded-2xl bg-surface-white py-lg pl-lg pr-2xl"
            >
              <IconCircle variant={reason.icon} />
              <h3 className="font-serif text-h4 text-text-primary">{reason.title}</h3>
              <p className="font-sans text-body-default text-text-primary">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
