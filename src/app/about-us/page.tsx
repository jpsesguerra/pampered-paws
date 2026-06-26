import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { OriginStory } from "@/components/sections/OriginStory";
import { VideoSection } from "@/components/sections/VideoSection";
import { Timeline } from "@/components/sections/Timeline";
import { TeamSection } from "@/components/sections/TeamSection";
import { BeliefsSection } from "@/components/sections/BeliefsSection";
import { HelpSection } from "@/components/sections/HelpSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function AboutUsPage() {
  return (
    <>
      <section className="flex flex-col items-start gap-2xl px-lg pt-2xl">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="font-serif text-h2 text-text-primary sm:text-display-h1">
          The grandmother of grooming built this from scratch
        </h1>
        <div className="flex w-full flex-col items-start gap-2xl lg:flex-row">
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl lg:h-[630px] lg:w-[776px] lg:flex-shrink-0">
            <Image src="/images/about-hero-1.png" alt="Lesley Weeks grooming a dog" fill className="object-cover" />
          </div>
          <div className="flex w-full flex-1 flex-col items-start gap-2xl">
            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl lg:h-[380px]">
              <Image src="/images/about-hero-2.png" alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-start gap-2xl">
              <p className="font-sans text-body-lg text-text-primary">
                Lesley Weeks was Toronto&rsquo;s first professional pet
                groomer. In 1979 she turned that pioneering work into Pampered
                Paws — and four decades later, it&rsquo;s a salon, a school,
                and an international name in pet care.
              </p>
              <div className="flex flex-col items-start gap-lg sm:flex-row sm:items-center">
                <Button withIcon href="/request-an-appointment">
                  Request an Appointment
                </Button>
                <SecondaryButton href="#origin-story">Learn More</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="origin-story">
        <OriginStory />
      </div>
      <VideoSection />
      <Timeline />
      <TeamSection />
      <BeliefsSection />
      <HelpSection />
      <CTABanner
        heading="Come see the difference for yourself"
        description="Forty-five years on, the goal hasn't changed: your pet, cared for exactly the way you want."
        buttonLabel="Find your nearest salon"
        buttonHref="/locations"
      />
    </>
  );
}
