import { Eyebrow } from "@/components/ui/Eyebrow";
import { LocationCard } from "@/components/ui/LocationCard";
import { LOCATIONS } from "@/lib/data/locations";

export default function LocationsPage() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <div className="flex max-w-[772px] flex-col items-center gap-lg text-center">
          <Eyebrow>Locations</Eyebrow>
          <h1 className="font-serif text-h2 text-text-primary">
            Find your nearest Pampered Paws
          </h1>
          <p className="font-sans text-body-lg text-text-primary">
            Three grooming salons across the Greater Toronto Area, each with
            its own team and its own regulars. Choose the location closest to
            you to see hours, services, and how to book.
          </p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-2xl sm:flex-row">
          {LOCATIONS.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
