import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service (Add-On)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "price", title: "Price", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Coat & skin care", "Nails, ears & extras", "Baths & treatments"] },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
