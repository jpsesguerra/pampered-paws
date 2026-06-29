import { client } from "./client";
import { allBlogPostsQuery, blogPostBySlugQuery } from "./queries";
import { urlFor } from "./image";
import type { BlogPost } from "@/lib/data/blog";
import type { PortableTextBlock } from "@portabletext/react";
import type { Image as SanityImage } from "sanity";

type BlogPostDoc = {
  slug: string;
  title: string;
  image?: SanityImage;
  excerpt?: string;
  content?: PortableTextBlock[];
};

function mapBlogPost(doc: BlogPostDoc): BlogPost {
  return {
    slug: doc.slug,
    title: doc.title,
    image: doc.image ? urlFor(doc.image).width(800).url() : "",
    excerpt: doc.excerpt ?? "",
    content: doc.content ?? [],
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const docs: BlogPostDoc[] = await client.fetch(allBlogPostsQuery);
  return docs.map(mapBlogPost);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const doc: BlogPostDoc | null = await client.fetch(blogPostBySlugQuery, { slug });
  return doc ? mapBlogPost(doc) : null;
}

export async function getOtherBlogPosts(slug: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.slug !== slug);
}
