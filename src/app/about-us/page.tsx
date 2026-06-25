import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export default function AboutUsPage() {
  return (
    <section className="flex flex-col items-start gap-2xl px-lg pt-2xl">
      <Eyebrow>About Us</Eyebrow>
      <h1 className="font-serif text-display-h1 text-text-primary">
        The grandmother of grooming built this from scratch
      </h1>
      <div className="flex w-full flex-wrap items-start gap-2xl">
        <div className="relative h-[630px] w-[776px] flex-shrink-0 overflow-hidden rounded-2xl">
          <Image src="/images/about-hero-1.png" alt="Lesley Weeks grooming a dog" fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col items-start gap-2xl">
          <div className="relative h-[380px] w-full overflow-hidden rounded-2xl">
            <Image src="/images/about-hero-2.png" alt="" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start gap-2xl">
            <p className="font-sans text-body-lg text-text-primary">
              Lesley Weeks was Toronto&rsquo;s first professional pet
              groomer. In 1979 she turned that pioneering work into Pampered
              Paws — and four decades later, it&rsquo;s a salon, a school,
              and an international name in pet care.
            </p>
            <div className="flex items-center gap-lg">
              <Button withIcon href="/request-an-appointment">
                Request an Appointment
              </Button>
              <SecondaryButton href="/franchise">Learn More</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
