import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { WhyChooseSchool } from "@/components/sections/WhyChooseSchool";
import { TrainingHighlights } from "@/components/sections/TrainingHighlights";
import { WhoIsThisFor } from "@/components/sections/WhoIsThisFor";
import { EnrollSection } from "@/components/sections/EnrollSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROGRAMS } from "@/lib/data/programs";
import { SCHOOLING_FAQS } from "@/lib/data/schoolingFaqs";

export default function SchoolingPage() {
  return (
    <>
      <section className="flex items-center justify-center px-lg pt-2xl">
        <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl">
          <Breadcrumb>Grooming School</Breadcrumb>
          <h1 className="font-serif text-h2 text-text-primary sm:text-display-h1">
            Learn the art of grooming from a school that&rsquo;s been teaching it
            since 1979
          </h1>
          <div className="flex w-full flex-col items-start gap-2xl lg:flex-row">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl lg:h-[630px] lg:w-[776px] lg:flex-shrink-0">
              <Image src="/images/schooling-hero-1.png" alt="" fill className="object-cover" />
            </div>
            <div className="flex w-full flex-1 flex-col items-start gap-2xl">
              <div className="relative h-[220px] w-full overflow-hidden rounded-2xl lg:h-[314px]">
                <Image src="/images/schooling-hero-2.png" alt="" fill className="object-cover" />
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
        </div>
      </section>

      <WhyChooseSchool />
      <TrainingHighlights />
      <WhoIsThisFor />

      <section id="programs" className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
          <h2 className="font-serif text-h2 text-text-primary">Our programs</h2>
          <div className="grid w-full grid-cols-1 gap-2xl sm:grid-cols-2">
            {PROGRAMS.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <EnrollSection />
      <Testimonials />
      <FAQSection items={SCHOOLING_FAQS} />
      <CTABanner
        heading="Ready to start your training?"
        description="Tell us your background and goals, and we'll help you find the right program."
        phoneLabel="or call 416-904-2652"
      />
    </>
  );
}
