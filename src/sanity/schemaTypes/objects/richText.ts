import type { Rule } from "sanity";

/**
 * Shared Portable Text (real rich text) field config — used by Program
 * description, FAQ answer, Blog Post content, and Resource content so
 * editors get bold/italic/underline, H2-H4 headings, bullet/numbered lists,
 * and links, instead of a plain array of single-line text blocks.
 */
export const richTextBlocks = [
  {
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "H4", value: "h4" },
      { title: "Quote", value: "blockquote" },
    ],
    lists: [
      { title: "Bullet", value: "bullet" },
      { title: "Numbered", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Bold", value: "strong" },
        { title: "Italic", value: "em" },
        { title: "Underline", value: "underline" },
      ],
      annotations: [
        {
          name: "link",
          type: "object",
          title: "Link",
          fields: [
            { name: "href", type: "url", title: "URL", validation: (r: Rule) => r.required() },
            { name: "blank", type: "boolean", title: "Open in new tab", initialValue: false },
          ],
        },
      ],
    },
  },
];
