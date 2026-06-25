const BREEDS = [
  "Poodle",
  "Shih Tzu",
  "Golden Retriever",
  "Bichon Frise",
  "Yorkshire Terrier",
  "Maltese",
  "Cockapoo",
  "Schnauzer",
  "Cavalier King Charles",
  "Border Collie",
];

export function BreedCarousel() {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-brand-secondary-light py-md">
      <div className="flex items-center gap-3xl whitespace-nowrap">
        {[...BREEDS, ...BREEDS].map((breed, i) => (
          <span
            key={`${breed}-${i}`}
            className="font-sans text-label-lg text-text-primary"
          >
            {breed}
          </span>
        ))}
      </div>
    </div>
  );
}
