import { Eyebrow } from "@/components/ui/Eyebrow";

export type FAQ = {
  question: string;
  answer: string;
};

export function FAQList({ heading, faqs }: { heading: string; faqs: FAQ[] }) {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <div className="flex flex-col items-center gap-s+ text-center">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">{heading}</h2>
        </div>
        <div className="flex w-full max-w-[772px] flex-col items-start gap-lg">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex w-full flex-col items-start gap-sm rounded-2xl bg-surface-white p-lg"
            >
              <h3 className="font-serif text-h6 text-text-primary">{faq.question}</h3>
              <p className="font-sans text-body-default text-text-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
