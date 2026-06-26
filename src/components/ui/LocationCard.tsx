import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export type Location = {
  slug: string;
  name: string;
  tagline: string;
  address: string;
  phoneLabel: string;
  email: string;
  bookingNote: string;
  mapImage: string;
  bookOnline: boolean;
};

export function LocationCard({ location }: { location: Location }) {
  return (
    <div className="flex flex-1 flex-col items-start gap-s+ rounded-[32px] bg-surface-white p-lg">
      <div className="relative h-[240px] w-full overflow-hidden rounded-2xl">
        <Image src={location.mapImage} alt={`Map of Pampered Paws ${location.name}`} fill className="object-cover" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-7xl">
        <div className="flex w-full flex-col items-center gap-md text-center text-text-primary">
          <h3 className="font-serif text-h3">{location.name}</h3>
          <p className="font-sans text-body-default">{location.tagline}</p>
          <p className="font-sans text-label-xl font-semibold">{location.address}</p>
          <p className="font-sans text-label-lg">{location.phoneLabel}</p>
          <p className="font-sans text-label-lg">{location.bookingNote}</p>
        </div>
        <div className="flex w-full flex-col items-start gap-md">
          {location.bookOnline && (
            <Button href="/request-an-appointment" className="w-full">
              Request an Appointment
            </Button>
          )}
          <SecondaryButton href={`/locations/${location.slug}`} className="w-full">
            {location.name} location details
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
