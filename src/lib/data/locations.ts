/**
 * Mirrors the planned Sanity "Location" collection schema. Field names match
 * the Sanity document 1:1 so this file can be swapped for a GROQ query later
 * without changing any component prop shapes.
 *
 * - `testimonials` is a manual reference array (max 3) — resolved below via
 *   getTestimonialsByIds from src/lib/data/testimonials.ts.
 * - `teamMembers` is NOT a field on this document. It's a query relationship:
 *   Team Member documents store a `locationKey` and are looked up by it (see
 *   getTeamMembersByLocationKey in src/lib/data/teamMembers.ts). `locationKey`
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
  testimonialIds: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "toronto",
    locationKey: "toronto",
    metaTitle: "Pampered Paws Toronto | Pet Grooming on Millwood Rd",
    metaDescription:
      "Our founding pet grooming salon in Midtown Toronto, run by Lesley Weeks since 1979. Book a Regular Groom, Bath, or specialty service.",
    locationName: "Toronto",
    heroSubtext:
      "Serving Toronto pet owners since 1979 — from our Midtown salon on Millwood Road. Expert grooming built around your pet's coat, temperament, and your standards. No compromises, no surprises.",
    heroImage: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664981/pampered-paws/images/location-toronto.png",
    heroCtaLabel: "Request an Appointment in Toronto",
    address: "317 Millwood Rd",
    city: "Toronto",
    postalCode: "M4S 1J9",
    neighbourhoodsServed: ["Lawrence Park", "Davisville Village", "Leaside"],
    phoneCall: "(416) 962-7877",
    phoneText: "(416) 904-2652",
    email: "lesley@pamperedpaws.com",
    staffNotificationEmail: "lesley@pamperedpaws.com",
    bookingMethod: "form",
    hours: ["Monday to Saturday: 9am – 6pm", "Sunday: Closed"],
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=317%20Millwood%20Rd%2C%20Toronto%2C%20ON%20M4S%201J9&output=embed",
    geoLat: 43.7039,
    geoLng: -79.3854,
    teamHeading: "The people behind our Toronto salon",
    teamIntro:
      "Lesley Weeks has been grooming in Toronto since 1985 — she founded Pampered Paws and still works the floor at our Millwood Road location. Every groomer on this team is trained to her standard: patient with nervous pets, precise with every coat, and honest about what your pet actually needs.",
    testimonialIds: ["nadine-m"],
  },
  {
    slug: "mississauga",
    locationKey: "mississauga",
    metaTitle: "Pampered Paws Mississauga | Pet Grooming on Lakeshore Rd",
    metaDescription:
      "Pet grooming in Mississauga, run by Eggie Feng. Book a Regular Groom, Bath, or specialty service at our Lakeshore Rd E salon.",
    locationName: "Mississauga",
    heroSubtext:
      "Run by Eggie Feng on Lakeshore Road East — expert grooming built around your pet's coat, temperament, and your standards. No compromises, no surprises.",
    heroImage: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664974/pampered-paws/images/location-mississauga.png",
    heroCtaLabel: "Request an Appointment in Mississauga",
    address: "92 Lakeshore Rd E",
    city: "Mississauga",
    postalCode: "L5G 4S2",
    neighbourhoodsServed: ["Port Credit", "Mineola", "Lakeview"],
    phoneCall: "(905) 278-9663",
    email: "eggie@pamperedpaws.com",
    staffNotificationEmail: "eggie@pamperedpaws.com",
    bookingMethod: "form",
    hours: ["Monday to Saturday: 9am – 6pm", "Sunday: Closed"],
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=92%20Lakeshore%20Rd%20E%2C%20Mississauga%2C%20ON%20L5G%204S2&output=embed",
    geoLat: 43.5563,
    geoLng: -79.5783,
    teamHeading: "The people behind our Mississauga salon",
    teamIntro:
      "Eggie Feng leads our Lakeshore Road salon, known for being patient and precise with even the most anxious pets. The team here brings the same standard to every cut: careful handling, honest advice, and a result that matches what you actually asked for.",
    testimonialIds: ["ness-spence-1", "ness-spence-2"],
  },
  {
    slug: "scarborough",
    locationKey: "scarborough",
    metaTitle: "Pampered Paws Scarborough | Pet Grooming in the Guild",
    metaDescription:
      "Pet grooming inside Muddy Paws in the Guild, Scarborough. Call to book a Regular Groom, Bath, or specialty service.",
    locationName: "Scarborough",
    heroSubtext:
      "Inside Muddy Paws in the Guild — expert grooming built around your pet's coat, temperament, and your standards. No compromises, no surprises.",
    heroImage: "https://res.cloudinary.com/du0witbcr/image/upload/v1782664978/pampered-paws/images/location-scarborough.png",
    heroCtaLabel: "Call our Scarborough team",
    address: "123 Guildwood Pkwy",
    city: "Scarborough",
    postalCode: "M1E 4V2",
    neighbourhoodsServed: ["The Guild", "Guildwood", "West Hill"],
    phoneCall: "(647) 204-1362",
    email: "info@pamperedpaws.com",
    staffNotificationEmail: "info@pamperedpaws.com",
    bookingMethod: "phone",
    hours: ["Monday to Saturday: 9am – 6pm", "Sunday: Closed"],
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=123%20Guildwood%20Pkwy%2C%20Scarborough%2C%20ON%20M1E%204V2&output=embed",
    geoLat: 43.7515,
    geoLng: -79.1864,
    teamHeading: "The people behind our Scarborough salon",
    teamIntro:
      "Our Scarborough team grooms out of Muddy Paws in the Guild, bringing the same Pampered Paws standard to every appointment: careful handling, honest advice, and a result that matches what you asked for.",
    testimonialIds: [],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}

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
