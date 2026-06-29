import type { Image as SanityImage } from "sanity";
import type { PortableTextBlock } from "@portabletext/react";

// Mirrors the Sanity "Program" collection schema — see src/sanity/lib/programs.ts
// for the actual data-fetching (this file now only holds the shared type).
export type Program = {
  slug: string;
  title: string;
  tagline: string;
  mainImage?: SanityImage;
  duration: string;
  cost: string;
  level: string;
  description: PortableTextBlock[];
  ctaLabel: string;
};
