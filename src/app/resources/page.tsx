import { Eyebrow } from "@/components/ui/Eyebrow";
import { ResourceGrid } from "@/components/sections/ResourceGrid";
import { getResources } from "@/sanity/lib/resources";

export const revalidate = 60;

export default async function ResourcesPage() {
  const resources = await getResources();
  return (
    <section className="flex flex-col items-center gap-2xl px-lg pt-2xl sm:pt-7xl pb-7xl">
      <div className="flex flex-col items-center gap-md text-center">
        <Eyebrow>Resources</Eyebrow>
        <h1 className="font-serif text-h2 text-text-primary">
          Helpful resources for pet owners and groomers
        </h1>
      </div>
      <ResourceGrid resources={resources} />
    </section>
  );
}
