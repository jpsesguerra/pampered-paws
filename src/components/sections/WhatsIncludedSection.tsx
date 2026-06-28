import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { IconCircle } from "@/components/ui/IconCircle";

const INCLUDED = [
  {
    icon: "paw" as const,
    title: "An established brand",
    description: "45 years of recognition and trust, from day one",
  },
  {
    icon: "star" as const,
    title: "A complete operating system",
    description: "The pricing, workflow, and service standards we've refined since 1979",
  },
  {
    icon: "location" as const,
    title: "Site and setup guidance",
    description: "Help selecting your location and building out your salon",
  },
  {
    icon: "graduation-cap" as const,
    title: "Staff training through our school",
    description: "Access to professionally trained groomers and ongoing education",
  },
  {
    icon: "thumbs-up" as const,
    title: "Launch support",
    description: "Guidance through opening and your first months of operation",
  },
  {
    icon: "credit-card" as const,
    title: "A second revenue vertical",
    description: "The option to offer grooming education alongside your salon",
  },
];

export function WhatsIncludedSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl">
        <div className="flex flex-col items-start gap-s+">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            What comes with a Pampered Paws <Highlight>franchise</Highlight>
          </h2>
        </div>
        <div className="flex w-full flex-col items-start gap-7xl lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-1 flex-col items-start gap-sm">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className="flex w-full items-center gap-lg rounded-2xl bg-surface-white p-lg"
              >
                <IconCircle variant={item.icon} />
                <div className="flex flex-1 flex-col items-start gap-xxs">
                  <h3 className="font-serif text-h5 text-text-primary">{item.title}</h3>
                  <p className="font-sans text-body-default text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <p className="font-sans text-body-lg italic text-text-primary">
              Full details of franchise support and what&rsquo;s included are
              shared during your consultation.
            </p>
          </div>
          <div className="relative h-[400px] w-full flex-1 overflow-hidden rounded-2xl lg:h-auto">
            <Image src="/images/franchise-included.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
