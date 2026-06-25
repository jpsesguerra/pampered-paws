import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RESOURCES } from "@/lib/data/resources";

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export default function ResourcePostPage({ params }: { params: { slug: string } }) {
  const resource = RESOURCES.find((r) => r.slug === params.slug);
  if (!resource) notFound();

  return (
    <article className="flex flex-col items-center gap-2xl px-lg py-7xl">
      <div className="flex w-full max-w-[776px] flex-col items-start gap-lg">
        <Breadcrumb>{resource.category}</Breadcrumb>
        <h1 className="font-serif text-h2 text-text-primary">{resource.title}</h1>
        <p className="font-sans text-body-lg text-text-primary">{resource.excerpt}</p>
      </div>
    </article>
  );
}
