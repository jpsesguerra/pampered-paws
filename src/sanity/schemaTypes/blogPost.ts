import { defineField, defineType } from "sanity";
import { richTextBlocks } from "./objects/richText";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "content", title: "Content", type: "array", of: richTextBlocks }),
    defineField({ name: "publishedDate", title: "Published Date", type: "date" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
