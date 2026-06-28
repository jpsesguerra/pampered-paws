import Image from "next/image";
import type { TeamMember } from "@/lib/data/teamMembers";

export function GroomerProfileCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative flex h-[300px] w-full flex-1 items-end overflow-hidden rounded-xl bg-brand-secondary-cream p-lg sm:h-[420px]">
      <Image src={member.photo} alt={member.name} fill className="object-cover" />
      <div className="relative z-10 flex w-full items-center gap-md rounded-xl bg-surface-white p-md">
        <div className="flex flex-1 flex-col items-start gap-xxs">
          <span className="font-serif text-h5 text-text-primary">{member.name}</span>
          <span className="font-sans text-body-sm text-text-secondary">{member.role}</span>
        </div>
      </div>
    </div>
  );
}
