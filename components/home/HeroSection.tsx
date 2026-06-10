"use client";
// components/home/HeroSection.tsx
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.hero);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxEl = hero.querySelector(".hero-parallax") as HTMLElement;
      if (parallaxEl) {
        parallaxEl.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Wheels On Deal luxury self-drive Bangalore"
    >
      {/* Background image with parallax */}
      <div className="hero-parallax absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
          }}
          role="img"
          aria-label="Mahindra Thar luxury SUV in Bangalore"
        />
        {/* Multi-layer gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.92) 85%, rgba(10,10,10,1) 100%)",
          }}
        />
        {/* Subtle noise */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Gold corner accent top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, #C9A84C 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container-luxury relative z-10 text-center pt-24 pb-32">
        {/* Pre-heading badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs uppercase tracking-[0.3em] font-['DM_Sans',sans-serif] animate-fade-in"
          style={{
            background: "rgba(201, 168, 76, 0.1)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            color: "#C9A84C",
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"
            aria-hidden="true"
          />
          Bangalore&apos;s Finest Self-Drive Rentals
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Cormorant_Garamond',serif] font-light leading-[1.05] mb-6 animate-fade-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Drive the{" "}
          <span className="text-gold-gradient font-semibold italic">Wild</span>
          <br />
          Own the{" "}
          <span className="text-gold-gradient font-semibold italic">Road</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-[#888880] text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up font-['DM_Sans',sans-serif] font-light"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Rent a Mahindra Thar or Thar Roxx in Bangalore.
          <br className="hidden sm:block" /> No driver. No restrictions. Pure freedom.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{
            animationDelay: "0.8s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book Instantly
          </a>
          <Link
            href="/cars"
            className="flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest w-full sm:w-auto justify-center transition-all duration-300 hover:bg-white/5"
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              color: "#C9A84C",
            }}
          >
            View Our Fleet
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-in"
          style={{
            animationDelay: "1.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {[
            { value: "500+", label: "Happy Renters" },
            { value: "4.9★", label: "Google Rating" },
            { value: "2", label: "Premium Cars" },
            { value: "24/7", label: "WhatsApp Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-4"
              style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-xl font-['Cormorant_Garamond',serif] font-semibold"
                style={{ color: "#C9A84C" }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#444440] mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById("featured-cars")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444440] hover:text-[#C9A84C] transition-colors group cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <ChevronDown
          size={18}
          className="animate-bounce group-hover:text-[#C9A84C]"
        />
      </button>
    </section>
  );
}
