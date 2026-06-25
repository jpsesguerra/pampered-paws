import { Breadcrumb } from "@/components/ui/Breadcrumb";

type ContactFormProps = {
  breadcrumb: string;
  title: string;
  subtitle: string;
  submitLabel?: string;
};

export function ContactForm({
  breadcrumb,
  title,
  subtitle,
  submitLabel = "Submit",
}: ContactFormProps) {
  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex max-w-[898px] flex-col items-center gap-md text-center">
        <Breadcrumb>{breadcrumb}</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">{title}</h1>
        <p className="font-sans text-label-lg text-text-primary">{subtitle}</p>
      </div>
      <form className="flex w-full max-w-[776px] flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg">
        <label className="flex w-full flex-col items-start gap-xs">
          <span className="font-sans text-label-default text-text-primary">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full rounded-full border border-[#efeff2] px-xl py-lg font-sans text-body-default text-text-primary"
          />
        </label>
        <label className="flex w-full flex-col items-start gap-xs">
          <span className="font-sans text-label-default text-text-primary">Phone</span>
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            className="w-full rounded-full border border-[#efeff2] px-xl py-lg font-sans text-body-default text-text-primary"
          />
        </label>
        <label className="flex w-full flex-col items-start gap-xs">
          <span className="font-sans text-label-default text-text-primary">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full rounded-full border border-[#efeff2] px-xl py-lg font-sans text-body-default text-text-primary"
          />
        </label>
        <label className="flex w-full flex-col items-start gap-xs">
          <span className="font-sans text-label-default text-text-primary">Message</span>
          <textarea
            name="message"
            placeholder="Tell us about your pet, or what you're looking for"
            rows={6}
            className="w-full rounded-2xl border border-[#efeff2] px-xl py-lg font-sans text-body-default text-text-primary"
          />
        </label>
        <button
          type="submit"
          className="flex min-h-[40px] items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink"
        >
          {submitLabel}
        </button>
      </form>
    </section>
  );
}
