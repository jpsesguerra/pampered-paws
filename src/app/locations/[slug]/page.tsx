import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocations, getLocationBySlug } from "@/sanity/lib/locations";
import { getBlogPosts } from "@/sanity/lib/blog";
import { LocationHero } from "@/components/sections/LocationHero";
import { BreedCarousel } from "@/components/sections/BreedCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { LocationTeamSection } from "@/components/sections/LocationTeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationVisitCard } from "@/components/sections/LocationVisitCard";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Reveal } from "@/components/ui/Reveal";

export const revalidate = 60;

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = await getLocationBySlug(params.slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default async function LocationDetailPage({ params }: { params: { slug: string } }) {
  const [location, blogPosts] = await Promise.all([getLocationBySlug(params.slug), getBlogPosts()]);
  if (!location) notFound();

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
      {location.testimonials.length > 0 && (
        <Reveal>
          <Testimonials
            testimonials={location.testimonials}
            heading={`What ${location.locationName} pet parents say`}
          />
        </Reveal>
      )}
      <Reveal>
        <LocationVisitCard location={location} />
      </Reveal>
      <Reveal>
        <BlogTeaser posts={blogPosts.slice(0, 3)} />
      </Reveal>
    </>
  );
}
