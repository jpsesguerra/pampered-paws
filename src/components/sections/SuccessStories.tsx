import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Highlight } from "@/components/ui/Highlight";

const SERVICES = [
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665061/pampered-paws/icons/scissor.svg",
    title: "Regular Groom",
    description:
      "Our all-inclusive grooming service for dogs and cats kept on a 3–6 week schedule. Full bath, coat styling, nail care, ear cleaning and teeth brushing — everything done to your pet's breed standard, by a licensed stylist.",
    ctaLabel: "Book a Regular Groom",
    ctaHref: "/request-an-appointment",
  },
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665063/pampered-paws/icons/shower-head.svg",
    title: "Bath",
    description:
      "For clients already in our rotation who want to stay clean and fluffy between full grooms. Includes a full bath, blow dry, nail care and ear cleaning — without the cut and style. A quick top-up, done properly.",
    ctaLabel: "Book a Bath",
    ctaHref: "/request-an-appointment",
  },
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665052/pampered-paws/icons/hair-dryer.svg",
    title: "Specialty Services",
    description:
      "De-matting, hand stripping, de-shedding, hot oil treatments, pet colouring and more. If your pet has specific needs or a style that goes beyond a standard groom, we have the skills and the time to do it right.",
    ctaLabel: "See All Services",
    ctaHref: "/grooming#add-ons",
  },
];

export function SuccessStories() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl rounded-[32px] bg-surface-white px-lg py-2xl sm:px-xl sm:py-3xl">
        <div className="flex max-w-[622px] flex-col items-center gap-s+ text-center">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            Every groom, built around your pet&rsquo;s <Highlight>needs</Highlight>
          </h2>
        </div>
        <div className="flex w-full flex-col items-stretch gap-2xl sm:flex-row">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <SecondaryButton href="/grooming">See all grooming services</SecondaryButton>
      </div>
    </section>
  );
}
