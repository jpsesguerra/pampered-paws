import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function GroomingHero() {
  return (
    <section className="flex flex-col items-start gap-2xl px-lg pt-2xl sm:flex-row">
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[600px] sm:flex-1">
        <Image src="/images/grooming-hero.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex w-full flex-1 flex-col items-start justify-center gap-2xl">
        <div className="flex flex-col items-start gap-s+">
          <Eyebrow>Grooming Services</Eyebrow>
          <h1 className="font-serif text-h2 text-text-primary sm:text-display-h1">
            Expert grooming for the pets you&rsquo;d do anything for
          </h1>
          <p className="max-w-[456px] font-sans text-body-lg text-text-primary">
            Since 1979, GTA pet owners have trusted Pampered Paws to treat
            their companions like our own. Every groom is built around your
            pet — their breed, their coat, their comfort, and exactly the
            look you want.
          </p>
        </div>
        <div className="flex flex-col items-start gap-lg sm:flex-row sm:items-center">
          <Button withIcon href="/request-an-appointment">
            Request An Appointment
          </Button>
          <SecondaryButton href="/grooming-prices">See pricing</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
