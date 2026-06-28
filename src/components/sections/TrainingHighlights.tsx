import { IconCircle } from "@/components/ui/IconCircle";

const HIGHLIGHTS = [
  {
    icon: "location" as const,
    title: "Hands-on from day one",
    description:
      "You learn on real coats, with real animals, guided by stylists who groom every day. Handling, speed, and accuracy are taught the way they're actually used on the salon floor.",
  },
  {
    icon: "paw" as const,
    title: "Individualized instruction",
    description:
      "Our programs are built in four-week units so your training matches your starting point and your goals. You're not pushed through a fixed track that ignores what you already know.",
  },
  {
    icon: "calendar" as const,
    title: "A name clients recognize",
    description:
      "Graduating from a school with a 45-year reputation means something when you're building your own client list or applying for your first grooming role.",
  },
];

export function TrainingHighlights() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <h2 className="text-center font-serif text-h3 text-text-primary">
          Three things set our training apart
        </h2>
        <div className="flex w-full flex-col items-start gap-lg lg:flex-row lg:items-stretch">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-1 flex-col items-start gap-lg rounded-2xl bg-surface-white py-lg pl-lg pr-2xl"
            >
              <IconCircle variant={item.icon} />
              <h3 className="font-serif text-h4 text-text-primary">{item.title}</h3>
              <p className="font-sans text-body-default text-text-primary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
