import type { StructureResolver } from "sanity/structure";

// Document types that only ever have one document. They get a fixed sidebar
// entry instead of a list, and are hidden from "create new document" menus.
export const SINGLETON_TYPES = new Set(["homePage"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage").title("Homepage")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !SINGLETON_TYPES.has(item.getId() ?? "")),
    ]);
