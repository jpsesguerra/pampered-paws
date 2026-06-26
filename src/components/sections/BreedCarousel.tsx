import { BreedChip } from "@/components/ui/BreedChip";
import { BREED_CHIPS } from "@/lib/data/breeds";

export function BreedCarousel() {
  return (
    <div className="flex w-full items-center overflow-hidden bg-brand-background-neutral py-sm">
      <div className="flex w-max animate-marquee items-center gap-sm">
        {[...BREED_CHIPS, ...BREED_CHIPS].map((breed, i) => (
          <BreedChip key={`${breed.name}-${i}`} breed={breed} />
        ))}
      </div>
    </div>
  );
}
