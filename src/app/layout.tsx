import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { getLocations } from "@/sanity/lib/locations";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pampered Paws | Professional Pet Grooming & Grooming School",
  description:
    "Pampered Paws offers professional pet grooming, grooming school programs, and franchise opportunities across Mississauga, Toronto, Scarborough, and Tokyo.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locations = await getLocations();
  return (
    <html lang="en">
      <head>
        {/* TODO: replace with the project's Adobe Fonts (Typekit) kit embed, e.g.
            <script src="https://use.typekit.net/<kit-id>.js"></script>
            <script>try{Typekit.load({ async: true });}catch(e){}</script>
            Using a temporary Google Fonts fallback below until the kit ID is provided —
            do not ship this fallback to production. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Urbanist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans text-text-primary bg-brand-background-neutral">
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer locations={locations} />
        </ToastProvider>
      </body>
    </html>
  );
}
