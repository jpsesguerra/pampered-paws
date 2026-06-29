import type { PortableTextBlock } from "@portabletext/react";

// Mirrors the Sanity "Blog Post" collection schema — see src/sanity/lib/blog.ts
// for the actual data-fetching (this file now only holds the shared type).
export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: PortableTextBlock[];
};
