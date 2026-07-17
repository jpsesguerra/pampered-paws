import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function OpportunitySection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-3xl">
        <div className="flex flex-col items-center gap-md text-center">
          <Eyebrow>The Opportunity</Eyebrow>
          <h2 className="max-w-[900px] font-serif text-h2 text-text-primary">
            A proven business in an industry that keeps <Highlight>growing</Highlight>
          </h2>
        </div>
        <div className="flex w-full flex-col items-start gap-2xl lg:flex-row">
          <div className="flex w-full flex-1 flex-col items-start gap-lg">
            <p className="font-sans text-body-default text-text-primary">
              The decision to franchise Pampered Paws wasn&rsquo;t about
              growing locations — it was about finding partners who share the
              values that built this brand.
            </p>
            <p className="font-sans text-body-default text-text-primary">
              Pet owners spend more on their companions every year — and
              grooming is one of the few pet services that&rsquo;s both
              recurring and recession-resistant. Dogs and cats need grooming
              on a 3-to-6-week cycle, in good times and bad, which means
              steady, repeat revenue rather than one-time sales.
            </p>
            <p className="font-sans text-body-default text-text-primary">
              Pampered Paws began franchising in 2004, after 25 years of
              refining how a grooming salon should actually run — pricing,
              workflow, staff training, and client care. We grow
              deliberately, not quickly. Every location has to reflect the
              same standards and reputation we&rsquo;ve spent decades
              building, and that discipline is what protects your investment
              as a partner, not just ours.
            </p>
            <SecondaryButton href="/franchise/enquire">Request franchise information</SecondaryButton>
          </div>
          <div className="aspect-video w-full flex-1 overflow-hidden rounded-2xl border-[12px] border-brand-primary-pink shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/Go-7E8Nrmgg"
              title="A message about the Pampered Paws franchise opportunity"
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
