"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       href: "/",           anchor: "" },
  { label: "About",      href: "/#about",     anchor: "about" },
  { label: "Watch Sets", href: "/#gallery",   anchor: "gallery" },
  { label: "Events",     href: "/#events",    anchor: "events" },
  { label: "Photos",     href: "/photos",     anchor: "" },
  { label: "Reviews",    href: "/#reviews",   anchor: "reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const ids = ["about", "gallery", "events", "bookings"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.anchor) return activeSection === link.anchor;
    return false;
  };

  return (
    <>
      <header
        className={`w-full py-5 px-6 sm:px-10 lg:px-16 flex items-center justify-between z-50 sticky top-0 transition-all duration-300 ${
          scrolled
            ? "bg-neutral/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-headline font-black text-xl tracking-tighter text-white hover:text-primary transition-colors uppercase"
        >
          Yash<span className="text-primary">.</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative transition-colors duration-200 hover:text-white group ${
                isActive(link) ? "text-white" : ""
              }`}
            >
              {link.label}
              {/* Neon underline on active */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  isActive(link) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right: Book Now + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/#bookings"
            className="hidden sm:flex items-center gap-2 bg-primary hover:bg-[#caef00] text-black font-black text-[10px] tracking-[0.25em] uppercase px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(227,255,0,0.15)] hover:shadow-[0_0_30px_rgba(227,255,0,0.35)]"
          >
            Book Now
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="lg:hidden text-white hover:text-primary transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-neutral flex flex-col pt-24 px-8 pb-10">
          {/* Close hit-area at top */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-white hover:text-primary transition-colors p-1"
            aria-label="Close Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-headline font-black text-4xl tracking-tighter uppercase py-3 border-b border-white/5 transition-colors ${
                  isActive(link) ? "text-primary" : "text-white hover:text-primary"
                }`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link
              href="/#bookings"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-primary text-black font-black text-[11px] tracking-[0.25em] uppercase py-4 mt-8"
            >
              Book Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
