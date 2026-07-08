import { DirectContactForm } from "@/components/sections/AppointmentForm/DirectContactForm";
import { getLocations } from "@/sanity/lib/locations";

export default async function DirectContactPage() {
  const locations = await getLocations();
  return <DirectContactForm locations={locations} />;
}
