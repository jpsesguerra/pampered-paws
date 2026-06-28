/**
 * One-time CMS import: populates the Sanity project with content from two
 * sources, per an explicit audit with the client:
 *  - src/lib/data/*.ts — the cleaned/curated content already built into the
 *    live site (location pages, team bios, FAQs, real program curriculum).
 *    Used as-is, never overwritten by the CSVs.
 *  - The original Webflow CSV exports (Desktop/Pampered Paws Website
 *    Build/CMS Stuff/*.csv) — used to fill in real content that exists in
 *    Webflow but was never carried into the .ts files (extra Resources,
 *    extra Programs, the full ~260-breed pricing table, the original
 *    Webflow testimonials, full blog post bodies).
 *
 * Run with: npm run import:cms
 * Requires SANITY_API_WRITE_TOKEN in .env.local (Editor or Administrator
 * token from https://www.sanity.io/manage/project/3anexqtt/api).
 *
 * Safe to re-run: every document uses a deterministic _id and is written
 * with createOrReplace, so running this again just re-syncs the same docs.
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";
import { createClient } from "@sanity/client";

import { LOCATIONS } from "../src/lib/data/locations";
import { TEAM_MEMBERS } from "../src/lib/data/teamMembers";
import { TESTIMONIALS } from "../src/lib/data/testimonials";
import { PROGRAMS } from "../src/lib/data/programs";
import { RESOURCES } from "../src/lib/data/resources";
import { BLOG_POSTS } from "../src/lib/data/blog";
import { GROOMING_FAQS } from "../src/lib/data/groomingFaqs";
import { SCHOOLING_FAQS } from "../src/lib/data/schoolingFaqs";
import { FRANCHISE_FAQS } from "../src/lib/data/franchiseFaqs";
import { ADD_ON_GROUPS } from "../src/lib/data/addOns";

import { htmlToParagraphs, htmlToPlainText } from "./lib/html";
import { uploadImageFromUrl, uploadImageFromLocalPath, uploadFileFromUrl } from "./lib/assets";

loadEnv({ path: path.join(process.cwd(), ".env.local") });

const CSV_DIR = "/Users/joelpaolo/Desktop/Pampered Paws Website Build/CMS Stuff";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3anexqtt";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    "\nMissing SANITY_API_WRITE_TOKEN.\n" +
      "Create an Editor (or Administrator) token at:\n" +
      `  https://www.sanity.io/manage/project/${projectId}/api\n` +
      "and add it to .env.local as SANITY_API_WRITE_TOKEN=... before running this script.\n",
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

function readCsv(filename: string): Record<string, string>[] {
  const filePath = path.join(CSV_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return parse(raw, { columns: true, skip_empty_lines: true, relax_quotes: true, trim: true });
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isMeaningfulHtml(html: string | undefined): boolean {
  if (!html) return false;
  const text = htmlToPlainText(html).toLowerCase();
  return text.length > 0 && text !== "coming soon..." && text !== "coming soon";
}

let written = 0;
async function put(doc: Record<string, unknown> & { _id: string; _type: string }) {
  const attempts = 4;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await client.createOrReplace(doc);
      written += 1;
      return;
    } catch (error) {
      const isLastAttempt = attempt === attempts;
      const isTransient = (error as { code?: string }).code === "ECONNRESET" || (error as { statusCode?: number }).statusCode === 503;
      if (isLastAttempt || !isTransient) throw error;
      console.warn(`  ! transient error on ${doc._id}, retrying (${attempt}/${attempts})...`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
}

// ---------------------------------------------------------------------------
// Locations — from src/lib/data/locations.ts. Hero images come from the
// local /public files already wired into the live site.
// ---------------------------------------------------------------------------
async function importLocations() {
  console.log("\nLocations...");
  const testimonialDocId = (id: string) => `testimonial.${id}`;
  for (let index = 0; index < LOCATIONS.length; index += 1) {
    const loc = LOCATIONS[index];
    const heroImage = await uploadImageFromLocalPath(client, loc.heroImage);
    await put({
      _id: `location.${loc.slug}`,
      _type: "location",
      locationName: loc.locationName,
      slug: { _type: "slug", current: loc.slug },
      locationKey: loc.locationKey,
      metaTitle: loc.metaTitle,
      metaDescription: loc.metaDescription,
      heroSubtext: loc.heroSubtext,
      ...(heroImage ? { heroImage } : {}),
      heroCtaLabel: loc.heroCtaLabel,
      address: loc.address,
      city: loc.city,
      postalCode: loc.postalCode,
      neighbourhoodsServed: loc.neighbourhoodsServed,
      phoneCall: loc.phoneCall,
      ...(loc.phoneText ? { phoneText: loc.phoneText } : {}),
      email: loc.email,
      staffNotificationEmail: loc.staffNotificationEmail,
      bookingMethod: loc.bookingMethod,
      hours: loc.hours,
      googleMapsEmbedUrl: loc.googleMapsEmbedUrl,
      geoLat: loc.geoLat,
      geoLng: loc.geoLng,
      teamHeading: loc.teamHeading,
      teamIntro: loc.teamIntro,
      listOrder: index + 1,
      testimonials: loc.testimonialIds.map((id: string) => ({
        _type: "reference",
        _key: id,
        _ref: testimonialDocId(id),
      })),
    });
    console.log(`  + ${loc.locationName}`);
  }
}

// ---------------------------------------------------------------------------
// Team Members — from src/lib/data/teamMembers.ts (no CSV equivalent exists).
// ---------------------------------------------------------------------------
async function importTeamMembers() {
  console.log("\nTeam Members...");
  for (const member of TEAM_MEMBERS) {
    const photo = await uploadImageFromLocalPath(client, member.photo);
    await put({
      _id: `teamMember.${member.id}`,
      _type: "teamMember",
      name: member.name,
      role: member.role,
      ...(photo ? { photo } : {}),
      locationKey: member.locationKey,
    });
    console.log(`  + ${member.name}`);
  }
}

// ---------------------------------------------------------------------------
// Testimonials — TS-curated ones (referenced by Location docs above) plus
// the real original Webflow reviews from Testimonials.csv.
// ---------------------------------------------------------------------------
async function importTestimonials() {
  console.log("\nTestimonials...");
  for (const testimonial of TESTIMONIALS) {
    const image = await uploadImageFromLocalPath(client, testimonial.image);
    await put({
      _id: `testimonial.${testimonial.id}`,
      _type: "testimonial",
      name: testimonial.name,
      location: testimonial.location,
      ...(image ? { image } : {}),
      quote: testimonial.quote,
    });
    console.log(`  + ${testimonial.name}`);
  }

  const rows = readCsv("Testimonials.csv").filter((row) => row.Name);
  for (const row of rows) {
    const image = await uploadImageFromUrl(client, row["Client Image"]);
    await put({
      _id: `testimonial.${row.Slug}`,
      _type: "testimonial",
      name: row.Name,
      petName: row["Pet Name"] || undefined,
      ...(image ? { image } : {}),
      quote: htmlToPlainText(row.Comments),
      category: row.Category || undefined,
    });
    console.log(`  + ${row.Name} (Webflow)`);
  }
}

// ---------------------------------------------------------------------------
// Programs — union of the 6 live TS programs (real curriculum kept as-is for
// Groomers Professional Development; CSV curriculum fills in the other 5
// that previously had only a placeholder) and the 4 extra Webflow programs
// (Tokyo + an unpublished Grooming Fundamentals) that never made it into the
// site build but are real content.
// ---------------------------------------------------------------------------
async function importPrograms() {
  console.log("\nPrograms...");
  const csvRows = readCsv("Programs.csv").filter((row) => row.Name);
  const csvBySlug = new Map(csvRows.map((row) => [row.Slug, row]));
  const tsSlugs = new Set(PROGRAMS.map((p) => p.slug));

  for (const program of PROGRAMS) {
    const csvRow = csvBySlug.get(program.slug);
    const mainImage = await uploadImageFromUrl(client, csvRow?.["Main Image"]);
    const useCsvDescription = program.slug !== "groomers-professional-development-program" && csvRow && isMeaningfulHtml(csvRow["Program Details"]);
    await put({
      _id: `program.${program.slug}`,
      _type: "program",
      title: program.title,
      slug: { _type: "slug", current: program.slug },
      tagline: program.tagline,
      duration: program.duration,
      cost: program.cost,
      level: program.level,
      ...(mainImage ? { mainImage } : {}),
      description: useCsvDescription ? htmlToParagraphs(csvRow!["Program Details"]) : program.description,
      ctaLabel: program.ctaLabel,
      ...(csvRow?.["Order Number"] ? { orderNumber: Number(csvRow["Order Number"]) } : {}),
    });
    console.log(`  + ${program.title}`);
  }

  for (const row of csvRows) {
    if (tsSlugs.has(row.Slug)) continue;
    const mainImage = await uploadImageFromUrl(client, row["Main Image"]);
    await put({
      _id: `program.${row.Slug}`,
      _type: "program",
      title: row.Name.trim(),
      slug: { _type: "slug", current: row.Slug },
      tagline: row["Short Description"]?.trim() || "",
      duration: row.Duration || "",
      cost: row.Cost || "",
      ...(mainImage ? { mainImage } : {}),
      description: htmlToParagraphs(row["Program Details"]),
      ctaLabel: "Ask about enrollment",
      ...(row["Order Number"] ? { orderNumber: Number(row["Order Number"]) } : {}),
    });
    console.log(`  + ${row.Name.trim()} (Webflow only)`);
  }
}

// ---------------------------------------------------------------------------
// Resources — union of the curated TS resources (real content kept verbatim
// for Equipment / double-coat article) and the full Resources.csv set,
// including unpublished-in-Webflow entries that are still real content
// (e.g. PDF forms linked from blog posts).
// ---------------------------------------------------------------------------
async function importResources() {
  console.log("\nResources...");
  const csvRows = readCsv("Resources.csv").filter((row) => row.Name);
  const csvBySlug = new Map(csvRows.map((row) => [row.Slug, row]));
  const tsSlugs = new Set(RESOURCES.map((r) => r.slug));

  for (const resource of RESOURCES) {
    const csvRow = csvBySlug.get(resource.slug);
    const hasCuratedContent = Boolean(resource.content && resource.content.length > 0);
    const content = hasCuratedContent
      ? resource.content!
      : csvRow && isMeaningfulHtml(csvRow.Content)
        ? htmlToParagraphs(csvRow.Content)
        : undefined;
    const file = csvRow ? await uploadFileFromUrl(client, csvRow.File) : undefined;
    await put({
      _id: `resource.${resource.slug}`,
      _type: "resource",
      title: resource.title,
      slug: { _type: "slug", current: resource.slug },
      category: resource.category,
      excerpt: resource.excerpt,
      ...(content ? { content } : {}),
      ...(csvRow?.Link ? { link: csvRow.Link } : {}),
      ...(file ? { file } : {}),
    });
    console.log(`  + ${resource.title}`);
  }

  for (const row of csvRows) {
    if (tsSlugs.has(row.Slug)) continue;
    const file = await uploadFileFromUrl(client, row.File);
    await put({
      _id: `resource.${row.Slug}`,
      _type: "resource",
      title: row.Name.trim(),
      slug: { _type: "slug", current: row.Slug },
      category: row.Category || "General",
      excerpt: isMeaningfulHtml(row.Content) ? htmlToParagraphs(row.Content)[0] : "Full content coming soon.",
      ...(isMeaningfulHtml(row.Content) ? { content: htmlToParagraphs(row.Content) } : {}),
      ...(row.Link ? { link: row.Link } : {}),
      ...(file ? { file } : {}),
    });
    console.log(`  + ${row.Name.trim()} (Webflow only)`);
  }
}

// ---------------------------------------------------------------------------
// Blog Posts — TS excerpt (hand-written teaser) kept, CSV supplies the full
// original article body, image, publish date and featured flag.
// ---------------------------------------------------------------------------
async function importBlogPosts() {
  console.log("\nBlog Posts...");
  const csvRows = readCsv("Blog.csv").filter((row) => row.Name);
  const csvBySlug = new Map(csvRows.map((row) => [row.Slug, row]));

  for (const post of BLOG_POSTS) {
    const csvRow = csvBySlug.get(post.slug);
    const image = await uploadImageFromUrl(client, post.image);
    const content = csvRow && isMeaningfulHtml(csvRow.Cotent) ? htmlToPlainText(csvRow.Cotent) : post.content;
    const publishedDate = csvRow?.["Date Created or Event Date"] || csvRow?.["Created On"];
    await put({
      _id: `blogPost.${post.slug}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      ...(image ? { image } : {}),
      excerpt: post.excerpt,
      content,
      ...(publishedDate ? { publishedDate: new Date(publishedDate).toISOString().slice(0, 10) } : {}),
      featured: csvRow?.Featured === "true",
    });
    console.log(`  + ${post.title}`);
  }
}

// ---------------------------------------------------------------------------
// FAQs — from the three curated TS files (CSV answers were blank in Webflow,
// so the .ts versions are the only real source for these).
// ---------------------------------------------------------------------------
async function importFaqs() {
  console.log("\nFAQs...");
  const groups: Array<{ category: string; items: { question: string; answer: string }[] }> = [
    { category: "grooming", items: GROOMING_FAQS },
    { category: "schooling", items: SCHOOLING_FAQS },
    { category: "franchising", items: FRANCHISE_FAQS },
  ];
  for (const group of groups) {
    for (let index = 0; index < group.items.length; index += 1) {
      const item = group.items[index];
      await put({
        _id: `faq.${group.category}.${index}`,
        _type: "faq",
        category: group.category,
        question: item.question,
        answer: item.answer,
        order: index,
      });
    }
    console.log(`  + ${group.items.length} ${group.category} FAQs`);
  }
}

// ---------------------------------------------------------------------------
// Breed Pricing — the full ~260-row Webflow pricing table. The TS file only
// ever held a small homepage-marquee subset, so this is a pure addition.
// ---------------------------------------------------------------------------
async function importBreedPricing() {
  console.log("\nBreed Pricing...");
  const rows = readCsv("Pricings.csv").filter((row) => row.Name);
  for (const row of rows) {
    await put({
      _id: `breedPricing.${row.Slug}`,
      _type: "breedPricing",
      breed: row.Name.trim(),
      petType: row["Pet Type"] || undefined,
      bath: row.Bath || undefined,
      dip: row.Dip || undefined,
      regularGroom: row["Regular Groom"] || undefined,
      showTrim: row["Show Trim"] || undefined,
    });
  }
  console.log(`  + ${rows.length} breeds`);
}

// ---------------------------------------------------------------------------
// Services (add-ons) — flattened from src/lib/data/addOns.ts groups, per the
// client's own audit (flat Name/Price/Description/Category, not groups).
// ---------------------------------------------------------------------------
async function importServices() {
  console.log("\nServices...");
  for (const group of ADD_ON_GROUPS) {
    for (const item of group.items) {
      await put({
        _id: `service.${slugify(group.title)}-${slugify(item.name)}`,
        _type: "service",
        name: item.name,
        price: item.price,
        description: item.description,
        category: group.title,
      });
      console.log(`  + ${item.name}`);
    }
  }
}

async function main() {
  console.log(`Importing into Sanity project ${projectId} (dataset: ${dataset})`);
  await importTeamMembers();
  await importTestimonials();
  await importLocations();
  await importPrograms();
  await importResources();
  await importBlogPosts();
  await importFaqs();
  await importBreedPricing();
  await importServices();
  console.log(`\nDone — wrote/updated ${written} documents.`);
}

main().catch((error) => {
  console.error("\nImport failed:", error);
  process.exit(1);
});
