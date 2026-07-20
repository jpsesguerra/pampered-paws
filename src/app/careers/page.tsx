import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getJobPostings } from "@/sanity/lib/jobPostings";

export const revalidate = 60;

export default async function CareersPage() {
  const jobPostings = await getJobPostings();
  return (
    <section className="flex flex-col items-center gap-2xl px-lg pt-2xl sm:pt-7xl pb-7xl">
      <div className="flex flex-col items-center gap-md text-center">
        <Eyebrow>Careers</Eyebrow>
        <h1 className="font-serif text-h2 text-text-primary">Join our team</h1>
      </div>
      {jobPostings.length === 0 ? (
        <p className="font-sans text-body-default text-text-primary">
          There are no open roles right now — check back soon.
        </p>
      ) : (
        <div className="grid w-full max-w-[1240px] grid-cols-2 gap-lg">
          {jobPostings.map((posting) => (
            <Link
              key={posting.slug}
              href={`/careers/${posting.slug}`}
              className="flex flex-col items-start gap-xs rounded-2xl bg-surface-white p-lg"
            >
              <span className="font-sans text-label-default text-brand-primary-pink">
                {posting.location}
              </span>
              <h2 className="font-serif text-h6 text-text-primary">{posting.title}</h2>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
