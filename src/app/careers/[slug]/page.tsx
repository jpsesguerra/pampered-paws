import Link from "next/link";
import { notFound } from "next/navigation";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { JobApplicationForm } from "@/components/sections/JobApplicationForm";
import { getJobPostings, getJobPostingBySlug, getOtherJobPostings } from "@/sanity/lib/jobPostings";

export const revalidate = 60;

const WEB3FORMS_JOBS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_JOBS_KEY ?? "";

export async function generateStaticParams() {
  const jobPostings = await getJobPostings();
  return jobPostings.map((posting) => ({ slug: posting.slug }));
}

export default async function JobPostingPage({ params }: { params: { slug: string } }) {
  const jobPosting = await getJobPostingBySlug(params.slug);
  if (!jobPosting) notFound();

  const otherJobPostings = (await getOtherJobPostings(jobPosting.slug)).slice(0, 7);

  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl lg:flex-row">
        <Reveal className="w-full flex-1">
          <article className="flex w-full flex-col items-start gap-2xl rounded-[20px] bg-surface-white px-lg py-2xl sm:px-3xl">
            <div className="flex flex-col items-start gap-md">
              <SecondaryButton href="/careers">Back To All Careers</SecondaryButton>
              <h1 className="font-serif text-h2 text-text-primary">{jobPosting.title}</h1>
              <span className="font-sans text-label-default text-brand-primary-pink">
                {jobPosting.location}
              </span>
            </div>
            <RichText value={jobPosting.description} className="w-full" />
          </article>

          <div className="mt-2xl flex w-full flex-col items-start gap-lg rounded-[20px] bg-surface-white px-lg py-2xl sm:px-3xl">
            <h2 className="font-serif text-h4 text-text-primary">Apply for this role</h2>
            <JobApplicationForm
              jobTitle={jobPosting.title}
              location={jobPosting.location}
              accessKey={WEB3FORMS_JOBS_KEY}
              notifyEmail="careers@pamperedpaws.com"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="w-full lg:w-[400px] lg:shrink-0">
          <div className="flex w-full flex-col items-start gap-2xl">
            <h2 className="w-full text-center font-serif text-h4 text-text-primary">
              Other Openings
            </h2>
            <div className="flex w-full flex-col items-start gap-md">
              {otherJobPostings.map((other) => (
                <Link
                  key={other.slug}
                  href={`/careers/${other.slug}`}
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
