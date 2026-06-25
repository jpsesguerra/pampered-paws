import { ContactForm } from "@/components/sections/ContactForm";

export default function RequestAppointmentPage() {
  return (
    <ContactForm
      breadcrumb="Booking"
      title="Request an Appointment"
      subtitle="Tell us about your pet and we'll confirm your spot, usually within 24 hours."
      submitLabel="Request Appointment"
    />
  );
}
