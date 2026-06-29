import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import {
  type Location,
  getAppointmentHref,
  getBookingNote,
  getFullAddress,
  getPhoneLabel,
} from "@/lib/data/locations";

export function LocationCard({ location }: { location: Location }) {
  return (
    <div className="flex h-full flex-1 flex-col items-start gap-s+ rounded-[32px] bg-surface-white p-lg">
      <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl bg-brand-background-neutral">
        {location.heroImage && (
          <Image
            src={location.heroImage}
            alt={`Pampered Paws ${location.locationName} storefront`}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-between gap-7xl">
        <div className="flex w-full flex-col items-center gap-md text-center text-text-primary">
          <h3 className="font-serif text-h3">{location.locationName}</h3>
          <p className="font-sans text-body-default">
            Serving {location.neighbourhoodsServed.join(", ")}
          </p>
          <p className="font-sans text-label-xl font-semibold">{getFullAddress(location)}</p>
          <p className="font-sans text-label-lg">{getPhoneLabel(location)}</p>
          <p className="font-sans text-label-lg">{getBookingNote(location)}</p>
        </div>
        <div className="flex w-full flex-col items-start gap-md">
          {location.bookingMethod === "form" && (
            <Button href={getAppointmentHref(location)} className="w-full">
              Request an Appointment
            </Button>
          )}
          <SecondaryButton href={`/locations/${location.slug}`} className="w-full">
            {location.locationName} location details
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
