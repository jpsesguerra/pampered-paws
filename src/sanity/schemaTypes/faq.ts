import { defineField, defineType } from "sanity";
import { richTextBlocks } from "./objects/richText";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["grooming", "schooling", "franchising"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "array", of: richTextBlocks, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Order", type: "number", description: "Lower numbers appear first." }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
