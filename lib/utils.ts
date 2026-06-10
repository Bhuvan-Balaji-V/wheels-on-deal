// lib/utils.ts — Unified utility library for Wheels On Deal
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/data/config";

// ─── Class merge utility ────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Date formatter ────────────────────────────────────────────────────────
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Slug generator ────────────────────────────────────────────────────────
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// ─── WhatsApp URL builder ──────────────────────────────────────────────────
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encoded}`;
}

export const WA_MESSAGES = {
  general:
    "Hi! I'm interested in renting a self-drive car from Wheels On Deal in Bangalore. Please share availability and details. 🚗",
  thar: "Hi! I'd like to book the Mahindra Thar for self-drive from Wheels On Deal Bangalore. Please share availability and rates. 🚘",
  tharRoxx:
    "Hi! I'd like to book the Mahindra Thar Roxx (5-door) for self-drive from Wheels On Deal Bangalore. Please share details and availability. 🚙",
  nandi:
    "Hi! I'm planning a Nandi Hills road trip and want to rent a Thar from Wheels On Deal. Please share availability for this weekend. 🏔️",
  hero: "Hi! I found Wheels On Deal and want to rent a premium self-drive car in Bangalore. What's available? 🚗✨",
  location: (area: string) =>
    `Hi! I need a self-drive car rental near ${area} in Bangalore. Please share availability and rates. 📍`,
  blog: (topic: string) =>
    `Hi! I just read your blog about "${topic}" on Wheels On Deal. I'm interested in renting a car. Please share details. 📖`,
};

// ─── SEO metadata builders ─────────────────────────────────────────────────
export interface MetaData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export function buildMetadata(data: MetaData) {
  const title = data.title.includes("Wheels On Deal")
    ? data.title
    : `${data.title} | Wheels On Deal`;

  return {
    title,
    description: data.description,
    keywords: data.keywords?.join(", "),
    alternates: {
      canonical: data.canonical || SITE_CONFIG.url,
    },
    openGraph: {
      title,
      description: data.description,
      url: data.canonical || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: data.ogImage || `${SITE_CONFIG.url}/og/default.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: data.description,
      images: [data.ogImage || `${SITE_CONFIG.url}/og/default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

// ─── Schema markup builders ────────────────────────────────────────────────
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.seo.defaultDescription,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "06:00",
      closes: "22:00",
    },
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Digital Transfer",
    hasMap: `https://maps.google.com/?q=Bangalore+Karnataka`,
    sameAs: [SITE_CONFIG.social.instagram],
    knowsAbout: [
      "Self-drive car rental",
      "Mahindra Thar rental",
      "SUV rental Bangalore",
      "Car rental for college students",
    ],
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
