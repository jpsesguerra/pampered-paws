export type Gender = "Male" | "Female" | "";

export type AppointmentFormAnswers = {
  location: string;
  petType: "Dog" | "Cat";
  breedLabel: string;
  isCustomBreed: boolean;
  customBreedName: string;
  petName: string;
  petAge: string;
  gender: Gender;
  neuteredOrSpayed: boolean;
  lastGroomed: string;
  dogHeight: string;
  coatType: string;
  coatLength: string;
  otherGroomingNotes: string;
  healthConditions: string[];
  healthNotes: string;
  behaviorConcerns: string[];
  behaviorNotes: string;
  catAge: string;
  catServices: string[];
  catReaction: string;
  catNotes: string;
  ownerName: string;
  email: string;
  phone: string;
};

export const initialAnswers: AppointmentFormAnswers = {
  location: "",
  petType: "Dog",
  breedLabel: "",
  isCustomBreed: false,
  customBreedName: "",
  petName: "",
  petAge: "",
  gender: "",
  neuteredOrSpayed: false,
  lastGroomed: "",
  dogHeight: "",
  coatType: "",
  coatLength: "",
  otherGroomingNotes: "",
  healthConditions: [],
  healthNotes: "",
  behaviorConcerns: [],
  behaviorNotes: "",
  catAge: "",
  catServices: [],
  catReaction: "",
  catNotes: "",
  ownerName: "",
  email: "",
  phone: "",
};

export function effectiveBreedLabel(answers: AppointmentFormAnswers): string {
  return answers.isCustomBreed ? answers.customBreedName : answers.breedLabel;
}
