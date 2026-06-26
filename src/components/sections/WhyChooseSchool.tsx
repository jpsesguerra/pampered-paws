import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";

export function WhyChooseSchool() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-lg">
          <Eyebrow>Why Choose Pampered Paws</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            A track record you can build a career on
          </h2>
          <p className="font-sans text-body-lg text-text-primary">
            For more than 45 years, Pampered Paws has trained groomers who go
            on to do this for a living — and for themselves.
          </p>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-md rounded-2xl bg-surface-white py-lg pl-lg pr-2xl">
          <IconCircle variant="location" />
          <h3 className="font-serif text-h4 text-text-primary">
            80% of our graduates run their own grooming businesses
          </h3>
          <p className="font-sans text-body-default text-text-primary">
            in Canada, the United States, Japan, Germany, England, Australia,
            and more than a dozen other countries. When you train here,
            you&rsquo;re learning a craft that travels, in an industry that
            keeps growing.
          </p>
        </div>
      </div>
    </section>
  );
}
