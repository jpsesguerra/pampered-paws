import createImageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImageSource } from "sanity";
import { projectId, dataset } from "./client";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}
