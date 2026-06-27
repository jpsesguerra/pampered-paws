import { Hero } from "@/components/sections/Hero";
import { BreedCarousel } from "@/components/sections/BreedCarousel";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { BookingSteps } from "@/components/sections/BookingSteps";
import { CraftSection } from "@/components/sections/CraftSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { CTABanner } from "@/components/sections/CTABanner";
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
      <CTABanner
        heading="Ready to book your appointment?"
        description="We review your request on the same day, and we usually respond within 24 hours to let you know about our availability."
        phoneLabel="or call 416-904-2652"
      />
      <BlogTeaser />
    </>
  );
}
