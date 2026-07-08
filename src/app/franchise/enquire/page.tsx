import { ContactForm } from "@/components/sections/ContactForm";

// Testing key (Joel's Web3Forms account) — swap for Eggie's production key before client handoff.
const WEB3FORMS_FRANCHISE_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_FRANCHISE_KEY ?? "";

export default function FranchiseFormPage() {
  return (
    <ContactForm
      breadcrumb="Franchising"
      title="Franchise Enquiry"
      subtitle="Tell us a bit about yourself and we'll be in touch about franchise opportunities."
      submitLabel="Send Enquiry"
      accessKey={WEB3FORMS_FRANCHISE_KEY}
      subject="Pampered Paws franchise enquiry"
      notifyEmail="franchise@pamperedpaws.com"
    />
  );
}
