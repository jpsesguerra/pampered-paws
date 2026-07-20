import { client } from "./client";
import { allJobPostingsQuery, jobPostingBySlugQuery } from "./queries";
import type { JobPosting } from "@/lib/data/jobPostings";
import type { PortableTextBlock } from "@portabletext/react";

type JobPostingDoc = {
  slug: string;
  title: string;
  location: string;
  description: PortableTextBlock[];
};

function mapJobPosting(doc: JobPostingDoc): JobPosting {
  return {
    slug: doc.slug,
    title: doc.title,
    location: doc.location,
    description: doc.description,
  };
}

export async function getJobPostings(): Promise<JobPosting[]> {
  const docs: JobPostingDoc[] = await client.fetch(allJobPostingsQuery);
  return docs.map(mapJobPosting);
}

export async function getJobPostingBySlug(slug: string): Promise<JobPosting | null> {
  const doc: JobPostingDoc | null = await client.fetch(jobPostingBySlugQuery, { slug });
  return doc ? mapJobPosting(doc) : null;
}

export async function getOtherJobPostings(slug: string): Promise<JobPosting[]> {
  const postings = await getJobPostings();
  return postings.filter((posting) => posting.slug !== slug);
}
