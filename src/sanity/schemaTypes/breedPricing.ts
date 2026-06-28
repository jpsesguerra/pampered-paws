import { defineField, defineType } from "sanity";

export default defineType({
  name: "breedPricing",
  title: "Breed Pricing",
  type: "document",
  fields: [
    defineField({ name: "breed", title: "Breed", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "petType",
      title: "Pet Type",
      type: "string",
      options: { list: ["Cat", "Dog"] },
    }),
    defineField({ name: "bath", title: "Bath Price", type: "string" }),
    defineField({ name: "dip", title: "Dip Price", type: "string" }),
    defineField({ name: "regularGroom", title: "Regular Groom Price", type: "string" }),
    defineField({ name: "showTrim", title: "Show Trim Price", type: "string" }),
  ],
  preview: {
    select: { title: "breed", subtitle: "regularGroom" },
  },
});
