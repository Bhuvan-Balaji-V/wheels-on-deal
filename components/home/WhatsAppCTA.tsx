"use client";
// components/home/WhatsAppCTA.tsx
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/config";
import { Phone } from "lucide-react";

interface WhatsAppCTAProps {
  variant?: "dark" | "gold";
  heading?: string;
  subtext?: string;
  message?: string;
}

export function WhatsAppCTA({
  variant = "dark",
  heading = "Ready to Hit the Road?",
  subtext = "Book your self-drive Thar or Thar Roxx in Bangalore — right now, on WhatsApp.",
  message = WA_MESSAGES.general,
}: WhatsAppCTAProps) {
  const waUrl = buildWhatsAppUrl(message);

  if (variant === "gold") {
    return (
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        aria-label="Book on WhatsApp CTA"
        style={{
          background: "linear-gradient(135deg, #C9A84C 0%, #E2C97E 40%, #8B6914 100%)",
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <div className="container-luxury text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-semibold text-[#0A0A0A] mb-4">
            {heading}
          </h2>
          <p className="text-[#0A0A0A]/70 max-w-md mx-auto mb-8 text-sm leading-relaxed">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#0A0A0A] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#161616] transition-all shadow-2xl w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book on WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 px-8 py-4 rounded-lg text-[#0A0A0A] text-sm font-semibold uppercase tracking-widest border border-[#0A0A0A33] hover:bg-[#0A0A0A10] transition-all w-full sm:w-auto justify-center"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
          <p className="text-[#0A0A0A]/50 text-xs mt-5 uppercase tracking-widest">
            Mon–Sun · 6:00 AM – 10:00 PM · Instant Confirmation
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      aria-label="Book on WhatsApp CTA"
      style={{ background: "#0A0A0A" }}
    >
      {/* Gold glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      <div className="container-luxury text-center relative z-10">
        <div
          className="max-w-2xl mx-auto p-10 md:p-14 rounded-2xl"
          style={{
            background: "rgba(201,168,76,0.04)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] mt-3 mb-4">
            {heading}
          </h2>
          <p className="text-[#888880] max-w-md mx-auto mb-8 text-sm leading-relaxed">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book on WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 px-8 py-4 rounded-lg text-[#888880] text-sm font-semibold uppercase tracking-widest border border-[#ffffff10] hover:border-[#C9A84C33] hover:text-[#C9A84C] transition-all w-full sm:w-auto justify-center"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>
          <p className="text-[#444440] text-xs mt-5 uppercase tracking-widest">
            Mon–Sun · 6AM–10PM · Instant Reply Guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
