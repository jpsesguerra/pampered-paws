import { defineField, defineType } from "sanity";
import { richTextBlocks } from "./objects/richText";

export default defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "array", of: richTextBlocks, validation: (r) => r.required() }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Turn off to hide this role from the careers listing without deleting it.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "location", active: "active" },
    prepare({ title, subtitle, active }) {
      return { title, subtitle: active === false ? `${subtitle} — Closed` : subtitle };
    },
  },
});
