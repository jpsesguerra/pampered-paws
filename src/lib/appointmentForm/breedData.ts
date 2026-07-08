export type BreedType = "Pure bred dog" | "Mix breed dog" | "Cat";

export type BreedEstimate = {
  breed: string;
  label: string;
  breedType: BreedType;
  price: number;
  times: { "4": number; "8": number; "12": number; "20": number };
};

export type ApptAvailabilityRule = {
  recId: number;
  minMinutes: number;
  maxMinutes: number;
  waitDays: string;
};

export type AgeGroup = { age: string };

export type BreedDataFile = {
  estimates: BreedEstimate[];
  breedsByType: Record<BreedType, string[]>;
  apptAvailability: ApptAvailabilityRule[];
  ageGroups: AgeGroup[];
};

export async function fetchBreedData(): Promise<BreedDataFile> {
  const res = await fetch("/data/breed-data.json");
  if (!res.ok) throw new Error("Failed to load breed data");
  return res.json();
}

export function findBreedByLabel(data: BreedDataFile, label: string): BreedEstimate | undefined {
  return data.estimates.find((e) => e.label === label);
}
