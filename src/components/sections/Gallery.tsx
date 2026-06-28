import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Highlight";

const GALLERY_PHOTOS = [
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664958/pampered-paws/images/gallery/pet-bichon.jpg", name: "Bichon" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664959/pampered-paws/images/gallery/pet-black-toy-poodle.jpg", name: "Black Toy Poodle" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664959/pampered-paws/images/gallery/pet-cat.jpg", name: "Cat" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664961/pampered-paws/images/gallery/pet-conton.jpg", name: "Coton" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664961/pampered-paws/images/gallery/pet-king-charles.jpg", name: "King Charles" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664961/pampered-paws/images/gallery/pet-lhasa.jpg", name: "Lhasa" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664962/pampered-paws/images/gallery/pet-standard-poodle.jpg", name: "Standard Poodle" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664963/pampered-paws/images/gallery/pet-yorkshire.jpg", name: "Yorkshire" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664963/pampered-paws/images/gallery/poodle.jpg", name: "Poodle" },
  { src: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664964/pampered-paws/images/gallery/schnuzzer.jpg", name: "Schnauzer" },
];

export function Gallery() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-lg py-7xl">
      <div className="gallery-fade-mask absolute inset-0 flex items-center justify-center">
        <div className="gallery-marquee-track flex w-max items-center gap-s+">
          {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, i) => (
            <div
              key={`${photo.name}-${i}`}
              className="relative size-[260px] shrink-0 overflow-hidden rounded-2xl bg-brand-secondary-light"
            >
              <Image src={photo.src} alt={photo.name} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex shrink-0 flex-col items-center gap-3xl px-lg text-center">
        <h2 className="font-serif text-h2 text-text-primary">
          <span className="block whitespace-nowrap">Real pets.</span>
          <span className="block whitespace-nowrap">Real grooms.</span>
          <span className="block whitespace-nowrap">
            Fresh from, <Highlight>our salon</Highlight>
          </span>
        </h2>
        <Button withIcon href="https://www.instagram.com">
          Follow us on Instagram
        </Button>
      </div>
    </section>
  );
}
