import { IconCircle } from "@/components/ui/IconCircle";

const BELIEFS = [
  {
    icon: "shower-head" as const,
    title: "Grooming on your terms",
    description:
      "Every pet and every owner is different. We listen before we cut — your pet's age, health, coat, and the look you want — so the result is always what you asked for.",
  },
  {
    icon: "location" as const,
    title: "A clean, calm place",
    description:
      "From the start, clients have been able to see exactly where their pet is groomed, who's working on them, and how clean the space is. That openness was a differentiator in 1979. It still is.",
  },
  {
    icon: "star" as const,
    title: "No shortcuts",
    description:
      "Good grooming is a craft, and craft takes time. As Lesley puts it: \"I'm not making a pizza — I can't deliver this in thirty minutes. It's an art.\" This is expert care, available to anyone who refuses to compromise on how their pet is treated — not a luxury, a standard.",
  },
];

export function BeliefsSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <div className="flex flex-col items-center gap-md text-center">
          <h2 className="font-serif text-h2 text-text-primary">What we believe</h2>
          <p className="font-sans text-body-lg text-text-primary">
            Three things have guided Pampered Paws from the first day:
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-lg lg:flex-row lg:items-stretch">
          {BELIEFS.map((belief) => (
            <div
              key={belief.title}
              className="flex w-full flex-1 flex-col items-start gap-lg rounded-2xl bg-surface-white py-lg pl-lg pr-2xl"
            >
              <IconCircle variant={belief.icon} />
              <h3 className="font-serif text-h4 text-text-primary">{belief.title}</h3>
              <p className="font-sans text-body-default text-text-primary">{belief.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
