import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";

const AUDIENCES = [
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665051/pampered-paws/icons/graduation-cap.svg",
    title: "Starting a new career",
    description:
      "You're drawn to animals and ready for hands-on, people-and-pet work that's always in demand",
  },
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665067/pampered-paws/icons/thumbs-up.svg",
    title: "Already working with animals",
    description:
      "You're a bather, kennel assistant, or vet tech ready to move up into styling",
  },
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665065/pampered-paws/icons/star.svg",
    title: "A working groomer levelling up",
    description: "You're looking to master advanced scissor work or specialty skills",
  },
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665056/pampered-paws/icons/location-pin.svg",
    title: "Opening your own salon",
    description: "You want the full skill set to run your own table with confidence",
  },
  {
    icon: "https://res.cloudinary.com/du0witbcr/image/upload/v1782665057/pampered-paws/icons/paw.svg",
    title: "A pet owner",
    description: "who simply wants to learn to care for your own dog between visits",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl">
        <div className="flex flex-col items-start gap-s+">
          <Eyebrow>Who Is This For?</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            Is grooming school right for <Highlight>you?</Highlight>
          </h2>
          <p className="max-w-[518px] font-sans text-body-lg text-text-primary">
            Our students come from all kinds of backgrounds. You might be:
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-7xl lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-1 flex-col items-start gap-md">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.title}
                className="flex w-full flex-col items-start gap-md rounded-2xl bg-surface-white p-lg"
              >
                <div className="flex items-center gap-md">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-secondary-light">
                    <img src={audience.icon} alt="" className="size-6" />
                  </span>
                  <h3 className="font-serif text-h5 text-text-primary">{audience.title}</h3>
                </div>
                <p className="font-sans text-body-default text-text-secondary">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative h-[400px] w-full flex-1 overflow-hidden rounded-2xl lg:h-auto">
            <Image src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664987/pampered-paws/images/schooling-who-for.png" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-md rounded-2xl bg-brand-secondary-light p-lg">
          <h3 className="font-serif text-h4 text-text-primary">
            Not sure where you&rsquo;d fit?
          </h3>
          <p className="font-sans text-body-lg text-text-secondary">
            That&rsquo;s what the enrolment conversation is for — tell us your
            background and we&rsquo;ll point you to the right program.
          </p>
        </div>
      </div>
    </section>
  );
}
