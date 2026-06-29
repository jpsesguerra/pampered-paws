// Mirrors the Sanity "Breed Pricing" collection schema — see
// src/sanity/lib/pricing.ts for the actual data-fetching. No image field —
// per explicit instruction, photos are not part of the pricing collection.
export type BreedPricing = {
  breed: string;
  bath: string;
  regularGroom: string;
  showTrim: string;
};
