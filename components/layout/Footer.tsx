// components/layout/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";

const CAR_LINKS = [
  { href: "/cars/mahindra-thar", label: "Mahindra Thar" },
  { href: "/cars/mahindra-thar-roxx", label: "Mahindra Thar Roxx" },
];

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const UNIVERSITY_LINKS = [
  { href: "/rent/msrit-bangalore", label: "Near MSRIT" },
  { href: "/rent/christ-university-bangalore", label: "Near Christ University" },
  { href: "/rent/acharya-college-bangalore", label: "Near Acharya Institute" },
  { href: "/rent/bit-bangalore", label: "Near BIT Bangalore" },
  { href: "/rent/rnsit-bangalore", label: "Near RNSIT" },
  { href: "/rent/sapthagiri-college-bangalore", label: "Near Sapthagiri College" },
];

const AREA_LINKS = [
  { href: "/rent/koramangala-bangalore", label: "Koramangala" },
  { href: "/rent/indiranagar-bangalore", label: "Indiranagar" },
  { href: "/rent/whitefield-bangalore", label: "Whitefield" },
  { href: "/rent/hebbal-bangalore", label: "Hebbal" },
  { href: "/rent/yelahanka-bangalore", label: "Yelahanka" },
  { href: "/rent/electronic-city-bangalore", label: "Electronic City" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general);

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0A0A0A 0%, #0D0D0D 100%)",
        borderTop: "1px solid rgba(201, 168, 76, 0.1)",
      }}
      aria-label="Site footer"
    >
      {/* Gold accent line */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C9A84C 50%, transparent 100%)",
        }}
      />

      <div className="container-luxury pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-5">
              <span
                className="text-3xl font-['Cormorant_Garamond',serif] font-semibold"
                style={{ color: "#C9A84C" }}
              >
                Wheels
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#888880] font-light mt-0.5">
                On Deal
              </span>
            </Link>
            <p className="text-[#888880] text-sm leading-relaxed mb-6 max-w-xs">
              Bangalore&apos;s premium self-drive car rental. Experience the city and beyond in a Mahindra Thar or Thar Roxx.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-2.5 text-[#888880] hover:text-[#C9A84C] transition-colors text-sm group"
              >
                <Phone size={14} className="text-[#C9A84C] group-hover:scale-110 transition-transform" />
                {SITE_CONFIG.contact.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 text-[#888880] hover:text-[#C9A84C] transition-colors text-sm group"
              >
                <Mail size={14} className="text-[#C9A84C] group-hover:scale-110 transition-transform" />
                {SITE_CONFIG.contact.email}
              </a>
              <span className="flex items-center gap-2.5 text-[#888880] text-sm">
                <MapPin size={14} className="text-[#C9A84C] shrink-0" />
                Bangalore, Karnataka
              </span>
            </div>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[#888880] hover:text-[#C9A84C] transition-colors text-sm"
              aria-label="Follow on Instagram"
            >
              <Instagram size={16} className="text-[#C9A84C]" />
              Instagram
            </a>
          </div>

          {/* Cars & Quick Links */}
          <div>
            <h3 className="text-[#C9A84C] uppercase tracking-[0.2em] text-xs font-semibold mb-5 font-['DM_Sans',sans-serif]">
              Our Fleet
            </h3>
            <ul className="space-y-2.5 mb-8">
              {CAR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[#C9A84C] uppercase tracking-[0.2em] text-xs font-semibold mb-5 font-['DM_Sans',sans-serif]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* University Links */}
          <div>
            <h3 className="text-[#C9A84C] uppercase tracking-[0.2em] text-xs font-semibold mb-5 font-['DM_Sans',sans-serif]">
              Near Colleges
            </h3>
            <ul className="space-y-2.5">
              {UNIVERSITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Area Links + CTA */}
          <div>
            <h3 className="text-[#C9A84C] uppercase tracking-[0.2em] text-xs font-semibold mb-5 font-['DM_Sans',sans-serif]">
              By Area
            </h3>
            <ul className="space-y-2.5 mb-8">
              {AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg text-sm font-semibold uppercase tracking-widest w-full"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[#444440] text-xs text-center md:text-left">
            © {currentYear} Wheels On Deal. All rights reserved. Self-drive car rental in Bangalore.
          </p>
          <p className="text-[#444440] text-xs">
            Made with ♥ for Bangalore&apos;s adventurers
          </p>
        </div>
      </div>
    </footer>
  );
}
