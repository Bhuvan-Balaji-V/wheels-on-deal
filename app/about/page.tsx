// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin, Users, Star, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export const metadata: Metadata = {
  title: "About Us | Wheels On Deal — Self-Drive Car Rental Bangalore",
  description:
    "Wheels On Deal is Bangalore's premium self-drive car rental service. Discover our story, our mission, and why thousands of renters trust us for Mahindra Thar experiences.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

const VALUES = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Every car is thoroughly inspected, cleaned, and maintained before each rental. Zero compromise.",
  },
  {
    icon: Users,
    title: "Student-First",
    description: "We built this for Bangalore's college community. Easy docs, fair pricing, no hassle.",
  },
  {
    icon: MapPin,
    title: "Doorstep Delivery",
    description: "We come to you — college, hostel, home, or office — anywhere in Bangalore.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Always",
    description: "No hidden charges. What you see on WhatsApp is what you pay. Always.",
  },
];

export default function AboutPage() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general);

  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at top left, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <div className="container-luxury max-w-4xl">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-semibold">
            Our Story
          </span>
          <div className="divider-gold my-3 mx-0" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] mb-6 leading-tight">
            Born from{" "}
            <span className="text-gold-gradient font-semibold italic">Bangalore&apos;s</span>
            <br />
            Adventurous Spirit
          </h1>
          <p className="text-[#888880] text-base leading-relaxed max-w-2xl">
            Wheels On Deal started with a simple belief — everyone deserves to experience the thrill of an open-road drive in a legendary SUV, without the complexity and cost of ownership.
          </p>
        </div>
      </div>

      <main role="main">
        {/* Story section */}
        <section className="py-20" aria-label="Our story">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6 leading-tight">
                  Why We Started
                </h2>
                <div className="space-y-4 text-[#888880] text-sm leading-relaxed">
                  <p>
                    Wheels On Deal was founded in Bangalore with one mission: make premium self-drive experiences accessible to everyone — students, professionals, and adventure seekers alike.
                  </p>
                  <p>
                    We noticed a gap. Bangalore had plenty of cab services but almost no premium self-drive options for the people who actually wanted to <em>drive</em>. The college students planning Nandi Hills sunrise trips. The IT professional who wanted one weekend away from traffic. The couple planning a spontaneous Coorg getaway.
                  </p>
                  <p>
                    So we started with what Bangalore loves most — the Mahindra Thar. Rugged, iconic, and endlessly photogenic. And then we added the Thar Roxx for those who want luxury with their adventure.
                  </p>
                  <p>
                    Today, we serve 50+ locations across Bangalore, from MSRIT in Mathikere to Electronic City in the south — and we&apos;re growing every month.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=85"
                    alt="Mahindra Thar — Wheels On Deal flagship car in Bangalore"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 60%)",
                    }}
                  />
                </div>
                {/* Stats overlay */}
                <div
                  className="absolute -bottom-6 -left-4 p-5 rounded-2xl"
                  style={{
                    background: "rgba(10,10,10,0.9)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-6">
                    {[
                      { value: "500+", label: "Trips Completed" },
                      { value: "4.9★", label: "Google Rating" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <p
                          className="text-2xl font-['Cormorant_Garamond',serif] font-semibold"
                          style={{ color: "#C9A84C" }}
                        >
                          {s.value}
                        </p>
                        <p className="text-[#888880] text-[10px] uppercase tracking-wider">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="py-20"
          aria-labelledby="values-heading"
          style={{ background: "#0D0D0D" }}
        >
          <div className="container-luxury">
            <div className="text-center mb-14">
              <h2
                id="values-heading"
                className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0]"
              >
                Our{" "}
                <span className="text-gold-gradient font-semibold italic">Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <val.icon size={20} style={{ color: "#C9A84C" }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-xl font-semibold mb-2">
                    {val.title}
                  </h3>
                  <p className="text-[#888880] text-sm leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-20" aria-label="Mission">
          <div className="container-luxury max-w-3xl mx-auto text-center">
            <div
              className="p-12 rounded-3xl"
              style={{
                background: "rgba(201,168,76,0.03)",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              <p
                className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] leading-relaxed italic"
              >
                &ldquo;We believe every road trip starts with the right car — and every person in Bangalore deserves access to one.&rdquo;
              </p>
              <div className="divider-gold mt-6" aria-hidden="true" />
              <p className="text-[#888880] text-sm mt-4">— Wheels On Deal, Bangalore</p>
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section
          className="py-20"
          aria-labelledby="service-area-heading"
          style={{ background: "#0D0D0D" }}
        >
          <div className="container-luxury">
            <div className="text-center mb-10">
              <h2
                id="service-area-heading"
                className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]"
              >
                Where We Operate
              </h2>
              <p className="text-[#888880] text-sm mt-3">
                Delivering self-drive Thars across 50+ locations in Bangalore
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                "MSRIT Area", "Christ University", "Koramangala", "Indiranagar",
                "Whitefield", "Hebbal", "Yelahanka", "Electronic City",
                "HSR Layout", "BTM Layout", "JP Nagar", "Jayanagar",
                "Malleswaram", "Rajajinagar", "Acharya Institute", "RNSIT",
                "BIT Bangalore", "Sapthagiri", "Marathahalli", "KR Puram",
              ].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full text-xs text-[#888880]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <MapPin size={10} className="inline mr-1.5 text-[#C9A84C]" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppCTA
        variant="gold"
        heading="Let's Hit the Road Together"
        subtext="Book your Mahindra Thar or Thar Roxx in Bangalore — instantly via WhatsApp."
      />
    </>
  );
}
