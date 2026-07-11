import type { ApptAvailabilityRule, BreedDataFile, BreedEstimate, BreedType } from "./breedData";
import { findBreedByLabel } from "./breedData";
import { effectiveBreedLabel, type AppointmentFormAnswers } from "./types";

export function weeksSinceLastGroomed(lastGroomed: string): number {
  if (!lastGroomed) return 4;
  if (lastGroomed === "This is the first time" || lastGroomed === "Over 12 months ago") return 20;
  const monthMatch = lastGroomed.match(/(\d+)\s*month/);
  if (monthMatch) return Math.ceil(Number(monthMatch[1]) * 4.345);
  const numMatch = lastGroomed.match(/(\d+)/);
  if (numMatch) return Number(numMatch[1]);
  return 4;
}

export function groomingMinutesForBreed(breed: BreedEstimate, weeks: number, isCat: boolean): number {
  if (isCat) return breed.times["4"];
  if (weeks <= 4) return breed.times["4"];
  if (weeks <= 8) return breed.times["8"];
  if (weeks <= 12) return breed.times["12"];
  return breed.times["20"];
}

export function waitDaysForMinutes(minutes: number, rules: ApptAvailabilityRule[]): string | null {
  const rule = rules.find((r) => minutes >= r.minMinutes && minutes <= r.maxMinutes);
  return rule ? rule.waitDays : null;
}

export function estimateText(waitDays: string | null, petName: string): string {
  if (waitDays === null) {
    return "A stylist will confirm the earliest available appointment.";
  }
  const days = Number(waitDays);
  if (days > 21) {
    return `Based on our initial estimate, the wait time for ${petName} may be longer than three weeks. Because it has been some time since the last professional groom, this estimate may not accurately reflect ${petName}'s current coat condition or the time needed for the appointment. One of our stylists will review your information and contact you with a more accurate timeframe, which may be sooner.`;
  }
  return `The earliest appointment for ${petName} is expected to be available within ${days} days.`;
}

export function combineGender(gender: "Male" | "Female" | "", neuteredOrSpayed: boolean): string {
  if (!gender) return "";
  if (!neuteredOrSpayed) return gender;
  return gender === "Male" ? "Male neutered" : "Female spayed";
}

export const QA_TRIGGER_REGEX = /\b4456\b/;

export function hasQaTrigger(text: string): boolean {
  return QA_TRIGGER_REGEX.test(text);
}

export function formatCurrency(n: number): string {
  return `$${n.toFixed(2)}`;
}

export function formatMinutesAsHM(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

export function calculatedPrice(minutes: number): number {
  return (minutes / 60) * 100;
}

export function computeSubmissionFields(route: BreedType, answers: AppointmentFormAnswers, breedData: BreedDataFile) {
  const isCat = route === "Cat";
  const breed = findBreedByLabel(breedData, effectiveBreedLabel(answers));
  const weeks = isCat ? 4 : weeksSinceLastGroomed(answers.lastGroomed);
  const minutes = breed ? groomingMinutesForBreed(breed, weeks, isCat) : 0;
  const waitDays = breed ? waitDaysForMinutes(minutes, breedData.apptAvailability) : null;

  return {
    estimated_wait_time: estimateText(waitDays, answers.petName || "your pet"),
    estimated_grooming_time: formatMinutesAsHM(minutes),
    // Always included for staff, regardless of the "4456" on-screen QA reveal trigger below.
    regular_groom_price: breed ? formatCurrency(breed.price) : "",
    calculated_groom_price: breed ? formatCurrency(calculatedPrice(minutes)) : "",
    inquiry_route: route,
  };
}
