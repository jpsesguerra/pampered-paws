import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BLOG_POSTS } from "@/lib/data/blog";

export function BlogTeaser() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-2xl">
        <div className="flex flex-col items-center gap-s+ text-center">
          <Eyebrow>Resources</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            Things to know about your pet
          </h2>
        </div>
        <div className="flex w-full flex-col items-start gap-2xl sm:flex-row">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex w-full flex-1 flex-col items-start gap-s+ rounded-2xl bg-surface-white p-lg"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-xl">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-xs">
                <h3 className="font-serif text-h5 text-text-primary">{post.title}</h3>
                <p className="font-sans text-body-sm text-text-primary">{post.excerpt}</p>
              </div>
              <span className="flex items-center gap-xs font-sans text-btn-secondary text-text-primary">
                Read More
                <img src="/icons/chevron-right.svg" alt="" className="size-5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
