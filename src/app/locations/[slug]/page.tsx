import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocationBySlug } from "@/lib/data/locations";
import { getTestimonialsByIds } from "@/lib/data/testimonials";
import { LocationHero } from "@/components/sections/LocationHero";
import { BreedCarousel } from "@/components/sections/BreedCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { LocationTeamSection } from "@/components/sections/LocationTeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationVisitCard } from "@/components/sections/LocationVisitCard";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  const testimonials = getTestimonialsByIds(location.testimonialIds);

  return (
    <>
      <LocationHero location={location} />
      <Reveal>
        <BreedCarousel />
      </Reveal>
      <Reveal>
        <SuccessStories />
      </Reveal>
      <Reveal>
        <LocationTeamSection location={location} />
      </Reveal>
      {testimonials.length > 0 && (
        <Reveal>
          <Testimonials
            testimonials={testimonials}
            heading={`What ${location.locationName} pet parents say`}
          />
        </Reveal>
      )}
      <Reveal>
        <LocationVisitCard location={location} />
      </Reveal>
    </>
  );
}
