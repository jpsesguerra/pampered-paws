import { cn } from "@/lib/cn";
import type { Gender } from "@/lib/appointmentForm/types";
import { FieldLabel } from "@/components/ui/FormFields";

export function GenderField({
  gender,
  neuteredOrSpayed,
  onGenderChange,
  onNeuteredOrSpayedChange,
}: {
  gender: Gender;
  neuteredOrSpayed: boolean;
  onGenderChange: (gender: Gender) => void;
  onNeuteredOrSpayedChange: (checked: boolean) => void;
}) {
  const checkboxLabel = gender === "Male" ? "Neutered" : "Spayed";

  return (
    <div className="flex w-full flex-col items-start gap-xs">
      <FieldLabel>Gender</FieldLabel>
      <div className="flex gap-sm">
        {(["Male", "Female"] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={gender === option}
            onClick={() => onGenderChange(option)}
            className={cn(
              "rounded-full border px-xl py-md font-sans text-label-default transition-colors",
              gender === option
                ? "border-brand-primary-pink bg-brand-primary-pink text-text-on-pink"
                : "border-[#efeff2] bg-surface-white text-text-primary"
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {gender && (
        <label className="flex items-center gap-xs pt-xs font-sans text-body-default text-text-primary animate-in fade-in duration-200">
          <input
            type="checkbox"
            checked={neuteredOrSpayed}
            onChange={(e) => onNeuteredOrSpayedChange(e.target.checked)}
            className="size-4 rounded border border-[#efeff2] accent-brand-primary-pink"
          />
          {checkboxLabel}
        </label>
      )}
    </div>
  );
}
