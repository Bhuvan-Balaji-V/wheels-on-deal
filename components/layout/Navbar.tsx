"use client";
// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          aria-label="Wheels On Deal Home"
        >
          <span
            className="text-2xl font-['Cormorant_Garamond',serif] font-semibold tracking-tight"
            style={{ color: "#C9A84C" }}
          >
            Wheels
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#888880] font-['DM_Sans',sans-serif] font-light">
            On Deal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#888880] hover:text-[#C9A84C] uppercase tracking-widest font-['DM_Sans',sans-serif] font-medium transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className="text-[#888880] hover:text-[#C9A84C] transition-colors duration-300 p-2"
            aria-label="Call us"
          >
            <Phone size={18} />
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-widest"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F5F5F0] p-2 transition-colors hover:text-[#C9A84C]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="container-luxury py-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#F5F5F0] py-3 border-b border-[#ffffff08] text-base font-['DM_Sans',sans-serif] font-medium tracking-wide hover:text-[#C9A84C] transition-colors flex items-center justify-between group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
              <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="btn-whatsapp mt-4 py-5 rounded-lg text-center text-base font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book on WhatsApp
          </a>
          <a
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className="mt-2 py-3.5 rounded-lg text-center text-sm font-medium tracking-wide border border-[#ffffff15] text-[#888880] hover:text-[#C9A84C] hover:border-[#C9A84C33] transition-all flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            {SITE_CONFIG.contact.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
