"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Location } from "@/lib/data/locations";
import { buildMailtoHref } from "@/lib/appointmentForm/mailto";
import { isValidEmail } from "@/lib/appointmentForm/validation";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { Field, TextareaInput, TextInput } from "@/components/ui/FormFields";
import { Step1Location } from "./steps/Step1Location";
import { SuccessPanel } from "@/components/ui/SuccessPanel";

// Testing key (Joel's Web3Forms account) — swap for Eggie's production key before client handoff.
const WEB3FORMS_GROOMING_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_GROOMING_KEY ?? "";

export function DirectContactForm({ locations }: { locations: Location[] }) {
  const [locationSlug, setLocationSlug] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ ownerName: string; locationName: string; mailtoHref: string } | null>(
    null
  );

  const selectedLocation = useMemo(() => locations.find((l) => l.slug === locationSlug), [locations, locationSlug]);
  const isPhoneOnlyLocation = selectedLocation?.bookingMethod === "phone";
  const isValid = Boolean(locationSlug && !isPhoneOnlyLocation && ownerName && email && isValidEmail(email) && phone);

  async function handleSubmit() {
    if (!selectedLocation || !isValid) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      location: selectedLocation.locationName,
      owner_name: ownerName,
      email,
      phone,
      notes,
    };

    try {
      await submitToWeb3Forms(WEB3FORMS_GROOMING_KEY, "Pampered Paws direct contact inquiry", payload);
      const mailtoHref = buildMailtoHref(
        selectedLocation.email,
        `Pampered Paws direct contact inquiry — ${ownerName}`,
        Object.entries(payload).map(([key, value]) => `${key}: ${value}`)
      );
      setSuccessData({ ownerName, locationName: selectedLocation.locationName, mailtoHref });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (successData) {
    return (
      <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
        <SuccessPanel
          title="Contact details sent"
          message={`${successData.ownerName}'s contact details were sent to ${successData.locationName}. We'll follow up shortly.`}
          mailtoHref={successData.mailtoHref}
        />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex max-w-[898px] flex-col items-center gap-md text-center">
        <Breadcrumb>Request</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">Send us your contact details</h1>
        <p className="font-sans text-label-lg text-text-primary">
          Skip the questionnaire — we&rsquo;ll follow up to confirm your appointment.
        </p>
      </div>

      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg">
        <Step1Location locations={locations} value={locationSlug} onChange={setLocationSlug} />

        <Field label="Owner name" required>
          <TextInput
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Your full name"
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
        <Field label="Phone" required>
          <TextInput type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone number" required />
        </Field>
        <Field label="Notes">
          <TextareaInput
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Optional. Add any quick details you want the salon to know."
          />
        </Field>

        {errorMessage && <p className="font-sans text-body-sm text-brand-primary-pink">{errorMessage}</p>}

        <div className="flex w-full flex-col-reverse gap-md pt-md sm:flex-row sm:items-center sm:justify-between">
          <Link href="/request-an-appointment" className="font-sans text-label-default text-text-secondary underline">
            Back
          </Link>
          <button
            type="button"
            disabled={!isValid || isSubmitting}
            onClick={handleSubmit}
            className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink disabled:opacity-40 sm:w-auto"
          >
            {isSubmitting ? "Submitting…" : "Submit contact details"}
          </button>
        </div>
      </div>
    </section>
  );
}
