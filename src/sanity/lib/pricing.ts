import { client } from "./client";
import { allBreedPricingQuery } from "./queries";
import type { BreedPricing } from "@/lib/data/pricing";

export async function getBreedPricing(): Promise<BreedPricing[]> {
  return client.fetch(allBreedPricingQuery);
}
