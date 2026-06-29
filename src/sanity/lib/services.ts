import { client } from "./client";
import { allServicesQuery } from "./queries";

export type ServiceItem = {
  name: string;
  price: string;
  description: string;
  category: string;
};

// Fixed display order, matching the site's static copy and the client's
// own audit of the three add-on categories.
const CATEGORY_ORDER = ["Coat & skin care", "Nails, ears & extras", "Baths & treatments"];

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export async function getServiceGroups(): Promise<ServiceGroup[]> {
  const services: ServiceItem[] = await client.fetch(allServicesQuery);
  return CATEGORY_ORDER.map((title) => ({
    title,
    items: services.filter((service) => service.category === title),
  })).filter((group) => group.items.length > 0);
}
