import { ContactForm } from "@/components/sections/ContactForm";

// Testing key (Joel's Web3Forms account) — swap for Eggie's production key before client handoff.
const WEB3FORMS_SCHOOL_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_SCHOOL_KEY ?? "";

export default function GroomingSchoolFormPage() {
  return (
    <ContactForm
      breadcrumb="Grooming School"
      title="Ask About Enrolling"
      subtitle="Tell us about your experience and goals, and we'll help you find the right program."
      submitLabel="Send Enquiry"
      accessKey={WEB3FORMS_SCHOOL_KEY}
      subject="Pampered Paws grooming school enquiry"
      notifyEmail="school@pamperedpaws.com"
    />
  );
}
