// data/faqs.ts
export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  {
    category: "Booking",
    question: "How do I book a self-drive car from Wheels On Deal?",
    answer:
      "Simply click the WhatsApp button on our website. Tell us the car you want, date, duration, and pickup location. We'll confirm within minutes. No complex forms, no waiting.",
  },
  {
    category: "Booking",
    question: "Do I need to pay in advance to book?",
    answer:
      "A refundable security deposit is collected at the time of car handover. No advance payment is required to confirm the booking via WhatsApp.",
  },
  {
    category: "Booking",
    question: "Can I book a car for the same day?",
    answer:
      "Yes! We accept same-day bookings subject to availability. WhatsApp us early — Thars book out fast on weekends.",
  },
  {
    category: "Documents",
    question: "What documents are required to rent a car?",
    answer:
      "You need: (1) Valid Indian Driving Licence (minimum 1 year old, LMV category), (2) Aadhaar Card or Passport as identity proof. That's it.",
  },
  {
    category: "Documents",
    question: "Can students with a fresh driving licence rent a car?",
    answer:
      "We require the licence to be at least 1 year old for insurance purposes. We do not accept driving licences that are less than 1 year old.",
  },
  {
    category: "Documents",
    question: "Is an international driving licence accepted?",
    answer:
      "Yes, international driving licences are accepted for foreign nationals, along with a valid passport.",
  },
  {
    category: "Cars & Pricing",
    question: "Why is pricing not shown on the website?",
    answer:
      "Pricing depends on duration, dates, and any special packages. We give you the most accurate and competitive quote directly on WhatsApp. No hidden charges.",
  },
  {
    category: "Cars & Pricing",
    question: "Is fuel included in the rental?",
    answer:
      "No, fuel is not included. You receive the car with a full tank and return it full. This ensures you only pay for what you use.",
  },
  {
    category: "Cars & Pricing",
    question: "Is there a minimum rental duration?",
    answer:
      "The minimum rental duration is typically 12 hours. We also offer half-day, full-day, and multi-day packages. Ask us on WhatsApp for the best option.",
  },
  {
    category: "Safety & Insurance",
    question: "Is the car insured?",
    answer:
      "Yes, all Wheels On Deal vehicles carry comprehensive insurance. However, the driver is responsible for following traffic rules and any violations.",
  },
  {
    category: "Safety & Insurance",
    question: "What happens if there's an accident or breakdown?",
    answer:
      "Contact us immediately on WhatsApp/call. We provide 24/7 roadside assistance. For accidents, you'll need to file an FIR and contact us. Insurance process will be guided by our team.",
  },
  {
    category: "Pickup & Delivery",
    question: "Do you offer doorstep delivery of the car?",
    answer:
      "Yes! We offer delivery near your location in Bangalore. Delivery charges may apply based on distance. Confirm on WhatsApp.",
  },
  {
    category: "Pickup & Delivery",
    question: "Can I drive the car outside Bangalore?",
    answer:
      "Yes, outstation travel is allowed. Inform us of your destination in advance. Special outstation packages are available for Coorg, Nandi Hills, Chikmagalur, and other popular destinations.",
  },
  {
    category: "Pickup & Delivery",
    question: "What are your operating hours?",
    answer:
      "We operate Monday to Sunday, 6:00 AM to 10:00 PM. For early morning pickups (for Nandi Hills sunrise drives), prior arrangement is required.",
  },
];

// data/reviews.ts
export interface Review {
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  platform: "google";
  initials: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Arjun Sharma",
    location: "MSRIT Student",
    rating: 5,
    review:
      "Booked the Thar for a Nandi Hills sunrise trip with 3 friends. The whole process was so smooth — WhatsApp at 11 PM, car delivered by 3:30 AM. The Thar absolutely killed it on the ghat roads. Best ₹XXX I've ever spent.",
    date: "2024-12-15",
    platform: "google",
    initials: "AS",
  },
  {
    name: "Priya Nair",
    location: "Koramangala",
    rating: 5,
    review:
      "Rented the Thar Roxx for a Coorg trip with my partner. The car was immaculate — full tank, clean, and the panoramic sunroof through the coffee estates was unreal. Wheels On Deal is now my go-to for every trip.",
    date: "2024-11-28",
    platform: "google",
    initials: "PN",
  },
  {
    name: "Rohan Verma",
    location: "Whitefield IT Professional",
    rating: 5,
    review:
      "Professional service, transparent communication, and the Thar was in perfect condition. Loved how they prefilled the WhatsApp message so I barely had to type anything. Will definitely book again.",
    date: "2024-11-10",
    platform: "google",
    initials: "RV",
  },
  {
    name: "Ananya Krishnan",
    location: "Christ University Student",
    rating: 5,
    review:
      "Me and my college friends have rented from Wheels On Deal 3 times now. Every time is seamless. The Thar is insane for road trips. The Roxx is even better when we want to feel fancy. 10/10!",
    date: "2024-10-25",
    platform: "google",
    initials: "AK",
  },
  {
    name: "Suresh Menon",
    location: "Hebbal",
    rating: 5,
    review:
      "Reliable, responsive, and the cars are well-maintained. I appreciate that they don't have hidden charges and give honest quotes on WhatsApp. The Thar Roxx with sunroof was the highlight of our Chikmagalur trip.",
    date: "2024-10-02",
    platform: "google",
    initials: "SM",
  },
  {
    name: "Neha Patel",
    location: "Indiranagar",
    rating: 4,
    review:
      "Great experience overall. The Thar was clean and well-maintained. Booking via WhatsApp is quick and easy. Only suggestion: provide more photos of the actual car you're getting. But the drive experience was fabulous!",
    date: "2024-09-18",
    platform: "google",
    initials: "NP",
  },
];
