// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SITE_CONFIG } from "@/data/config";
import { buildLocalBusinessSchema } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.seo.defaultTitle,
    template: `%s | Wheels On Deal`,
  },
  description: SITE_CONFIG.seo.defaultDescription,
  keywords: SITE_CONFIG.seo.defaultKeywords.join(", "),
  authors: [{ name: "Wheels On Deal" }],
  creator: "Wheels On Deal",
  publisher: "Wheels On Deal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.seo.defaultTitle,
    description: SITE_CONFIG.seo.defaultDescription,
    images: [
      {
        url: `${SITE_CONFIG.url}/og/default.jpg`,
        width: 1200,
        height: 630,
        alt: "Wheels On Deal - Luxury Self-Drive Car Rental Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.defaultTitle,
    description: SITE_CONFIG.seo.defaultDescription,
    images: [`${SITE_CONFIG.url}/og/default.jpg`],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: "", // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F0] font-['DM_Sans',sans-serif] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
