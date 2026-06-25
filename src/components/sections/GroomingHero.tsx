import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function GroomingHero() {
  return (
    <section className="flex items-start gap-2xl px-lg pt-2xl">
      <div className="relative h-[600px] flex-1 overflow-hidden rounded-2xl">
        <Image src="/images/grooming-hero.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-2xl">
        <div className="flex flex-col items-start gap-s+">
          <Eyebrow>Grooming Services</Eyebrow>
          <h1 className="font-serif text-display-h1 text-text-primary">
            Expert grooming for the pets you&rsquo;d do anything for
          </h1>
          <p className="max-w-[456px] font-sans text-body-lg text-text-primary">
            Since 1979, GTA pet owners have trusted Pampered Paws to treat
            their companions like our own. Every groom is built around your
            pet — their breed, their coat, their comfort, and exactly the
            look you want.
          </p>
        </div>
        <div className="flex items-center gap-lg">
          <Button withIcon href="/request-an-appointment">
            Request An Appointment
          </Button>
          <SecondaryButton href="/grooming-prices">See pricing</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
