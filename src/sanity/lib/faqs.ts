import { client } from "./client";
import { faqsByCategoryQuery } from "./queries";
import type { FAQItem } from "@/components/ui/FAQAccordion";

export async function getFaqsByCategory(category: string): Promise<FAQItem[]> {
  return client.fetch(faqsByCategoryQuery, { category });
}
