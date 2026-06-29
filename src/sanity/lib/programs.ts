import { client } from "./client";
import { allProgramsQuery, programBySlugQuery } from "./queries";
import type { Program } from "@/lib/data/programs";

export async function getPrograms(): Promise<Program[]> {
  return client.fetch(allProgramsQuery);
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  return client.fetch(programBySlugQuery, { slug });
}

export async function getOtherPrograms(slug: string): Promise<Program[]> {
  const programs = await getPrograms();
  return programs.filter((program) => program.slug !== slug);
}
