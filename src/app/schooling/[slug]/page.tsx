import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/data/programs";

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = PROGRAMS.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <article className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg">
        <Breadcrumb>Grooming School</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">{program.title}</h1>
        <p className="font-sans text-body-lg text-text-primary">{program.tagline}</p>
        <div className="flex items-center gap-sm font-sans text-label-lg text-text-primary">
          <span>Length: {program.duration}</span>
          <span aria-hidden className="size-1.5 rounded-full bg-text-primary" />
          <span>Cost: {program.cost}</span>
          <span aria-hidden className="size-1.5 rounded-full bg-text-primary" />
          <span>{program.level}</span>
        </div>
        <Button href="/schooling/enroll">Ask about enrolling</Button>
      </div>
    </article>
  );
}
