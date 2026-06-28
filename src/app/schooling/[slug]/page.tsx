import { notFound } from "next/navigation";
import Link from "next/link";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { PROGRAMS, getProgramBySlug, getOtherPrograms } from "@/lib/data/programs";

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug);
  if (!program) notFound();

  const otherPrograms = getOtherPrograms(program.slug);

  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <Reveal className="w-full flex-1">
          <article className="flex w-full flex-col items-start gap-2xl rounded-[20px] bg-surface-white px-lg py-2xl sm:px-3xl">
            <div className="flex flex-col items-start gap-md">
              <SecondaryButton href="/schooling">Back To Schooling</SecondaryButton>
              <h1 className="font-serif text-h2 text-text-primary">{program.title}</h1>
            </div>
            <div className="flex flex-col items-start gap-sm font-sans text-label-lg text-text-primary">
              <span>Program Length: {program.duration}</span>
              <span>Cost: {program.cost}</span>
            </div>
            <div className="flex flex-col items-start gap-md font-sans text-body-default text-text-primary">
              {program.description.map((paragraph, i) => (
                <p key={i} className="w-full whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button href="/schooling/enroll">{program.ctaLabel}</Button>
          </article>
        </Reveal>

        <Reveal delay={100} className="w-full lg:w-[400px] lg:shrink-0">
          <div className="flex w-full flex-col items-start gap-2xl">
            <h2 className="w-full text-center font-serif text-h4 text-text-primary">
              Other Programs
            </h2>
            <div className="flex w-full flex-col items-start gap-md">
              {otherPrograms.map((other) => (
                <Link
                  key={other.slug}
                  href={`/schooling/${other.slug}`}
                  className="flex w-full items-center gap-lg rounded-[20px] bg-surface-white px-lg py-md"
                >
                  <IconCircle variant="paw" className="size-8" />
                  <span className="flex-1 font-serif text-h6 text-text-primary">
                    {other.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
