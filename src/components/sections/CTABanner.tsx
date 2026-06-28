import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

type CTABannerProps = {
  heading: string;
  description: string;
  phoneLabel?: React.ReactNode;
  phoneNumber?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTABanner({
  heading,
  description,
  phoneLabel,
  phoneNumber,
  buttonLabel = "Request an Appointment",
  buttonHref = "/request-an-appointment",
}: CTABannerProps) {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl overflow-hidden rounded-2xl bg-brand-secondary-light px-lg py-2xl text-center">
        <div className="flex flex-col items-center gap-md">
          <h2 className="font-serif text-h2 text-text-primary">{heading}</h2>
          <p className="font-sans text-body-lg text-text-secondary">{description}</p>
        </div>
        <div className="flex flex-col items-center gap-lg sm:flex-row">
          <Button withIcon href={buttonHref}>
            {buttonLabel}
          </Button>
          {phoneLabel && phoneNumber ? (
            <SecondaryButton href={`tel:${phoneNumber}`} icon="/icons/phone.svg">
              {phoneLabel}
            </SecondaryButton>
          ) : (
            phoneLabel && (
              <span className="font-sans text-btn-secondary text-text-primary">{phoneLabel}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
