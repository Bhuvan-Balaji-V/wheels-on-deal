// app/rent/[location]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import {
  LOCATIONS,
  ADDITIONAL_LOCATIONS,
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/data/locations";
import { CARS } from "@/data/cars";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { buildFAQSchema, buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

interface Props {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocationBySlug(location);

  // For additional locations (simplified)
  if (!loc) {
    const additionalLoc = ADDITIONAL_LOCATIONS.find((l) => l.slug === location);
    if (!additionalLoc) return {};
    const areaName = additionalLoc.name || location;
    return {
      title: `Self Drive Car Rental ${areaName} Bangalore | Thar on Rent`,
      description: `Rent Mahindra Thar near ${areaName}, Bangalore. Self-drive car rental with doorstep delivery. WhatsApp booking in minutes.`,
      alternates: { canonical: `${SITE_CONFIG.url}/rent/${location}` },
    };
  }

  return {
    title: loc.seo.title,
    description: loc.seo.description,
    keywords: loc.seo.keywords.join(", "),
    alternates: { canonical: `${SITE_CONFIG.url}/rent/${location}` },
    openGraph: {
      title: loc.seo.title,
      description: loc.seo.description,
      url: `${SITE_CONFIG.url}/rent/${location}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const loc = getLocationBySlug(location);

  // Graceful fallback for additional/simplified locations
  if (!loc) {
    const additionalLoc = ADDITIONAL_LOCATIONS.find((l) => l.slug === location);
    if (!additionalLoc) notFound();
    return <SimplifiedLocationPage slug={location} name={additionalLoc.name || location} area={additionalLoc.area || "Bangalore"} />;
  }

  const waMsg = WA_MESSAGES.location(loc.name);
  const waUrl = buildWhatsAppUrl(waMsg);

  const faqSchema = buildFAQSchema(loc.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Bangalore Rentals", url: `${SITE_CONFIG.url}/rent/bangalore` },
    { name: loc.name, url: `${SITE_CONFIG.url}/rent/${location}` },
  ]);

  // Get nearby locations for internal linking
  const nearbyLocs = LOCATIONS.filter(
    (l) => l.slug !== loc.slug && l.area !== loc.area
  ).slice(0, 4);

  return (
    <>
      <Script id="location-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="location-breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at top left, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <div className="container-luxury">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#444440] mb-8">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/rent/bangalore" className="hover:text-[#C9A84C] transition-colors">Bangalore</Link>
            <span>/</span>
            <span className="text-[#888880]">{loc.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <MapPin size={16} className="text-[#C9A84C]" aria-hidden="true" />
            <span className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold">
              {loc.area}
            </span>
            {loc.type === "university" && (
              <span
                className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest rounded-full"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#C9A84C",
                }}
              >
                College Area
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3 leading-tight">
            {loc.seo.h1}
          </h1>
          <h2 className="text-[#888880] text-lg md:text-xl font-['Cormorant_Garamond',serif] font-light mb-6">
            {loc.seo.h2}
          </h2>
          <p className="text-[#888880] max-w-xl text-sm leading-relaxed mb-8">
            {loc.description}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book Near {loc.landmark.split(" ").slice(0, 2).join(" ")}
          </a>
        </div>
      </div>

      <main className="container-luxury py-16" role="main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Long description */}
            <section aria-label="Location details">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
                Self-Drive Rentals {loc.name}
              </h2>
              {loc.longDescription.trim().split("\n\n").map((para, i) => (
                <p key={i} className="text-[#888880] leading-relaxed mb-4 text-sm">
                  {para.trim()}
                </p>
              ))}
            </section>

            {/* Cars available */}
            <section aria-label="Available cars">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                Cars Available {loc.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {CARS.map((car) => {
                  const carWaMsg = WA_MESSAGES.location(`${loc.landmark} (${car.name})`);
                  const carWaUrl = buildWhatsAppUrl(carWaMsg);
                  return (
                    <div
                      key={car.id}
                      className="rounded-xl overflow-hidden"
                      style={{
                        background: "#161616",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="relative h-40">
                        <Image
                          src={car.images.thumbnail}
                          alt={`${car.name} rental ${loc.name}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        {car.badge && (
                          <span
                            className="absolute top-2 left-2 px-2 py-0.5 text-[10px] uppercase tracking-widest rounded-full"
                            style={{
                              background: "rgba(201,168,76,0.15)",
                              border: "1px solid rgba(201,168,76,0.3)",
                              color: "#C9A84C",
                            }}
                          >
                            {car.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#F5F5F0] font-semibold text-sm mb-1">{car.name}</h3>
                        <p className="text-[#888880] text-xs mb-4 line-clamp-2">{car.description}</p>
                        <div className="flex gap-2">
                          <a
                            href={carWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp flex-1 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest text-center"
                          >
                            Book Now
                          </a>
                          <Link
                            href={`/cars/${car.slug}`}
                            className="px-3 py-2.5 rounded-lg text-xs text-[#C9A84C] border border-[#C9A84C30] hover:bg-[#C9A84C10] transition-all"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Why rent near here */}
            <section aria-label="Why rent a car here">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
                Why Rent a Self-Drive Car {loc.name}?
              </h2>
              <ul className="space-y-3">
                {[
                  `Doorstep delivery near ${loc.landmark}`,
                  "No complex paperwork — just your DL and Aadhaar",
                  "Perfect for weekend road trips from " + loc.area,
                  "Thar handles all terrain near " + loc.area,
                  "Student-friendly pricing and documentation",
                  "WhatsApp booking — instant confirmation",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#888880] text-sm">
                    <CheckCircle size={14} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section aria-label="Frequently asked questions">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                FAQs — Car Rental {loc.name}
              </h2>
              <div className="space-y-4">
                {loc.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <h3 className="text-[#F5F5F0] font-semibold text-sm mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[#888880] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nearby areas — internal linking */}
            {nearbyLocs.length > 0 && (
              <section aria-label="Nearby rental locations">
                <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
                  Also Available Nearby
                </h2>
                <div className="flex flex-wrap gap-2">
                  {nearbyLocs.map((near) => (
                    <Link
                      key={near.slug}
                      href={`/rent/${near.slug}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-[#888880] hover:text-[#C9A84C] transition-all hover:border-[#C9A84C40]"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <MapPin size={10} aria-hidden="true" />
                      {near.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Quick booking">
            <div className="sticky top-28">
              <div
                className="p-6 rounded-2xl mb-4"
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold mb-1">
                  Book Now
                </p>
                <p className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-1">
                  {loc.name}
                </p>
                <p className="text-[#888880] text-xs mb-5">
                  Doorstep delivery near {loc.landmark}
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-5 rounded-xl text-base font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2 mb-2"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp to Book
                </a>
                <p className="text-[#444440] text-[10px] text-center uppercase tracking-widest">
                  Mon–Sun · 6AM–10PM
                </p>
              </div>

              {/* Nearby areas */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-[#888880] text-xs uppercase tracking-widest mb-4">
                  Nearby Areas
                </p>
                {loc.nearbyAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 py-1.5 text-[#888880] text-xs">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C]" aria-hidden="true" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <WhatsAppCTA
        variant="gold"
        heading={`Rent a Thar ${loc.name}`}
        subtext={`Doorstep delivery near ${loc.landmark}. Book in minutes on WhatsApp.`}
        message={waMsg}
      />
    </>
  );
}

// Simplified page for additional locations
function SimplifiedLocationPage({ slug, name, area }: { slug: string; name: string; area: string }) {
  const waMsg = WA_MESSAGES.location(`${name}, ${area}`);
  const waUrl = buildWhatsAppUrl(waMsg);

  return (
    <>
      <div className="relative pt-32 pb-16" style={{ background: "#0A0A0A" }}>
        <div className="container-luxury">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs uppercase tracking-widest">{area}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
            Self-Drive Car Rental Near {name}, Bangalore
          </h1>
          <p className="text-[#888880] max-w-xl text-sm leading-relaxed mb-8">
            Rent Mahindra Thar & Thar Roxx near {name} in Bangalore. Self-drive. Doorstep delivery. WhatsApp booking in minutes.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-8 py-5 rounded-xl text-base font-semibold uppercase tracking-widest">
            Book on WhatsApp
          </a>
        </div>
      </div>

      <main className="container-luxury py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {CARS.map((car) => (
            <Link key={car.id} href={`/cars/${car.slug}`}
              className="flex items-center gap-4 p-5 rounded-xl transition-all hover:border-[#C9A84C40]"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0">
                <Image src={car.images.thumbnail} alt={car.name} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="text-[#F5F5F0] font-semibold text-sm">{car.name}</p>
                <p className="text-[#888880] text-xs">{car.tagline}</p>
              </div>
              <ArrowRight size={14} className="ml-auto text-[#C9A84C]" />
            </Link>
          ))}
        </div>
      </main>

      <WhatsAppCTA variant="gold"
        heading={`Book Near ${name}`}
        subtext={`Get a Thar delivered near ${name}, ${area}. WhatsApp us now.`}
        message={waMsg} />
    </>
  );
}
