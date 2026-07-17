import Image from "next/image";
import { Button } from "@/components/ui/Button";

const FOUNDER_LETTER_URL = "https://drive.google.com/file/d/1hmrK3-L6feh6WsUCi0vEdktqK-agVkh-/view?usp=sharing";

export function FounderNoteSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1024px] flex-col items-center gap-2xl rounded-2xl bg-brand-secondary-light px-lg py-2xl sm:px-[60px]">
        <h2 className="text-center font-serif text-h2 text-text-primary">A Note From Our Founder</h2>
        <div className="flex w-full flex-col items-center gap-2xl sm:flex-row sm:items-start">
          <div className="relative size-[240px] shrink-0 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/du0witbcr/image/upload/v1784260148/Lesley_photo_for_website_1_wxixjy.png"
              alt="Lesley Weeks, Founder & President of Pampered Paws"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-lg">
            <div className="flex flex-col items-start gap-lg">
              <p className="font-serif text-h5 italic text-text-primary">
                &ldquo;We are not looking for franchisees who simply want to
                buy a business. We&rsquo;re looking for partners who are
                ready to lead, learn our systems, and give every client — and
                every pet — the care that&rsquo;s defined Pampered Paws since
                1979.&rdquo;
              </p>
              <p className="font-sans text-label-lg text-text-primary">
                Lesley Weeks — Founder &amp; President, Pampered Paws Limited
              </p>
            </div>
            <Button href={FOUNDER_LETTER_URL} target="_blank" rel="noopener noreferrer">
              Download the full letter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
