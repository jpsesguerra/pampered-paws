import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function FranchisingTeaserSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl overflow-hidden rounded-2xl bg-brand-secondary-light p-lg sm:flex-row sm:items-center sm:p-2xl">
        <div className="relative size-[240px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/du0witbcr/image/upload/v1784260148/Lesley_photo_for_website_1_wxixjy.png"
            alt="Lesley Weeks, Founder & President of Pampered Paws™"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-md">
          <Eyebrow>Franchising Opportunity</Eyebrow>
          <h3 className="font-serif text-h4 text-text-primary">
            A proven business in a fast growing industry
          </h3>
          <p className="font-sans text-body-default text-text-primary">
            Pampered Paws™ has been grooming, training, and building
            successful pet-care businesses since 1979 — across Canada and
            internationally. Now we&rsquo;re opening that proven system to a
            select group of franchise partners.
          </p>
          <Button href="/franchise">Learn about franchising</Button>
        </div>
      </div>
    </section>
  );
}
