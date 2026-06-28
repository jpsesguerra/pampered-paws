import Image from "next/image";
import { notFound } from "next/navigation";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { Highlight } from "@/components/ui/Highlight";
import { Reveal } from "@/components/ui/Reveal";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { BLOG_POSTS, getBlogPostBySlug, getOtherBlogPosts } from "@/lib/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = getOtherBlogPosts(post.slug).slice(0, 3);

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
          <div className="relative h-[280px] w-full max-w-[1024px] overflow-hidden rounded-[20px] sm:h-[588px]">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <p className="w-full max-w-[800px] whitespace-pre-line font-sans text-body-default text-text-primary">
            {post.content}
          </p>
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
