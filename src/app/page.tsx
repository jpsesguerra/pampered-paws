import { Hero } from "@/components/sections/Hero";
import { BreedCarousel } from "@/components/sections/BreedCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { BookingSteps } from "@/components/sections/BookingSteps";
import { CraftSection } from "@/components/sections/CraftSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { BlogTeaser } from "@/components/sections/BlogTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <BreedCarousel />
      <SuccessStories />
      <BookingSteps />
      <CraftSection />
      <TeamSection />
      <Testimonials />
      <Gallery />
      <BlogTeaser />
    </>
  );
}
