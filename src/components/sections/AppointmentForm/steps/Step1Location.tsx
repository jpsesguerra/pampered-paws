import Link from "next/link";
import type { Location } from "@/lib/data/locations";
import { Field, SelectInput } from "@/components/ui/FormFields";

export function Step1Location({
  locations,
  value,
  onChange,
}: {
  locations: Location[];
  value: string;
  onChange: (slug: string) => void;
}) {
  const selected = locations.find((l) => l.slug === value);
  const isPhoneOnly = selected?.bookingMethod === "phone";

  return (
    <div className="flex w-full flex-col items-start gap-lg">
      <Field label="Preferred location">
        <SelectInput
          options={locations.map((l) => l.locationName)}
          value={selected?.locationName ?? ""}
          placeholder="Choose a location"
          onChange={(e) => {
            const match = locations.find((l) => l.locationName === e.target.value);
            onChange(match?.slug ?? "");
          }}
        />
      </Field>

      {isPhoneOnly && selected && (
        <div className="flex w-full flex-col items-start gap-sm rounded-2xl bg-brand-background-neutral p-lg">
          <h3 className="font-serif text-h5 text-text-primary">Request by phone</h3>
          <p className="font-sans text-body-default text-text-primary">
            Our {selected.locationName} salon takes appointment requests directly by phone.
          </p>
          <a
            href={`tel:${selected.phoneCall.replace(/[^0-9+]/g, "")}`}
            className="font-sans text-h5 text-brand-deep-raspberry"
          >
            {selected.phoneCall}
          </a>
          <Link href={`/locations/${selected.slug}`} className="font-sans text-label-default text-link-primary underline">
            View {selected.locationName} location details
          </Link>
          <button
            type="button"
            onClick={() => onChange("")}
            className="font-sans text-label-default text-text-secondary underline"
          >
            Choose a different location
          </button>
        </div>
      )}
    </div>
  );
}
