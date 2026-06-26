"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Grooming", href: "/grooming" },
  { label: "Schooling", href: "/schooling" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-center px-lg py-lg sm:px-xl">
      <div className="flex w-full max-w-[1240px] flex-col">
        <div className="flex w-full items-center justify-between rounded-full bg-surface-white py-md pl-lg pr-md sm:py-lg sm:pl-xl sm:pr-lg">
          <Link href="/" className="block h-[44px] w-[183px] shrink-0 sm:h-[59px] sm:w-[247px]">
            <Image
              src="/images/logo.png"
              alt="Pampered Paws"
              width={247}
              height={59}
              className="h-full w-full object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center justify-center gap-2xl lg:flex">
            <nav className="flex items-center justify-center gap-2xl">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap font-sans text-btn-primary text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href="/request-an-appointment">Request An Appointment</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex size-10 shrink-0 items-center justify-center rounded-full lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path d="M6 6L18 18M18 6L6 18" stroke="#1A181A" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="#1A181A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-sm flex flex-col items-start gap-md rounded-2xl bg-surface-white p-lg lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="w-full font-sans text-btn-primary text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/request-an-appointment" className="w-full">
              Request An Appointment
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
