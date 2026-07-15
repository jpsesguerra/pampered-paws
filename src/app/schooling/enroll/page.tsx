import { ContactForm } from "@/components/sections/ContactForm";
import { getLocations } from "@/sanity/lib/locations";

// Testing key (Joel's Web3Forms account) — swap for Eggie's production key before client handoff.
const WEB3FORMS_SCHOOL_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_SCHOOL_KEY ?? "";

export default async function GroomingSchoolFormPage() {
  const locations = await getLocations();
  return (
    <ContactForm
      breadcrumb="Grooming School"
      title="Apply to Enrol"
      subtitle="Tell us about your experience and goals, and we'll help you find the right program."
      submitLabel="Send Enquiry"
      accessKey={WEB3FORMS_SCHOOL_KEY}
      subject="Pampered Paws grooming school enquiry"
      notifyEmail="school@pamperedpaws.com"
      locationOptions={locations.map((l) => l.locationName)}
      messagePlaceholder="Tell us about your experience and which program you're interested in"
    />
  );
}
