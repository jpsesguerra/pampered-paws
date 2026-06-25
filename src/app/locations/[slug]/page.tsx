import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { LOCATIONS } from "@/lib/data/locations";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = LOCATIONS.find((l) => l.slug === params.slug);
  if (!location) notFound();

  return (
    <article className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg">
        <Breadcrumb>Locations</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">
          Pampered Paws {location.name}
        </h1>
        <p className="font-sans text-body-lg text-text-primary">{location.tagline}</p>
      </div>
      <div className="relative h-[320px] w-full max-w-[776px] overflow-hidden rounded-2xl">
        <Image src={location.mapImage} alt={`Map of Pampered Paws ${location.name}`} fill className="object-cover" />
      </div>
      <div className="flex w-full max-w-[776px] flex-col items-start gap-md">
        <p className="font-sans text-label-xl font-semibold text-text-primary">{location.address}</p>
        <p className="font-sans text-label-lg text-text-primary">{location.phoneLabel}</p>
        <p className="font-sans text-label-lg text-text-primary">{location.bookingNote}</p>
        {location.bookOnline && (
          <Button href="/request-an-appointment">Request an Appointment</Button>
        )}
      </div>
    </article>
  );
}
