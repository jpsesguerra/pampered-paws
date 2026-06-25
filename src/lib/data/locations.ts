import type { Location } from "@/components/ui/LocationCard";

export const LOCATIONS: Location[] = [
  {
    slug: "toronto",
    name: "Toronto",
    tagline: "Our founding location, run by Lesley Weeks",
    address: "317 Millwood Rd, Toronto, ON M4S 1J9",
    phoneLabel: "Call: (416) 962-7877 · Text: (416) 904-2652",
    bookingNote: "Book by phone, text, or online inquiry",
    mapImage: "/images/location-toronto.png",
    bookOnline: true,
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    tagline: "Run by Eggie Feng",
    address: "92 Lakeshore Rd E, Mississauga, ON L5G 4S2",
    phoneLabel: "Call: (905) 278-9663",
    bookingNote: "Book by phone or online inquiry",
    mapImage: "/images/location-mississauga.png",
    bookOnline: true,
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    tagline: "Inside Muddy Paws in the Guild",
    address: "123 Guildwood Pkwy, Scarborough, ON M1E 4V2",
    phoneLabel: "Call to book: (647) 204-1362",
    bookingNote: "Scarborough books by phone — give us a call and we'll get your pet scheduled.",
    mapImage: "/images/location-scarborough.png",
    bookOnline: false,
  },
];
