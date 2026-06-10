// app/rent/bangalore/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS, ADDITIONAL_LOCATIONS } from "@/data/locations";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Self Drive Car Rental Bangalore | Thar Rental Bangalore | Wheels On Deal",
  description:
    "Premium self-drive car rental in Bangalore. Rent Mahindra Thar & Thar Roxx across 50+ locations in Bangalore. Near colleges, IT parks, and residential areas. Book via WhatsApp.",
  keywords:
    "self drive car rental bangalore, car rental bangalore, thar rental bangalore, SUV rental bangalore, self drive bangalore",
  alternates: { canonical: `${SITE_CONFIG.url}/rent/bangalore` },
};

const LOCATION_CATEGORIES = [
  {
    title: "Near Engineering Colleges",
    locations: LOCATIONS.filter((l) => l.type === "university"),
  },
  {
    title: "Popular Localities",
    locations: LOCATIONS.filter((l) => l.type === "locality"),
  },
];

export default function BangalorePage() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general);

  return (
    <>
      <div className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#444440] mb-6">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#888880]">Bangalore</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={16} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold">
              Karnataka, India
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4 leading-tight">
            Self-Drive Car Rental{" "}
            <span className="text-gold-gradient italic">Bangalore</span>
          </h1>
          <p className="text-[#888880] max-w-2xl text-sm leading-relaxed mb-8">
            Wheels On Deal offers premium Mahindra Thar & Thar Roxx self-drive rentals across 50+ locations in Bangalore. From Yelahanka in the north to Electronic City in the south — we deliver to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book on WhatsApp
            </a>
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest text-[#C9A84C] w-full sm:w-auto justify-center"
              style={{ border: "1px solid rgba(201,168,76,0.3)" }}
            >
              View Fleet
            </Link>
          </div>
        </div>
      </div>

      <main className="py-16" role="main">
        <div className="container-luxury space-y-16">
          {LOCATION_CATEGORIES.map((category) => (
            <section key={category.title} aria-labelledby={`cat-${category.title}`}>
              <h2
                id={`cat-${category.title}`}
                className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-8"
              >
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/rent/${loc.slug}`}
                    className="group flex items-start gap-4 p-5 rounded-xl transition-all hover:border-[#C9A84C40] hover:translate-y-[-2px]"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#C9A84C20]"
                      style={{
                        background: "rgba(201,168,76,0.06)",
                        border: "1px solid rgba(201,168,76,0.12)",
                      }}
                    >
                      <MapPin size={15} style={{ color: "#C9A84C" }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#F5F5F0] font-semibold text-sm group-hover:text-[#C9A84C] transition-colors">
                        {loc.name}
                      </p>
                      <p className="text-[#444440] text-xs mt-0.5 truncate">{loc.area}</p>
                      {loc.type === "university" && (
                        <p className="text-[#C9A84C] text-[10px] mt-1 truncate">{loc.landmark}</p>
                      )}
                    </div>
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-[#444440] group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all mt-0.5"
                    />
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* More locations */}
          <section aria-label="More locations">
            <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-8">
              More Areas We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {ADDITIONAL_LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/rent/${loc.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs text-[#888880] hover:text-[#C9A84C] transition-all hover:border-[#C9A84C40] hover:bg-[#C9A84C08]"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <MapPin size={10} />
                  {loc.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Why Bangalore + Wheels On Deal */}
          <section aria-label="About Bangalore self-drive rentals">
            <div
              className="p-8 md:p-12 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
                Why Self-Drive in Bangalore?
              </h2>
              <div className="prose-custom space-y-4 text-[#888880] text-sm leading-relaxed">
                <p>
                  Bangalore is a city that rewards those who venture beyond the ordinary. While Namma Metro and Ola are fine for commutes, they simply can&apos;t match the freedom of having your own wheels — especially when the destination is Nandi Hills at 5AM or Coorg&apos;s coffee estates.
                </p>
                <p>
                  With Wheels On Deal&apos;s self-drive Mahindra Thar rental, you get the ultimate Bangalore experience: drive when you want, stop where you want, and arrive in a car that actually turns heads.
                </p>
                <p>
                  Our service covers all of Bangalore — North Bangalore (Yelahanka, Hebbal, MSRIT), South Bangalore (Electronic City, JP Nagar, Christ University), East Bangalore (Whitefield, Marathahalli, KR Puram), and West Bangalore (Rajajinagar, Malleswaram). Wherever you are, we deliver.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <WhatsAppCTA
        variant="gold"
        heading="Rent a Thar Anywhere in Bangalore"
        subtext="50+ locations covered. WhatsApp us your pickup point and we'll sort the rest."
      />
    </>
  );
}
