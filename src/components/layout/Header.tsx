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
  return (
    <header className="flex items-center justify-center py-lg">
      <div className="flex w-full max-w-[1240px] items-center justify-between rounded-full bg-surface-white py-lg pl-xl pr-lg">
        <Link href="/" className="block h-[59px] w-[247px] shrink-0">
          <Image
            src="/images/logo.png"
            alt="Pampered Paws"
            width={247}
            height={59}
            className="h-full w-full object-contain"
            priority
          />
        </Link>
        <div className="flex items-center justify-center gap-2xl">
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
      </div>
    </header>
  );
}
