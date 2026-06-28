import Link from "next/link";
import Image from "next/image";
import { LOCATIONS, getFullAddress, getPhoneLabel } from "@/lib/data/locations";
import { Reveal } from "@/components/ui/Reveal";

const REVEAL_DELAYS = [0, 100, 200, 300, 400, 500, 600] as const;

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

const PROGRAM_LINKS = [
  { label: "Grooming", href: "/grooming" },
  { label: "Schooling", href: "/schooling" },
  { label: "Franchising", href: "/franchise" },
  { label: "Pricing", href: "/grooming-prices" },
];

function ContactRow({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-md">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary-light">
        <img src={icon} alt="" className="size-4" />
      </span>
      <span className="font-sans text-label-sm text-text-on-pink">{children}</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-center px-lg py-2xl">
      <div className="flex w-full max-w-[1240px] flex-col gap-3xl rounded-2xl bg-brand-neutral-dark p-lg sm:gap-6xl sm:p-2xl lg:p-[54px]">
        <div className="flex w-full flex-col items-start gap-2xl lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2xl">
            <Image
              src="/images/logo-footer.png"
              alt="Pampered Paws"
              width={244}
              height={72}
              className="h-[60px] w-[203px] object-contain sm:h-[72px] sm:w-[244px]"
            />
            <div className="flex w-full gap-2xl">
              <div className="flex flex-col items-start gap-lg">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-label-lg text-text-on-pink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-start gap-lg">
                {PROGRAM_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-label-lg text-text-on-pink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2xl sm:flex-row sm:flex-wrap lg:flex-1 lg:justify-end lg:gap-lg">
            {LOCATIONS.map((location, i) => (
              <Reveal
                key={location.slug}
                delay={REVEAL_DELAYS[i] ?? 600}
                className="w-full sm:w-[209px]"
              >
                <Link
                  href={`/locations/${location.slug}`}
                  className="flex w-full flex-col items-start gap-md lg:pb-3xl"
                >
                  <h3 className="w-full font-serif text-h6 text-text-on-pink">
                    {location.locationName} Salon
                  </h3>
                  <ContactRow icon="/icons/location-pin-sm.svg">{getFullAddress(location)}</ContactRow>
                  <ContactRow icon="/icons/phone.svg">{getPhoneLabel(location)}</ContactRow>
                  <ContactRow icon="/icons/email.svg">{location.email}</ContactRow>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="w-full font-sans text-body-sm text-[#A8A8A8]">
          © {new Date().getFullYear()} Pampered Paws Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
