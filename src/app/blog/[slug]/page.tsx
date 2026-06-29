import Image from "next/image";
import { notFound } from "next/navigation";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Highlight } from "@/components/ui/Highlight";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { getBlogPosts, getBlogPostBySlug, getOtherBlogPosts } from "@/sanity/lib/blog";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = (await getOtherBlogPosts(post.slug)).slice(0, 3);

  return (
    <>
      <section className="flex items-center justify-center px-lg py-7xl">
        <Reveal className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
          <SecondaryButton href="/blog">Back to Blog</SecondaryButton>
          <div className="flex flex-col items-center gap-s+ text-center">
            <h1 className="max-w-[1024px] font-serif text-h2 text-text-primary sm:text-display-h1">
              {post.title}
            </h1>
            <p className="font-sans text-label-lg text-brand-neutral-lighter">{post.excerpt}</p>
          </div>
          <div className="relative h-[280px] w-full max-w-[1024px] overflow-hidden rounded-[20px] bg-brand-background-neutral sm:h-[588px]">
            {post.image && <Image src={post.image} alt={post.title} fill className="object-cover" />}
          </div>
          <RichText value={post.content} className="w-full max-w-[800px]" />
        </Reveal>
      </section>

      <Reveal>
        <BlogTeaser
          eyebrow="Blog"
          heading={
            <>
              Similar articles for <Highlight>you</Highlight>
            </>
          }
          posts={otherPosts}
        />
      </Reveal>
    </>
  );
}
