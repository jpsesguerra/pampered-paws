"use client";

import { useState } from "react";
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

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex w-[744px] shrink-0 flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg sm:flex-row">
      <div className="relative size-[120px] shrink-0 overflow-hidden rounded-xl">
        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-start gap-xl">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-primary-pink">
          <img src="/icons/quote.svg" alt="" className="size-5" />
        </span>
        <p className="font-sans text-label-xl text-text-primary">{testimonial.quote}</p>
        <div className="flex flex-col items-start gap-xxs">
          <span className="font-sans text-label-lg text-text-primary">{testimonial.name}</span>
          <span className="font-sans text-body-sm text-brand-neutral-lighter">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  return (
    <section className="flex flex-col items-center gap-2xl py-7xl">
      <div className="flex flex-col items-center gap-s+ px-lg text-center">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="max-w-[454px] font-serif text-h2 text-text-primary">
          What our happy pet parents say
        </h2>
      </div>

      <div className="flex w-full items-center justify-center overflow-hidden">
        <div className="hidden items-start justify-center gap-2xl lg:flex">
          <TestimonialCard testimonial={TESTIMONIALS[prevIndex]} />
          <TestimonialCard testimonial={TESTIMONIALS[index]} />
          <TestimonialCard testimonial={TESTIMONIALS[nextIndex]} />
        </div>
        <div className="flex w-full max-w-[744px] px-lg lg:hidden">
          <TestimonialCard testimonial={TESTIMONIALS[index]} />
        </div>
      </div>

      <div className="flex items-center gap-lg">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex(prevIndex)}
          className="flex size-12 items-center justify-center rounded-full bg-brand-accent-dark"
        >
          <img src="/icons/arrow-right.svg" alt="" className="size-5 rotate-180 invert" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex(nextIndex)}
          className="flex size-12 items-center justify-center rounded-full bg-brand-accent-dark"
        >
          <img src="/icons/arrow-right.svg" alt="" className="size-5 invert" />
        </button>
      </div>
    </section>
  );
}
