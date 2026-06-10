// data/config.ts
export const SITE_CONFIG = {
  name: "Wheels On Deal",
  tagline: "Luxury Self-Drive Rentals in Bangalore",
  domain: "wheelsondeal.in",
  url: "https://wheelsondeal.in",
  whatsapp: {
    number: "919591726036", // Replace with actual number
    countryCode: "+91",
    display: "+91 95917 26036",
  },
  contact: {
    email: "contactwheelsondeals@gmail.com",
    phone: "+91 95917 26036",
    address: "Bangalore, Karnataka, India",
  },
  social: {
    instagram: "https://www.instagram.com/wheel_on_deal_bangalore?igsh=MXJtOGs5a2ZyaWtreA==",
  },
  seo: {
    defaultTitle: "Wheels On Deal | Luxury Self-Drive Car Rental Bangalore",
    defaultDescription:
      "Rent Mahindra Thar & Thar Roxx in Bangalore. Premium self-drive car rental for students, professionals & adventure seekers. Available near MSRIT, Christ University, BIT & all major colleges.",
    defaultKeywords: [
      "self drive car rental Bangalore",
      "thar rental bangalore",
      "mahindra thar rental",
      "SUV rental bangalore",
      "car rental near me bangalore",
      "self drive car Bangalore",
    ],
  },
  businessHours: "Mon–Sun: 6:00 AM – 10:00 PM",
  foundedYear: 2022,
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general:
    "Hi! I'm interested in renting a self-drive car from Wheels On Deal in Bangalore. Please share availability and details.",
  thar: "Hi! I'd like to book the Mahindra Thar for self-drive from Wheels On Deal Bangalore. Please share details and availability.",
  tharRoxx:
    "Hi! I'd like to book the Mahindra Thar Roxx for self-drive from Wheels On Deal Bangalore. Please share details and availability.",
  location: (area: string) =>
    `Hi! I need a self-drive car rental near ${area} in Bangalore. Please share availability and rates.`,
  blog: (topic: string) =>
    `Hi! I read about ${topic} on Wheels On Deal. I'm interested in renting a car. Please share details.`,
};
