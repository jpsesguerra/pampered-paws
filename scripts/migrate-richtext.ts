/**
 * One-time migration: converts the plain-string/string-array shape that
 * program.description, resource.content, faq.answer, and blogPost.content
 * used to have into real Portable Text blocks, matching the new rich-text
 * schema fields. Safe to re-run — any field that's already an array of
 * blocks is left untouched.
 *
 * Run with: npx tsx scripts/migrate-richtext.ts
 */
import { config as loadEnv } from "dotenv";
import path from "node:path";
loadEnv({ path: path.join(process.cwd(), ".env.local") });

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3anexqtt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function randomKey(): string {
  return Math.random().toString(36).slice(2, 14);
}

function textToBlock(text: string) {
  return {
    _type: "block",
    _key: randomKey(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: randomKey(), text, marks: [] }],
  };
}

function isAlreadyBlocks(value: unknown): boolean {
  return Array.isArray(value) && value.length > 0 && (value[0] as { _type?: string })._type === "block";
}

function paragraphsToBlocks(text: string) {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map(textToBlock);
}

// Fetches all docs of a type and filters in JS rather than via a GROQ
// `defined()` filter — that filter has been observed to silently exclude
// docs with very large text fields (e.g. a 16,000-character blog body),
// even though the field is clearly present. Fetching everything and
// checking client-side sidesteps that quirk entirely.
async function fetchDocsWithField(type: string, field: string) {
  const all: { _id: string; value: unknown }[] = await client.fetch(`*[_type == $type]{_id, "value": ${field}}`, {
    type,
  });
  return all.filter((doc) => !doc._id.startsWith("drafts.") && doc.value !== null && doc.value !== undefined);
}

async function migrateArrayField(type: string, field: string) {
  const docs = (await fetchDocsWithField(type, field)) as { _id: string; value: string[] }[];
  let migrated = 0;
  for (const doc of docs) {
    if (isAlreadyBlocks(doc.value)) continue;
    const blocks = doc.value.map(textToBlock);
    await client.patch(doc._id).set({ [field]: blocks }).commit();
    migrated += 1;
  }
  console.log(`${type}.${field}: migrated ${migrated}/${docs.length}`);
}

async function migrateStringField(type: string, field: string) {
  const docs = (await fetchDocsWithField(type, field)) as { _id: string; value: string }[];
  let migrated = 0;
  for (const doc of docs) {
    if (isAlreadyBlocks(doc.value)) continue;
    const blocks = paragraphsToBlocks(doc.value as unknown as string);
    await client.patch(doc._id).set({ [field]: blocks }).commit();
    migrated += 1;
  }
  console.log(`${type}.${field}: migrated ${migrated}/${docs.length}`);
}

async function main() {
  await migrateArrayField("program", "description");
  await migrateArrayField("resource", "content");
  await migrateStringField("faq", "answer");
  await migrateStringField("blogPost", "content");
  console.log("\nDone.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
