"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Resource } from "@/lib/data/resources";

const ALL = "All";

function chipClasses(active: boolean) {
  return cn(
    "shrink-0 whitespace-nowrap rounded-full border px-lg py-sm font-sans text-label-default transition-colors",
    active
      ? "border-brand-primary-pink bg-brand-primary-pink text-text-on-pink"
      : "border-[#efeff2] bg-surface-white text-text-primary hover:border-brand-primary-pink"
  );
}

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(resources.map((r) => r.category)));
    return unique.sort((a, b) => a.localeCompare(b));
  }, [resources]);

  const [selected, setSelected] = useState<string>(ALL);

  const filtered = selected === ALL ? resources : resources.filter((r) => r.category === selected);

  return (
    <div className="flex w-full max-w-[1240px] flex-col items-center">
      <div className="my-lg flex w-full flex-col items-start gap-sm sm:flex-row sm:items-center sm:gap-lg">
        <span className="shrink-0 font-sans text-label-lg text-text-primary">Categories</span>
        <div className="flex w-full gap-sm overflow-x-auto">
          {[ALL, ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              className={chipClasses(selected === category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-lg">
        {filtered.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="flex flex-col items-start gap-xs rounded-2xl bg-surface-white p-lg"
          >
            <span className="font-sans text-label-default text-brand-primary-pink">
              {resource.category}
            </span>
            <h2 className="font-serif text-h6 text-text-primary">{resource.title}</h2>
            <p className="font-sans text-body-sm text-text-secondary">{resource.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
