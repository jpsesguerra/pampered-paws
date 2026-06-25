import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ServiceChip } from "@/components/ui/ServiceChip";

const ROW_1 = [
  "Bath",
  "Regular Groom",
  "Show Trim",
  "De-matting",
  "Hand Stripping",
  "De-shedding",
  "Hot Oil Treatment",
  "Pet Colouring",
];

const ROW_2 = [
  "Grooming Fundamentals",
  "Junior Groomer Program",
  "Enhanced Stylist Development",
  "Advanced Scissor Program",
  "Business Owners Program",
  "Private Lessons",
  "Nail Trim",
  "Ear Cleaning",
];

export function CraftSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col gap-2xl">
        <div className="flex w-full items-start gap-2xl">
          <div className="flex w-[552px] shrink-0 flex-col gap-xs">
            <Eyebrow>Services · School curriculum</Eyebrow>
            <h2 className="font-serif text-h2 text-text-primary">
              The craft behind every great groom
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-start gap-lg pr-lg">
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
        <div className="flex flex-col items-start gap-lg overflow-hidden">
          <div className="flex items-center gap-lg">
            {ROW_1.map((label) => (
              <ServiceChip key={label}>{label}</ServiceChip>
            ))}
          </div>
          <div className="flex items-center gap-lg">
            {ROW_2.map((label) => (
              <ServiceChip key={label}>{label}</ServiceChip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
