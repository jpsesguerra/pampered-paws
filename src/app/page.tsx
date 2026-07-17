import { Hero } from "@/components/sections/Hero";
import { BreedCarousel } from "@/components/sections/BreedCarousel";
import { LegacyHighlightsSection } from "@/components/sections/LegacyHighlightsSection";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { BookingSteps } from "@/components/sections/BookingSteps";
import { CraftSection } from "@/components/sections/CraftSection";
import { FranchisingTeaserSection } from "@/components/sections/FranchisingTeaserSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Reveal } from "@/components/ui/Reveal";
import { getAllTestimonials } from "@/sanity/lib/testimonials";
import { getBlogPosts } from "@/sanity/lib/blog";

export const revalidate = 60;

export default async function Home() {
  const [testimonials, blogPosts] = await Promise.all([getAllTestimonials(), getBlogPosts()]);
  return (
    <>
      <Hero />
      <Reveal>
        <BreedCarousel />
      </Reveal>
      <Reveal>
        <LegacyHighlightsSection />
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
      <Reveal>
        <FranchisingTeaserSection />
      </Reveal>
      <TeamSection />
      <Reveal>
        <Testimonials testimonials={testimonials} />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <CTABanner
          heading="Ready to request your appointment?"
          description="We review your request on the same day, and we usually respond within 24 hours to let you know about our availability."
          phoneLabel="or call 416-904-2652"
          phoneNumber="+14169042652"
        />
      </Reveal>
      <Reveal>
        <BlogTeaser posts={blogPosts.slice(0, 3)} />
      </Reveal>
    </>
  );
}
