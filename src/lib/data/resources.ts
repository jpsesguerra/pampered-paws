export type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  // Rich text body, modeled as paragraphs. Only populated with real copy
  // where Figma provided it — the rest fall back to the excerpt (or, if
  // that's also a placeholder, a short "coming soon" note) rather than
  // invented content.
  content?: string[];
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
  {
    slug: "equipment",
    title: "Equipment",
    category: "Schooling",
    excerpt:
      "The full grooming kit you need on the first day of class, plus PPE requirements.",
    content: [
      "EQUIPMENT REQUIRED ON THE FIRST DAY OF CLASS",
      "Equipment requirements – equipment kits are a separate cost in addition to the tuition fee. You must have a complete grooming kit on the first day of class, no matter what program you decide to take. This kit can be ordered with pre-payment to the Grooming Institute of Canada, or you may purchase the equipment on your own. If you purchase your own equipment, it must pass the Pampered Paws Limited inspection before being used on any animal.",
      "Equipment Required:",
      "2 Universal brushes\n1 Tender care brush\n1 Professional Nail Cutters\n1 small nail trimmer for cats\n1 Dremel Stylus Portable Grinder\n1 bottle of Quik Stop for nails\n1 bottle of Ear Powder\n1 Wahl Clipper Professional\n1 Extra Fine Blade for Arco SE Portable\n1 Arco SE Portable\n1 of each of the following 3, 3f, 4,4f, 5, 5f, 7,7f, 10, 30, 40\n1 Set of Wahl Stainless Steel Clip on Combs for 5 in 1 blades\n1 Laube A Clip on Comb\n1 Laube E Clip on Comb\n1 English Comb - Fine- Medium Combination Teflon Coated\n1 English Handled Comb - Large\n1 Resco Long Tooth Comb\n1 Mars Hand-Stripping Knife\n1 Mars King Rake - 16 Teeth (Complete set would be great but expensive)\n1 Smock",
      "1 Curve Sheer 7.5 inch\n1 Straight Sheer 7.5 inch\n1 Pair of Arm Guard made with 2 mm thick leather, arm Guard must cover forearms completely\n1 Travel Case for Equipment\n1 Demating Tool\n3 Boxes of disposable gloves that must be worn when grooming\n1 bottle of Alcohol\n1 bottle of Hydrogen Peroxide\n1 package of Cotton Balls\n1 package of Q-Tips",
      "PPE Requirement:\nUniform / Gloves / Face shield / Mask / safety glasses / ear protector - Applicant to supply protective covering for clothes, eyes, ears, nose and hands when working with animals.",
      "Please note that Pampered Paws™ does not sell this equipment, you can purchase on your own or order on your behalf from the Grooming Institute of Canada, who deals with reputable suppliers in our industry. Pampered Paws™ will further discuss equipment options once applicants are accepted to the program.",
    ],
  },
  { slug: "grooming-price-and-packages-explain", title: "Understand size, price, Regular Groom, Bath & other services", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "how-to-care-for-pets-during-covid-19", title: "How to Care for Pets During COVID-19", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "pet-vaccinations", title: "Vaccinations", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "rabies-resources", title: "Rabies Resources", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "resources-for-pet-owners", title: "Resources for Pet Owners", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "table-safety-and-security", title: "Table Safety and Security", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  {
    slug: "to-shave-or-not-shave-the-double-coat",
    title: "To shave, or not to shave that thick double coat",
    category: "Grooming",
    excerpt:
      "Shaving a double coat can do more harm than good. Here's what owners should know before booking a shave-down.",
    content: [
      "Examples of dogs with thick double-coat are Golden Retrievers, Border Collies, German Shepherd Dogs, Siberian Huskies, Samoyed.",
      "Double-coated dogs have a soft inner coat of hair close to their skin that serves as an insulating layer, helping keep them warm in cold weather and cool in hot weather. In spring and summer, a dog will shed a good bit of this under layer, but what remains will help capture air between the two coat layers, allowing the dog to keep the heat at bay and regulate his body temperature. The outer coat (or guard hair) consists of longer hair that gives a dog his color and is not shed as much.",
      "A good double coat is one that grows on healthy skin, well-maintained, aligns closely to the breed standard. A good quality coat provides the appropriate insulation and protection for the dog from both heat and cold, as well as from sunburn and other environmental factors.",
      "Shaving or trimming a perfect double coat too short can remove its natural protection and put the dog at risk of overheating, sunburn, and other skin issues.",
      "Shaving a perfect double coat on certain breeds might alter the texture and color of the coat, leading to a less desirable result. The coat may grow back unevenly or display a different texture, which can impact the dog's appearance and may take a long time to restore. This is why AKC and CKC advise not to shave some double coated breeds when their coat and skin is in good, manageable condition.",
      "There are certain situations where shaving a double-coated dog may be necessary. Some owners may lack the environment to help their dog shed the undercoat naturally, and without the proper intervention the coat can become severely matted due to neglect. Shaving may also be necessary when there is a medical reason, such as a skin condition that requires topical medication, or a surgery is being prepared.",
      "In some cases, shaving a thick, matted double coat may be the best course of action recommended by a veterinarian or professional stylist when brushing and washing can not be done safely. Leaving mats in place traps dander, germs, debris, and de-icing chemicals used outdoors in the winter, which can cause discomfort for the dog — if left unattended, skin irritation, hot spots and infections are sure to follow. Shaving a coat that is too damaged or too painful to restore might be the only way to provide better access to the skin for cleaning and hair regrowth.",
    ],
  },
  { slug: "toronto-travel-guide", title: "Toronto Travel Guide", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "useful-links", title: "Useful Links", category: "General", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "pampered-paws-limited-policies-payment-schedule-and-refund-policy", title: "Pampered Paws Limited Policies, Payment Schedule and Refund Policy", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "professional-development-program-curriculum-2", title: "Professional Development Program Curriculum", category: "Schooling", excerpt: PLACEHOLDER_EXCERPT },
  { slug: "cancellation-and-late-fees", title: "Cancellation And Late Fees", category: "Grooming", excerpt: PLACEHOLDER_EXCERPT },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((resource) => resource.slug === slug);
}

export function getResourceContent(resource: Resource): string[] {
  if (resource.content) return resource.content;
  if (resource.excerpt === PLACEHOLDER_EXCERPT) {
    return ["Full content for this resource is coming soon."];
  }
  return [resource.excerpt];
}

export function getOtherResources(slug: string): Resource[] {
  return RESOURCES.filter((resource) => resource.slug !== slug);
}
