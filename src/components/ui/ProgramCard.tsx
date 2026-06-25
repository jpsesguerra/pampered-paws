import Image from "next/image";
import { Button } from "@/components/ui/Button";

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  cost: string;
  level: string;
};

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="flex w-full flex-col items-start gap-s+ rounded-2xl bg-surface-white p-lg">
      <div className="relative h-[480px] w-full overflow-hidden rounded-2xl">
        <Image src="/images/program-card.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex w-full flex-col items-start gap-xs">
        <h3 className="font-serif text-h5 text-text-primary">{program.title}</h3>
        <p className="font-sans text-body-default text-text-primary">{program.tagline}</p>
        <div className="flex items-center gap-sm font-sans text-label-lg text-text-primary">
          <span>Length: {program.duration}</span>
          <span aria-hidden className="size-1.5 rounded-full bg-text-primary" />
          <span>Cost: {program.cost}</span>
          <span aria-hidden className="size-1.5 rounded-full bg-text-primary" />
          <span>{program.level}</span>
        </div>
      </div>
      <Button href={`/schooling/${program.slug}`}>View Program</Button>
    </div>
  );
}
