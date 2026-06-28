import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { GroomerProfileCard } from "@/components/ui/GroomerProfileCard";
import type { Location } from "@/lib/data/locations";
import { getTeamMembersByLocationKey } from "@/lib/data/teamMembers";

export function LocationTeamSection({ location }: { location: Location }) {
  const members = getTeamMembersByLocationKey(location.locationKey);
  const words = location.teamHeading.split(" ");
  const highlighted = words.slice(-2).join(" ");
  const headingLead = words.slice(0, -2).join(" ");

  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[1240px] flex-col items-start gap-2xl rounded-[32px] bg-surface-white p-lg sm:p-2xl lg:flex-row">
        <div className="flex w-full flex-col items-start gap-2xl lg:max-w-[376px] lg:shrink-0">
          <div className="flex flex-col items-start gap-lg">
            <Eyebrow>Our team</Eyebrow>
            <h2 className="font-serif text-h2 text-text-primary">
              {headingLead} <Highlight>{highlighted}</Highlight>
            </h2>
            <p className="font-sans text-body-default text-text-primary">{location.teamIntro}</p>
          </div>
          <a
            href="/about-us"
            className="flex min-h-[48px] items-center justify-center rounded-full bg-brand-neutral-dark px-xl py-sm font-sans text-label-lg text-text-on-pink"
          >
            Learn more about us
          </a>
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-lg sm:flex-row">
          {members.length > 0 ? (
            members.map((member) => <GroomerProfileCard key={member.id} member={member} />)
          ) : (
            <p className="font-sans text-body-default text-text-secondary">
              Team profiles for this salon are coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
