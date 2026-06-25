import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BLOG_POSTS } from "@/lib/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg">
        <Breadcrumb>Blog</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">{post.title}</h1>
      </div>
      <div className="relative h-[400px] w-full max-w-[776px] overflow-hidden rounded-2xl">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg">
        <p className="font-sans text-body-lg text-text-primary">{post.content}</p>
      </div>
    </article>
  );
}
