import { IconCircle } from "@/components/ui/IconCircle";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

const INFO_CARDS = [
  {
    icon: "credit-card" as const,
    title: "Honest pricing, no surprises",
    description:
      "Our prices are based on three things: your pet's breed and size, the coat work involved, and the skill our licensed stylists bring to every cut. We list prices for over 200 breeds — one of the most complete pricing guides any salon publishes.\n\nBecause every pet's coat and condition is a little different, the final price can vary — especially on a first visit. The best way to get an exact quote is a quick in-person assessment within a week of your appointment. We'd always rather you know the cost up front than be surprised at pickup.",
    full: true,
  },
  {
    icon: "location" as const,
    title: "Your pet's first visit",
    description:
      "New to Pampered Paws? Here's what happens.\n\nWhen you arrive, your stylist takes time to talk with you — your pet's age, any health concerns, the condition of their coat, and the look you have in mind. We listen to every word, because the cut you ask for should be the cut you get.",
    full: false,
  },
  {
    icon: "paw" as const,
    title: "Bringing a puppy?",
    description:
      "Early grooming matters more than most owners realize. We never rush a puppy's first visits — those early appointments teach your pet that grooming is a calm, positive experience, and that sets them up for a lifetime of stress-free visits. We recommend starting as early as 8 weeks.",
    full: false,
  },
];

export function PricingInfoSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl">
        {INFO_CARDS.filter((c) => c.full).map((card) => (
          <div
            key={card.title}
            className="flex w-full flex-col items-start gap-lg rounded-2xl bg-brand-secondary-cream p-lg"
          >
            <div className="flex items-center gap-md">
              <IconCircle variant={card.icon} />
              <h3 className="font-serif text-h5 text-text-primary">{card.title}</h3>
            </div>
            <p className="whitespace-pre-line font-sans text-body-default text-text-secondary">
              {card.description}
            </p>
            <SecondaryButton href="/grooming">See grooming services</SecondaryButton>
          </div>
        ))}
        <div className="flex w-full flex-col items-start gap-lg sm:flex-row sm:items-stretch">
          {INFO_CARDS.filter((c) => !c.full).map((card) => (
            <div
              key={card.title}
              className="flex h-full w-full flex-1 flex-col items-start gap-lg rounded-2xl bg-brand-secondary-cream p-lg"
            >
              <div className="flex w-full flex-1 flex-col items-start gap-lg">
                <div className="flex items-center gap-md">
                  <IconCircle variant={card.icon} />
                  <h3 className="font-serif text-h5 text-text-primary">{card.title}</h3>
                </div>
                <p className="whitespace-pre-line font-sans text-body-default text-text-secondary">
                  {card.description}
                </p>
              </div>
              <SecondaryButton href="/grooming">See grooming services</SecondaryButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
