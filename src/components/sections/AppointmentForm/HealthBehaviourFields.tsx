import { BEHAVIOUR_CONCERNS, HEALTH_CONDITIONS } from "@/lib/appointmentForm/constants";
import { Field, MultiToggleGroup, TextareaInput } from "@/components/ui/FormFields";

export function HealthBehaviourFields({
  healthConditions,
  healthNotes,
  behaviorConcerns,
  behaviorNotes,
  onHealthConditionsChange,
  onHealthNotesChange,
  onBehaviorConcernsChange,
  onBehaviorNotesChange,
}: {
  healthConditions: string[];
  healthNotes: string;
  behaviorConcerns: string[];
  behaviorNotes: string;
  onHealthConditionsChange: (value: string[]) => void;
  onHealthNotesChange: (value: string) => void;
  onBehaviorConcernsChange: (value: string[]) => void;
  onBehaviorNotesChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2xl">
      <div className="flex w-full flex-col items-start gap-lg">
        <h3 className="font-serif text-h5 text-text-primary">Health conditions</h3>
        <MultiToggleGroup
          options={HEALTH_CONDITIONS}
          value={healthConditions}
          onChange={onHealthConditionsChange}
          exclusiveOption="None"
        />
        <Field label="Other health notes">
          <TextareaInput
            value={healthNotes}
            onChange={(e) => onHealthNotesChange(e.target.value)}
            rows={4}
            placeholder="Optional. Describe any medical needs, sensitivities, or anything that helps us prepare."
          />
        </Field>
      </div>

      <div className="flex w-full flex-col items-start gap-lg">
        <h3 className="font-serif text-h5 text-text-primary">Behaviour concerns</h3>
        <MultiToggleGroup
          options={BEHAVIOUR_CONCERNS}
          value={behaviorConcerns}
          onChange={onBehaviorConcernsChange}
          exclusiveOption="No concerns"
        />
        <Field label="Other behaviour notes">
          <TextareaInput
            value={behaviorNotes}
            onChange={(e) => onBehaviorNotesChange(e.target.value)}
            rows={4}
            placeholder="Optional. Any additional context for our stylists."
          />
        </Field>
      </div>
    </div>
  );
}
