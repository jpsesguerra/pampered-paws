import { ContactForm } from "@/components/sections/ContactForm";
import { getLocationBySlug } from "@/sanity/lib/locations";

export default async function RequestAppointmentPage({
  searchParams,
}: {
  searchParams: { location?: string };
}) {
  const location = searchParams.location ? await getLocationBySlug(searchParams.location) : undefined;

  return (
    <ContactForm
      breadcrumb="Booking"
      title="Request an Appointment"
      subtitle="Tell us about your pet and we'll confirm your spot, usually within 24 hours."
      submitLabel="Request Appointment"
      locationKey={location?.locationKey}
      locationName={location?.locationName}
    />
  );
}
