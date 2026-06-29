import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Highlight";
import { ServiceChip } from "@/components/ui/ServiceChip";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";
import { WhatsIncludedSection } from "@/components/sections/WhatsIncludedSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { getFaqsByCategory } from "@/sanity/lib/faqs";

const FRANCHISE_LOCATIONS = [
  "Toronto",
  "Mississauga",
  "Scarborough",
  "Tokyo",
  "Yokohama",
  "Lexington",
];

export const revalidate = 60;

export default async function FranchisePage() {
  const faqs = await getFaqsByCategory("franchising");
  return (
    <>
      <section className="flex items-center justify-center px-lg pt-2xl">
        <div className="relative flex w-full max-w-[1240px] flex-col items-start gap-2xl overflow-hidden rounded-[32px] bg-brand-secondary-light lg:flex-row lg:items-center lg:pl-2xl lg:h-[689px]">
          <div className="relative z-10 flex w-full flex-col items-start gap-2xl px-lg pt-2xl lg:w-fit lg:flex-none lg:px-0 lg:py-2xl">
            <div className="flex flex-col items-start gap-sm">
              <Reveal>
                <Eyebrow>Franchising Opportunity</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="max-w-[516px] font-serif text-h2 text-text-primary sm:text-display-h1">
                  Own a grooming business backed by 45 years of{" "}
                  <Highlight>expertise</Highlight>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="max-w-[411px] font-sans text-body-default text-text-primary">
                  Pampered Paws has been grooming, training, and building
                  successful pet-care businesses since 1979 — across Canada
                  and internationally. Now we&rsquo;re opening that proven
                  system to a select group of franchise partners.
                </p>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <Button withIcon href="/franchise/enquire">
                Request franchise information
              </Button>
            </Reveal>
          </div>
          <div className="relative z-0 h-[280px] w-full flex-1 overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%] lg:flex-none">
            <Image
              src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664957/pampered-paws/images/franchise-hero.png"
              alt=""
              fill
              className="hero-edge-fade object-cover object-right"
            />
          </div>
        </div>
      </section>

      <Reveal>
        <section className="flex items-center justify-center px-lg py-7xl">
          <div className="flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-lg">
            {FRANCHISE_LOCATIONS.map((location) => (
              <ServiceChip key={location} icon="location">{location}</ServiceChip>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <OpportunitySection />
      </Reveal>
      <Reveal>
        <WhyPartnerSection />
      </Reveal>
      <Reveal>
        <WhatsIncludedSection />
      </Reveal>
      <Reveal>
        <InvestmentSection />
      </Reveal>
      <Reveal>
        <FAQSection items={faqs} />
      </Reveal>
      <Reveal>
        <CTABanner
          heading="Start the conversation"
          description="Tell us about yourself and the market you're interested in. Our franchise team will be in touch to talk through the opportunity."
          buttonLabel="Franchise inquiry form"
          buttonHref="/franchise/enquire"
          phoneLabel={
            <>
              or email{" "}
              <a href="mailto:franchise@pamperedpaws.com" className="underline">
                franchise@pamperedpaws.com
              </a>
            </>
          }
        />
      </Reveal>
    </>
  );
}
