"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Location } from "@/lib/data/locations";
import { fetchBreedData, findBreedByLabel, type BreedDataFile, type BreedType } from "@/lib/appointmentForm/breedData";
import { combineGender, computeSubmissionFields } from "@/lib/appointmentForm/calculations";
import { buildMailtoHref } from "@/lib/appointmentForm/mailto";
import { initialAnswers, type Gender } from "@/lib/appointmentForm/types";
import { isValidEmail } from "@/lib/appointmentForm/validation";
import { submitToWeb3Forms } from "@/lib/web3forms";

// Testing key (Joel's Web3Forms account) — swap for Eggie's production key before client handoff.
const WEB3FORMS_GROOMING_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_GROOMING_KEY ?? "";
import { HealthBehaviourFields } from "./HealthBehaviourFields";
import { LastGroomedField } from "./LastGroomedField";
import { StepIndicator } from "./StepIndicator";
import { SuccessPanel } from "@/components/ui/SuccessPanel";
import { Step1Location } from "./steps/Step1Location";
import { Step2PetProfile } from "./steps/Step2PetProfile";
import { Step3GroomingHistory } from "./steps/Step3GroomingHistory";
import { Step3PhysicalDescription } from "./steps/Step3PhysicalDescription";
import { StepCatServicesHistory } from "./steps/StepCatServicesHistory";
import { StepEstimateReview } from "./steps/StepEstimateReview";

type StepKey =
  | "location"
  | "profile"
  | "physicalDescription"
  | "groomingHistory"
  | "groomingHealthBehaviour"
  | "healthBehaviour"
  | "catServicesHistory"
  | "review";

const PURE_BREED_STEPS: StepKey[] = ["location", "profile", "groomingHistory", "healthBehaviour", "review"];
const MIX_BREED_STEPS: StepKey[] = ["location", "profile", "physicalDescription", "groomingHealthBehaviour", "review"];
const CAT_STEPS: StepKey[] = ["location", "profile", "catServicesHistory", "review"];

function stepsForRoute(route: BreedType | null): StepKey[] {
  if (route === "Mix breed dog") return MIX_BREED_STEPS;
  if (route === "Cat") return CAT_STEPS;
  return PURE_BREED_STEPS;
}

export function AppointmentInquiryForm({
  locations,
  initialLocationSlug,
}: {
  locations: Location[];
  initialLocationSlug?: string;
}) {
  const [breedData, setBreedData] = useState<BreedDataFile | null>(null);
  const [answers, setAnswers] = useState(() => ({ ...initialAnswers, location: initialLocationSlug ?? "" }));
  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ petName: string; locationName: string; mailtoHref: string } | null>(
    null
  );

  useEffect(() => {
    fetchBreedData().then(setBreedData);
  }, []);

  const selectedLocation = useMemo(() => locations.find((l) => l.slug === answers.location), [locations, answers.location]);
  const selectedBreed = useMemo(
    () => (breedData ? findBreedByLabel(breedData, answers.breedLabel) : undefined),
    [breedData, answers.breedLabel]
  );
  const route: BreedType | null = selectedBreed?.breedType ?? null;
  const steps = stepsForRoute(route);
  const currentStepKey = steps[stepIndex];
  const isPhoneOnlyLocation = selectedLocation?.bookingMethod === "phone";
  const isContactValid = Boolean(answers.ownerName && answers.email && isValidEmail(answers.email) && answers.phone);

  function update<K extends keyof typeof answers>(key: K, value: (typeof answers)[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function isCurrentStepValid(): boolean {
    switch (currentStepKey) {
      case "location":
        return Boolean(answers.location) && !isPhoneOnlyLocation;
      case "profile":
        return Boolean(
          answers.breedLabel &&
            answers.petName &&
            answers.gender &&
            (answers.petType === "Cat" || answers.petAge)
        );
      case "physicalDescription":
        return Boolean(answers.dogHeight && answers.coatType && answers.coatLength);
      case "groomingHistory":
      case "groomingHealthBehaviour":
        return Boolean(answers.lastGroomed);
      case "catServicesHistory":
        return Boolean(answers.catAge && answers.catServices.length > 0 && answers.catReaction);
      case "review":
        return isContactValid;
      default:
        return true;
    }
  }

  async function handleSubmit() {
    if (!breedData || !route || !selectedLocation || !isContactValid) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    const combinedGender = combineGender(answers.gender, answers.neuteredOrSpayed);
    const computed = computeSubmissionFields(route, answers, breedData);

    const payload: Record<string, string | string[]> = {
      location: selectedLocation.locationName,
      pet_type: answers.petType,
      breed: answers.breedLabel,
      inquiry_route: computed.inquiry_route,
      pet_name: answers.petName,
      pet_gender: combinedGender,
      owner_name: answers.ownerName,
      email: answers.email,
      phone: answers.phone,
      estimated_wait_time: computed.estimated_wait_time,
      estimated_grooming_time: computed.estimated_grooming_time,
      regular_groom_price: computed.regular_groom_price,
      calculated_groom_price: computed.calculated_groom_price,
    };

    if (route !== "Cat") {
      payload.pet_age = answers.petAge;
      payload.last_groomed = answers.lastGroomed;
      payload.health_conditions = answers.healthConditions;
      payload.health_notes = answers.healthNotes;
      payload.behavior_concerns = answers.behaviorConcerns;
      payload.behavior_notes = answers.behaviorNotes;
    }
    if (route === "Mix breed dog") {
      payload.dog_height = answers.dogHeight;
      payload.coat_type = answers.coatType;
      payload.coat_length = answers.coatLength;
    }
    if (route === "Cat") {
      payload.cat_age = answers.catAge;
      payload.cat_services = answers.catServices;
      payload.cat_grooming_reaction = answers.catReaction;
      payload.cat_notes = answers.catNotes;
    }

    try {
      await submitToWeb3Forms(WEB3FORMS_GROOMING_KEY, "Pampered Paws grooming inquiry", payload);
      const mailtoHref = buildMailtoHref(
        selectedLocation.email,
        `Pampered Paws grooming inquiry — ${answers.petName}`,
        Object.entries(payload).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
      );
      setSuccessData({ petName: answers.petName, locationName: selectedLocation.locationName, mailtoHref });
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
          title="Inquiry submitted"
          message={`${successData.petName} is in the queue for ${successData.locationName}. We'll follow up using your preferred contact method.`}
          mailtoHref={successData.mailtoHref}
        />
      </section>
    );
  }

  if (!breedData) {
    return (
      <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
        <p className="font-sans text-body-default text-text-secondary">Loading…</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex max-w-[898px] flex-col items-center gap-md text-center">
        <Breadcrumb>Booking</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">Request an Appointment</h1>
        <p className="font-sans text-label-lg text-text-primary">
          Tell us about your pet and we&rsquo;ll confirm your spot, usually within 24 hours.
        </p>
      </div>

      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg">
        <div className="flex w-full items-center justify-end">
          <StepIndicator step={stepIndex + 1} total={steps.length} />
        </div>

        {currentStepKey === "location" && (
          <Step1Location locations={locations} value={answers.location} onChange={(slug) => update("location", slug)} />
        )}

        {currentStepKey === "profile" && (
          <Step2PetProfile
            breedData={breedData}
            petType={answers.petType}
            breedLabel={answers.breedLabel}
            petName={answers.petName}
            petAge={answers.petAge}
            gender={answers.gender}
            neuteredOrSpayed={answers.neuteredOrSpayed}
            onPetTypeChange={(petType) =>
              setAnswers((prev) => ({ ...prev, petType, breedLabel: "", petAge: "" }))
            }
            onBreedChange={(label) => update("breedLabel", label)}
            onPetNameChange={(name) => update("petName", name)}
            onPetAgeChange={(age) => update("petAge", age)}
            onGenderChange={(gender: Gender) => setAnswers((prev) => ({ ...prev, gender, neuteredOrSpayed: false }))}
            onNeuteredOrSpayedChange={(checked) => update("neuteredOrSpayed", checked)}
          />
        )}

        {currentStepKey === "physicalDescription" && (
          <Step3PhysicalDescription
            dogHeight={answers.dogHeight}
            coatType={answers.coatType}
            coatLength={answers.coatLength}
            onDogHeightChange={(v) => update("dogHeight", v)}
            onCoatTypeChange={(v) => update("coatType", v)}
            onCoatLengthChange={(v) => update("coatLength", v)}
          />
        )}

        {currentStepKey === "groomingHistory" && (
          <Step3GroomingHistory petName={answers.petName} lastGroomed={answers.lastGroomed} onLastGroomedChange={(v) => update("lastGroomed", v)} />
        )}

        {currentStepKey === "groomingHealthBehaviour" && (
          <div className="flex w-full flex-col items-start gap-2xl">
            <LastGroomedField petName={answers.petName} value={answers.lastGroomed} onChange={(v) => update("lastGroomed", v)} />
            <HealthBehaviourFields
              healthConditions={answers.healthConditions}
              healthNotes={answers.healthNotes}
              behaviorConcerns={answers.behaviorConcerns}
              behaviorNotes={answers.behaviorNotes}
              onHealthConditionsChange={(v) => update("healthConditions", v)}
              onHealthNotesChange={(v) => update("healthNotes", v)}
              onBehaviorConcernsChange={(v) => update("behaviorConcerns", v)}
              onBehaviorNotesChange={(v) => update("behaviorNotes", v)}
            />
          </div>
        )}

        {currentStepKey === "healthBehaviour" && (
          <HealthBehaviourFields
            healthConditions={answers.healthConditions}
            healthNotes={answers.healthNotes}
            behaviorConcerns={answers.behaviorConcerns}
            behaviorNotes={answers.behaviorNotes}
            onHealthConditionsChange={(v) => update("healthConditions", v)}
            onHealthNotesChange={(v) => update("healthNotes", v)}
            onBehaviorConcernsChange={(v) => update("behaviorConcerns", v)}
            onBehaviorNotesChange={(v) => update("behaviorNotes", v)}
          />
        )}

        {currentStepKey === "catServicesHistory" && (
          <StepCatServicesHistory
            catAge={answers.catAge}
            catServices={answers.catServices}
            catReaction={answers.catReaction}
            catNotes={answers.catNotes}
            onCatAgeChange={(v) => update("catAge", v)}
            onCatServicesChange={(v) => update("catServices", v)}
            onCatReactionChange={(v) => update("catReaction", v)}
            onCatNotesChange={(v) => update("catNotes", v)}
          />
        )}

        {currentStepKey === "review" && route && selectedLocation && (
          <StepEstimateReview
            route={route}
            answers={answers}
            breedData={breedData}
            locationName={selectedLocation.locationName}
            onOwnerNameChange={(v) => update("ownerName", v)}
            onEmailChange={(v) => update("email", v)}
            onPhoneChange={(v) => update("phone", v)}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            canSubmit={isContactValid}
            errorMessage={errorMessage}
          />
        )}

        {currentStepKey !== "review" && (
          <div className="flex w-full flex-col-reverse gap-md pt-md sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-lg">
              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                  className="font-sans text-label-default text-text-secondary underline"
                >
                  Back
                </button>
              )}
              {stepIndex <= 1 && (
                <Link href="/request-an-appointment/contact" className="font-sans text-label-default text-text-secondary underline">
                  Skip questionnaire
                </Link>
              )}
            </div>
            {!isPhoneOnlyLocation && (
              <button
                type="button"
                disabled={!isCurrentStepValid()}
                onClick={() => setStepIndex((i) => Math.min(steps.length - 1, i + 1))}
                className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink disabled:opacity-40 sm:w-auto"
              >
                Continue
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
