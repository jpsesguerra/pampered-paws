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
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <BreedCarousel />
      </Reveal>
      <Reveal>
        <SuccessStories />
      </Reveal>
      <Reveal>
        <BookingSteps />
      </Reveal>
      <Reveal>
        <CraftSection />
      </Reveal>
      <TeamSection />
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <CTABanner
          heading="Ready to book your appointment?"
          description="We review your request on the same day, and we usually respond within 24 hours to let you know about our availability."
          phoneLabel="or call 416-904-2652"
          phoneNumber="+14169042652"
        />
      </Reveal>
      <Reveal>
        <BlogTeaser />
      </Reveal>
    </>
  );
}
