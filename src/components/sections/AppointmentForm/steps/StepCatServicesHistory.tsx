import { CAT_AGE_OPTIONS, CAT_REACTION_OPTIONS, CAT_SERVICE_OPTIONS } from "@/lib/appointmentForm/constants";
import { Field, MultiToggleGroup, SegmentedToggle, SelectInput, TextareaInput } from "@/components/ui/FormFields";

export function StepCatServicesHistory({
  catAge,
  catServices,
  catReaction,
  catNotes,
  onCatAgeChange,
  onCatServicesChange,
  onCatReactionChange,
  onCatNotesChange,
}: {
  catAge: string;
  catServices: string[];
  catReaction: string;
  catNotes: string;
  onCatAgeChange: (value: string) => void;
  onCatServicesChange: (value: string[]) => void;
  onCatReactionChange: (value: string) => void;
  onCatNotesChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-lg">
      <Field label="Cat age">
        <SelectInput
          options={CAT_AGE_OPTIONS}
          value={catAge}
          placeholder="Select an age range"
          onChange={(e) => onCatAgeChange(e.target.value)}
        />
      </Field>

      <Field label="Requested services">
        <MultiToggleGroup
          options={CAT_SERVICE_OPTIONS}
          value={catServices}
          onChange={onCatServicesChange}
          exclusiveOption=""
        />
      </Field>

      <Field label="Previous grooming reaction">
        <SegmentedToggle options={CAT_REACTION_OPTIONS} value={catReaction} onChange={onCatReactionChange} />
      </Field>

      <Field label="Service details or handling notes">
        <TextareaInput
          value={catNotes}
          onChange={(e) => onCatNotesChange(e.target.value)}
          rows={4}
          placeholder="Optional. Describe coat condition, matting, medical needs, or anything that helps us prepare."
        />
      </Field>
    </div>
  );
}
