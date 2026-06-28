// Mirrors the future Sanity "Team Members" collection. Team members are
// NOT referenced on the Location document — they're queried by matching
// `locationKey` (a query relationship, not a stored reference).
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  locationKey: string;
};

// Only seeded with the staff names we actually have on record (see
// src/lib/data/locations.ts taglines). Scarborough has no named staff yet —
// this is intentionally left empty rather than inventing placeholder people.
// Add real team members (with their locationKey) once provided, the query
// below will pick them up automatically.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lesley-weeks",
    name: "Lesley Weeks",
    role: "Founder & Toronto Groomer",
    photo: "/images/team-photo.png",
    locationKey: "toronto",
  },
  {
    id: "eggie-feng",
    name: "Eggie Feng",
    role: "Salon Lead, Mississauga",
    photo: "/images/team-photo.png",
    locationKey: "mississauga",
  },
];

export function getTeamMembersByLocationKey(locationKey: string): TeamMember[] {
  return TEAM_MEMBERS.filter((member) => member.locationKey === locationKey);
}
