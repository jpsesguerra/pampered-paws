"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { BreedPricing } from "@/lib/data/pricing";

export function BreedPriceLookup({ breeds }: { breeds: BreedPricing[] }) {
  const [query, setQuery] = useState(breeds[0]?.breed ?? "");

  const breed = useMemo(() => {
    const match = breeds.find((b) => b.breed.toLowerCase() === query.trim().toLowerCase());
    return match ?? breeds.find((b) => b.breed.toLowerCase().startsWith(query.trim().toLowerCase())) ?? breeds[0];
  }, [breeds, query]);

  return (
    <div className="flex w-full max-w-[1240px] items-start gap-2xl">
      <div className="flex flex-1 flex-col items-start gap-2xl rounded-[32px] bg-surface-white p-2xl">
        <label className="flex w-full flex-col items-start gap-lg">
          <span className="font-sans text-label-xl text-text-primary">
            Type or search for your dog or cat breed
          </span>
          <input
            type="text"
            list="breed-options"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Start typing a breed…"
            className="w-full rounded-full border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary"
          />
          <datalist id="breed-options">
            {breeds.map((b) => (
              <option key={b.breed} value={b.breed} />
            ))}
          </datalist>
        </label>
      </div>
      <div className="flex flex-1 flex-col items-start gap-s+ rounded-2xl bg-surface-white p-lg">
        {breed ? (
          <div className="flex w-full flex-col items-start gap-lg py-md">
            <h3 className="font-serif text-h3 text-text-primary">{breed.breed}</h3>
            <div className="flex w-full items-start gap-sm">
              <div className="flex flex-1 flex-col items-start gap-sm rounded-2xl bg-brand-background-neutral p-lg">
                <span className="font-sans text-label-lg text-text-primary">Bath</span>
                <span className="font-serif text-h5 text-text-primary">{breed.bath}</span>
              </div>
              <div className="flex flex-1 flex-col items-start gap-sm rounded-2xl bg-brand-background-neutral p-lg">
                <span className="font-sans text-label-lg text-text-primary">Regular Groom</span>
                <span className="font-serif text-h5 text-text-primary">{breed.regularGroom}</span>
              </div>
              <div className="flex flex-1 flex-col items-start gap-sm rounded-2xl bg-brand-background-neutral p-lg">
                <span className="font-sans text-label-lg text-text-primary">Show Trim</span>
                <span className="font-serif text-h5 text-text-primary">{breed.showTrim}</span>
              </div>
            </div>
            <p className="font-sans text-body-sm text-text-primary">
              Please note the data is being updated, the list price might be
              different than the actual charge.
            </p>
          </div>
        ) : (
          <p className="w-full py-md font-sans text-body-default text-text-secondary">
            No breed matches that search — try a different spelling, or
            request an appointment and we&rsquo;ll confirm the exact price.
          </p>
        )}
        <Button href="/request-an-appointment">Request an Appointment</Button>
      </div>
    </div>
  );
}
