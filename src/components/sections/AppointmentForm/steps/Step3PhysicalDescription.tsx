import { COAT_LENGTH_OPTIONS, COAT_TYPE_OPTIONS, DOG_HEIGHT_OPTIONS } from "@/lib/appointmentForm/constants";
import { Field, SegmentedToggle, TextareaInput } from "@/components/ui/FormFields";

export function Step3PhysicalDescription({
  dogHeight,
  coatType,
  coatLength,
  otherGroomingNotes,
  onDogHeightChange,
  onCoatTypeChange,
  onCoatLengthChange,
  onOtherGroomingNotesChange,
}: {
  dogHeight: string;
  coatType: string;
  coatLength: string;
  otherGroomingNotes: string;
  onDogHeightChange: (value: string) => void;
  onCoatTypeChange: (value: string) => void;
  onCoatLengthChange: (value: string) => void;
  onOtherGroomingNotesChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-lg">
      <Field label="Height from paws to shoulders">
        <SegmentedToggle options={DOG_HEIGHT_OPTIONS} value={dogHeight} onChange={onDogHeightChange} />
      </Field>
      <Field label="Coat type (optional)">
        <SegmentedToggle options={COAT_TYPE_OPTIONS} value={coatType} onChange={onCoatTypeChange} />
      </Field>
      <Field label="Coat length">
        <SegmentedToggle options={COAT_LENGTH_OPTIONS} value={coatLength} onChange={onCoatLengthChange} />
      </Field>
      <Field label="Other grooming notes">
        <TextareaInput
          value={otherGroomingNotes}
          onChange={(e) => onOtherGroomingNotesChange(e.target.value)}
          rows={4}
          placeholder="Optional. Anything else that helps us prepare for this appointment."
        />
      </Field>
    </div>
  );
}
