import { client } from "./client";
import { homePageQuery } from "./queries";
import { urlFor } from "./image";
import type { Image as SanityImage } from "sanity";

export type HeroPhoto = { src: string; alt: string };
export type HeroPhotos = { left: HeroPhoto; center: HeroPhoto; right: HeroPhoto };

type HeroImage = SanityImage & { alt?: string };

type HomePageDoc = {
  heroLeft?: HeroImage;
  heroCenter?: HeroImage;
  heroRight?: HeroImage;
};

// Shown for any slot an editor hasn't filled in yet (or if Sanity is unreachable).
const DEFAULT_HERO_PHOTOS: HeroPhotos = {
  left: {
    src: "https://res.cloudinary.com/du0witbcr/image/upload/v1783544610/C80F382A-DF83-4030-9402-3EF6F6213650_y1lbox.jpg",
    alt: "",
  },
  center: {
    src: "https://res.cloudinary.com/du0witbcr/image/upload/v1783908123/IMG_4300-fotor-20260712215837_otc6r7.png",
    alt: "",
  },
  right: {
    src: "https://res.cloudinary.com/du0witbcr/image/upload/v1783544685/pp-cat_upnhef.png",
    alt: "",
  },
};

// Crop server-side to each slot's aspect ratio (331/478 sides, 538/478 center)
// so the editor's hotspot decides what stays in frame.
function toHeroPhoto(image: HeroImage | undefined, width: number, height: number, fallback: HeroPhoto): HeroPhoto {
  if (!image?.asset) return fallback;
  return {
    src: urlFor(image).width(width).height(height).fit("crop").auto("format").url(),
    alt: image.alt ?? "",
  };
}

export async function getHeroPhotos(): Promise<HeroPhotos> {
  let doc: HomePageDoc | null = null;
  try {
    doc = await client.fetch(homePageQuery);
  } catch {
    return DEFAULT_HERO_PHOTOS;
  }
  return {
    left: toHeroPhoto(doc?.heroLeft, 828, 1194, DEFAULT_HERO_PHOTOS.left),
    center: toHeroPhoto(doc?.heroCenter, 1345, 1194, DEFAULT_HERO_PHOTOS.center),
    right: toHeroPhoto(doc?.heroRight, 828, 1194, DEFAULT_HERO_PHOTOS.right),
  };
}
