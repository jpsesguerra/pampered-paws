import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function InvestmentSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-2xl lg:max-w-[552px]">
          <div className="flex flex-col items-start gap-lg">
            <Eyebrow>Investment overview</Eyebrow>
            <h2 className="font-serif text-h2 text-text-primary">
              Understanding the investment
            </h2>
          </div>
          <Button href="/franchise/enquire">Request franchise information</Button>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-md">
          <p className="font-sans text-body-default text-text-primary">
            A Pampered Paws salon is a full-service, brick-and-mortar
            grooming business — not a mobile or home-based concept. Across
            the industry, opening a brick-and-mortar pet grooming salon
            typically represents a six-figure investment, with the largest
            variables being your location, lease, and build-out.
          </p>
          <p className="font-sans text-body-default text-text-primary">
            Your investment covers the essentials of opening and running
            your salon: location build-out, professional grooming equipment,
            brand and operating systems, and the training and launch support
            to get you operating with confidence.
          </p>
          <p className="font-sans text-body-default text-text-primary">
            We look for partners with access to significant capital and a
            genuine commitment to animal care. Exact investment figures,
            fees, and territory details are provided during a private
            consultation, where we can speak to your specific market and
            goals.
          </p>
        </div>
      </div>
    </section>
  );
}
