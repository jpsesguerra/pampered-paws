/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // TODO: remove once all Figma-hosted images are migrated to Cloudinary/Sanity
      { protocol: "https", hostname: "*.figma.com" },
      // TODO: migrate Blog/Resources CSV image URLs to Cloudinary or Sanity in Phase 3
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
};

export default nextConfig;
