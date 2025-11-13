"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book" },
  { href: "/whatsapp", label: "WhatsApp" },
  { href: "/app", label: "App" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm uppercase tracking-wide text-accent-black">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg md:text-xl" aria-label="Tow Rides home">
          <Image
            src="/media/logo.png"
            alt="Tow Rides logo"
            width={180}
            height={72}
            className="h-12 w-auto md:h-14"
            priority
          />
          <span className="sr-only">Tow Rides</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative pb-1 text-accent-black transition-colors duration-300 hover:text-primary"
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"} origin-left`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button href="/book" glow="white">
            Book Now
          </Button>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black text-xl text-accent-black transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-black/10 bg-white px-6 pb-6 lg:hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col gap-4 pt-4 text-base uppercase tracking-wider text-accent-black">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-xl border border-transparent px-4 py-3 transition hover:border-black/20 hover:bg-primary/10 ${isActive ? "text-primary" : "text-accent-black"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/book" onClick={closeMenu} className="w-full justify-center">
                Book Now
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

