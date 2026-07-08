import { COAT_LENGTH_OPTIONS, COAT_TYPE_OPTIONS, DOG_HEIGHT_OPTIONS } from "@/lib/appointmentForm/constants";
import { Field, SegmentedToggle } from "@/components/ui/FormFields";

export function Step3PhysicalDescription({
  dogHeight,
  coatType,
  coatLength,
  onDogHeightChange,
  onCoatTypeChange,
  onCoatLengthChange,
}: {
  dogHeight: string;
  coatType: string;
  coatLength: string;
  onDogHeightChange: (value: string) => void;
  onCoatTypeChange: (value: string) => void;
  onCoatLengthChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-lg">
      <Field label="Height from paws to shoulders">
        <SegmentedToggle options={DOG_HEIGHT_OPTIONS} value={dogHeight} onChange={onDogHeightChange} />
      </Field>
      <Field label="Coat type">
        <SegmentedToggle options={COAT_TYPE_OPTIONS} value={coatType} onChange={onCoatTypeChange} />
      </Field>
      <Field label="Coat length">
        <SegmentedToggle options={COAT_LENGTH_OPTIONS} value={coatLength} onChange={onCoatLengthChange} />
      </Field>
    </div>
  );
}
