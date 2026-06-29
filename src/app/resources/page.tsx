import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getResources } from "@/sanity/lib/resources";

export const revalidate = 60;

export default async function ResourcesPage() {
  const resources = await getResources();
  return (
    <section className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex flex-col items-center gap-md text-center">
        <Eyebrow>Resources</Eyebrow>
        <h1 className="font-serif text-h2 text-text-primary">
          Helpful resources for pet owners and groomers
        </h1>
      </div>
      <div className="grid w-full max-w-[1240px] grid-cols-2 gap-lg">
        {resources.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}`}
            className="flex flex-col items-start gap-xs rounded-2xl bg-surface-white p-lg"
          >
            <span className="font-sans text-label-default text-brand-primary-pink">
              {resource.category}
            </span>
            <h2 className="font-serif text-h6 text-text-primary">{resource.title}</h2>
            <p className="font-sans text-body-sm text-text-secondary">{resource.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
