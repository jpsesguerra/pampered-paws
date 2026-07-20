"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Location } from "@/lib/data/locations";

const NAV_LINKS = [
  { label: "Grooming", href: "/grooming" },
  { label: "Schooling", href: "/schooling" },
  { label: "Franchising", href: "/franchise" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about-us" },
];

// Two even columns, left column first — `grid-flow-col` below fills column 1
// top-to-bottom before spilling into column 2, so this order is
// left-column-then-right, not reading order.
const MOBILE_MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Grooming", href: "/grooming" },
  { label: "Schooling", href: "/schooling" },
  { label: "Franchising", href: "/franchise" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/grooming-prices" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
];

function sanitizePhone(phone: string) {
  return phone.replace(/[^0-9+]/g, "");
}

function MenuToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isOpen ? (
        <path d="M6 6L18 18M18 6L6 18" stroke="#1A181A" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M4 7H20M4 12H20M4 17H20" stroke="#1A181A" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );
}

export function Header({ locations = [] }: { locations?: Location[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bottom sheet is a viewport overlay — keep the page from scrolling behind it while open.
  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex items-center justify-center px-lg py-lg sm:px-xl">
      <div className="flex w-full max-w-[1240px] flex-col">
        <div className="flex w-full items-center justify-center rounded-full bg-surface-white px-lg py-md sm:px-xl sm:py-lg lg:justify-between lg:pl-xl lg:pr-lg">
          <Link href="/" className="block h-[57px] w-[238px] shrink-0 sm:h-[59px] sm:w-[247px]">
            <Image
              src="https://res.cloudinary.com/du0witbcr/image/upload/v1782664982/pampered-paws/images/logo.png"
              alt="Pampered Paws®"
              width={247}
              height={59}
              className="h-full w-full object-contain"
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-2xl lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap font-sans text-btn-primary text-text-primary transition-colors duration-300 hover:text-brand-primary-pink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/request-an-appointment" className="hidden lg:flex">
            Request An Appointment
          </Button>
        </div>

        {/* Mobile bottom-sheet menu: grows up from behind the fixed trigger pill below. */}
        <nav
          id="mobile-menu-panel"
          aria-hidden={!isMenuOpen}
          className={cn(
            "fixed inset-x-0 bottom-0 top-28 z-40 flex origin-bottom flex-col items-center gap-2xl overflow-y-auto rounded-t-[32px] bg-surface-white p-lg pb-[104px] shadow-xl transition-all duration-500 ease-out lg:hidden",
            isMenuOpen
              ? "translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none translate-y-6 scale-y-95 opacity-0"
          )}
        >
          <div className="grid w-full grid-flow-col grid-rows-5 gap-x-lg gap-y-lg">
            {MOBILE_MENU_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-sans text-btn-primary text-text-primary transition-colors duration-300 hover:text-brand-primary-pink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button href="/request-an-appointment" className="w-fit" onClick={closeMenu}>
            Request An Appointment
          </Button>

          <div className="flex w-full flex-col items-center gap-lg">
            {locations.map((location) => (
              <div key={location.slug} className="flex w-full flex-col items-center gap-sm">
                <span className="font-sans text-btn-primary text-text-primary">
                  {location.locationName}
                </span>
                <div className="flex w-full gap-sm">
                  <a
                    href={`tel:${sanitizePhone(location.phoneCall)}`}
                    onClick={closeMenu}
                    className="flex flex-1 items-center justify-center rounded-full bg-brand-background-neutral px-lg py-sm font-sans text-label-default text-text-primary"
                  >
                    Call
                  </a>
                  {location.phoneText && (
                    <a
                      href={`sms:${sanitizePhone(location.phoneText)}`}
                      onClick={closeMenu}
                      className="flex flex-1 items-center justify-center rounded-full bg-brand-background-neutral px-lg py-sm font-sans text-label-default text-text-primary"
                    >
                      Text
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-panel"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="fixed inset-x-0 bottom-lg z-50 mx-auto flex w-fit items-center gap-sm rounded-full bg-surface-white px-xl py-md shadow-lg lg:hidden"
        >
          <MenuToggleIcon isOpen={isMenuOpen} />
          <span className="font-sans text-btn-primary text-text-primary">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>
    </header>
  );
}
