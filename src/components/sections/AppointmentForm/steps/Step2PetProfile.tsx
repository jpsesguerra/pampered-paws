import { useMemo } from "react";
import type { BreedDataFile } from "@/lib/appointmentForm/breedData";
import type { Gender } from "@/lib/appointmentForm/types";
import { BreedSearchField } from "../BreedSearchField";
import { GenderField } from "../GenderField";
import { Field, SegmentedToggle, SelectInput, TextInput } from "@/components/ui/FormFields";

export function Step2PetProfile({
  breedData,
  petType,
  breedLabel,
  petName,
  petAge,
  gender,
  neuteredOrSpayed,
  onPetTypeChange,
  onBreedChange,
  onPetNameChange,
  onPetAgeChange,
  onGenderChange,
  onNeuteredOrSpayedChange,
}: {
  breedData: BreedDataFile;
  petType: "Dog" | "Cat";
  breedLabel: string;
  petName: string;
  petAge: string;
  gender: Gender;
  neuteredOrSpayed: boolean;
  onPetTypeChange: (petType: "Dog" | "Cat") => void;
  onBreedChange: (label: string) => void;
  onPetNameChange: (name: string) => void;
  onPetAgeChange: (age: string) => void;
  onGenderChange: (gender: Gender) => void;
  onNeuteredOrSpayedChange: (checked: boolean) => void;
}) {
  const breedOptions = useMemo(() => {
    if (petType === "Cat") return breedData.breedsByType["Cat"] ?? [];
    return [...(breedData.breedsByType["Pure bred dog"] ?? []), ...(breedData.breedsByType["Mix breed dog"] ?? [])];
  }, [breedData, petType]);

  return (
    <div className="flex w-full flex-col items-start gap-lg">
      <Field label="Pet type">
        <SegmentedToggle
          options={["Dog", "Cat"]}
          value={petType}
          onChange={(v) => onPetTypeChange(v as "Dog" | "Cat")}
        />
      </Field>

      <div className="flex w-full flex-col items-start gap-xs">
        <BreedSearchField
          label={petType === "Dog" ? "Dog breed" : "Cat breed"}
          options={breedOptions}
          value={breedLabel}
          onChange={onBreedChange}
          helperText={`Showing ${breedOptions.length} ${petType.toLowerCase()} breed options${
            petType === "Dog" ? ", including mixed breed names" : ""
          }`}
        />
      </div>

      <Field label="Pet name">
        <TextInput value={petName} onChange={(e) => onPetNameChange(e.target.value)} placeholder="Your pet's name" />
      </Field>

      {petType === "Dog" && (
        <Field label="Pet age range">
          <SelectInput
            options={breedData.ageGroups.map((g) => g.age)}
            value={petAge}
            placeholder="Select an age range"
            onChange={(e) => onPetAgeChange(e.target.value)}
          />
        </Field>
      )}

      <GenderField
        gender={gender}
        neuteredOrSpayed={neuteredOrSpayed}
        onGenderChange={onGenderChange}
        onNeuteredOrSpayedChange={onNeuteredOrSpayedChange}
      />
    </div>
  );
}
