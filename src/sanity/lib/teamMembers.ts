import { client } from "./client";
import { teamMembersByLocationKeyQuery } from "./queries";
import { urlFor } from "./image";
import type { TeamMember } from "@/lib/data/teamMembers";
import type { Image as SanityImage } from "sanity";

type TeamMemberDoc = {
  _id: string;
  name: string;
  role?: string;
  photo?: SanityImage;
  locationKey: string;
};

export async function getTeamMembersByLocationKey(locationKey: string): Promise<TeamMember[]> {
  const docs: TeamMemberDoc[] = await client.fetch(teamMembersByLocationKeyQuery, { locationKey });
  return docs.map((doc) => ({
    id: doc._id,
    name: doc.name,
    role: doc.role ?? "",
    photo: doc.photo ? urlFor(doc.photo).width(480).url() : "",
    locationKey: doc.locationKey,
  }));
}
