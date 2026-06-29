import type { PortableTextBlock } from "@portabletext/react";

// Mirrors the Sanity "Resource" collection schema — see src/sanity/lib/resources.ts
// for the actual data-fetching (this file now only holds the shared type).
export type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content?: PortableTextBlock[];
  link?: string;
  file?: string;
};
