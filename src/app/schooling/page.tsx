import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { WhyChooseSchool } from "@/components/sections/WhyChooseSchool";
import { TrainingHighlights } from "@/components/sections/TrainingHighlights";
import { WhoIsThisFor } from "@/components/sections/WhoIsThisFor";
import { EnrollSection } from "@/components/sections/EnrollSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROGRAMS } from "@/lib/data/programs";
import { SCHOOLING_FAQS } from "@/lib/data/schoolingFaqs";
import { Reveal } from "@/components/ui/Reveal";

export default function SchoolingPage() {
  return (
    <>
      <section className="flex items-center justify-center px-lg pt-2xl">
        <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl">
          <Reveal>
            <Breadcrumb>Grooming School</Breadcrumb>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-h2 text-text-primary sm:text-display-h1">
              Learn the art of grooming from a school that&rsquo;s been teaching
              it <Highlight>since 1979</Highlight>
            </h1>
          </Reveal>
          <Reveal delay={200} className="w-full">
            <div className="flex w-full flex-col items-start gap-2xl lg:flex-row">
              <div className="relative h-[280px] w-full overflow-hidden rounded-[32px] lg:h-[630px] lg:w-[776px] lg:flex-shrink-0">
                <Image src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664985/pampered-paws/images/schooling-hero-1.png" alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-1 flex-col items-start gap-2xl">
                <div className="relative h-[220px] w-full overflow-hidden rounded-[32px] lg:h-[314px]">
                  <Image src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664986/pampered-paws/images/schooling-hero-2.png" alt="" fill className="object-cover" />
                </div>
                <div className="flex flex-col items-start gap-2xl">
                  <p className="font-sans text-body-lg text-text-primary">
                    Whether you&rsquo;re starting a new career, sharpening your
                    skills, or opening your own salon, Pampered Paws gives you
                    hands-on training from working stylists — not a classroom
                    theory course. Train at your pace, four weeks at a time.
                  </p>
                  <div className="flex flex-col items-start gap-lg sm:flex-row sm:items-center">
                    <Button withIcon href="#programs">
                      Explore programs
                    </Button>
                    <SecondaryButton href="/schooling/enroll">
                      Ask about enrolling
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <WhyChooseSchool />
      </Reveal>
      <Reveal>
        <TrainingHighlights />
      </Reveal>
      <Reveal>
        <WhoIsThisFor />
      </Reveal>

      <Reveal>
        <section id="programs" className="flex items-center justify-center px-lg py-7xl">
          <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
            <div className="flex max-w-[716px] flex-col items-center gap-md text-center">
              <Eyebrow>Schooling at Pampered Paws</Eyebrow>
              <h2 className="font-serif text-h2 text-text-primary">Our programs</h2>
              <p className="font-sans text-body-lg text-text-primary">
                Choose a starting point — or talk to us about a path that
                combines several.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-2xl sm:grid-cols-2">
              {PROGRAMS.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <EnrollSection />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQSection items={SCHOOLING_FAQS} />
      </Reveal>
      <Reveal>
        <CTABanner
          heading="Ready to start your training?"
          description="Tell us your background and goals, and we'll help you find the right program."
          phoneLabel="or call 416-904-2652"
          phoneNumber="+14169042652"
        />
      </Reveal>
    </>
  );
}
