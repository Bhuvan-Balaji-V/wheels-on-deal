// app/cars/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { CARS } from "@/data/cars";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Our Fleet | Mahindra Thar & Thar Roxx Self-Drive Rental Bangalore",
  description:
    "Choose between Mahindra Thar and Thar Roxx for self-drive rental in Bangalore. Both available across 50+ locations. Compare features and book via WhatsApp.",
  keywords:
    "thar rental bangalore, mahindra thar self drive, thar roxx rental, SUV rental bangalore fleet",
  alternates: { canonical: `${SITE_CONFIG.url}/cars` },
};

export default function CarsPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <div className="container-luxury text-center">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-semibold">
            Our Fleet
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] mb-4">
            Choose Your{" "}
            <span className="text-gold-gradient font-semibold italic">Ride</span>
          </h1>
          <p className="text-[#888880] max-w-lg mx-auto text-sm leading-relaxed">
            Two iconic Mahindra SUVs. Each one engineered for a different kind of adventurer.
          </p>
        </div>
      </div>

      {/* Car cards */}
      <main className="py-16 container-luxury" role="main">
        <div className="space-y-20">
          {CARS.map((car, i) => {
            const waMsg = car.slug === "mahindra-thar" ? WA_MESSAGES.thar : WA_MESSAGES.tharRoxx;
            const waUrl = buildWhatsAppUrl(waMsg);
            const isEven = i % 2 === 0;

            return (
              <article
                key={car.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                aria-label={`${car.name} — self-drive rental`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? "lg:order-2" : ""}`}>
                  {car.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="px-3 py-1.5 text-xs uppercase tracking-widest font-semibold rounded-full"
                        style={{
                          background: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.35)",
                          color: "#C9A84C",
                        }}
                      >
                        {car.badge}
                      </span>
                    </div>
                  )}
                  <Image
                    src={car.images.hero}
                    alt={`${car.name} self-drive rental Bangalore`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.3) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Star size={14} className="fill-[#C9A84C] text-[#C9A84C]" aria-hidden="true" />
                    <span className="text-[#888880] text-xs">4.9 · Highly Rated</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-2">
                    {car.name}
                  </h2>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-4">
                    {car.tagline}
                  </p>
                  <p className="text-[#888880] leading-relaxed mb-6 text-sm">
                    {car.description}
                  </p>

                  {/* Key highlights */}
                  <ul className="space-y-2.5 mb-8" aria-label="Key highlights">
                    {car.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-[#888880]">
                        <CheckCircle size={14} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {car.specifications.slice(0, 4).map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <p className="text-[#444440] text-[10px] uppercase tracking-wider mb-1">
                          {spec.label}
                        </p>
                        <p className="text-[#F5F5F0] text-xs font-medium">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex-1 py-5 rounded-xl text-base font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Book Now
                    </a>
                    <Link
                      href={`/cars/${car.slug}`}
                      className="flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest text-[#C9A84C] transition-all hover:bg-[#C9A84C10]"
                      style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                    >
                      Full Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <WhatsAppCTA
        variant="gold"
        heading="Not Sure Which to Pick?"
        subtext="WhatsApp us and we'll help you choose the right car for your trip."
      />
    </>
  );
}
