import { Eyebrow } from "@/components/ui/Eyebrow";

const TESTIMONIALS = [
  {
    name: "Andy",
    petName: "Buffy",
    comment:
      "Hi Pampered Paws! I had my Buffy groomed by you at Christmas. What a great job, I have been searching for a groomer who would do what I wanted and I finally found one. Thanks for taking such great care of Buffy she looks wonderful!",
  },
  {
    name: "Janice Fricker/Blair",
    petName: "Poonja",
    comment:
      "Poonja is a very happy camper... and this by-product is from all the kindness he received along with your professional talents and intuition. He looks cute and feels great. Many many thanks to all of you!",
  },
  {
    name: "Paula",
    petName: "Smokey",
    comment:
      "Thank you so much. Smokey got tons of compliments yesterday afternoon for looking so handsome and being so soft. I am so thankful Smokey and I have you as a groomer.",
  },
];

export function Testimonials() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <div className="flex flex-col items-center gap-s+ text-center">
          <Eyebrow>What pet parents say</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            Loved by pets and their people
          </h2>
        </div>
        <div className="grid w-full grid-cols-3 gap-2xl">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg"
            >
              <p className="font-sans text-body-default text-text-primary">
                &ldquo;{t.comment}&rdquo;
              </p>
              <p className="font-sans text-label-default text-text-secondary">
                {t.name} &middot; {t.petName}&rsquo;s owner
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
