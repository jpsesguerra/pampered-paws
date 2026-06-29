import { client } from "./client";
import { allTestimonialsQuery, testimonialsByCategoryQuery } from "./queries";
import { urlFor } from "./image";
import type { Testimonial } from "@/lib/data/testimonials";
import type { Image as SanityImage } from "sanity";

type TestimonialDoc = {
  _id: string;
  name: string;
  location?: string;
  image?: SanityImage;
  quote: string;
};

function mapTestimonial(doc: TestimonialDoc): Testimonial {
  return {
    id: doc._id,
    name: doc.name,
    location: doc.location ?? "",
    image: doc.image ? urlFor(doc.image).width(240).height(240).fit("crop").url() : "",
    quote: doc.quote,
  };
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const docs: TestimonialDoc[] = await client.fetch(allTestimonialsQuery);
  return docs.map(mapTestimonial);
}

export async function getTestimonialsByCategory(category: string): Promise<Testimonial[]> {
  const docs: TestimonialDoc[] = await client.fetch(testimonialsByCategoryQuery, { category });
  return docs.map(mapTestimonial);
}
