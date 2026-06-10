// app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCars } from "@/components/home/FeaturedCars";
import { LuxuryExperience } from "@/components/home/LuxuryExperience";
import { UniversitySection } from "@/components/home/UniversitySection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { SITE_CONFIG } from "@/data/config";
import { FAQS } from "@/data/faqs";
import { buildFAQSchema, buildLocalBusinessSchema } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Wheels On Deal | Luxury Self-Drive Car Rental Bangalore | Thar on Rent",
  description:
    "Rent Mahindra Thar & Thar Roxx in Bangalore. Self-drive car rental near MSRIT, Christ University, BIT, Hebbal, Koramangala & 50+ locations. Book via WhatsApp instantly.",
  keywords:
    "self drive car rental bangalore, thar rental bangalore, mahindra thar on rent, SUV rental bangalore, self drive car near me bangalore, car rental near MSRIT",
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    title: "Wheels On Deal | Luxury Self-Drive Rentals | Mahindra Thar Bangalore",
    description:
      "Premium self-drive Mahindra Thar & Thar Roxx rental in Bangalore. Near all major colleges & localities. WhatsApp booking in minutes.",
    url: SITE_CONFIG.url,
    images: [{ url: `${SITE_CONFIG.url}/og/home.jpg`, width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  const faqSchema = buildFAQSchema(FAQS.slice(0, 8));
  const businessSchema = buildLocalBusinessSchema();

  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="homepage-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <HeroSection />
      <FeaturedCars />
      <LuxuryExperience />
      <WhatsAppCTA
        variant="gold"
        heading="Book Your Thar Today"
        subtext="Tap below and we'll have a Mahindra Thar or Thar Roxx at your door in Bangalore."
      />
      <UniversitySection />
      <ReviewsSection />
      <BlogPreview />
      <FAQSection />
      <WhatsAppCTA
        heading="Still Have Questions?"
        subtext="WhatsApp us anything. We respond within minutes, every day 6AM–10PM."
      />
    </>
  );
}
