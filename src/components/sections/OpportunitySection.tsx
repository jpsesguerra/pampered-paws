import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function OpportunitySection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-lg lg:max-w-[552px]">
          <Eyebrow>The Opportunity</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            A proven business in an industry that keeps growing
          </h2>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-lg">
          <p className="font-sans text-body-default text-text-primary">
            Pet owners spend more on their companions every year — and
            grooming is one of the few pet services that&rsquo;s both
            recurring and recession-resistant. Dogs and cats need grooming on
            a 3-to-6-week cycle, in good times and bad, which means steady,
            repeat revenue rather than one-time sales.
          </p>
          <p className="font-sans text-body-default text-text-primary">
            Pampered Paws began franchising in 2004, after 25 years of
            refining how a grooming salon should actually run — pricing,
            workflow, staff training, and client care. What you&rsquo;d be
            buying isn&rsquo;t an idea. It&rsquo;s a system that&rsquo;s been
            working for decades, on two continents.
          </p>
          <Button href="/franchise/enquire">Request franchise information</Button>
        </div>
      </div>
    </section>
  );
}
