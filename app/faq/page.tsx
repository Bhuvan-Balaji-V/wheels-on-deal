// app/faq/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { FAQS } from "@/data/faqs";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { buildFAQSchema } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Self-Drive Car Rental Questions Answered | Wheels On Deal",
  description:
    "All your questions about self-drive car rental in Bangalore answered. Documents needed, pricing, insurance, pickup, outstation travel and more.",
  keywords:
    "self drive car rental FAQ bangalore, thar rental questions, car rental documents bangalore, self drive insurance",
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
};

const CATEGORIES = ["Booking", "Documents", "Cars & Pricing", "Safety & Insurance", "Pickup & Delivery"];

export default function FAQPage() {
  const faqSchema = buildFAQSchema(FAQS);
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general);

  return (
    <>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <div className="container-luxury max-w-3xl text-center mx-auto">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-semibold">
            Help Centre
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] mb-4">
            Frequently Asked{" "}
            <span className="text-gold-gradient font-semibold italic">Questions</span>
          </h1>
          <p className="text-[#888880] text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Everything you need to know about renting a self-drive car from Wheels On Deal in Bangalore.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Still Have Questions? WhatsApp Us
          </a>
        </div>
      </div>

      <main className="py-16" role="main">
        <div className="container-luxury max-w-3xl mx-auto">
          {CATEGORIES.map((category) => {
            const categoryFAQs = FAQS.filter((f) => f.category === category);
            if (!categoryFAQs.length) return null;
            return (
              <section key={category} className="mb-12" aria-labelledby={`cat-${category}`}>
                <div className="flex items-center gap-3 mb-6">
                  <h2
                    id={`cat-${category}`}
                    className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]"
                  >
                    {category}
                  </h2>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }}
                    aria-hidden="true"
                  />
                </div>
                <FAQAccordion faqs={categoryFAQs} />
              </section>
            );
          })}

          {/* Contact nudge */}
          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <p className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-2">
              Didn&apos;t Find Your Answer?
            </p>
            <p className="text-[#888880] text-sm mb-6">
              Our team typically replies within minutes on WhatsApp. Ask us anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest justify-center"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest text-[#C9A84C] transition-all hover:bg-[#C9A84C10]"
                style={{ border: "1px solid rgba(201,168,76,0.25)" }}
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
