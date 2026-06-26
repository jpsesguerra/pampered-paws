import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function BookingSteps() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start justify-between gap-2xl">
          <div className="flex flex-col items-start gap-s+">
            <Eyebrow>Simple from the start</Eyebrow>
            <h2 className="max-w-[460px] font-serif text-h2 text-text-primary">
              Booking just takes three steps
            </h2>
          </div>
          <div className="flex w-full max-w-[360px] flex-col items-start gap-2xl rounded-2xl bg-brand-secondary-light p-lg">
            <div className="flex w-full flex-col items-start gap-md">
              <h3 className="w-full font-serif text-h4 text-text-primary">
                Request your appointment today!
              </h3>
              <p className="w-full font-sans text-body-sm text-text-secondary">
                We review your request on the same day, and we usually respond
                within 24 hours to let you know about our availability.
              </p>
            </div>
            <Button href="/request-an-appointment" className="w-full">
              Request an Appointment
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-s+">
          <Card
            variant="medium"
            icon="location"
            title="Choose your location"
            description="Toronto, Mississauga or Scarborough. (Scarborough books by phone — see below.)"
            className="w-full"
          />
          <Card
            variant="medium"
            icon="paw"
            title="Tell us about your pet"
            description="Breed, size and temperament through a short form, so the right groomer is ready for them."
            className="w-full"
          />
          <div className="flex w-full flex-col items-start gap-md rounded-2xl bg-surface-white py-lg pl-lg pr-2xl">
            <span className="flex size-12 items-center justify-center rounded-full bg-brand-secondary-light">
              <img src="/icons/check.svg" alt="" className="size-5" />
            </span>
            <h3 className="font-serif text-h4 text-text-primary">We confirm directly</h3>
            <p className="font-sans text-body-default text-text-primary">
              A real person reviews your request and confirms your spot. No
              bots, no guessing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
