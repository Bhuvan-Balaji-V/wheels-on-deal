"use client";
// components/home/LuxuryExperience.tsx
import { useRef, useEffect } from "react";
import { Shield, Clock, MapPin, Zap, Star, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "WhatsApp us and get your booking confirmed in under 5 minutes. No forms, no waiting.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Comprehensive insurance on all vehicles. Drive with complete peace of mind.",
  },
  {
    icon: MapPin,
    title: "Doorstep Delivery",
    description:
      "We deliver the car to your location anywhere in Bangalore. College, home, or office.",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description:
      "Half-day, full-day, weekend, or multi-day. You choose the duration that works for you.",
  },
  {
    icon: Star,
    title: "Premium Maintained",
    description:
      "Every car is cleaned, serviced, and inspected before each rental. Zero compromises.",
  },
  {
    icon: Users,
    title: "Student Friendly",
    description:
      "Special focus on engineering college students. Easy documentation, no credit card needed.",
  },
];

const STATS = [
  { value: "500+", label: "Happy Renters" },
  { value: "4.9", label: "Google Rating" },
  { value: "50+", label: "Areas Served" },
  { value: "2", label: "Iconic SUVs" },
];

export function LuxuryExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="experience-heading"
      style={{ background: "#0D0D0D" }}
    >
      {/* Decorative grid pattern */}
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
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
            The Experience
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h2
            id="experience-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond',serif] font-light"
          >
            Why{" "}
            <span className="text-gold-gradient font-semibold italic">
              Wheels On Deal
            </span>
          </h2>
          <p className="text-[#888880] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Not just a rental. A curated luxury experience crafted for Bangalore&apos;s adventurous spirit.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="animate-on-scroll grid grid-cols-2 md:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden"
          style={{ background: "rgba(201,168,76,0.08)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: "#0D0D0D" }}
            >
              <span
                className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-semibold leading-none mb-2"
                style={{ color: "#C9A84C" }}
              >
                {stat.value}
                {i === 1 && <span className="text-2xl">★</span>}
              </span>
              <span className="text-[#888880] text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="animate-on-scroll group p-6 rounded-xl transition-all duration-500 hover:border-[#C9A84C33]"
              style={{
                animationDelay: `${i * 100}ms`,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <feat.icon size={20} style={{ color: "#C9A84C" }} aria-hidden="true" />
              </div>
              <h3 className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-xl font-semibold mb-2 leading-snug">
                {feat.title}
              </h3>
              <p className="text-[#888880] text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
