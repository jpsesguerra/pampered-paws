import { Hero } from "@/components/sections/Hero";
import { BreedCarousel } from "@/components/sections/BreedCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { BookingSteps } from "@/components/sections/BookingSteps";
import { CraftSection } from "@/components/sections/CraftSection";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <BreedCarousel />
      <SuccessStories />
      <BookingSteps />
      <CraftSection />
      <Testimonials />
    </>
  );
}
