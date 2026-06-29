import { Eyebrow } from "@/components/ui/Eyebrow";
import { BreedPriceLookup } from "@/components/sections/BreedPriceLookup";
import { getBreedPricing } from "@/sanity/lib/pricing";

export const revalidate = 60;

export default async function GroomingPricesPage() {
  const breeds = await getBreedPricing();
  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex max-w-[1024px] flex-col items-center gap-lg text-center">
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="font-serif text-h2 text-text-primary">
          Find your breed&rsquo;s grooming price
        </h1>
        <p className="max-w-[744px] font-sans text-body-default text-text-primary">
          Pricing varies by breed, coat condition and size. Search your pet&rsquo;s
          breed below for an estimate, or request an appointment and we&rsquo;ll
          confirm the exact price for your pet.
        </p>
      </div>
      <BreedPriceLookup breeds={breeds} />
    </section>
  );
}
