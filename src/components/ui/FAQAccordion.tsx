"use client";

import { useState } from "react";
import type { PortableTextBlock } from "@portabletext/react";
import { RichText } from "@/components/ui/RichText";

export type FAQItem = {
  question: string;
  answer: string | PortableTextBlock[];
};

function FAQRow({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-start rounded-2xl bg-surface-white p-lg">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-md text-left"
      >
        <span className="flex-1 font-sans text-body-lg text-text-primary">{item.question}</span>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-accent-dark">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isOpen ? "rotate-45 transition-transform" : "transition-transform"}
          >
            <path d="M8 2.5V13.5M2.5 8H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="w-full pt-md text-text-secondary">
          {typeof item.answer === "string" ? (
            <p className="font-sans text-body-default">{item.answer}</p>
          ) : (
            <RichText value={item.answer} />
          )}
        </div>
      )}
    </div>
  );
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-lg sm:grid-cols-2">
      {items.map((item) => (
        <FAQRow key={item.question} item={item} />
      ))}
    </div>
  );
}
