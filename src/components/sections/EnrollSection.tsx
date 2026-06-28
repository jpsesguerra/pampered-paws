import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";

const STEPS = [
  {
    icon: "graduation-cap" as const,
    title: "Find your program",
    description: "Browse above, or compare them side by side.",
  },
  {
    icon: "paw" as const,
    title: "Tell us about yourself",
    description:
      "Submit a short enrolment inquiry with your background and goals. Our school team reviews it and reaches out directly.",
  },
  {
    icon: "calendar" as const,
    title: "Confirm your start date",
    description:
      "Programs run in cohorts, and spots fill first-come, first-served. Full payment is due 60 days before your start date, with an installment option on larger certificate programs.",
  },
];

export function EnrollSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-2xl lg:sticky lg:top-2xl lg:self-start">
          <div className="flex flex-col items-start gap-s+">
            <Eyebrow>Enrolment</Eyebrow>
            <h2 className="font-serif text-h2 text-text-primary">How to Enrol</h2>
          </div>
          <div className="flex w-full max-w-[360px] flex-col items-start gap-2xl rounded-2xl bg-brand-secondary-light p-lg">
            <div className="flex w-full flex-col items-start gap-md">
              <h3 className="font-serif text-h4 text-text-primary">
                Start your enrolment inquiry
              </h3>
              <p className="font-sans text-body-sm text-text-secondary">
                Full payment schedules, refund terms, and program policies are
                available on our Policies &amp; Refunds page.
              </p>
            </div>
            <Button href="/schooling/enroll" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-s+">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="flex w-full flex-col items-start gap-md rounded-2xl bg-surface-white py-lg pl-lg pr-2xl"
            >
              <IconCircle variant={step.icon} />
              <h3 className="font-serif text-h4 text-text-primary">{step.title}</h3>
              <p className="font-sans text-body-default text-text-primary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
