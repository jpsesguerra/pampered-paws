"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BREED_PRICING } from "@/lib/data/pricing";

export function BreedPriceLookup() {
  const [selectedBreed, setSelectedBreed] = useState(BREED_PRICING[0].breed);
  const breed = BREED_PRICING.find((b) => b.breed === selectedBreed) ?? BREED_PRICING[0];

  return (
    <div className="flex w-full max-w-[1240px] items-start gap-2xl">
      <div className="flex flex-1 flex-col items-start gap-2xl rounded-[32px] bg-surface-white p-2xl">
        <label className="flex w-full flex-col items-start gap-lg">
          <span className="font-sans text-label-xl text-text-primary">
            Type or search for your dog or cat breed
          </span>
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="w-full rounded-full border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary"
          >
            {BREED_PRICING.map((b) => (
              <option key={b.breed} value={b.breed}>
                {b.breed}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex flex-1 flex-col items-start gap-s+ rounded-2xl bg-surface-white p-lg">
        <div className="relative h-[480px] w-full overflow-hidden rounded-2xl">
          <Image src={breed.image} alt={breed.breed} fill className="object-cover" />
        </div>
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
        <Button href="/request-an-appointment">Request an Appointment</Button>
      </div>
    </div>
  );
}
