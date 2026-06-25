export type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
};

const PLACEHOLDER_EXCERPT = "Full content coming soon.";

export const RESOURCES: Resource[] = [
  { slug: "bath-tub-safety-and-security", title: "Bath tub Safety and Security", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  {
    slug: "books-for-programs",
    title: "Books for Programs",
    category: "Schooling",
    excerpt:
      "All books for the program you've chosen must be ordered and purchased through the National Agency of Pet Grooming Schools Inc. and available on the first day of class.",
  },
  {
    slug: "canadian-kennel-club",
    title: "Canadian Kennel Club",
    category: "General",
    excerpt:
      "A link to the Canadian Kennel Club — choosing a dog, raising a dog, and breeder information from Canada's authority on purebred dogs.",
  },
  {
    slug: "code-of-ethics",
    title: "Code of Ethics",
    category: "Schooling",
    excerpt:
      "The National Groomer Association of Canada's written code of ethics — respect, participation, responsiveness and courage in the pet grooming profession.",
  },
  {
    slug: "code-of-practice",
    title: "Code of Practice",
    category: "Schooling",
    excerpt:
      "Practical guidance for managing workplace hazards common in the pet grooming industry, supporting compliance with Occupational Health and Safety legislation.",
  },
  { slug: "covid-19", title: "Covid-19", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "covid-19-how-to-care-for-pets-and-other-animals-if-you-have-covid-19", title: "COVID-19: How to Care for Pets and Other Animals if you have COVID-19", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "directory-of-rescue-clubs", title: "Directory of Rescue Clubs", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "dog-age-calculator", title: "Dog Age Calculator", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "equipment", title: "Equipment", category: "Schooling", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "grooming-price-and-packages-explain", title: "Understand size, price, Regular Groom, Bath & other services", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "how-to-care-for-pets-during-covid-19", title: "How to Care for Pets During COVID-19", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "pet-vaccinations", title: "Vaccinations", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "rabies-resources", title: "Rabies Resources", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "resources-for-pet-owners", title: "Resources for Pet Owners", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "table-safety-and-security", title: "Table Safety and Security", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "to-shave-or-not-shave-the-double-coat", title: "To shave, or not to shave that thick double coat", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "toronto-travel-guide", title: "Toronto Travel Guide", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "useful-links", title: "Useful Links", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "pampered-paws-limited-policies-payment-schedule-and-refund-policy", title: "Pampered Paws Limited Policies, Payment Schedule and Refund Policy", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "professional-development-program-curriculum-2", title: "Professional Development Program Curriculum", category: "Schooling", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "cancellation-and-late-fees", title: "Cancellation And Late Fees", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
];
