// data/cars.ts
export interface CarSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface CarFAQ {
  question: string;
  answer: string;
}

export interface Car {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  features: string[];
  specifications: CarSpec[];
  highlights: string[];
  faqs: CarFAQ[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    schema: Record<string, unknown>;
  };
  relatedLocations: string[];
  badge?: string;
}

export const CARS: Car[] = [
  {
    id: "mahindra-thar",
    slug: "mahindra-thar",
    name: "Mahindra Thar",
    shortName: "Thar",
    tagline: "Born to Be Wild. Made for Bangalore Roads.",
    description:
      "The iconic Mahindra Thar — Bangalore's most-demanded self-drive SUV. Whether it's Nandi Hills at dawn or a weekend escape, the Thar handles it all in rugged style.",
    longDescription: `The Mahindra Thar is not just a car — it's a statement. Built for those who refuse to take the ordinary path, the Thar combines legendary 4x4 capability with a design that turns heads on every street in Bangalore.

Perfect for college road trips, weekend escapes to Coorg, adventures to Nandi Hills, or simply arriving in style at your destination. With Wheels On Deal, you get the authentic self-drive Thar experience — no driver, full freedom.

Our Thar units are meticulously maintained, fully insured, and ready to take you wherever Bangalore's spirit of adventure leads.`,
    images: {
      hero: "/images/cars/thar-hero.jpg",
      gallery: [
        "/images/cars/thar-gallery-1.jpg",
        "/images/cars/thar-gallery-2.jpg",
        "/images/cars/thar-gallery-3.jpg",
        "/images/cars/thar-gallery-4.jpg",
      ],
      thumbnail: "/images/cars/thar-thumbnail.jpg",
    },
    features: [
      "4x4 Off-Road Capability",
      "Convertible Soft-Top",
      "Adventure-Ready Suspension",
      "Premium Sound System",
      "USB Charging Ports",
      "GPS Navigation Ready",
      "Full Insurance Covered",
      "24/7 Roadside Assistance",
    ],
    specifications: [
      { label: "Engine", value: "2.0L mStallion Petrol / 2.2L mHawk Diesel" },
      { label: "Transmission", value: "6-Speed Manual / Automatic" },
      { label: "Drive", value: "4x4 with 4L/4H modes" },
      { label: "Seating", value: "4 Adults" },
      { label: "Fuel Type", value: "Petrol / Diesel" },
      { label: "Ground Clearance", value: "226 mm" },
    ],
    highlights: [
      "Iconic convertible design",
      "True 4x4 off-road beast",
      "Most Instagrammable rental in Bangalore",
      "Loved by students & adventure seekers",
    ],
    faqs: [
      {
        question: "What documents do I need to rent the Mahindra Thar?",
        answer:
          "You need a valid Indian driving licence (minimum 1 year old), Aadhaar card or passport, and a security deposit. Students with a valid DL are welcome.",
      },
      {
        question: "Is the Thar suitable for Nandi Hills trips?",
        answer:
          "Absolutely! The Mahindra Thar is perfect for Nandi Hills, Coorg, Chikmagalur and any off-road or hilly terrain around Bangalore.",
      },
      {
        question: "Can I take the Thar outside Bangalore?",
        answer:
          "Yes, outstation rentals are available. Please mention your destination when contacting us on WhatsApp for special outstation rates.",
      },
      {
        question: "Is fuel included in the rental?",
        answer:
          "No, fuel is not included. You will receive the car with a full tank and need to return it full. This ensures fair pricing.",
      },
      {
        question: "How do I book the Mahindra Thar from Wheels On Deal?",
        answer:
          "Simply click the WhatsApp button and we'll confirm your booking within minutes. No complex forms or advance payments required.",
      },
    ],
    seo: {
      title: "Mahindra Thar Rental Bangalore | Self-Drive Thar | Wheels On Deal",
      description:
        "Rent Mahindra Thar in Bangalore for self-drive. No driver needed. Available near MSRIT, Christ University, Hebbal & all areas. Book via WhatsApp instantly.",
      keywords: [
        "thar rental bangalore",
        "mahindra thar self drive bangalore",
        "thar on rent bangalore",
        "thar rental near me",
        "mahindra thar hire bangalore",
        "thar rental student bangalore",
      ],
      schema: {
        "@type": "Product",
        name: "Mahindra Thar Self-Drive Rental",
        description:
          "Premium Mahindra Thar available for self-drive rental in Bangalore",
        brand: { "@type": "Brand", name: "Mahindra" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Wheels On Deal" },
        },
      },
    },
    relatedLocations: [
      "msrit-bangalore",
      "hebbal-bangalore",
      "yelahanka-bangalore",
      "christ-university-bangalore",
    ],
    badge: "Most Popular",
  },
  {
    id: "mahindra-thar-roxx",
    slug: "mahindra-thar-roxx",
    name: "Mahindra Thar Roxx",
    shortName: "Thar Roxx",
    tagline: "Next-Level Luxury Meets Untamed Power.",
    description:
      "The all-new Mahindra Thar Roxx — the evolution of legend. A 5-door powerhouse with luxury cabin, panoramic sunroof, and Level 2 ADAS. Bangalore's most premium self-drive SUV.",
    longDescription: `Step into the future of adventure with the Mahindra Thar Roxx — Mahindra's most sophisticated off-roader ever built. The Thar Roxx redefines what a self-drive rental experience should feel like.

With a 5-door cabin, panoramic sunroof, Level 2 ADAS safety features, and a commanding road presence, the Thar Roxx is perfect for those who want the full luxury SUV experience without compromise.

Whether you're heading to a corporate event, a weekend gateway to Hampi, or just want to experience Bangalore from behind the wheel of something truly special — the Thar Roxx delivers on every count.

At Wheels On Deal, every Thar Roxx unit is premium-maintained, GPS-tracked for your safety, and covered by comprehensive insurance.`,
    images: {
      hero: "/images/cars/thar-roxx-hero.jpg",
      gallery: [
        "/images/cars/thar-roxx-gallery-1.jpg",
        "/images/cars/thar-roxx-gallery-2.jpg",
        "/images/cars/thar-roxx-gallery-3.jpg",
        "/images/cars/thar-roxx-gallery-4.jpg",
      ],
      thumbnail: "/images/cars/thar-roxx-thumbnail.jpg",
    },
    features: [
      "5-Door Premium Cabin",
      "Panoramic Electric Sunroof",
      "Level 2 ADAS Safety",
      "360° Camera System",
      "Wireless Apple CarPlay / Android Auto",
      "Premium 9-Speaker Harman Sound",
      "Ventilated Front Seats",
      "Terrain Response System",
    ],
    specifications: [
      { label: "Engine", value: "2.0L mStallion Turbo Petrol" },
      { label: "Power", value: "175 PS @ 5000 rpm" },
      { label: "Torque", value: "380 Nm @ 1750-3000 rpm" },
      { label: "Transmission", value: "6-Speed Automatic" },
      { label: "Seating", value: "5 Adults (Comfortable)" },
      { label: "ADAS", value: "Level 2 (Adaptive Cruise, Lane Assist)" },
    ],
    highlights: [
      "Bangalore's most premium self-drive SUV",
      "5-door luxury + true off-road DNA",
      "Panoramic sunroof for Nandi Hills sunrises",
      "Level 2 ADAS for safe long drives",
    ],
    faqs: [
      {
        question: "What makes the Thar Roxx different from the regular Thar?",
        answer:
          "The Thar Roxx is a 5-door, more premium version with panoramic sunroof, Level 2 ADAS, better NVH, luxury interior, and more powerful engine. It's the luxury upgrade of the iconic Thar.",
      },
      {
        question: "Is the Thar Roxx suitable for long drives from Bangalore?",
        answer:
          "Absolutely! The Thar Roxx with Level 2 ADAS, adaptive cruise control and a comfortable 5-seat cabin is excellent for long drives to Coorg, Ooty, Hampi, or Goa.",
      },
      {
        question: "Do I need special licence for Thar Roxx?",
        answer:
          "No special licence needed. A standard Indian driving licence (LMV category) is sufficient for the Thar Roxx.",
      },
      {
        question: "What is the minimum age to rent the Thar Roxx?",
        answer:
          "You must be at least 21 years old and hold a valid driving licence for at least 1 year to rent the Thar Roxx.",
      },
    ],
    seo: {
      title:
        "Mahindra Thar Roxx Rental Bangalore | Self-Drive SUV | Wheels On Deal",
      description:
        "Rent Mahindra Thar Roxx in Bangalore — 5-door luxury off-roader with panoramic sunroof. Self-drive available. Book via WhatsApp instantly.",
      keywords: [
        "thar roxx rental bangalore",
        "thar roxx self drive",
        "mahindra thar roxx hire bangalore",
        "luxury SUV rental bangalore",
        "5 door thar rental",
      ],
      schema: {
        "@type": "Product",
        name: "Mahindra Thar Roxx Self-Drive Rental",
        description:
          "Premium Mahindra Thar Roxx 5-door available for self-drive rental in Bangalore",
        brand: { "@type": "Brand", name: "Mahindra" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Wheels On Deal" },
        },
      },
    },
    relatedLocations: [
      "koramangala-bangalore",
      "whitefield-bangalore",
      "indiranagar-bangalore",
      "hebbal-bangalore",
    ],
    badge: "New Launch",
  },
  {
    id: "maruti-suzuki-swift",
    slug: "maruti-suzuki-swift",
    name: "Maruti Suzuki Swift",
    shortName: "Swift",
    tagline: "Agile. Efficient. Perfect for the City.",
    description:
      "The Maruti Suzuki Swift — Bangalore's favourite compact car. Nimble, fuel-efficient, and perfect for city driving, college trips, or casual getaways. Self-drive comfort without the premium price tag.",
    longDescription: `The Maruti Suzuki Swift is the smart choice for urban self-drive experiences in Bangalore. Built for city streets, yet capable enough for weekend escapes, the Swift combines reliability, efficiency, and affordability in one perfect package.

Whether you're navigating Bangalore's traffic, heading to a casual meetup, or planning a budget-friendly weekend getaway to nearby towns, the Swift delivers on every count. With good fuel efficiency and easy maneuverability, the Swift is ideal for first-time self-drive renters and anyone looking for practical, cost-effective mobility.

At Wheels On Deal, every Swift is regularly serviced, fully insured, and equipped with GPS navigation for your peace of mind.`,
    images: {
      hero: "/images/cars/swift-hero.avif",
      gallery: [
        "/images/cars/swift-gallery-1.jpg",
        "/images/cars/swift-gallery-2.jpeg",
        "/images/cars/swift-gallery-3.jpeg",
        "/images/cars/swift-gallery-4.jpg",
      ],
      thumbnail: "/images/cars/swift-thumbnail.jpeg",
    },
    features: [
      "Compact & Nimble Design",
      "Excellent Fuel Efficiency",
      "Easy City Navigation",
      "ABS & Dual Airbags",
      "Power Windows & Mirrors",
      "USB Charging Port",
      "GPS Navigation Ready",
      "Full Insurance Covered",
    ],
    specifications: [
      { label: "Engine", value: "1.2L Petrol Hybrid / VVT Petrol" },
      { label: "Transmission", value: "Manual / Automatic (CVT)" },
      { label: "Seating", value: "5 Adults" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Mileage", value: "18-23 km/l" },
      { label: "Boot Space", value: "268 Litres" },
    ],
    highlights: [
      "Perfect for city driving",
      "Great fuel efficiency & low rental cost",
      "Easy for first-time self-drive renters",
      "Ideal for short trips & casual getaways",
    ],
    faqs: [
      {
        question: "Is the Swift good for beginners?",
        answer:
          "Absolutely! The Swift is one of the most beginner-friendly cars. It's easy to maneuver, has good visibility, and is perfect for navigating Bangalore traffic.",
      },
      {
        question: "Can I take the Swift for outstation trips?",
        answer:
          "Yes, the Swift is suitable for outstation trips to nearby towns within 200-300 km. For longer trips, the SUVs (Thar/Thar Roxx) are better suited.",
      },
      {
        question: "What is the mileage of the Swift?",
        answer:
          "The Maruti Suzuki Swift offers excellent fuel efficiency of 18-23 km/l depending on driving conditions. You'll get great value for your money.",
      },
      {
        question: "Is the Swift suitable for couples or small groups?",
        answer:
          "Perfect! The Swift comfortably seats 5 and is ideal for couples or groups of 3-4 friends on a casual trip.",
      },
    ],
    seo: {
      title: "Maruti Suzuki Swift Rental Bangalore | Self-Drive Car | Wheels On Deal",
      description:
        "Rent Maruti Suzuki Swift in Bangalore for self-drive. Fuel-efficient, affordable, perfect for city drives & casual getaways. Book via WhatsApp instantly.",
      keywords: [
        "swift rental bangalore",
        "maruti swift self drive bangalore",
        "swift on rent bangalore",
        "budget car rental bangalore",
        "swift hire bangalore",
      ],
      schema: {
        "@type": "Product",
        name: "Maruti Suzuki Swift Self-Drive Rental",
        description:
          "Affordable Maruti Suzuki Swift available for self-drive rental in Bangalore",
        brand: { "@type": "Brand", name: "Maruti Suzuki" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Wheels On Deal" },
        },
      },
    },
    relatedLocations: [
      "koramangala-bangalore",
      "indiranagar-bangalore",
      "whitefield-bangalore",
      "yelahanka-bangalore",
    ],
  },
];

export function getCarBySlug(slug: string): Car | undefined {
  return CARS.find((car) => car.slug === slug);
}

export function getAllCarSlugs(): string[] {
  return CARS.map((car) => car.slug);
}
