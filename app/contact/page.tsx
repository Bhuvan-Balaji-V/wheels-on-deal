// app/contact/page.tsx
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Wheels On Deal — Self-Drive Car Rental Bangalore",
  description:
    "Contact Wheels On Deal for self-drive Thar & Thar Roxx rentals in Bangalore. WhatsApp us for instant booking. Available Mon–Sun, 6AM–10PM.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "WhatsApp / Call",
    value: SITE_CONFIG.contact.phone,
    href: `tel:${SITE_CONFIG.contact.phone}`,
    cta: "Call Now",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.contact.email,
    href: `mailto:${SITE_CONFIG.contact.email}`,
    cta: "Send Email",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka, India",
    href: "https://maps.google.com/?q=Bangalore+Karnataka",
    cta: "View Map",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: SITE_CONFIG.businessHours,
    href: null,
    cta: null,
  },
];

export default function ContactPage() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general);

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <div className="container-luxury max-w-3xl text-center mx-auto">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-semibold">
            Get In Touch
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] mb-4">
            Contact{" "}
            <span className="text-gold-gradient font-semibold italic">Us</span>
          </h1>
          <p className="text-[#888880] text-sm leading-relaxed max-w-md mx-auto">
            We&apos;re available 7 days a week on WhatsApp. Most queries are answered within minutes.
          </p>
        </div>
      </div>

      <main className="py-16" role="main">
        <div className="container-luxury max-w-4xl mx-auto">
          {/* WhatsApp primary CTA */}
          <div
            className="p-8 md:p-12 rounded-3xl text-center mb-16"
            style={{
              background: "linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(37,211,102,0.03) 100%)",
              border: "1px solid rgba(37,211,102,0.2)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-16 h-16 fill-current mx-auto mb-5"
              style={{ color: "#25D366" }}
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              Fastest Way to Reach Us
            </h2>
            <p className="text-[#888880] text-sm mb-6 max-w-md mx-auto">
              WhatsApp us your requirements — car, date, duration, location — and we&apos;ll confirm your booking within minutes.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2.5 px-10 py-5 rounded-xl text-base font-semibold uppercase tracking-widest"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Open WhatsApp Chat
            </a>
            <p className="text-[#444440] text-xs mt-4 uppercase tracking-widest">
              {SITE_CONFIG.whatsapp.display} · Instant reply guaranteed
            </p>
          </div>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <card.icon size={18} style={{ color: "#C9A84C" }} aria-hidden="true" />
                </div>
                <p className="text-[#444440] text-xs uppercase tracking-widest mb-1">
                  {card.label}
                </p>
                <p className="text-[#F5F5F0] text-sm font-medium mb-3">{card.value}</p>
                {card.href && card.cta && (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[#C9A84C] text-xs uppercase tracking-widest hover:underline underline-offset-4"
                  >
                    {card.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="text-center">
            <p className="text-[#888880] text-sm mb-4">Follow Our Adventures</p>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm text-[#F5F5F0] hover:text-[#C9A84C] transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Instagram size={16} className="text-[#C9A84C]" aria-hidden="true" />
              @wheelsondeal
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
