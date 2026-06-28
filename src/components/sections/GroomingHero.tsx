import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Reveal } from "@/components/ui/Reveal";

export function GroomingHero() {
  return (
    <section className="flex items-center justify-center px-lg pt-2xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl sm:flex-row">
        <Reveal className="h-[280px] w-full sm:h-[600px] sm:flex-1">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[32px] sm:h-[600px]">
            <video
              src="https://res.cloudinary.com/du0witbcr/video/upload/v1782664970/pampered-paws/images/groom.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </Reveal>
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-2xl">
          <div className="flex flex-col items-start gap-s+">
            <Reveal>
              <Eyebrow>Grooming Services</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif text-h2 text-text-primary sm:text-display-h1">
                Expert grooming for the pets you&rsquo;d do{" "}
                <Highlight>anything</Highlight> for
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-[456px] font-sans text-body-lg text-text-primary">
                Since 1979, GTA pet owners have trusted Pampered Paws to treat
                their companions like our own. Every groom is built around
                your pet — their breed, their coat, their comfort, and
                exactly the look you want.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="flex flex-col items-start gap-lg sm:flex-row sm:items-center">
              <Button withIcon href="/request-an-appointment">
                Request An Appointment
              </Button>
              <SecondaryButton href="/grooming-prices">See pricing</SecondaryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
