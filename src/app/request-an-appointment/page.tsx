import { AppointmentInquiryForm } from "@/components/sections/AppointmentForm/AppointmentInquiryForm";
import { getLocations } from "@/sanity/lib/locations";

export default async function RequestAppointmentPage({
  searchParams,
}: {
  searchParams: { location?: string };
}) {
  const locations = await getLocations();

  return <AppointmentInquiryForm locations={locations} initialLocationSlug={searchParams.location} />;
}
