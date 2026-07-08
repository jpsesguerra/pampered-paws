export type Gender = "Male" | "Female" | "";

export type AppointmentFormAnswers = {
  location: string;
  petType: "Dog" | "Cat";
  breedLabel: string;
  petName: string;
  petAge: string;
  gender: Gender;
  neuteredOrSpayed: boolean;
  lastGroomed: string;
  dogHeight: string;
  coatType: string;
  coatLength: string;
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
  petName: "",
  petAge: "",
  gender: "",
  neuteredOrSpayed: false,
  lastGroomed: "",
  dogHeight: "",
  coatType: "",
  coatLength: "",
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
