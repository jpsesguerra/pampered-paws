import { GroomingHero } from "@/components/sections/GroomingHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { FAQList } from "@/components/sections/FAQList";

const FEATURES = [
  {
    icon: "paw" as const,
    title: "Licensed stylists",
    description:
      "Every groomer on our floor is licensed and trained in-house at our own grooming school.",
  },
  {
    icon: "paw" as const,
    title: "Built around your pet",
    description:
      "Breed, coat, temperament and your preferences shape every appointment — never a one-size-fits-all groom.",
  },
  {
    icon: "location" as const,
    title: "Three GTA locations",
    description:
      "Toronto, Mississauga and Scarborough — find the salon closest to you and your regular team.",
  },
];

const ADD_ONS = [
  {
    icon: "paw" as const,
    title: "De-matting & de-shedding",
    description:
      "For coats that need extra attention between visits, done gently and without unnecessary shaving.",
  },
  {
    icon: "paw" as const,
    title: "Hand stripping",
    description:
      "Traditional hand stripping for wire-coated breeds, preserving coat texture and colour.",
  },
  {
    icon: "paw" as const,
    title: "Hot oil treatment & colouring",
    description:
      "Conditioning treatments and pet-safe colouring for a finishing touch on any groom.",
  },
];

const GROOMING_FAQS = [
  {
    question: "What's the difference between a Bath and a Regular Groom?",
    answer:
      "A Bath covers a full wash, blow dry, nail care and ear cleaning — a quick top-up between full grooms. A Regular Groom adds coat styling and a complete trim to your pet's breed standard, done by a licensed stylist.",
  },
];

export default function GroomingPage() {
  return (
    <>
      <GroomingHero />

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] items-start gap-2xl">
          {FEATURES.map((feature) => (
            <Card key={feature.title} variant="small" {...feature} className="flex-1" />
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
          <div className="flex max-w-[716px] flex-col items-center gap-md text-center">
            <h2 className="font-serif text-h2 text-text-primary">
              Two ways to keep your pet looking and feeling their best
            </h2>
            <p className="font-sans text-body-lg text-text-primary">
              Most pets fit into one of two services. Not sure which is
              right? Tell us about your pet and we&rsquo;ll recommend the
              right fit — no guesswork.
            </p>
          </div>
          <div className="flex w-full items-start gap-2xl">
            <ServiceCard
              icon="/icons/scissor.svg"
              title="Regular Groom"
              description="Our all-inclusive grooming service for dogs and cats kept on a 3–6 week schedule. Full bath, coat styling, nail care, ear cleaning and teeth brushing — everything done to your pet's breed standard, by a licensed stylist."
              ctaLabel="Book a Regular Groom"
            />
            <ServiceCard
              icon="/icons/shower-head.svg"
              title="Bath"
              description="For clients already in our rotation who want to stay clean and fluffy between full grooms. Includes a full bath, blow dry, nail care and ear cleaning — without the cut and style. A quick top-up, done properly."
              ctaLabel="Book a Bath"
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
          <div className="flex max-w-[716px] flex-col items-center gap-md text-center">
            <Eyebrow>Add-ons</Eyebrow>
            <h2 className="font-serif text-h2 text-text-primary">
              Extra care for pets with extra needs
            </h2>
            <p className="font-sans text-body-lg text-text-primary">
              Every pet is different. These services can be added to a Bath
              or Regular Groom, or booked on their own.
            </p>
          </div>
          <div className="flex w-full items-start gap-2xl">
            {ADD_ONS.map((addOn) => (
              <Card key={addOn.title} variant="small" {...addOn} className="flex-1" />
            ))}
          </div>
        </div>
      </section>

      <FAQList heading="Grooming questions, answered" faqs={GROOMING_FAQS} />

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-lg rounded-[32px] bg-brand-accent-dark p-3xl text-center">
          <h2 className="font-serif text-h2 text-text-on-pink">
            Ready to book your pet&rsquo;s next groom?
          </h2>
          <Button href="/request-an-appointment">Request An Appointment</Button>
        </div>
      </section>
    </>
  );
}
