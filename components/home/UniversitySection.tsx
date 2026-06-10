"use client";
// components/home/UniversitySection.tsx
import { useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const UNIVERSITIES = [
  {
    slug: "msrit-bangalore",
    name: "MSRIT",
    fullName: "M.S. Ramaiah Institute of Technology",
    area: "Mathikere",
  },
  {
    slug: "christ-university-bangalore",
    name: "Christ University",
    fullName: "Christ (Deemed to be University)",
    area: "Hosur Road",
  },
  {
    slug: "acharya-college-bangalore",
    name: "Acharya",
    fullName: "Acharya Institute of Technology",
    area: "Hesaraghatta Road",
  },
  {
    slug: "bit-bangalore",
    name: "BIT",
    fullName: "Bangalore Institute of Technology",
    area: "VV Puram",
  },
  {
    slug: "rnsit-bangalore",
    name: "RNSIT",
    fullName: "R.N.S. Institute of Technology",
    area: "Channasandra",
  },
  {
    slug: "sapthagiri-college-bangalore",
    name: "Sapthagiri",
    fullName: "Sapthagiri College of Engineering",
    area: "Hesaraghatta Road",
  },
];

const AREAS = [
  { slug: "koramangala-bangalore", name: "Koramangala" },
  { slug: "indiranagar-bangalore", name: "Indiranagar" },
  { slug: "whitefield-bangalore", name: "Whitefield" },
  { slug: "hebbal-bangalore", name: "Hebbal" },
  { slug: "yelahanka-bangalore", name: "Yelahanka" },
  { slug: "electronic-city-bangalore", name: "Electronic City" },
  { slug: "jp-nagar-bangalore", name: "JP Nagar" },
  { slug: "hsr-layout-bangalore", name: "HSR Layout" },
  { slug: "btm-layout-bangalore", name: "BTM Layout" },
  { slug: "rajajinagar-bangalore", name: "Rajajinagar" },
  { slug: "malleswaram-bangalore", name: "Malleswaram" },
  { slug: "jayanagar-bangalore", name: "Jayanagar" },
];

export function UniversitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="locations-heading"
    >
      {/* Gold glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #C9A84C 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-luxury">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
            We Come To You
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h2
            id="locations-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond',serif] font-light"
          >
            Near Your{" "}
            <span className="text-gold-gradient font-semibold italic">
              College
            </span>
          </h2>
          <p className="text-[#888880] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            We deliver self-drive Thars to 50+ locations across Bangalore — including right at your college gate.
          </p>
        </div>

        {/* University Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 animate-on-scroll">
          {UNIVERSITIES.map((uni, i) => (
            <Link
              key={uni.slug}
              href={`/rent/${uni.slug}`}
              className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-400 hover:border-[#C9A84C40] hover:translate-y-[-2px]"
              style={{
                animationDelay: `${i * 80}ms`,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C20] transition-colors"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <MapPin size={16} style={{ color: "#C9A84C" }} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[#F5F5F0] font-['DM_Sans',sans-serif] font-semibold text-sm truncate group-hover:text-[#C9A84C] transition-colors">
                  Near {uni.name}
                </p>
                <p className="text-[#444440] text-xs mt-0.5 truncate">
                  {uni.fullName}
                </p>
                <p className="text-[#C9A84C] text-xs mt-1 flex items-center gap-1">
                  <span
                    className="w-1 h-1 rounded-full bg-[#C9A84C] opacity-60"
                    aria-hidden="true"
                  />
                  {uni.area}
                </p>
              </div>
              <ArrowRight
                size={14}
                className="ml-auto shrink-0 text-[#444440] group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all mt-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        {/* Areas grid */}
        <div className="animate-on-scroll">
          <p className="text-[#444440] text-xs uppercase tracking-[0.25em] text-center mb-5">
            Also Available In
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/rent/${area.slug}`}
                className="px-4 py-2 rounded-full text-xs text-[#888880] hover:text-[#C9A84C] transition-all hover:border-[#C9A84C40] hover:bg-[#C9A84C08]"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* View all locations */}
        <div className="text-center mt-10 animate-on-scroll">
          <Link
            href="/rent/bangalore"
            className="inline-flex items-center gap-2 text-[#C9A84C] text-sm uppercase tracking-widest hover:gap-4 transition-all"
          >
            View All 50+ Locations
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
