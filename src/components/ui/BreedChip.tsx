import type { BreedChip as BreedChipType } from "@/lib/data/breeds";

export function BreedChip({ breed }: { breed: BreedChipType }) {
  return (
    <div className="flex shrink-0 items-center justify-center gap-sm whitespace-nowrap rounded-full bg-surface-white py-md pl-lg pr-xl">
      <img src={breed.icon} alt="" className="size-8" />
      <span className="font-sans text-label-xl text-text-primary">{breed.name}</span>
    </div>
  );
}
