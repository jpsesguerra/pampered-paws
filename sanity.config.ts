import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure, SINGLETON_TYPES } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3anexqtt";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "default",
  title: "Pampered Paws",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "+ Create" menu so a second copy can't be made.
    templates: (templates) => templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  document: {
    // Singletons can be edited and published, but not duplicated or deleted.
    actions: (actions, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? actions.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : actions,
  },
});
