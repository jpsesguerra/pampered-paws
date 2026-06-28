// Mirrors the future Sanity "Testimonials" collection. Location documents
// reference up to 3 of these by id (manual array, not a live query).
export type Testimonial = {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ness-spence-1",
    name: "Ness Spence",
    location: "Mississauga, ON.",
    image: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664989/pampered-paws/images/testimonials/pet-1.png",
    quote:
      "I have been coming to Pampered Paws for years and I will continue to be a customer for many years to come! I won't trust anyone else with my pup!!! Eggie is so knowledgeable and patient with my high-anxiety dog, and her cuts always turn out amazing.",
  },
  {
    id: "ness-spence-2",
    name: "Ness Spence",
    location: "Mississauga, ON.",
    image: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664989/pampered-paws/images/testimonials/pet-1.png",
    quote:
      "I've been taking my dog to Pampered Paws for almost 2 years now, I am very happy with the quality of work, customer service and how they treat my dog. They always manage to fit me in the day I call or a least the day after.",
  },
  {
    id: "nadine-m",
    name: "Nadine M.",
    location: "Toronto, ON.",
    image: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664990/pampered-paws/images/testimonials/pet-3.png",
    quote:
      "I love the service, my cat son was given a lion cut which fits his personality perfectly. I will recommend pampered to my furry friends parents.",
  },
];

export function getTestimonialsByIds(ids: string[]): Testimonial[] {
  return ids
    .map((id) => TESTIMONIALS.find((t) => t.id === id))
    .filter((t): t is Testimonial => Boolean(t));
}
