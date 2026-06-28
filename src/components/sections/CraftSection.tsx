import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ServiceChip } from "@/components/ui/ServiceChip";
import { Highlight } from "@/components/ui/Highlight";

const SERVICES_ROW = [
  "Regular Groom",
  "Bath & Blow Dry",
  "Full Coat Styling",
  "Breed-Standard Cuts",
  "Scissor Finishing",
  "Nail Clipping & Grinding",
  "De-shedding Treatment",
  "Hand Stripping",
  "Hot Oil Treatment",
  "Pet Colouring",
  "Puppy First Groom",
  "Medicated Bath",
];

const PROGRAMS_ROW = [
  "Groomers Professional Development Program",
  "Advanced Scissor Program",
  "Enhanced Stylist Professional Development Program",
  "Business Owners Professional Animal Stylist Development Program",
  "Organizational Teachers Professional Development Program",
  "Private Lesson for Pet Owners",
];

export function CraftSection() {
  return (
    <section className="flex flex-col items-center gap-2xl py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-lg px-lg lg:flex-row lg:gap-2xl">
        <div className="flex w-full flex-col items-start gap-xs lg:w-[552px] lg:shrink-0">
          <Eyebrow>School curriculum</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            The craft behind every <Highlight>great groom</Highlight>
          </h2>
        </div>
        <div className="flex flex-1 flex-col items-start gap-lg lg:pr-lg">
          <p className="font-sans text-body-default text-text-primary">
            Everything you see in our salons — every cut, every bath, every
            nail ground smooth — is a skill our licensed stylists have spent
            years perfecting. At our grooming school, we teach every one of
            them. Whether you&rsquo;re looking for expert care for your pet,
            or you&rsquo;re ready to build a career doing work you love, this
            is what we do.
          </p>
          <Button href="/schooling">Learn about the school</Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-lg overflow-hidden">
        <div className="flex w-max animate-marquee-reverse items-center gap-lg">
          {[...SERVICES_ROW, ...SERVICES_ROW].map((label, i) => (
            <ServiceChip key={`${label}-${i}`} size="sm">{label}</ServiceChip>
          ))}
        </div>
        <div className="flex w-max animate-marquee items-center gap-lg">
          {[...PROGRAMS_ROW, ...PROGRAMS_ROW].map((label, i) => (
            <ServiceChip key={`${label}-${i}`} size="sm">{label}</ServiceChip>
          ))}
        </div>
      </div>
    </section>
  );
}
