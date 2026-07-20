"use client";

import { useState } from "react";
import { Field, FileInput, TextareaInput, TextInput } from "@/components/ui/FormFields";
import { SuccessPanel } from "@/components/ui/SuccessPanel";
import { buildMailtoHref } from "@/lib/appointmentForm/mailto";
import { isValidEmail } from "@/lib/appointmentForm/validation";
import { submitToWeb3FormsWithFile } from "@/lib/web3forms";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // Web3Forms free-tier attachment cap
const ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx";
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];

type JobApplicationFormProps = {
  jobTitle: string;
  location: string;
  accessKey: string;
  notifyEmail: string;
};

export function JobApplicationForm({ jobTitle, location, accessKey, notifyEmail }: JobApplicationFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isValid = Boolean(name && phone && email && isValidEmail(email) && message && resume);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setResume(null);
      return;
    }
    const hasValidExtension = ACCEPTED_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext));
    if (!hasValidExtension) {
      setErrorMessage("Please upload a PDF or Word document.");
      e.target.value = "";
      setResume(null);
      return;
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMessage("That file is too large — please upload something under 5MB.");
      e.target.value = "";
      setResume(null);
      return;
    }
    setErrorMessage(null);
    setResume(file);
  }

  async function handleSubmit() {
    if (!isValid || !resume) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitToWeb3FormsWithFile(
        accessKey,
        `New Application — ${jobTitle}, ${location}`,
        { role: jobTitle, location, name, phone, email, message },
        resume
      );
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    const mailtoHref = buildMailtoHref(notifyEmail, `Application — ${jobTitle} — ${name}`, [
      `role: ${jobTitle}`,
      `location: ${location}`,
      `name: ${name}`,
      `phone: ${phone}`,
      `email: ${email}`,
      `message: ${message}`,
    ]);

    return (
      <SuccessPanel
        title="Application sent"
        message={`Thanks, ${name}. We'll review your application and follow up if it's a fit.`}
        mailtoHref={mailtoHref}
        secondaryPrompt="Need to send anything else along with it? Use the button below to open your email client."
      />
    );
  }

  return (
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
      <Field label="Message" required>
        <TextareaInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="Tell us why you'd be a great fit"
          required
        />
      </Field>
      <Field label="Resume" required>
        <FileInput accept={ACCEPTED_FILE_TYPES} fileName={resume?.name} onChange={handleFileChange} required />
      </Field>

      {errorMessage && <p className="font-sans text-body-sm text-brand-primary-pink">{errorMessage}</p>}

      <button
        type="button"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit}
        className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink disabled:opacity-40 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Submit Application"}
      </button>
    </div>
  );
}
