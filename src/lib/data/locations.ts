import type { Testimonial } from "@/lib/data/testimonials";

/**
 * Mirrors the Sanity "Location" collection schema — see src/sanity/lib/locations.ts
 * for the actual data-fetching. This file now only holds the shared type and
 * the pure presentation helpers below (used regardless of data source).
 *
 * - `testimonials` is a real reference array on the Sanity document (max 3),
 *   resolved server-side in the GROQ query — already-expanded Testimonial
 *   objects, not ids.
 * - `teamMembers` is NOT a field on this document. It's a query relationship:
 *   Team Member documents store a `locationKey` and are looked up by it (see
 *   getTeamMembersByLocationKey in src/sanity/lib/teamMembers.ts). `locationKey`
 *   below is that join key and is the same value as `slug`.
 */
export type BookingMethod = "form" | "phone";

export type Location = {
  slug: string;
  locationKey: string;
  metaTitle: string;
  metaDescription: string;
  locationName: string;
  heroSubtext: string;
  heroImage: string;
  heroCtaLabel: string;
  address: string;
  city: string;
  postalCode: string;
  neighbourhoodsServed: string[];
  phoneCall: string;
  phoneText?: string;
  email: string;
  staffNotificationEmail: string;
  bookingMethod: BookingMethod;
  hours: string[];
  googleMapsEmbedUrl: string;
  geoLat: number;
  geoLng: number;
  teamHeading: string;
  teamIntro: string;
  testimonials: Testimonial[];
};

export function getFullAddress(location: Location): string {
  return `${location.address}, ${location.city}, ON ${location.postalCode}`;
}

export function getPhoneLabel(location: Location): string {
  return location.phoneText
    ? `Call: ${location.phoneCall} · Text: ${location.phoneText}`
    : `Call: ${location.phoneCall}`;
}

export function getBookingNote(location: Location): string {
  if (location.bookingMethod === "phone") {
    return "Scarborough books by phone — give us a call and we'll get your pet scheduled."
      .replace("Scarborough", location.locationName);
  }
  return location.phoneText
    ? "Book by phone, text, or online inquiry"
    : "Book by phone or online inquiry";
}

export function getAppointmentHref(location: Location): string {
  return `/request-an-appointment?location=${location.locationKey}`;
}

export function getGoogleMapsViewUrl(location: Location): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress(location))}`;
}
