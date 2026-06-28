import fs from "node:fs";
import path from "node:path";
import type { SanityClient } from "@sanity/client";

const uploadCache = new Map<string, string>();

function filenameFromUrl(url: string): string {
  const clean = url.split("?")[0];
  return decodeURIComponent(clean.split("/").pop() || "asset");
}

export async function uploadImageFromUrl(client: SanityClient, url: string | undefined | null) {
  if (!url) return undefined;
  if (uploadCache.has(url)) {
    return { _type: "image" as const, asset: { _type: "reference" as const, _ref: uploadCache.get(url)! } };
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ! image fetch failed (${res.status}): ${url}`);
    return undefined;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, { filename: filenameFromUrl(url) });
  uploadCache.set(url, asset._id);
  return { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
}

export async function uploadFileFromUrl(client: SanityClient, url: string | undefined | null) {
  if (!url) return undefined;
  if (uploadCache.has(url)) {
    return { _type: "file" as const, asset: { _type: "reference" as const, _ref: uploadCache.get(url)! } };
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ! file fetch failed (${res.status}): ${url}`);
    return undefined;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("file", buffer, { filename: filenameFromUrl(url) });
  uploadCache.set(url, asset._id);
  return { _type: "file" as const, asset: { _type: "reference" as const, _ref: asset._id } };
}

export async function uploadImageFromLocalPath(client: SanityClient, relativePath: string | undefined | null) {
  if (!relativePath) return undefined;
  const absPath = path.join(process.cwd(), "public", relativePath.replace(/^\//, ""));
  if (uploadCache.has(absPath)) {
    return { _type: "image" as const, asset: { _type: "reference" as const, _ref: uploadCache.get(absPath)! } };
  }
  if (!fs.existsSync(absPath)) {
    console.warn(`  ! local image not found: ${absPath}`);
    return undefined;
  }
  const buffer = fs.readFileSync(absPath);
  const asset = await client.assets.upload("image", buffer, { filename: path.basename(absPath) });
  uploadCache.set(absPath, asset._id);
  return { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
}
