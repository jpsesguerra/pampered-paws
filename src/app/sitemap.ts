import type { MetadataRoute } from "next";
import { getLocations } from "@/sanity/lib/locations";
import { getPrograms } from "@/sanity/lib/programs";
import { getResources } from "@/sanity/lib/resources";
import { getBlogPosts } from "@/sanity/lib/blog";

const BASE_URL = "https://www.pamperedpaws.com";

const STATIC_ROUTES = [
  "",
  "/grooming",
  "/grooming-prices",
  "/schooling",
  "/schooling/enroll",
  "/locations",
  "/about-us",
  "/franchise",
  "/franchise/enquire",
  "/blog",
  "/resources",
  "/request-an-appointment",
  "/request-an-appointment/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [locations, programs, resources, blogPosts] = await Promise.all([
    getLocations(),
    getPrograms(),
    getResources(),
    getBlogPosts(),
  ]);

  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));

  const locationEntries = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    lastModified,
  }));

  const programEntries = programs.map((program) => ({
    url: `${BASE_URL}/schooling/${program.slug}`,
    lastModified,
  }));

  const resourceEntries = resources.map((resource) => ({
    url: `${BASE_URL}/resources/${resource.slug}`,
    lastModified,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified,
  }));

  return [...staticEntries, ...locationEntries, ...programEntries, ...resourceEntries, ...blogEntries];
}
