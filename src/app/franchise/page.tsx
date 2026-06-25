import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ServiceChip } from "@/components/ui/ServiceChip";
import { FAQList } from "@/components/sections/FAQList";

const COUNTRIES = [
  "Canada",
  "United States",
  "Japan",
  "Germany",
  "Australia",
  "United Kingdom",
];

const FRANCHISE_FAQS = [
  {
    question: "How much does a Pampered Paws franchise cost?",
    answer:
      "Franchise investment varies by location and salon size. Request franchise information and our team will walk you through the costs, fees, and what's included for your market.",
  },
];

export default function FranchisePage() {
  return (
    <>
      <section className="flex items-center justify-center px-lg pt-2xl">
        <div className="flex w-full max-w-[1240px] items-center gap-2xl overflow-hidden rounded-[32px] bg-brand-secondary-light pl-2xl">
          <div className="flex flex-1 flex-col items-start gap-2xl py-2xl">
            <div className="flex flex-col items-start gap-sm">
              <Eyebrow>Franchising Opportunity</Eyebrow>
              <h1 className="max-w-[516px] font-serif text-display-h1 text-text-primary">
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
          <div className="relative h-[582px] flex-1 self-end overflow-hidden">
            <Image src="/images/franchise-hero.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-lg">
          {COUNTRIES.map((country) => (
            <ServiceChip key={country}>{country}</ServiceChip>
          ))}
        </div>
      </section>

      <FAQList heading="Franchising questions, answered" faqs={FRANCHISE_FAQS} />
    </>
  );
}
