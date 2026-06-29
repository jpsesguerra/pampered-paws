"use client";

import Link from "next/link";
import Image from "next/image";
import {
  type Location,
  getFullAddress,
  getPhoneLabel,
  getGoogleMapsViewUrl,
} from "@/lib/data/locations";
import { Reveal } from "@/components/ui/Reveal";
import { useToast } from "@/components/ui/ToastProvider";

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

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pamperedpawslimited/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/pamperedpawsltd",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 8.5H16.5V5.5H14.5C12.567 5.5 11 7.067 11 9V11H9V14H11V19H14V14H16L16.5 11H14V9C14 8.72 14.22 8.5 14.5 8.5Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@pamperedpawsltd",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.5 4h-2.2v11.2c0 1.27-1.03 2.3-2.3 2.3a2.3 2.3 0 1 1 0-4.6c.2 0 .39.02.58.06v-2.27a4.57 4.57 0 0 0-.58-.04 4.55 4.55 0 1 0 4.55 4.55V9.3c.84.6 1.87.95 2.97.95V8.05c-1.66 0-3.02-1.34-3.02-3V4z"
          fill="white"
        />
      </svg>
    ),
  },
];

function ContactRow({
  icon,
  as: Tag = "span",
  ...props
}: {
  icon: string;
  as?: "span" | "a" | "button";
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...rest } = props;
  return (
    <Tag
      {...rest}
      className="flex w-full items-center gap-md text-left"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary-light">
        <img src={icon} alt="" className="size-4" />
      </span>
      <span className="font-sans text-label-sm text-text-on-pink">{children}</span>
    </Tag>
  );
}

function LocationFooterCard({
  location,
  delay,
}: {
  location: Location;
  delay: 0 | 100 | 200 | 300 | 400 | 500 | 600;
}) {
  const { showToast } = useToast();

  return (
    <Reveal delay={delay} className="w-full sm:w-[209px]">
      <div className="flex w-full flex-col items-start gap-md lg:pb-3xl">
        <Link href={`/locations/${location.slug}`} className="w-full font-serif text-h6 text-text-on-pink">
          {location.locationName} Salon
        </Link>
        <ContactRow
          as="a"
          href={getGoogleMapsViewUrl(location)}
          target="_blank"
          rel="noopener noreferrer"
          icon="https://res.cloudinary.com/du0witbcr/image/upload/v1782665054/pampered-paws/icons/location-pin-sm.svg"
        >
          {getFullAddress(location)}
        </ContactRow>
        <ContactRow
          as="a"
          href={`tel:${location.phoneCall.replace(/[^0-9+]/g, "")}`}
          icon="https://res.cloudinary.com/du0witbcr/image/upload/v1782665058/pampered-paws/icons/phone.svg"
        >
          {getPhoneLabel(location)}
        </ContactRow>
        <ContactRow
          as="button"
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(location.email);
            showToast("Email copied to your clipboard");
          }}
          icon="https://res.cloudinary.com/du0witbcr/image/upload/v1782665048/pampered-paws/icons/email.svg"
        >
          {location.email}
        </ContactRow>
      </div>
    </Reveal>
  );
}

export function Footer({ locations }: { locations: Location[] }) {
  return (
    <footer className="flex items-center justify-center px-lg py-2xl">
      <div className="flex w-full max-w-[1240px] flex-col gap-3xl rounded-2xl bg-brand-neutral-dark p-lg sm:gap-6xl sm:p-2xl lg:p-[54px]">
        <div className="flex w-full flex-col items-start gap-2xl lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2xl">
            <Image
              src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664981/pampered-paws/images/logo-footer.png"
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
            {locations.map((location, i) => (
              <LocationFooterCard key={location.slug} location={location} delay={REVEAL_DELAYS[i] ?? 600} />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-lg sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-body-sm text-[#A8A8A8]">
            © {new Date().getFullYear()} Pampered Paws Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-md">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <span className="size-4">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
