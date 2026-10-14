import { defineField, defineType } from "sanity";

// Singleton — there is only ever one Homepage document (id "homePage"),
// pinned in the Studio sidebar by sanity.structure.ts.
function heroPhotoField(name: string, title: string, description: string) {
  return defineField({
    name,
    title,
    type: "image",
    fieldset: "heroPhotos",
    description,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        description: "Short description for screen readers, e.g. “Groomed dachshund in a scarf”.",
      }),
    ],
  });
}

export default defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fieldsets: [
    {
      name: "heroPhotos",
      title: "Hero photos",
      description:
        "The three photos under the homepage headline. Leave a slot empty to keep the current default photo. Use the crop/hotspot tool to keep the pet's face in frame.",
      options: { columns: 3 },
    },
  ],
  fields: [
    heroPhotoField("heroLeft", "Left photo", "Portrait slot (tall)."),
    heroPhotoField("heroCenter", "Center photo", "Wide slot — landscape photos work best."),
    heroPhotoField("heroRight", "Right photo", "Portrait slot (tall)."),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
