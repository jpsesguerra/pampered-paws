// Mirrors the Sanity "Team Member" collection — see src/sanity/lib/teamMembers.ts
// for the actual data-fetching (this file now only holds the shared type).
// Team members are NOT referenced on the Location document — they're
// queried by matching `locationKey` (a query relationship, not a reference).
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  locationKey: string;
};
