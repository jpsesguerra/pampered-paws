import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ServiceChip } from "@/components/ui/ServiceChip";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";
import { WhatsIncludedSection } from "@/components/sections/WhatsIncludedSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { FRANCHISE_FAQS } from "@/lib/data/franchiseFaqs";

const FRANCHISE_LOCATIONS = [
  "Toronto",
  "Mississauga",
  "Scarborough",
  "Tokyo",
  "Yokohama",
  "Lexington",
];

export default function FranchisePage() {
  return (
    <>
      <section className="flex items-center justify-center px-lg pt-2xl">
        <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl overflow-hidden rounded-[32px] bg-brand-secondary-light lg:flex-row lg:items-center lg:pl-2xl">
          <div className="flex flex-1 flex-col items-start gap-2xl px-lg pt-2xl lg:px-0 lg:py-2xl">
            <div className="flex flex-col items-start gap-sm">
              <Eyebrow>Franchising Opportunity</Eyebrow>
              <h1 className="max-w-[516px] font-serif text-h2 text-text-primary sm:text-display-h1">
                Own a grooming business backed by 45 years of expertise
              </h1>
              <p className="max-w-[411px] font-sans text-body-default text-text-primary">
                Pampered Paws has been grooming, training, and building
                successful pet-care businesses since 1979 — across Canada
                and internationally. Now we&rsquo;re opening that proven
                system to a select group of franchise partners.
              </p>
            </div>
            <Button withIcon href="/franchise/enquire">
              Request franchise information
            </Button>
          </div>
          <div className="relative h-[280px] w-full flex-1 overflow-hidden lg:h-[582px] lg:self-end">
            <Image src="/images/franchise-hero.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-lg">
          {FRANCHISE_LOCATIONS.map((location) => (
            <ServiceChip key={location}>{location}</ServiceChip>
          ))}
        </div>
      </section>

      <OpportunitySection />
      <WhyPartnerSection />
      <WhatsIncludedSection />
      <InvestmentSection />
      <FAQSection items={FRANCHISE_FAQS} />
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
    </>
  );
}
