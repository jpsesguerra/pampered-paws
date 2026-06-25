import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { FAQList } from "@/components/sections/FAQList";
import { PROGRAMS } from "@/lib/data/programs";

const SCHOOLING_FAQS = [
  {
    question: "Do I need experience to enroll?",
    answer:
      "No prior experience is required for our entry-level programs. We start every student at the level that matches their current skills, from complete beginner through to advanced stylist.",
  },
];

export default function SchoolingPage() {
  return (
    <>
      <section className="flex flex-col items-start gap-2xl px-lg pt-2xl">
        <Breadcrumb>Grooming School</Breadcrumb>
        <h1 className="font-serif text-display-h1 text-text-primary">
          Learn the art of grooming from a school that&rsquo;s been teaching it
          since 1979
        </h1>
        <div className="flex w-full flex-wrap items-start gap-2xl">
          <div className="relative h-[630px] w-[776px] flex-shrink-0 overflow-hidden rounded-2xl">
            <Image src="/images/schooling-hero-1.png" alt="" fill className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col items-start gap-2xl">
            <div className="relative h-[314px] w-full overflow-hidden rounded-2xl">
              <Image src="/images/schooling-hero-2.png" alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-start gap-2xl">
              <p className="font-sans text-body-lg text-text-primary">
                Whether you&rsquo;re starting a new career, sharpening your
                skills, or opening your own salon, Pampered Paws gives you
                hands-on training from working stylists — not a classroom
                theory course. Train at your pace, four weeks at a time.
              </p>
              <div className="flex items-center gap-lg">
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
      </section>

      <section id="programs" className="flex items-center justify-center px-lg py-7xl">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
          <h2 className="font-serif text-h2 text-text-primary">Our programs</h2>
          <div className="grid w-full grid-cols-2 gap-2xl">
            {PROGRAMS.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <FAQList heading="Schooling questions, answered" faqs={SCHOOLING_FAQS} />
    </>
  );
}
