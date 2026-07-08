import { useMemo } from "react";
import type { BreedDataFile } from "@/lib/appointmentForm/breedData";
import { findBreedByLabel } from "@/lib/appointmentForm/breedData";
import {
  calculatedPrice,
  combineGender,
  estimateText,
  formatCurrency,
  groomingMinutesForBreed,
  hasQaTrigger,
  waitDaysForMinutes,
  weeksSinceLastGroomed,
} from "@/lib/appointmentForm/calculations";
import type { AppointmentFormAnswers } from "@/lib/appointmentForm/types";
import { ChipTag, Field, TextInput } from "@/components/ui/FormFields";

export function StepEstimateReview({
  route,
  answers,
  breedData,
  locationName,
  onOwnerNameChange,
  onEmailChange,
  onPhoneChange,
  onSubmit,
  isSubmitting,
  canSubmit,
  errorMessage,
}: {
  route: "Pure bred dog" | "Mix breed dog" | "Cat";
  answers: AppointmentFormAnswers;
  breedData: BreedDataFile;
  locationName: string;
  onOwnerNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  canSubmit: boolean;
  errorMessage: string | null;
}) {
  const isCat = route === "Cat";
  const isMix = route === "Mix breed dog";

  const breed = useMemo(() => findBreedByLabel(breedData, answers.breedLabel), [breedData, answers.breedLabel]);

  const { estimateHeadlineText, groomingMinutes, showPrices } = useMemo(() => {
    if (!breed) {
      return { estimateHeadlineText: "A stylist will confirm the earliest available appointment.", groomingMinutes: 0, showPrices: false };
    }
    const weeks = isCat ? 4 : weeksSinceLastGroomed(answers.lastGroomed);
    const minutes = groomingMinutesForBreed(breed, weeks, isCat);
    const waitDays = waitDaysForMinutes(minutes, breedData.apptAvailability);
    return {
      estimateHeadlineText: estimateText(waitDays, answers.petName || "your pet"),
      groomingMinutes: minutes,
      showPrices: hasQaTrigger(answers.behaviorNotes),
    };
  }, [breed, isCat, answers.lastGroomed, answers.petName, answers.behaviorNotes, breedData.apptAvailability]);

  const combinedGender = combineGender(answers.gender, answers.neuteredOrSpayed);

  return (
    <div className="flex w-full flex-col items-start gap-2xl">
      <div className="flex w-full flex-col items-start gap-sm rounded-2xl bg-brand-background-neutral p-lg">
        <h3 className="font-serif text-h5 text-text-primary">
          Estimate for {answers.petName || "your pet"} the {answers.breedLabel || "pet"}
        </h3>
        <p className="font-sans text-body-default text-text-primary">{estimateHeadlineText}</p>
        {showPrices && breed && (
          <div className="flex flex-wrap gap-lg pt-xs">
            <span className="font-sans text-label-default text-text-secondary">
              Regular price: {formatCurrency(breed.price)}
            </span>
            <span className="font-sans text-label-default text-text-secondary">
              Calculated price: {formatCurrency(calculatedPrice(groomingMinutes))}
            </span>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col items-start gap-lg rounded-2xl bg-surface-white p-lg">
        <div className="flex w-full flex-col items-start gap-xs">
          <h4 className="font-serif text-h6 text-text-primary">Your salon</h4>
          <p className="font-sans text-body-default text-text-primary">{locationName}</p>
        </div>

        <div className="flex w-full flex-col items-start gap-xs">
          <h4 className="font-serif text-h6 text-text-primary">About {answers.petName || "your pet"}</h4>
          <p className="font-sans text-body-default text-text-primary">Breed: {answers.breedLabel}</p>
          {!isCat && <p className="font-sans text-body-default text-text-primary">Pet age range: {answers.petAge}</p>}
          {isCat && <p className="font-sans text-body-default text-text-primary">Cat age: {answers.catAge}</p>}
          <p className="font-sans text-body-default text-text-primary">Gender: {combinedGender}</p>
          {!isCat && (
            <p className="font-sans text-body-default text-text-primary">
              Last grooming received: {answers.lastGroomed}
              {answers.lastGroomed !== "This is the first time" && answers.lastGroomed ? " ago" : ""}
            </p>
          )}
          {isMix && (
            <>
              <p className="font-sans text-body-default text-text-primary">Dog height: {answers.dogHeight}</p>
              <p className="font-sans text-body-default text-text-primary">Coat type: {answers.coatType}</p>
              <p className="font-sans text-body-default text-text-primary">Coat length: {answers.coatLength}</p>
            </>
          )}
          {isCat && (
            <>
              <div className="flex flex-wrap gap-xs pt-xs">
                {answers.catServices.map((s) => (
                  <ChipTag key={s}>{s}</ChipTag>
                ))}
              </div>
              <p className="font-sans text-body-default text-text-primary">Previous grooming reaction: {answers.catReaction}</p>
            </>
          )}
        </div>

        {!isCat && (
          <div className="flex w-full flex-col items-start gap-xs">
            <h4 className="font-serif text-h6 text-text-primary">Health and behaviour</h4>
            {answers.healthConditions.length > 0 && answers.healthConditions[0] !== "None" ? (
              <div className="flex flex-wrap gap-xs">
                {answers.healthConditions.map((c) => (
                  <ChipTag key={c}>{c}</ChipTag>
                ))}
              </div>
            ) : (
              <p className="font-sans text-body-sm text-text-secondary">No conditions noted</p>
            )}
            {answers.healthNotes && <p className="font-sans text-body-default text-text-primary">{answers.healthNotes}</p>}

            {answers.behaviorConcerns.length > 0 && answers.behaviorConcerns[0] !== "No concerns" ? (
              <div className="flex flex-wrap gap-xs pt-xs">
                {answers.behaviorConcerns.map((c) => (
                  <ChipTag key={c}>{c}</ChipTag>
                ))}
              </div>
            ) : (
              <p className="font-sans text-body-sm text-text-secondary">No concerns noted</p>
            )}
            {answers.behaviorNotes && <p className="font-sans text-body-default text-text-primary">{answers.behaviorNotes}</p>}
          </div>
        )}

        <div className="flex w-full flex-col items-start gap-lg border-t border-[#efeff2] pt-lg">
          <p className="font-sans text-body-sm text-text-secondary">
            Required so we can reach you to confirm your appointment.
          </p>
          <Field label="Owner name" required>
            <TextInput
              value={answers.ownerName}
              onChange={(e) => onOwnerNameChange(e.target.value)}
              placeholder="Your full name"
              required
            />
          </Field>
          <Field label="Email" required>
            <TextInput
              type="email"
              value={answers.email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="Your email address"
              required
            />
          </Field>
          <Field label="Phone" required>
            <TextInput
              type="tel"
              value={answers.phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder="Your phone number"
              required
            />
          </Field>
        </div>

        {errorMessage && <p className="font-sans text-body-sm text-brand-primary-pink">{errorMessage}</p>}

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting || !canSubmit}
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-accent-dark px-xl py-md font-sans text-btn-primary text-text-on-pink disabled:opacity-40 sm:w-auto"
        >
          {isSubmitting ? "Submitting…" : "Submit inquiry"}
        </button>
      </div>
    </div>
  );
}

