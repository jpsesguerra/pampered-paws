import { LAST_GROOMED_OPTIONS } from "@/lib/appointmentForm/constants";
import { Field, SelectInput } from "@/components/ui/FormFields";

export function LastGroomedField({
  petName,
  value,
  onChange,
}: {
  petName: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const name = petName || "your pet";
  return (
    <Field label={`When was the last time ${name} received a complete professional grooming, including a bath, comb-out, and trimming?`}>
      <SelectInput
        options={LAST_GROOMED_OPTIONS}
        value={value}
        placeholder="Select a timeframe"
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  );
}
