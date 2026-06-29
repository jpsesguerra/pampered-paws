import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Program } from "@/lib/data/programs";
import { urlFor } from "@/sanity/lib/image";

const FALLBACK_IMAGE = "https://res.cloudinary.com/du0witbcr/image/upload/v1782664984/pampered-paws/images/program-card.png";

export function ProgramCard({ program }: { program: Program }) {
  const imageUrl = program.mainImage ? urlFor(program.mainImage).width(1200).fit("max").url() : FALLBACK_IMAGE;
  return (
    <div className="flex h-full w-full flex-col items-start gap-s+ rounded-xl bg-surface-white px-lg pb-lg pt-s+">
      <div className="flex w-full flex-1 flex-col items-start gap-s+">
        <div className="relative h-[480px] w-full overflow-hidden rounded-xl bg-background-neutral">
          <Image src={imageUrl} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain" />
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
      </div>
      <Button href={`/schooling/${program.slug}`}>View Program</Button>
    </div>
  );
}
