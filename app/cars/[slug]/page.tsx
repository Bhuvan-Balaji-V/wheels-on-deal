// app/cars/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle, ArrowLeft, MapPin } from "lucide-react";
import { CARS, getCarBySlug, getAllCarSlugs } from "@/data/cars";
import { LOCATIONS } from "@/data/locations";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};
  return {
    title: car.seo.title,
    description: car.seo.description,
    keywords: car.seo.keywords.join(", "),
    alternates: { canonical: `${SITE_CONFIG.url}/cars/${slug}` },
    openGraph: {
      title: car.seo.title,
      description: car.seo.description,
      images: [{ url: car.images.hero, width: 1200, height: 630 }],
    },
  };
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const waMsg = car.slug === "mahindra-thar" ? WA_MESSAGES.thar : WA_MESSAGES.tharRoxx;
  const waUrl = buildWhatsAppUrl(waMsg);

  const faqSchema = buildFAQSchema(car.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Cars", url: `${SITE_CONFIG.url}/cars` },
    { name: car.name, url: `${SITE_CONFIG.url}/cars/${slug}` },
  ]);
  const carProductSchema = {
    "@context": "https://schema.org",
    ...car.seo.schema,
  };

  const relatedLocations = LOCATIONS.filter((loc) =>
    car.relatedLocations.includes(loc.slug)
  );

  return (
    <>
      <Script id="car-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="car-breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="car-product-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carProductSchema) }} />

      {/* Hero */}
      <div className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={car.images.hero}
          alt={`${car.name} self-drive rental Bangalore — Wheels On Deal`}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
          }}
        />

        {/* Back button */}
        <Link
          href="/cars"
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-[#888880] hover:text-[#C9A84C] transition-colors text-sm z-10"
        >
          <ArrowLeft size={16} />
          All Cars
        </Link>

        {/* Badge */}
        {car.badge && (
          <div className="absolute top-24 right-4 md:right-8 z-10">
            <span
              className="px-4 py-1.5 text-xs uppercase tracking-widest font-semibold rounded-full"
              style={{
                background: "rgba(201,168,76,0.2)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
              }}
            >
              {car.badge}
            </span>
          </div>
        )}

        {/* Title block */}
        <div className="container-luxury relative z-10 pb-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#444440] mb-4">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cars" className="hover:text-[#C9A84C] transition-colors">Cars</Link>
            <span>/</span>
            <span className="text-[#888880]">{car.name}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-2">
            {car.name}
          </h1>
          <p className="text-[#C9A84C] text-sm uppercase tracking-widest">
            {car.tagline}
          </p>
        </div>
      </div>

      <main className="container-luxury py-16" role="main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section aria-label="About this car">
              <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
                About the {car.shortName}
              </h2>
              {car.longDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#888880] leading-relaxed mb-4 text-sm">
                  {para.trim()}
                </p>
              ))}
            </section>

            {/* Features */}
            <section aria-label="Car features">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                Features & Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#888880]">
                    <CheckCircle size={15} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                    {feat}
                  </li>
                ))}
              </ul>
            </section>

            {/* Specifications */}
            <section aria-label="Technical specifications">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                Specifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-[#444440] text-[10px] uppercase tracking-widest mb-1.5">
                      {spec.label}
                    </p>
                    <p className="text-[#F5F5F0] text-sm font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Image gallery */}
            <section aria-label="Photo gallery">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {car.images.gallery.slice(0, 4).map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${car.name} — photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section aria-label="Frequently asked questions">
              <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                Common Questions
              </h2>
              <div className="space-y-4">
                {car.faqs.map((faq, i) => (
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

            {/* Related Locations */}
            {relatedLocations.length > 0 && (
              <section aria-label="Pickup locations">
                <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                  Available Near
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {relatedLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/rent/${loc.slug}`}
                      className="flex items-center gap-3 p-4 rounded-xl transition-all hover:border-[#C9A84C40] group"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <MapPin size={14} className="text-[#C9A84C] shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-[#F5F5F0] text-xs font-semibold group-hover:text-[#C9A84C] transition-colors">
                          {loc.name}
                        </p>
                        <p className="text-[#444440] text-[10px]">{loc.area}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-1" aria-label="Booking sidebar">
            <div className="sticky top-28 space-y-4">
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold mb-1">
                  Pricing
                </p>
                <p className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-3xl font-semibold mb-1">
                  Best Rate
                </p>
                <p className="text-[#888880] text-xs mb-6">
                  Contact us for customised pricing based on duration and dates.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2 mb-3"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book on WhatsApp
                </a>
                <p className="text-[#444440] text-[10px] text-center uppercase tracking-widest">
                  Instant reply · No advance payment
                </p>
              </div>

              {/* Other cars */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-[#888880] text-xs uppercase tracking-widest mb-4">
                  Also Available
                </p>
                {CARS.filter((c) => c.slug !== car.slug).map((otherCar) => (
                  <Link
                    key={otherCar.slug}
                    href={`/cars/${otherCar.slug}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={otherCar.images.thumbnail}
                        alt={otherCar.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="text-[#F5F5F0] text-sm font-semibold group-hover:text-[#C9A84C] transition-colors">
                        {otherCar.name}
                      </p>
                      <p className="text-[#444440] text-xs">{otherCar.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <WhatsAppCTA
        variant="gold"
        heading={`Book the ${car.shortName} Today`}
        subtext={`Get the ${car.name} delivered anywhere in Bangalore. WhatsApp us now.`}
        message={waMsg}
      />
    </>
  );
}
