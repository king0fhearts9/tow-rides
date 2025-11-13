import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const socials = [
  { href: "https://instagram.com", icon: <FiInstagram />, label: "Instagram" },
  { href: "https://facebook.com", icon: <FiFacebook />, label: "Facebook" },
  { href: "https://x.com", icon: <FiTwitter />, label: "X" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-accent-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold uppercase tracking-wider text-primary">
            Tow Rides
          </p>
          <p className="max-w-md text-sm text-accent-black/70">
            Reliable roadside assistance, anytime you need us. Tow Rides verified drivers are on standby 24/7 to keep you safe and moving.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav className="flex flex-wrap gap-5 text-sm uppercase tracking-widest text-accent-black/70">
            <Link href="/terms" className="transition hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="transition hover:text-primary">
              Privacy
            </Link>
            <Link href="/about" className="transition hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3 text-xl text-accent-black/70">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 bg-white">
        <p className="mx-auto max-w-7xl px-6 py-4 text-xs uppercase tracking-[0.3em] text-accent-black/50">
          © {new Date().getFullYear()} Tow Rides — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

