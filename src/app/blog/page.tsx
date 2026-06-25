import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BLOG_POSTS } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex flex-col items-center gap-md text-center">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="font-serif text-h2 text-text-primary">
          Pet care tips and stories from our team
        </h1>
      </div>
      <div className="grid w-full max-w-[1240px] grid-cols-3 gap-2xl">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col items-start gap-md rounded-2xl bg-surface-white p-lg"
          >
            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <h2 className="font-serif text-h5 text-text-primary">{post.title}</h2>
            <p className="font-sans text-body-default text-text-secondary">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
