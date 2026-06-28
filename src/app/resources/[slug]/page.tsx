import Link from "next/link";
import { notFound } from "next/navigation";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import {
  RESOURCES,
  getResourceBySlug,
  getResourceContent,
  getOtherResources,
} from "@/lib/data/resources";

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export default function ResourcePostPage({ params }: { params: { slug: string } }) {
  const resource = getResourceBySlug(params.slug);
  if (!resource) notFound();

  const content = getResourceContent(resource);
  const otherResources = getOtherResources(resource.slug).slice(0, 7);

  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <Reveal className="w-full flex-1">
          <article className="flex w-full flex-col items-start gap-2xl rounded-[20px] bg-surface-white px-lg py-2xl sm:px-3xl">
            <div className="flex flex-col items-start gap-md">
              <SecondaryButton href="/resources">Back To All Resources</SecondaryButton>
              <h1 className="font-serif text-h2 text-text-primary">{resource.title}</h1>
            </div>
            <div className="flex flex-col items-start gap-md font-sans text-body-default text-text-primary">
              {content.map((paragraph, i) => (
                <p key={i} className="w-full whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={100} className="w-full lg:w-[400px] lg:shrink-0">
          <div className="flex w-full flex-col items-start gap-2xl">
            <h2 className="w-full text-center font-serif text-h4 text-text-primary">
              Other Resources
            </h2>
            <div className="flex w-full flex-col items-start gap-md">
              {otherResources.map((other) => (
                <Link
                  key={other.slug}
                  href={`/resources/${other.slug}`}
                  className="flex w-full items-center gap-lg rounded-[20px] bg-surface-white px-lg py-md"
                >
                  <IconCircle variant="paw" className="size-8" />
                  <span className="flex-1 font-serif text-h6 text-text-primary">
                    {other.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
