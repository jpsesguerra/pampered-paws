import { client } from "./client";
import { allLocationsQuery, locationBySlugQuery } from "./queries";
import { urlFor } from "./image";
import type { Location, BookingMethod } from "@/lib/data/locations";
import type { Testimonial } from "@/lib/data/testimonials";
import type { Image as SanityImage } from "sanity";

type TestimonialRef = {
  _id: string;
  name: string;
  location?: string;
  image?: SanityImage;
  quote: string;
};

type LocationDoc = Omit<Location, "heroImage" | "testimonials"> & {
  heroImage?: SanityImage;
  testimonials?: TestimonialRef[];
  bookingMethod: BookingMethod;
};

function mapTestimonialRef(doc: TestimonialRef): Testimonial {
  return {
    id: doc._id,
    name: doc.name,
    location: doc.location ?? "",
    image: doc.image ? urlFor(doc.image).width(240).height(240).fit("crop").url() : "",
    quote: doc.quote,
  };
}

function mapLocation(doc: LocationDoc): Location {
  return {
    ...doc,
    heroImage: doc.heroImage ? urlFor(doc.heroImage).width(1600).url() : "",
    testimonials: (doc.testimonials ?? []).map(mapTestimonialRef),
  };
}

export async function getLocations(): Promise<Location[]> {
  const docs: LocationDoc[] = await client.fetch(allLocationsQuery);
  return docs.map(mapLocation);
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  const doc: LocationDoc | null = await client.fetch(locationBySlugQuery, { slug });
  return doc ? mapLocation(doc) : null;
}
