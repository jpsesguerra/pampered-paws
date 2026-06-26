import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

const TESTIMONIALS = [
  {
    name: "Ness Spence",
    location: "Mississauga, ON.",
    image: "/images/testimonials/pet-1.png",
    quote:
      "I have been coming to Pampered Paws for years and I will continue to be a customer for many years to come! I won't trust anyone else with my pup!!! Eggie is so knowledgeable and patient with my high-anxiety dog, and her cuts always turn out amazing.",
  },
  {
    name: "Ness Spence",
    location: "Mississauga, ON.",
    image: "/images/testimonials/pet-1.png",
    quote:
      "I've been taking my dog to Pampered Paws for almost 2 years now, I am very happy with the quality of work, customer service and how they treat my dog. They always manage to fit me in the day I call or a least the day after.",
  },
  {
    name: "Nadine M.",
    location: "Toronto, ON.",
    image: "/images/testimonials/pet-3.png",
    quote:
      "I love the service, my cat son was given a lion cut which fits his personality perfectly. I will recommend pampered to my furry friends parents.",
  },
];

export function Testimonials() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-6xl">
        <div className="flex flex-col items-center gap-s+ text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="max-w-[454px] font-serif text-h2 text-text-primary">
            What our happy pet parents say
          </h2>
        </div>
        <div className="flex w-full flex-col items-center gap-2xl lg:flex-row lg:items-start lg:justify-center">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-full max-w-[744px] flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg sm:flex-row"
            >
              <div className="relative size-[120px] shrink-0 overflow-hidden rounded-xl">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-xl">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-primary-pink">
                  <img src="/icons/quote.svg" alt="" className="size-5" />
                </span>
                <p className="font-sans text-label-xl text-text-primary">{t.quote}</p>
                <div className="flex flex-col items-start gap-xxs">
                  <span className="font-sans text-label-lg text-text-primary">{t.name}</span>
                  <span className="font-sans text-body-sm text-brand-neutral-lighter">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
