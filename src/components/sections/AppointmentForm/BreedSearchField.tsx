"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FieldLabel } from "@/components/ui/FormFields";

export function BreedSearchField({
  label,
  options,
  value,
  onChange,
  helperText,
  otherOption,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (label: string) => void;
  helperText?: string;
  otherOption?: string;
}) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q === value.toLowerCase()) return options;
    return options.filter((o) => o.toLowerCase().includes(q));
  }, [options, query, value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery(value);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [value]);

  function select(label: string) {
    onChange(label);
    setQuery(label);
    setIsOpen(false);
  }

  const optionCount = filtered.length + (otherOption ? 1 : 0);

  return (
    <div ref={containerRef} className="relative flex w-full flex-col items-start gap-xs">
      <FieldLabel htmlFor="breed-search-input">{label}</FieldLabel>
      <input
        id="breed-search-input"
        type="text"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="breed-search-listbox"
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
            setHighlighted((i) => Math.min(i + 1, optionCount - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlighted((i) => Math.max(i - 1, 0));
          } else if (e.key === "Enter") {
            e.preventDefault();
            if (highlighted < filtered.length) {
              if (filtered[highlighted]) select(filtered[highlighted]);
            } else if (otherOption) {
              select(otherOption);
            }
          } else if (e.key === "Escape") {
            setIsOpen(false);
          }
        }}
        placeholder="Start typing a breed…"
        className="w-full rounded-full border border-[#efeff2] bg-surface-white px-xl py-lg font-sans text-body-default text-text-primary"
      />
      {helperText && <p className="font-sans text-body-sm text-text-secondary">{helperText}</p>}
      {isOpen && (
        <ul
          id="breed-search-listbox"
          role="listbox"
          className="absolute left-0 top-full z-20 mt-sm max-h-[320px] w-full overflow-y-auto rounded-2xl bg-surface-white p-sm shadow-lg"
        >
          {filtered.map((option, i) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                onClick={() => select(option)}
                onMouseEnter={() => setHighlighted(i)}
                className={`w-full rounded-xl px-lg py-sm text-left font-sans text-body-default text-text-primary ${
                  i === highlighted ? "bg-brand-background-neutral" : ""
                }`}
              >
                {option}
              </button>
            </li>
          ))}
          {filtered.length === 0 && !otherOption && (
            <li className="px-lg py-sm font-sans text-body-default text-text-secondary">
              No breeds match &ldquo;{query}&rdquo;
            </li>
          )}
          {otherOption && (
            <li role="option" aria-selected={otherOption === value}>
              <button
                type="button"
                onClick={() => select(otherOption)}
                onMouseEnter={() => setHighlighted(filtered.length)}
                className={`w-full rounded-xl px-lg py-sm text-left font-sans text-body-default text-text-primary ${
                  filtered.length === highlighted ? "bg-brand-background-neutral" : ""
                }`}
              >
                {otherOption}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
