import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Highlight";

const GALLERY_PHOTOS = [
  { src: "/images/gallery/pet-bichon.jpg", name: "Bichon" },
  { src: "/images/gallery/pet-black-toy-poodle.jpg", name: "Black Toy Poodle" },
  { src: "/images/gallery/pet-cat.jpg", name: "Cat" },
  { src: "/images/gallery/pet-conton.jpg", name: "Coton" },
  { src: "/images/gallery/pet-king-charles.jpg", name: "King Charles" },
  { src: "/images/gallery/pet-lhasa.jpg", name: "Lhasa" },
  { src: "/images/gallery/pet-standard-poodle.jpg", name: "Standard Poodle" },
  { src: "/images/gallery/pet-yorkshire.jpg", name: "Yorkshire" },
  { src: "/images/gallery/poodle.jpg", name: "Poodle" },
  { src: "/images/gallery/schnuzzer.jpg", name: "Schnauzer" },
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
