import { client } from "./client";
import { allResourcesQuery, resourceBySlugQuery } from "./queries";
import type { Resource } from "@/lib/data/resources";
import type { PortableTextBlock } from "@portabletext/react";

type ResourceDoc = {
  slug: string;
  title: string;
  category?: string;
  excerpt?: string;
  content?: PortableTextBlock[];
  link?: string;
  file?: { asset?: { url?: string } };
};

function mapResource(doc: ResourceDoc): Resource {
  return {
    slug: doc.slug,
    title: doc.title,
    category: doc.category ?? "General",
    excerpt: doc.excerpt ?? "",
    content: doc.content,
    link: doc.link,
    file: doc.file?.asset?.url,
  };
}

export async function getResources(): Promise<Resource[]> {
  const docs: ResourceDoc[] = await client.fetch(allResourcesQuery);
  return docs.map(mapResource);
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  const doc: ResourceDoc | null = await client.fetch(resourceBySlugQuery, { slug });
  return doc ? mapResource(doc) : null;
}

export async function getOtherResources(slug: string): Promise<Resource[]> {
  const resources = await getResources();
  return resources.filter((resource) => resource.slug !== slug);
}
