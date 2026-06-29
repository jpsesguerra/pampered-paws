import { defineField, defineType } from "sanity";
import { richTextBlocks } from "./objects/richText";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "content", title: "Content", type: "array", of: richTextBlocks, description: "Falls back to excerpt if empty." }),
    defineField({ name: "link", title: "External Link", type: "url", description: "For resources that are just a link-out (e.g. Canadian Kennel Club) rather than an article." }),
    defineField({ name: "file", title: "File", type: "file", description: "For resources that are a downloadable PDF (application forms, policy docs, etc.)." }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
