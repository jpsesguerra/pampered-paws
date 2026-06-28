/**
 * Bulk-uploads public/images and public/icons to Cloudinary with predictable
 * public_ids (no random suffixes — see cloudinary-instructions.md for why
 * the drag-and-drop Media Library UI is avoided here).
 *
 * Run with: npm run cloudinary:upload
 * Requires CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET
 * in .env.local.
 *
 * Writes scripts/cloudinary-map.json mapping each local path (e.g.
 * "/images/Cat.png") to its Cloudinary secure_url. cloudinary-replace.ts
 * reads that file to update source references.
 */
import { config as loadEnv } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { v2 as cloudinary } from "cloudinary";

loadEnv({ path: path.join(process.cwd(), ".env.local") });

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("Missing CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET in .env.local");
  process.exit(1);
}

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });

const CLOUD_FOLDER = "pampered-paws";

// Confirmed-dead files (not referenced anywhere in src/) — excluded rather
// than uploaded. See conversation: leftover from earlier hero-photo /
// location-photo iterations, superseded by Cat.png/Dog.png/Lesley.png and
// location-*.png respectively.
const EXCLUDE = new Set([
  "images/grooming-hero.png",
  "images/hero-1.png",
  "images/hero-2.png",
  "images/hero-3.png",
  "images/locations/mississauga.png",
  "images/locations/scarborough.png",
  "images/locations/toronto.png",
]);

function walk(dir: string, root: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full, root));
    } else if (!entry.name.startsWith(".")) {
      files.push(path.relative(root, full));
    }
  }
  return files;
}

const publicDir = path.join(process.cwd(), "public");
const allFiles = [...walk(path.join(publicDir, "images"), publicDir), ...walk(path.join(publicDir, "icons"), publicDir)]
  .map((f) => f.split(path.sep).join("/"))
  .filter((f) => !EXCLUDE.has(f));

const VIDEO_EXTENSIONS = new Set([".mov", ".mp4", ".webm"]);

async function main() {
  console.log(`Uploading ${allFiles.length} assets to Cloudinary folder "${CLOUD_FOLDER}"...\n`);
  const map: Record<string, string> = {};

  for (const relFile of allFiles) {
    const ext = path.extname(relFile);
    const withoutExt = relFile.slice(0, -ext.length);
    const publicId = `${CLOUD_FOLDER}/${withoutExt}`;
    const isVideo = VIDEO_EXTENSIONS.has(ext.toLowerCase());
    const absPath = path.join(publicDir, relFile);

    const result = await cloudinary.uploader.upload(absPath, {
      public_id: publicId,
      resource_type: isVideo ? "video" : "image",
      overwrite: true,
      unique_filename: false,
      use_filename: true,
    });

    const localRef = `/${relFile}`;
    map[localRef] = result.secure_url;
    console.log(`  + ${localRef} -> ${result.secure_url}`);
  }

  const mapPath = path.join(process.cwd(), "scripts", "cloudinary-map.json");
  fs.writeFileSync(mapPath, JSON.stringify(map, null, 2));
  console.log(`\nDone — wrote ${Object.keys(map).length} entries to ${mapPath}`);
}

main().catch((error) => {
  console.error("\nUpload failed:", error);
  process.exit(1);
});
