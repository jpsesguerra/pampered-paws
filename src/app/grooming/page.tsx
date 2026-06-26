import { GroomingHero } from "@/components/sections/GroomingHero";
import { Card } from "@/components/ui/Card";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrimNote } from "@/components/sections/TrimNote";
import { AddOnsSection } from "@/components/sections/AddOnsSection";
import { Gallery } from "@/components/sections/Gallery";
import { PricingInfoSection } from "@/components/sections/PricingInfoSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { GROOMING_FAQS } from "@/lib/data/groomingFaqs";

export default function GroomingPage() {
  return (
    <>
      <GroomingHero />

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-col items-start gap-lg sm:flex-row">
          <Card
            variant="medium"
            icon="location"
            title="Choose your location"
            description="Toronto, Mississauga or Scarborough. (Scarborough books by phone — see below.)"
            className="w-full sm:flex-1"
          />
          <Card
            variant="medium"
            icon="paw"
            title="Tell us about your pet"
            description="Breed, size and temperament through a short form, so the right groomer is ready for them."
            className="w-full sm:flex-1"
          />
          <Card
            variant="medium"
            icon="calendar"
            title="We confirm directly"
            description="A real person reviews your request and confirms your spot. No bots, no guessing."
            className="w-full sm:flex-1"
          />
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
          <div className="flex w-full flex-col items-start gap-2xl sm:flex-row">
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

      <TrimNote />

      <AddOnsSection />
      <Gallery />
      <PricingInfoSection />
      <Testimonials />
      <FAQSection items={GROOMING_FAQS} />
      <CTABanner
        heading="Ready to book your appointment?"
        description="We review your request on the same day, and we usually respond within 24 hours to let you know about our availability."
        phoneLabel="or call 416-904-2652"
      />
      <BlogTeaser heading="Things to know about your pet's groom" />
    </>
  );
}
