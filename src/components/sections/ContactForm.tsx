"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Field, TextareaInput, TextInput } from "@/components/ui/FormFields";
import { SuccessPanel } from "@/components/ui/SuccessPanel";
import { buildMailtoHref } from "@/lib/appointmentForm/mailto";
import { isValidEmail } from "@/lib/appointmentForm/validation";
import { submitToWeb3Forms } from "@/lib/web3forms";

type ContactFormProps = {
  breadcrumb: string;
  title: string;
  subtitle: string;
  submitLabel?: string;
  accessKey: string;
  subject: string;
  notifyEmail: string;
};

export function ContactForm({
  breadcrumb,
  title,
  subtitle,
  submitLabel = "Submit",
  accessKey,
  subject,
  notifyEmail,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isValid = Boolean(name && email && isValidEmail(email) && phone);

  async function handleSubmit() {
    if (!isValid) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = { name, phone, email, message };

    try {
      await submitToWeb3Forms(accessKey, subject, payload);
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    const mailtoHref = buildMailtoHref(notifyEmail, `${subject} — ${name}`, [
      `name: ${name}`,
      `phone: ${phone}`,
      `email: ${email}`,
      `message: ${message}`,
    ]);

    return (
      <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
        <SuccessPanel
          title="Enquiry sent"
          message={`Thanks, ${name}. We'll follow up using your preferred contact method.`}
          mailtoHref={mailtoHref}
          secondaryPrompt="Need to share more details? Use the button below to open your email client."
        />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex max-w-[898px] flex-col items-center gap-md text-center">
        <Breadcrumb>{breadcrumb}</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">{title}</h1>
        <p className="font-sans text-label-lg text-text-primary">{subtitle}</p>
      </div>
      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg">
        <Field label="Name" required>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required />
        </Field>
        <Field label="Phone" required>
          <TextInput
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            required
          />
        </Field>
        <Field label="Email" required>
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
        </Field>
        <Field label="Message">
          <TextareaInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder="Tell us about your pet, or what you're looking for"
          />
        </Field>

        {errorMessage && <p className="font-sans text-body-sm text-brand-primary-pink">{errorMessage}</p>}

        <button
          type="button"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink disabled:opacity-40 sm:w-auto"
        >
          {isSubmitting ? "Sending…" : submitLabel}
        </button>
      </div>
    </section>
  );
}
