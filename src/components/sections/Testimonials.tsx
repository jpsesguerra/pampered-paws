"use client";

import { useState } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TESTIMONIALS, type Testimonial } from "@/lib/data/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
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

type TestimonialsProps = {
  testimonials?: Testimonial[];
  heading?: string;
};

export function Testimonials({
  testimonials = TESTIMONIALS,
  heading = "What our happy pet parents say",
}: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const total = testimonials.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  if (total === 0) return null;

  const goPrev = () => {
    setDirection("prev");
    setIndex(prevIndex);
  };

  const goNext = () => {
    setDirection("next");
    setIndex(nextIndex);
  };

  const slideClass = direction === "next" ? "testimonial-slide-next" : "testimonial-slide-prev";

  return (
    <section className="flex flex-col items-center gap-2xl py-7xl">
      <div className="flex flex-col items-center gap-s+ px-lg text-center">
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="max-w-[454px] font-serif text-h2 text-text-primary">{heading}</h2>
      </div>

      <div className="flex w-full items-center justify-center overflow-hidden">
        <div key={index} className={`hidden items-start justify-center gap-2xl lg:flex ${slideClass}`}>
          {total > 1 && <TestimonialCard testimonial={testimonials[prevIndex]} />}
          <TestimonialCard testimonial={testimonials[index]} />
          {total > 1 && <TestimonialCard testimonial={testimonials[nextIndex]} />}
        </div>
        <div key={`m-${index}`} className={`flex w-full max-w-[744px] px-lg lg:hidden ${slideClass}`}>
          <TestimonialCard testimonial={testimonials[index]} />
        </div>
      </div>

      {total > 1 && (
      <div className="flex items-center gap-lg">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={goPrev}
          className="flex size-12 items-center justify-center rounded-full bg-brand-accent-dark"
        >
          <img src="/icons/arrow-right.svg" alt="" className="size-5 rotate-180 invert" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={goNext}
          className="flex size-12 items-center justify-center rounded-full bg-brand-accent-dark"
        >
          <img src="/icons/arrow-right.svg" alt="" className="size-5 invert" />
        </button>
      </div>
      )}
    </section>
  );
}
