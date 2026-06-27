import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Highlight";

const LEFT_PHOTOS = [
  { src: "/images/gallery/pet-chichi.jpg", name: "Chi Chi" },
  { src: "/images/gallery/pet-beau.jpg", name: "Beau" },
];

const RIGHT_PHOTOS = [
  { src: "/images/gallery/pet-cece.jpg", name: "Cece" },
  { src: "/images/gallery/pet-bella.jpg", name: "Bella" },
];

export function Gallery() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl lg:flex-row lg:justify-center">
        <div className="grid w-full max-w-[480px] grid-cols-2 gap-s+ lg:w-[480px] lg:shrink-0">
          {LEFT_PHOTOS.map((photo) => (
            <div key={photo.name} className="relative aspect-[227/358] overflow-hidden rounded-2xl bg-brand-secondary-light">
              <Image src={photo.src} alt={photo.name} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 flex-col items-center gap-3xl px-lg text-center">
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
        <div className="grid w-full max-w-[480px] grid-cols-2 gap-s+ lg:w-[480px] lg:shrink-0">
          {RIGHT_PHOTOS.map((photo) => (
            <div key={photo.name} className="relative aspect-[227/358] overflow-hidden rounded-2xl bg-brand-secondary-light">
              <Image src={photo.src} alt={photo.name} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
