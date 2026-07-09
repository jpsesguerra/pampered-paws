import type { BreedChip as BreedChipType } from "@/lib/data/breeds";

// The source SVGs have their own fill baked in (some pink, some gold). Using them as a
// mask instead of an <img> src ignores that baked-in color and lets us fill a single
// brand color (gold) uniformly across every breed icon.
export function BreedChip({ breed }: { breed: BreedChipType }) {
  return (
    <div className="flex shrink-0 items-center justify-center gap-sm whitespace-nowrap rounded-full bg-surface-white py-md pl-lg pr-xl">
      <span
        aria-hidden="true"
        className="size-8 shrink-0 bg-brand-accent-gold [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
        style={{ maskImage: `url(${breed.icon})`, WebkitMaskImage: `url(${breed.icon})` }}
      />
      <span className="font-sans text-label-xl text-text-primary">{breed.name}</span>
    </div>
  );
}
