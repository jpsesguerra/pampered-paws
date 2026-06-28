import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline / Short Description", type: "string" }),
    defineField({ name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "cost", title: "Cost", type: "string" }),
    defineField({ name: "level", title: "Level", type: "string" }),
    defineField({ name: "nextStartDate", title: "Next Start Date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "text" }], description: "Body paragraphs." }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "orderNumber", title: "Order Number", type: "number", description: "Lower numbers appear first." }),
  ],
  preview: {
    select: { title: "title", subtitle: "duration" },
  },
});
