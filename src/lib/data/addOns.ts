export type AddOnLineItem = {
  name: string;
  price: string;
  description: string;
};

export type AddOnGroup = {
  title: string;
  items: AddOnLineItem[];
};

export const ADD_ON_GROUPS: AddOnGroup[] = [
  {
    title: "Coat & skin care",
    items: [
      {
        name: "De-matting / extra comb-out",
        price: "$120/hr",
        description:
          "Gentle removal of mats and tangles. Performed only when we can keep your pet safe and comfortable.",
      },
      {
        name: "Excessive undercoat removal",
        price: "$100/hr",
        description: "Deep de-shedding for heavy or seasonal coats.",
      },
      {
        name: "Hand stripping",
        price: "$225/hr",
        description: "Traditional coat work for wire-haired breeds.",
      },
      {
        name: "Hot oil treatment",
        price: "from $20",
        description: "Extra conditioning for dry or damaged coats.",
      },
    ],
  },
  {
    title: "Nails, ears & extras",
    items: [
      {
        name: "Nails (clip & grind)",
        price: "$35 on its own · free with any Bath or Regular Groom",
        description:
          "Trimming and smoothing to protect your pet's paw structure and posture. We recommend every 2–4 weeks.",
      },
      {
        name: "Ear hair",
        price: "free when included in a Bath or Regular Groom",
        description:
          "Long ear hair is safely clipped. Please consult your vet before requesting plucking — many vets now advise against it.",
      },
      {
        name: "Day care",
        price: "$45",
        description: "For stays over 3 hours before or after grooming.",
      },
    ],
  },
  {
    title: "Baths & treatments",
    items: [
      {
        name: "Medicated or flea bath",
        price: "from $60",
        description:
          "For skin conditions or pest treatment. Bring your own product, or we'll supply one for a retail charge.",
      },
      {
        name: "Pet colouring",
        price: "from $170",
        description: "Pet-safe, creative colour.",
      },
    ],
  },
];

export const ADD_ON_NOTE = {
  title: "A note on what we don't do:",
  description:
    "Anal gland expression is best done under veterinary supervision, so we don't perform it — but we'll always flag anything we notice while bathing or drying your pet, at no charge.",
};
