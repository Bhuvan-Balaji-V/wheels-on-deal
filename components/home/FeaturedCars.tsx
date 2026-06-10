"use client";
// components/home/FeaturedCars.tsx
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { CARS } from "@/data/cars";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";

export function FeaturedCars() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-cars"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="fleet-heading"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      <div className="container-luxury">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
            Our Fleet
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h2
            id="fleet-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond',serif] font-light mt-2"
          >
            Choose Your{" "}
            <span className="text-gold-gradient font-semibold italic">
              Legend
            </span>
          </h2>
          <p className="text-[#888880] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Two iconic Mahindra SUVs. One unforgettable experience.
            Delivered anywhere in Bangalore.
          </p>
        </div>

        {/* Car cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CARS.map((car, i) => {
            const waMsg =
              car.slug === "mahindra-thar"
                ? WA_MESSAGES.thar
                : WA_MESSAGES.tharRoxx;
            const waUrl = buildWhatsAppUrl(waMsg);

            return (
              <article
                key={car.id}
                className="animate-on-scroll car-card-hover group relative rounded-2xl overflow-hidden"
                style={{
                  animationDelay: `${i * 150}ms`,
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                aria-label={`${car.name} self-drive rental`}
              >
                {/* Badge */}
                {car.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-full"
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

                {/* Car image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={car.images.hero}
                    alt={`${car.name} self-drive rental Bangalore — Wheels On Deal`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(22,22,22,1) 0%, rgba(22,22,22,0.2) 60%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] leading-tight">
                        {car.name}
                      </h3>
                      <p className="text-[#C9A84C] text-xs uppercase tracking-widest mt-1">
                        {car.tagline}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[#C9A84C]">
                      <Star size={12} className="fill-current" />
                      <span className="text-xs text-[#888880]">4.9</span>
                    </div>
                  </div>

                  <p className="text-[#888880] text-sm leading-relaxed mb-5 line-clamp-2">
                    {car.description}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.slice(0, 3).map((feat) => (
                      <span
                        key={feat}
                        className="text-xs px-2.5 py-1 rounded-full text-[#888880]"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full text-[#C9A84C]"
                        style={{
                          background: "rgba(201,168,76,0.06)",
                          border: "1px solid rgba(201,168,76,0.15)",
                        }}
                      >
                        +{car.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="flex gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex-1 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Book Now
                    </a>
                    <Link
                      href={`/cars/${car.slug}`}
                      className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-[#C9A84C] transition-all hover:bg-[#C9A84C]/10"
                      style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                      aria-label={`View ${car.name} details`}
                    >
                      Details
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10 animate-on-scroll">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-[#C9A84C] text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
          >
            View Full Fleet Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
