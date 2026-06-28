// Mirrors the planned Sanity "Program" collection schema.
export type Program = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  cost: string;
  level: string;
  // Rich text body, modeled as paragraphs. Only populated with real copy
  // where Figma provided it (Groomers Professional Development Program) —
  // the rest carry a short placeholder rather than invented curriculum
  // details. Replace with real copy per program before launch.
  description: string[];
  ctaLabel: string;
};

const PLACEHOLDER_DESCRIPTION = [
  "Full program details are being finalized — contact our school team to learn more about curriculum, schedule, and enrolment for this program.",
];

export const PROGRAMS: Program[] = [
  {
    slug: "groomers-professional-development-program",
    title: "Groomers Professional Development Program",
    tagline: "Train from bather to professional, four weeks at a time.",
    duration: "4–16 weeks",
    cost: "$3,500–$12,500",
    level: "Beginner → Professional",
    ctaLabel: "Ask about enrollment",
    description: [
      "Pampered Paws Professional Development programs are sold in four week packages and will take you through the various levels in our field which are:",
      "1. Bather - education or experience must be obtained outside of Pampered Paws\n2. Assistant Groomer\n3. Junior Groomer\n4. Intermediate Groomer\n5. Professional Groomer\n6. Advanced Scissor",
      "Each segment is *$3,500.00 /4 Weeks plus your books and equipment costs.",
      "Books requirement\nEquipment\nApplication form\nCurriculum",
      "Pampered Paws™ will ensure that each individual is trained using carefully honed teaching instructions, so that you too, can create stylish animals for your clients. Handling, speed and accuracy are also part of the Stylist's tradition, and with increased skills learned, you will find better confidence and greater success in your field.",
      "Your choice of where to learn advanced training is very important to your future. Pampered Paws™ success is base on our highly qualified and individualized instruction.",
      "Pampered Paws is known for 80% of their graduates successfully running their own businesses in Japan, Germany, England, Australia, Sweden, Italy, Greece, Mexico, Hong Kong, China, France, Singapore, Malaysia, Poland, Portugal, Russia, Cayman Islands, Barbados, Canada and the United States.",
      "*Programs are sold on 4 weeks/unit at $3,500, if you purchase multiple units, the 2nd, 3rd, 4th units are $3,000 each.",
    ],
  },
  {
    slug: "advanced-scissor-program",
    title: "Advanced Scissor Program",
    tagline: "Master fine scissoring and head styling for show-quality finishes.",
    duration: "4 weeks",
    cost: "$3,500",
    level: "Advanced",
    ctaLabel: "Ask about enrollment",
    description: PLACEHOLDER_DESCRIPTION,
  },
  {
    slug: "enhanced-stylist-professional-development-program",
    title: "Enhanced Stylist Professional Development Program",
    tagline: "Perfect scissor work, speed and accuracy for working stylists.",
    duration: "4 weeks",
    cost: "$3,500",
    level: "Intermediate → Advanced",
    ctaLabel: "Ask about enrollment",
    description: PLACEHOLDER_DESCRIPTION,
  },
  {
    slug: "business-owners-professional-animal-stylist-development-program",
    title: "Business Owners Professional Animal Stylist Development Program",
    tagline: "Run a profitable salon — from front desk to advanced grooming skills.",
    duration: "16 weeks",
    cost: "$12,000",
    level: "Business owners",
    ctaLabel: "Ask about enrollment",
    description: PLACEHOLDER_DESCRIPTION,
  },
  {
    slug: "organizational-teachers-professional-development-program",
    title: "Organizational Teachers Professional Development Program",
    tagline: "Become a licensed Master Instructor and train the next generation.",
    duration: "20 weeks",
    cost: "$15,000",
    level: "Master Instructor track",
    ctaLabel: "Ask about enrollment",
    description: PLACEHOLDER_DESCRIPTION,
  },
  {
    slug: "private-lesson",
    title: "Private Lesson for Pet Owners",
    tagline: "One-on-one grooming lessons customized to your own pet.",
    duration: "2–16 hours",
    cost: "$125/hour per person",
    level: "Pet owners",
    ctaLabel: "Ask about enrollment",
    description: PLACEHOLDER_DESCRIPTION,
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((program) => program.slug === slug);
}

export function getOtherPrograms(slug: string): Program[] {
  return PROGRAMS.filter((program) => program.slug !== slug);
}
