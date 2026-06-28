/**
 * Rewrites every local asset reference in src/ to its Cloudinary URL, using
 * the mapping produced by cloudinary-upload.ts. Run after that script.
 *
 * Run with: npm run cloudinary:replace
 */
import fs from "node:fs";
import path from "node:path";

const mapPath = path.join(process.cwd(), "scripts", "cloudinary-map.json");
if (!fs.existsSync(mapPath)) {
  console.error(`Missing ${mapPath} — run "npm run cloudinary:upload" first.`);
  process.exit(1);
}
const map: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, "utf-8"));
const localRefs = Object.keys(map).sort((a, b) => b.length - a.length); // longest first, avoids partial-prefix collisions

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full));
    } else if (/\.(tsx?|css)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const srcFiles = walk(path.join(process.cwd(), "src"));
let totalReplacements = 0;
let filesChanged = 0;

for (const file of srcFiles) {
  let content = fs.readFileSync(file, "utf-8");
  let fileReplacements = 0;

  for (const localRef of localRefs) {
    const cloudUrl = map[localRef];
    // Match the local path only when it's a full quoted string value
    // (e.g. "/images/Cat.png"), so partial path collisions can't happen.
    const pattern = new RegExp(`(["'\`])${localRef.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\1`, "g");
    const before = content;
    content = content.replace(pattern, (_match, quote) => `${quote}${cloudUrl}${quote}`);
    if (content !== before) {
      fileReplacements += (before.match(pattern) ?? []).length;
    }
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(file, content);
    filesChanged += 1;
    totalReplacements += fileReplacements;
    console.log(`  ${path.relative(process.cwd(), file)}: ${fileReplacements} replacement(s)`);
  }
}

console.log(`\nDone — ${totalReplacements} replacement(s) across ${filesChanged} file(s).`);
