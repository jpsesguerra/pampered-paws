"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { BreedPricing } from "@/lib/data/pricing";

export function BreedPriceLookup({ breeds }: { breeds: BreedPricing[] }) {
  const [query, setQuery] = useState(breeds[0]?.breed ?? "");
  const [selected, setSelected] = useState(breeds[0]?.breed ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return breeds;
    return breeds.filter((b) => b.breed.toLowerCase().includes(q));
  }, [breeds, query]);

  const breed = useMemo(() => breeds.find((b) => b.breed === selected) ?? breeds[0], [breeds, selected]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectBreed(name: string) {
    setSelected(name);
    setQuery(name);
    setIsOpen(false);
  }

  return (
    <div className="flex w-full max-w-[1240px] items-start gap-2xl">
      <div className="flex flex-1 flex-col items-start gap-2xl rounded-[32px] bg-surface-white p-2xl">
        <div ref={containerRef} className="relative flex w-full flex-col items-start gap-lg">
          <label htmlFor="breed-search" className="font-sans text-label-xl text-text-primary">
            Type or search for your dog or cat breed
          </label>
          <input
            id="breed-search"
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="breed-listbox"
            autoComplete="off"
            value={query}
            onFocus={() => setIsOpen(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
              setHighlighted(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIsOpen(true);
                setHighlighted((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHighlighted((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                if (filtered[highlighted]) selectBreed(filtered[highlighted].breed);
              } else if (e.key === "Escape") {
                setIsOpen(false);
              }
            }}
            placeholder="Start typing a breed…"
            className="w-full rounded-full border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary"
          />
          {isOpen && (
            <ul
              id="breed-listbox"
              role="listbox"
              className="absolute left-0 top-full z-20 mt-sm max-h-[320px] w-full overflow-y-auto rounded-2xl bg-surface-white p-sm shadow-lg"
            >
              {filtered.length > 0 ? (
                filtered.map((b, i) => (
                  <li key={b.breed} role="option" aria-selected={b.breed === selected}>
                    <button
                      type="button"
                      onClick={() => selectBreed(b.breed)}
                      onMouseEnter={() => setHighlighted(i)}
                      className={`w-full rounded-xl px-lg py-sm text-left font-sans text-body-default text-text-primary ${
                        i === highlighted ? "bg-brand-background-neutral" : ""
                      }`}
                    >
                      {b.breed}
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-lg py-sm font-sans text-body-default text-text-secondary">
                  No breeds match &ldquo;{query}&rdquo;
                </li>
              )}
            </ul>
          )}
        </div>
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
