import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import {
  type Location,
  getAppointmentHref,
  getBookingNote,
  getFullAddress,
  getGoogleMapsViewUrl,
  getPhoneLabel,
} from "@/lib/data/locations";

export function LocationVisitCard({ location }: { location: Location }) {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-lg rounded-[32px] bg-surface-white p-lg sm:flex-row">
        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-auto sm:flex-1">
          <iframe
            src={location.googleMapsEmbedUrl}
            title={`Map to Pampered Paws ${location.locationName}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-2xl px-lg py-md text-center">
          <div className="flex w-full flex-col items-center gap-md text-text-primary">
            <h3 className="font-serif text-h3">Visit our {location.locationName} Salon</h3>
            <p className="font-sans text-body-sm text-text-secondary">
              Serving {location.neighbourhoodsServed.join(", ")}.
            </p>
            <p className="font-sans text-label-xl font-semibold">{getFullAddress(location)}</p>
            <p className="font-sans text-label-lg">{getPhoneLabel(location)}</p>
            <div className="flex flex-col items-center font-sans text-label-lg">
              {location.hours.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <p className="font-sans text-label-lg">{getBookingNote(location)}</p>
          </div>
          <div className="flex w-full flex-col items-center gap-md">
            {location.bookingMethod === "form" ? (
              <Button href={getAppointmentHref(location)} className="w-full sm:w-auto">
                Request an Appointment
              </Button>
            ) : (
              <Button href={`tel:${location.phoneCall.replace(/[^0-9+]/g, "")}`} className="w-full sm:w-auto">
                Call to Book
              </Button>
            )}
            <SecondaryButton
              href={getGoogleMapsViewUrl(location)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
