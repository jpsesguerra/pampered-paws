import { GroomingHero } from "@/components/sections/GroomingHero";
import { Card } from "@/components/ui/Card";
import { GroomingServiceCard } from "@/components/ui/GroomingServiceCard";
import { TrimNote } from "@/components/sections/TrimNote";
import { AddOnsSection } from "@/components/sections/AddOnsSection";
import { Gallery } from "@/components/sections/Gallery";
import { PricingInfoSection } from "@/components/sections/PricingInfoSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { GROOMING_FAQS } from "@/lib/data/groomingFaqs";
import { Reveal } from "@/components/ui/Reveal";

export default function GroomingPage() {
  return (
    <>
      <GroomingHero />

      <Reveal>
        <section className="flex items-center justify-center px-lg py-7xl">
          <div className="flex w-full max-w-[1240px] flex-col items-start gap-lg sm:flex-row sm:items-stretch">
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
      </Reveal>

      <Reveal>
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
            <div className="flex w-full flex-col items-start gap-2xl sm:flex-row sm:items-stretch">
              <GroomingServiceCard
                image="https://res.cloudinary.com/du0witbcr/image/upload/v1782664973/pampered-paws/images/grooming-regular-groom.png"
                eyebrow="The full, all-inclusive service"
                title="Regular Groom"
                description="A complete head-to-tail groom for pets seen every 3–6 weeks. Your stylist bathes, brushes, clips, scissors and styles your pet to their breed standard or the custom look you choose."
                includesHeading="Every Regular Groom includes:"
                includes={[
                  "Bath with a cream rinse matched to your pet's skin and coat",
                  "Full clipping, scissoring and styling",
                  "Texture-enhancing blow-dry",
                  "Nail clipping and grinding",
                  "Ear cleaning, before and after the bath",
                  "Teeth brushing (bring your pet's own brush and paste)",
                  "Additional Add-Ons Available",
                ]}
                bestFor="Pets due for a haircut, breed styling, or a fresh new look."
                ctaHref="/grooming-prices"
                ctaLabel="View Pricing"
              />
              <GroomingServiceCard
                image="https://res.cloudinary.com/du0witbcr/image/upload/v1782664971/pampered-paws/images/grooming-bath.png"
                eyebrow="Clean, fresh, and fluffy — between grooms"
                title="Bath"
                description="A thorough freshen-up for pets on a regular 3–6 week schedule who don't need a haircut right now. Bathing, brushing and tidying — without body, face or leg trimming."
                includesHeading="Every Bath includes:"
                includes={[
                  "Bath with a cream rinse matched to your pet's needs",
                  "Wet and dry brushing",
                  "Sanitary and paw-pad tidying (where applicable)",
                  "Texture-enhancing blow-dry",
                  "Nail clipping and grinding",
                  "Ear cleaning, before and after the bath",
                  "Teeth brushing (bring your pet's own brush and paste)",
                ]}
                bestFor="Staying clean and tidy between full grooms."
                ctaHref="/grooming-prices"
                ctaLabel="View Pricing"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <TrimNote />
      </Reveal>

      <Reveal>
        <AddOnsSection />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <PricingInfoSection />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQSection items={GROOMING_FAQS} />
      </Reveal>
      <Reveal>
        <CTABanner
          heading="Ready to book your appointment?"
          description="We review your request on the same day, and we usually respond within 24 hours to let you know about our availability."
          phoneLabel="or call 416-904-2652"
          phoneNumber="+14169042652"
        />
      </Reveal>
      <Reveal>
        <BlogTeaser heading="Things to know about your pet's groom" />
      </Reveal>
    </>
  );
}
