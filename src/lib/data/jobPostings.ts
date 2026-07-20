import type { PortableTextBlock } from "@portabletext/react";

// Mirrors the Sanity "Job Posting" collection schema — see
// src/sanity/lib/jobPostings.ts for the actual data-fetching.
export type JobPosting = {
  slug: string;
  title: string;
  location: string;
  description: PortableTextBlock[];
};
