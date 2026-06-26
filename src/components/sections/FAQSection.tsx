import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <h2 className="text-center font-serif text-h2 text-text-primary">
          Frequently{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-[0.4em] -rotate-1 rounded-full bg-brand-secondary-light/60" />
            <span className="relative">asked</span>
          </span>{" "}
          questions
        </h2>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
