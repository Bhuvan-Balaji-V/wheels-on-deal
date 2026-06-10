// data/locations.ts
export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  name: string;
  area: string;
  type: "university" | "locality" | "area";
  landmark: string;
  distance: string; // from city center
  description: string;
  longDescription: string;
  nearbyAreas: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    h2: string;
  };
  faqs: LocationFAQ[];
  coordinates?: { lat: number; lng: number };
}

const universityFAQs = (area: string, landmark: string): LocationFAQ[] => [
  {
    question: `How close is Wheels On Deal to ${landmark}?`,
    answer: `We deliver cars directly to ${area}. Contact us via WhatsApp and we'll coordinate the exact pickup point near ${landmark}.`,
  },
  {
    question: `Can students from ${landmark} rent a car without a credit card?`,
    answer: `Yes! We accept UPI, cash, and digital payments. No credit card required. A valid DL and ID is all you need.`,
  },
  {
    question: `What are the rental durations available near ${area}?`,
    answer: `We offer hourly, daily, and multi-day rentals. Weekend packages are popular among students near ${area}. WhatsApp us for the best deal.`,
  },
  {
    question: `Is the car delivered to ${area} or do I need to pick it up?`,
    answer: `We offer doorstep delivery near ${area}. Exact delivery point is confirmed on WhatsApp booking.`,
  },
];

export const LOCATIONS: Location[] = [
  // Universities
  {
    slug: "msrit-bangalore",
    name: "Near MSRIT",
    area: "Mathikere / Rajajinagar",
    type: "university",
    landmark: "M.S. Ramaiah Institute of Technology",
    distance: "8 km from MG Road",
    description:
      "Self-drive car rental near MSRIT Bangalore. Perfect for MSRIT students for weekend trips, Nandi Hills rides & outstation adventures.",
    longDescription: `MSRIT (M.S. Ramaiah Institute of Technology) in Mathikere is one of Bangalore's most prestigious engineering colleges. With thousands of students always looking for adventure, Wheels On Deal brings premium self-drive Thar rentals right to your doorstep near MSRIT.

Whether it's a group road trip to Nandi Hills, a spontaneous drive to Coorg, or just cruising around Bangalore in a Thar, we make it happen fast and easy.`,
    nearbyAreas: ["Mathikere", "Rajajinagar", "Yeshwanthpur", "Malleswaram"],
    seo: {
      title: "Self Drive Car Rental Near MSRIT Bangalore | Thar Rental MSRIT",
      description:
        "Rent Mahindra Thar near MSRIT Bangalore. Self-drive car rental for MSRIT students. Instant WhatsApp booking. Doorstep delivery near Mathikere.",
      keywords: [
        "self drive car near MSRIT",
        "car rental near MSRIT bangalore",
        "thar rental MSRIT",
        "self drive car Mathikere",
        "car hire near ramaiah college",
      ],
      h1: "Self-Drive Car Rental Near MSRIT Bangalore",
      h2: "Thar & Thar Roxx Available Near M.S. Ramaiah Institute of Technology",
    },
    faqs: universityFAQs("Mathikere", "MSRIT"),
    coordinates: { lat: 13.0355, lng: 77.5602 },
  },
  {
    slug: "christ-university-bangalore",
    name: "Near Christ University",
    area: "Hosur Road / Bannerghatta Road",
    type: "university",
    landmark: "Christ (Deemed to be University)",
    distance: "7 km from MG Road",
    description:
      "Self-drive car rental near Christ University Bangalore. Weekend trips, Nandi Hills, Coorg — book your Thar via WhatsApp instantly.",
    longDescription: `Christ University on Hosur Road is home to thousands of students from across India. Wheels On Deal offers self-drive Mahindra Thar rentals right in the Christ University area — perfect for weekend adventures, college trips, and everything in between.`,
    nearbyAreas: ["Hosur Road", "BTM Layout", "Koramangala", "Silk Board"],
    seo: {
      title: "Self Drive Car Near Christ University Bangalore | Thar Rental",
      description:
        "Self-drive Thar rental near Christ University Bangalore. Easy WhatsApp booking. No advance payment. Perfect for student trips to Nandi Hills & Coorg.",
      keywords: [
        "self drive car near christ university",
        "car rental christ university bangalore",
        "thar rental hosur road",
        "self drive car BTM layout",
      ],
      h1: "Self-Drive Car Rental Near Christ University Bangalore",
      h2: "Rent Mahindra Thar Near Hosur Road & BTM Layout",
    },
    faqs: universityFAQs("Hosur Road", "Christ University"),
    coordinates: { lat: 12.9242, lng: 77.6102 },
  },
  {
    slug: "acharya-college-bangalore",
    name: "Near Acharya Institute",
    area: "Soladevanahalli / Hesaraghatta Road",
    type: "university",
    landmark: "Acharya Institute of Technology",
    distance: "15 km from MG Road",
    description:
      "Self-drive car rental near Acharya Institute Bangalore. Thar & Thar Roxx available on rent. WhatsApp booking, doorstep delivery.",
    longDescription: `Acharya Institute of Technology near Soladevanahalli is a major engineering college in North Bangalore. Students here love weekend getaways to Nandi Hills, Sakleshpur, and Shivanasamudra. Wheels On Deal makes it effortless with premium Thar rentals near Acharya.`,
    nearbyAreas: [
      "Soladevanahalli",
      "Hesaraghatta Road",
      "Yelahanka",
      "Yeshwanthpur",
    ],
    seo: {
      title: "Self Drive Car Near Acharya College Bangalore | Thar Rental",
      description:
        "Rent Mahindra Thar near Acharya Institute of Technology Bangalore. Self-drive SUV rental. Instant WhatsApp booking near Soladevanahalli.",
      keywords: [
        "self drive car near acharya college",
        "car rental acharya institute bangalore",
        "thar rental soladevanahalli",
        "self drive car hesaraghatta road",
      ],
      h1: "Self-Drive Car Rental Near Acharya Institute Bangalore",
      h2: "Premium Thar Rental Near Soladevanahalli & Hesaraghatta Road",
    },
    faqs: universityFAQs("Soladevanahalli", "Acharya Institute"),
    coordinates: { lat: 13.0977, lng: 77.5037 },
  },
  {
    slug: "bit-bangalore",
    name: "Near BIT Bangalore",
    area: "Yelahanka / KR Puram",
    type: "university",
    landmark: "Bangalore Institute of Technology",
    distance: "5 km from MG Road",
    description:
      "Self-drive car rental near BIT Bangalore. Thar & Thar Roxx for students. Instant WhatsApp booking, doorstep delivery in Yelahanka.",
    longDescription: `Bangalore Institute of Technology (BIT) is centrally located in Bangalore. Students from BIT are frequent renters at Wheels On Deal — especially for Nandi Hills sunrise trips and Coorg weekend drives. We offer premium self-drive Thar rentals near BIT with doorstep delivery.`,
    nearbyAreas: ["KR Road", "Basavanagudi", "Jayanagar", "V.V. Puram"],
    seo: {
      title: "Self Drive Car Near BIT Bangalore | Thar Rental BIT",
      description:
        "Rent Mahindra Thar near Bangalore Institute of Technology. Self-drive car rental for BIT students. Easy WhatsApp booking, no advance payment.",
      keywords: [
        "self drive car near BIT bangalore",
        "car rental BIT bangalore",
        "thar rental near bangalore institute technology",
        "self drive car VV puram",
      ],
      h1: "Self-Drive Car Rental Near BIT Bangalore",
      h2: "Rent Mahindra Thar Near Bangalore Institute of Technology",
    },
    faqs: universityFAQs("VV Puram", "BIT Bangalore"),
    coordinates: { lat: 12.9424, lng: 77.5732 },
  },
  {
    slug: "rnsit-bangalore",
    name: "Near RNSIT",
    area: "Channasandra / Uttarahalli",
    type: "university",
    landmark: "R.N.S. Institute of Technology",
    distance: "17 km from MG Road",
    description:
      "Self-drive car rental near RNSIT Bangalore. Premium Thar rentals for RNSIT students. Adventure trips to Sakleshpur, Coorg, Nandi Hills.",
    longDescription: `R.N.S. Institute of Technology (RNSIT) in Channasandra serves students from across Bangalore who love adventure. Wheels On Deal brings Mahindra Thar self-drive rentals close to RNSIT — making those weekend escapes to Sakleshpur or Coorg effortlessly possible.`,
    nearbyAreas: ["Channasandra", "Uttarahalli", "Kengeri", "JP Nagar"],
    seo: {
      title: "Self Drive Car Near RNSIT Bangalore | Thar Rental RNSIT",
      description:
        "Rent self-drive Mahindra Thar near RNSIT Bangalore. Car rental for RNSIT students. WhatsApp booking, doorstep delivery near Channasandra.",
      keywords: [
        "self drive car near RNSIT",
        "car rental RNSIT bangalore",
        "thar rental channasandra",
        "self drive car near kengeri",
      ],
      h1: "Self-Drive Car Rental Near RNSIT Bangalore",
      h2: "Thar & Thar Roxx Rental Near R.N.S. Institute of Technology",
    },
    faqs: universityFAQs("Channasandra", "RNSIT"),
    coordinates: { lat: 12.9045, lng: 77.4878 },
  },
  {
    slug: "sapthagiri-college-bangalore",
    name: "Near Sapthagiri College",
    area: "Hesaraghatta Road / Chikkabanavara",
    type: "university",
    landmark: "Sapthagiri College of Engineering",
    distance: "18 km from MG Road",
    description:
      "Self-drive car rental near Sapthagiri College Bangalore. Thar rental with doorstep delivery near Hesaraghatta Road.",
    longDescription: `Sapthagiri College of Engineering on Hesaraghatta Road is surrounded by adventurous terrain perfect for Thar rides. Wheels On Deal delivers premium self-drive Mahindra Thar rentals near Sapthagiri — whether it's for a day trip, weekend getaway or a scenic drive through Hesaraghatta Lake area.`,
    nearbyAreas: [
      "Hesaraghatta Road",
      "Chikkabanavara",
      "Yelahanka",
      "Tumkur Road",
    ],
    seo: {
      title:
        "Self Drive Car Near Sapthagiri College Bangalore | Thar Rental Hesaraghatta",
      description:
        "Rent self-drive Thar near Sapthagiri College Bangalore on Hesaraghatta Road. Instant WhatsApp booking. Premium SUV rental for students.",
      keywords: [
        "self drive car near sapthagiri college",
        "car rental sapthagiri college bangalore",
        "thar rental hesaraghatta road",
      ],
      h1: "Self-Drive Car Rental Near Sapthagiri College Bangalore",
      h2: "Mahindra Thar Rental Near Hesaraghatta Road",
    },
    faqs: universityFAQs("Hesaraghatta Road", "Sapthagiri College"),
    coordinates: { lat: 13.0986, lng: 77.4818 },
  },
  // Locality pages
  {
    slug: "yelahanka-bangalore",
    name: "Yelahanka",
    area: "Yelahanka, North Bangalore",
    type: "locality",
    landmark: "Yelahanka Air Force Station area",
    distance: "20 km from MG Road",
    description:
      "Self-drive car rental in Yelahanka Bangalore. Mahindra Thar on rent near Yelahanka New Town, Air Force area, and Kogilu Cross.",
    longDescription: `Yelahanka in North Bangalore is a thriving suburb home to defense personnel, IT professionals, and students. It's also perfectly located for road trips to Nandi Hills, Chikkaballapur, and Savandurga. Wheels On Deal offers premium self-drive Thar rentals throughout Yelahanka.`,
    nearbyAreas: [
      "Yelahanka New Town",
      "Kogilu Cross",
      "Bagalur Road",
      "Thanisandra",
    ],
    seo: {
      title: "Self Drive Car Rental Yelahanka Bangalore | Thar on Rent Yelahanka",
      description:
        "Rent Mahindra Thar in Yelahanka, North Bangalore. Self-drive car rental available near Yelahanka New Town, Kogilu Cross & Air Force area. WhatsApp booking.",
      keywords: [
        "self drive car rental yelahanka",
        "car rental yelahanka bangalore",
        "thar rental yelahanka",
        "self drive car north bangalore",
      ],
      h1: "Self-Drive Car Rental in Yelahanka, Bangalore",
      h2: "Rent Mahindra Thar Near Yelahanka New Town & Air Force Area",
    },
    faqs: [
      {
        question: "Is Yelahanka a good base for road trips?",
        answer:
          "Absolutely! Yelahanka is just 40 minutes from Nandi Hills, and well-positioned for trips to Chikkaballapur, Savandurga, and the Bangalore-Hyderabad highway stretch.",
      },
      ...universityFAQs("Yelahanka", "Yelahanka New Town"),
    ],
    coordinates: { lat: 13.1003, lng: 77.5963 },
  },
  {
    slug: "hebbal-bangalore",
    name: "Hebbal",
    area: "Hebbal, North Bangalore",
    type: "locality",
    landmark: "Hebbal Flyover / Hebbal Lake",
    distance: "10 km from MG Road",
    description:
      "Self-drive car rental in Hebbal Bangalore. Premium Thar rental near Hebbal, Thanisandra, Nagawara for weekend trips.",
    longDescription: `Hebbal is a key hub in North Bangalore, home to IT parks, hospitals, and residential areas. With easy access to NH44 (Hyderabad highway) and the Nandi Hills road, it's an ideal pickup point for road trips. Wheels On Deal offers Thar rentals near Hebbal with quick delivery.`,
    nearbyAreas: ["Thanisandra", "Nagawara", "Bellary Road", "Kempapura"],
    seo: {
      title: "Self Drive Car Rental Hebbal Bangalore | Thar Rental Hebbal",
      description:
        "Rent Mahindra Thar near Hebbal, Bangalore. Self-drive SUV available near Hebbal flyover, Thanisandra & Nagawara. WhatsApp booking in minutes.",
      keywords: [
        "self drive car rental hebbal",
        "car rental hebbal bangalore",
        "thar rental hebbal",
        "self drive car thanisandra",
      ],
      h1: "Self-Drive Car Rental in Hebbal, Bangalore",
      h2: "Thar & Thar Roxx Rental Near Hebbal Lake & Flyover",
    },
    faqs: universityFAQs("Hebbal", "Hebbal Flyover"),
    coordinates: { lat: 13.0599, lng: 77.5965 },
  },
  {
    slug: "koramangala-bangalore",
    name: "Koramangala",
    area: "Koramangala, South Bangalore",
    type: "locality",
    landmark: "Koramangala, Bangalore",
    distance: "4 km from MG Road",
    description:
      "Self-drive car rental in Koramangala Bangalore. Rent Mahindra Thar & Thar Roxx near Koramangala 1st to 8th Block.",
    longDescription: `Koramangala is Bangalore's startup and youth hub. If you're a tech professional, entrepreneur, or student looking for the ultimate weekend drive, Wheels On Deal delivers Mahindra Thar and Thar Roxx rentals right in Koramangala.`,
    nearbyAreas: [
      "Indiranagar",
      "HSR Layout",
      "BTM Layout",
      "Ejipura",
      "Sony World Junction",
    ],
    seo: {
      title: "Self Drive Car Rental Koramangala Bangalore | Thar Rental",
      description:
        "Rent Mahindra Thar in Koramangala, Bangalore. Self-drive car rental near 1st to 8th Block. Perfect for weekend trips. WhatsApp booking.",
      keywords: [
        "self drive car rental koramangala",
        "car rental koramangala bangalore",
        "thar rental koramangala",
        "SUV rental koramangala",
      ],
      h1: "Self-Drive Car Rental in Koramangala, Bangalore",
      h2: "Mahindra Thar & Thar Roxx Available in Koramangala",
    },
    faqs: universityFAQs("Koramangala", "Forum Mall"),
    coordinates: { lat: 12.9279, lng: 77.6271 },
  },
  {
    slug: "whitefield-bangalore",
    name: "Whitefield",
    area: "Whitefield, East Bangalore",
    type: "locality",
    landmark: "Whitefield IT Corridor",
    distance: "18 km from MG Road",
    description:
      "Self-drive car rental in Whitefield Bangalore. Premium Thar for IT professionals. Weekend escape from Whitefield made easy.",
    longDescription: `Whitefield is Bangalore's IT corridor and home to thousands of tech professionals who crave weekend escapes. Wheels On Deal brings luxury self-drive Mahindra Thar and Thar Roxx rentals to Whitefield — perfect for drives to Nandi Hills, Coorg, or Chikmagalur.`,
    nearbyAreas: ["ITPL", "Marathahalli", "Varthur", "Kadugodi"],
    seo: {
      title: "Self Drive Car Rental Whitefield Bangalore | Thar Rental Whitefield",
      description:
        "Rent Mahindra Thar in Whitefield, Bangalore. Self-drive car rental near ITPL, Varthur, Marathahalli. WhatsApp booking for weekend trips.",
      keywords: [
        "self drive car rental whitefield",
        "car rental whitefield bangalore",
        "thar rental whitefield",
        "SUV rental ITPL bangalore",
      ],
      h1: "Self-Drive Car Rental in Whitefield, Bangalore",
      h2: "Thar & Thar Roxx Available Near ITPL & Whitefield IT Corridor",
    },
    faqs: universityFAQs("Whitefield", "ITPL"),
    coordinates: { lat: 12.9698, lng: 77.7499 },
  },
  {
    slug: "electronic-city-bangalore",
    name: "Electronic City",
    area: "Electronic City, South Bangalore",
    type: "locality",
    landmark: "Electronic City Phase 1 & 2",
    distance: "18 km from MG Road",
    description:
      "Self-drive car rental in Electronic City Bangalore. Thar on rent near Infosys, Wipro campus. Weekend drive from Hosur Road made easy.",
    longDescription: `Electronic City is home to Infosys, Wipro, and thousands of IT professionals who deserve a break. Wheels On Deal offers premium self-drive Thar rentals right in Electronic City — take the flyover to adventure.`,
    nearbyAreas: ["Hosur Road", "Bommasandra", "Sarjapur Road", "Anekal"],
    seo: {
      title:
        "Self Drive Car Rental Electronic City Bangalore | Thar Rental EC",
      description:
        "Rent Mahindra Thar in Electronic City, Bangalore. Self-drive SUV near Infosys, Wipro. WhatsApp booking. Weekend trips made easy.",
      keywords: [
        "self drive car electronic city",
        "car rental electronic city bangalore",
        "thar rental hosur road",
      ],
      h1: "Self-Drive Car Rental in Electronic City, Bangalore",
      h2: "Thar & Thar Roxx Rental Near Electronic City IT Park",
    },
    faqs: universityFAQs("Electronic City", "Electronic City Phase 1"),
    coordinates: { lat: 12.8399, lng: 77.6770 },
  },
  {
    slug: "indiranagar-bangalore",
    name: "Indiranagar",
    area: "Indiranagar, Central Bangalore",
    type: "locality",
    landmark: "100 Feet Road, Indiranagar",
    distance: "5 km from MG Road",
    description:
      "Self-drive car rental in Indiranagar Bangalore. Thar & Thar Roxx on rent near 100 Feet Road. Perfect for Bangalore nightlife & weekend drives.",
    longDescription: `Indiranagar — Bangalore's most vibrant neighbourhood. Home to the best restaurants, bars, and young professionals. Wheels On Deal delivers Thar rentals to Indiranagar for those spontaneous road trips that start with 'let's just go'.`,
    nearbyAreas: ["100 Feet Road", "HAL", "Domlur", "Koramangala"],
    seo: {
      title: "Self Drive Car Rental Indiranagar Bangalore | Thar Rental 100 Feet Road",
      description:
        "Rent Mahindra Thar near Indiranagar, Bangalore. Self-drive car on 100 Feet Road, HAL area. Instant WhatsApp booking.",
      keywords: [
        "self drive car rental indiranagar",
        "car rental indiranagar bangalore",
        "thar rental 100 feet road",
      ],
      h1: "Self-Drive Car Rental in Indiranagar, Bangalore",
      h2: "Mahindra Thar & Thar Roxx Rental Near 100 Feet Road",
    },
    faqs: universityFAQs("Indiranagar", "100 Feet Road"),
    coordinates: { lat: 12.9784, lng: 77.6408 },
  },
  {
    slug: "jp-nagar-bangalore",
    name: "JP Nagar",
    area: "JP Nagar, South Bangalore",
    type: "locality",
    landmark: "JP Nagar 3rd Phase",
    distance: "10 km from MG Road",
    description:
      "Self-drive car rental in JP Nagar Bangalore. Thar on rent near Bannerghatta Road, Gottigere. Weekend trips from JP Nagar.",
    longDescription: `JP Nagar is a large residential area in South Bangalore, well connected and close to Bannerghatta Road for wildlife safaris. Wheels On Deal brings Thar rentals to JP Nagar for weekend adventures.`,
    nearbyAreas: ["Bannerghatta Road", "Gottigere", "Uttarahalli", "Kanakapura Road"],
    seo: {
      title: "Self Drive Car Rental JP Nagar Bangalore | Thar on Rent JP Nagar",
      description:
        "Rent Mahindra Thar in JP Nagar, Bangalore. Self-drive car near Bannerghatta Road. WhatsApp booking for weekend trips.",
      keywords: [
        "self drive car jp nagar",
        "car rental jp nagar bangalore",
        "thar rental jp nagar",
      ],
      h1: "Self-Drive Car Rental in JP Nagar, Bangalore",
      h2: "Thar Rental Near Bannerghatta Road & JP Nagar",
    },
    faqs: universityFAQs("JP Nagar", "JP Nagar 3rd Phase"),
    coordinates: { lat: 12.9062, lng: 77.5888 },
  },
  {
    slug: "hsr-layout-bangalore",
    name: "HSR Layout",
    area: "HSR Layout, South Bangalore",
    type: "locality",
    landmark: "HSR Layout Sector 7",
    distance: "12 km from MG Road",
    description:
      "Self-drive car rental in HSR Layout Bangalore. Thar & Thar Roxx for rent near Sector 7, BDA Complex.",
    longDescription: `HSR Layout is a premium residential and startup hub in South Bangalore. Perfect Thar rentals for weekend getaways from one of Bangalore's most sought-after localities.`,
    nearbyAreas: ["Silk Board", "Koramangala", "BTM Layout", "Agara"],
    seo: {
      title: "Self Drive Car Rental HSR Layout Bangalore | Thar Rental HSR",
      description:
        "Rent Mahindra Thar in HSR Layout Bangalore. Self-drive SUV near Sector 7, BDA Complex. WhatsApp booking.",
      keywords: [
        "self drive car hsr layout",
        "car rental hsr layout bangalore",
        "thar rental hsr",
      ],
      h1: "Self-Drive Car Rental in HSR Layout, Bangalore",
      h2: "Mahindra Thar & Thar Roxx in HSR Layout",
    },
    faqs: universityFAQs("HSR Layout", "Sector 7"),
    coordinates: { lat: 12.9116, lng: 77.6474 },
  },
  {
    slug: "btm-layout-bangalore",
    name: "BTM Layout",
    area: "BTM Layout, South Bangalore",
    type: "locality",
    landmark: "BTM Layout 2nd Stage",
    distance: "8 km from MG Road",
    description:
      "Self-drive car rental in BTM Layout Bangalore. Mahindra Thar on rent. Ideal for students near Christ University and BMS College.",
    longDescription: `BTM Layout is a dense, vibrant locality in South Bangalore home to students from Christ University, BMS, and numerous other colleges. Wheels On Deal offers premium Thar rentals in BTM.`,
    nearbyAreas: ["Jayadeva", "Madiwala", "Silk Board", "Koramangala"],
    seo: {
      title: "Self Drive Car Rental BTM Layout Bangalore | Thar Rental BTM",
      description:
        "Rent Mahindra Thar in BTM Layout, Bangalore. Self-drive car for students. WhatsApp booking near 2nd Stage BTM.",
      keywords: [
        "self drive car btm layout",
        "car rental btm layout bangalore",
        "thar rental btm",
      ],
      h1: "Self-Drive Car Rental in BTM Layout, Bangalore",
      h2: "Rent Mahindra Thar Near BTM Layout 2nd Stage",
    },
    faqs: universityFAQs("BTM Layout", "BTM 2nd Stage"),
    coordinates: { lat: 12.9165, lng: 77.6101 },
  },
  {
    slug: "malleswaram-bangalore",
    name: "Malleswaram",
    area: "Malleswaram, Central Bangalore",
    type: "locality",
    landmark: "Malleswaram Circle",
    distance: "6 km from MG Road",
    description:
      "Self-drive car rental in Malleswaram Bangalore. Thar on rent near Malleswaram Circle, Rajajinagar. Doorstep delivery.",
    longDescription: `Malleswaram is one of Bangalore's oldest and most culturally rich neighborhoods. Now home to young professionals and students, it's a great pickup point for Thar rentals from Wheels On Deal.`,
    nearbyAreas: ["Rajajinagar", "Yeshwanthpur", "Mathikere", "Sadashivanagar"],
    seo: {
      title: "Self Drive Car Rental Malleswaram Bangalore | Thar Rental",
      description:
        "Rent Mahindra Thar in Malleswaram, Bangalore. Self-drive car rental near Malleswaram Circle. WhatsApp booking.",
      keywords: [
        "self drive car malleswaram",
        "car rental malleswaram bangalore",
        "thar rental rajajinagar",
      ],
      h1: "Self-Drive Car Rental in Malleswaram, Bangalore",
      h2: "Mahindra Thar Rental Near Malleswaram & Rajajinagar",
    },
    faqs: universityFAQs("Malleswaram", "Malleswaram Circle"),
    coordinates: { lat: 13.0035, lng: 77.5679 },
  },
  {
    slug: "kr-puram-bangalore",
    name: "KR Puram",
    area: "KR Puram, East Bangalore",
    type: "locality",
    landmark: "KR Puram Bridge",
    distance: "12 km from MG Road",
    description:
      "Self-drive car rental in KR Puram Bangalore. Thar & Thar Roxx on rent. Gateway to Whitefield, Old Madras Road adventures.",
    longDescription: `KR Puram is a major junction connecting Central Bangalore to Whitefield and beyond. Perfect for self-drive pickups before heading east on Old Madras Road.`,
    nearbyAreas: ["Old Madras Road", "Marathahalli", "ITPL", "Banaswadi"],
    seo: {
      title: "Self Drive Car Rental KR Puram Bangalore | Thar Rental KR Puram",
      description:
        "Rent Mahindra Thar in KR Puram, Bangalore. Self-drive SUV rental near Old Madras Road, Whitefield corridor. WhatsApp booking.",
      keywords: [
        "self drive car kr puram",
        "car rental kr puram bangalore",
        "thar rental old madras road",
      ],
      h1: "Self-Drive Car Rental in KR Puram, Bangalore",
      h2: "Rent Mahindra Thar Near KR Puram Bridge & Old Madras Road",
    },
    faqs: universityFAQs("KR Puram", "KR Puram Bridge"),
    coordinates: { lat: 13.0, lng: 77.6938 },
  },
  {
    slug: "banashankari-bangalore",
    name: "Banashankari",
    area: "Banashankari, South Bangalore",
    type: "locality",
    landmark: "Banashankari Temple",
    distance: "12 km from MG Road",
    description:
      "Self-drive car rental in Banashankari Bangalore. Thar on rent near Banashankari Stage 3, Kanakapura Road.",
    longDescription: `Banashankari is a major South Bangalore locality, well connected to Kanakapura Road which is a popular route for weekend road trips. Wheels On Deal offers Thar rentals near Banashankari.`,
    nearbyAreas: ["Kanakapura Road", "Uttarahalli", "JP Nagar", "Jayanagar"],
    seo: {
      title: "Self Drive Car Rental Banashankari Bangalore | Thar Rental",
      description:
        "Rent Mahindra Thar in Banashankari, South Bangalore. Self-drive car near Kanakapura Road. WhatsApp booking.",
      keywords: [
        "self drive car banashankari",
        "car rental banashankari bangalore",
        "thar rental kanakapura road",
      ],
      h1: "Self-Drive Car Rental in Banashankari, Bangalore",
      h2: "Mahindra Thar Rental Near Kanakapura Road",
    },
    faqs: universityFAQs("Banashankari", "Banashankari Temple"),
    coordinates: { lat: 12.9256, lng: 77.5461 },
  },
  {
    slug: "jayanagar-bangalore",
    name: "Jayanagar",
    area: "Jayanagar, South Bangalore",
    type: "locality",
    landmark: "Jayanagar 4th Block",
    distance: "8 km from MG Road",
    description:
      "Self-drive car rental in Jayanagar Bangalore. Premium Thar & Thar Roxx for rent near 4th Block, South End Circle.",
    longDescription: `Jayanagar, one of Bangalore's most established residential areas. Known for wide roads and great connectivity, it's a perfect Thar rental pickup point for south Bangalore drives.`,
    nearbyAreas: ["Basavanagudi", "Ashoka Pillar", "Sarakki", "BTM Layout"],
    seo: {
      title: "Self Drive Car Rental Jayanagar Bangalore | Thar Rental Jayanagar",
      description:
        "Rent Mahindra Thar in Jayanagar, Bangalore. Self-drive car near 4th Block, South End Circle. WhatsApp booking.",
      keywords: [
        "self drive car jayanagar",
        "car rental jayanagar bangalore",
        "thar rental 4th block jayanagar",
      ],
      h1: "Self-Drive Car Rental in Jayanagar, Bangalore",
      h2: "Thar & Thar Roxx Near Jayanagar 4th Block",
    },
    faqs: universityFAQs("Jayanagar", "4th Block Jayanagar"),
    coordinates: { lat: 12.9308, lng: 77.5828 },
  },
  {
    slug: "rajajinagar-bangalore",
    name: "Rajajinagar",
    area: "Rajajinagar, West Bangalore",
    type: "locality",
    landmark: "Rajajinagar Industrial Area",
    distance: "7 km from MG Road",
    description:
      "Self-drive car rental in Rajajinagar Bangalore. Thar rental near Rajajinagar 1st Block, Chord Road.",
    longDescription: `Rajajinagar is a large West Bangalore locality. Close to MSRIT and several engineering colleges, it's a popular Thar rental point for student road trips.`,
    nearbyAreas: ["Chord Road", "Yeshwanthpur", "Mathikere", "Basaveshwara Nagar"],
    seo: {
      title: "Self Drive Car Rental Rajajinagar Bangalore | Thar Rental",
      description:
        "Rent Mahindra Thar in Rajajinagar, Bangalore. Self-drive car near Chord Road. WhatsApp booking, doorstep delivery.",
      keywords: [
        "self drive car rajajinagar",
        "car rental rajajinagar bangalore",
        "thar rental chord road",
      ],
      h1: "Self-Drive Car Rental in Rajajinagar, Bangalore",
      h2: "Mahindra Thar Rental Near Rajajinagar & Chord Road",
    },
    faqs: universityFAQs("Rajajinagar", "1st Block"),
    coordinates: { lat: 13.0068, lng: 77.5521 },
  },
];

// Add more locations to reach 50+
export const ADDITIONAL_LOCATIONS: Partial<Location>[] = [
  { slug: "sarjapur-road-bangalore", name: "Sarjapur Road", area: "Sarjapur Road" },
  { slug: "marathahalli-bangalore", name: "Marathahalli", area: "Marathahalli" },
  { slug: "bellandur-bangalore", name: "Bellandur", area: "Bellandur" },
  { slug: "hbr-layout-bangalore", name: "HBR Layout", area: "HBR Layout" },
  { slug: "rt-nagar-bangalore", name: "RT Nagar", area: "RT Nagar" },
  { slug: "kalyan-nagar-bangalore", name: "Kalyan Nagar", area: "Kalyan Nagar" },
  { slug: "devanahalli-bangalore", name: "Devanahalli", area: "Near Airport" },
  { slug: "peenya-bangalore", name: "Peenya", area: "Peenya Industrial Area" },
  { slug: "tumkur-road-bangalore", name: "Tumkur Road", area: "Tumkur Road" },
  { slug: "kengeri-bangalore", name: "Kengeri", area: "Kengeri West Bangalore" },
  { slug: "jntu-bangalore", name: "Near JNTU", area: "Ramanagara Road" },
  { slug: "pes-university-bangalore", name: "Near PES University", area: "Banashankari" },
  { slug: "bms-college-bangalore", name: "Near BMS College", area: "Basavanagudi" },
  { slug: "rvce-bangalore", name: "Near RVCE", area: "Mysore Road" },
  { slug: "manipal-university-bangalore", name: "Near Manipal University", area: "Yelahanka" },
  { slug: "dayananda-sagar-bangalore", name: "Near Dayananda Sagar", area: "Banashankari" },
  { slug: "amrita-college-bangalore", name: "Near Amrita College", area: "Kasavanahalli" },
  { slug: "vtu-belgaum-bangalore", name: "Near VTU Center", area: "Muddenahalli" },
  { slug: "nitte-meenakshi-bangalore", name: "Near NMIT", area: "Yelahanka" },
  { slug: "bangalore-university-bangalore", name: "Near Bangalore University", area: "Jnanabharathi" },
  { slug: "mysore-road-bangalore", name: "Mysore Road", area: "Mysore Road Bangalore" },
  { slug: "old-madras-road-bangalore", name: "Old Madras Road", area: "East Bangalore" },
  { slug: "hosur-road-bangalore", name: "Hosur Road", area: "South Bangalore" },
  { slug: "bellary-road-bangalore", name: "Bellary Road", area: "North Bangalore" },
  { slug: "cunningham-road-bangalore", name: "Cunningham Road", area: "Central Bangalore" },
  { slug: "residency-road-bangalore", name: "Residency Road", area: "Central Bangalore" },
  { slug: "ulsoor-bangalore", name: "Ulsoor", area: "Ulsoor Bangalore" },
  { slug: "frazer-town-bangalore", name: "Frazer Town", area: "Frazer Town" },
  { slug: "cox-town-bangalore", name: "Cox Town", area: "Cox Town" },
  { slug: "domlur-bangalore", name: "Domlur", area: "Domlur" },
  { slug: "brookefield-bangalore", name: "Brookefield", area: "Brookefield" },
  { slug: "mahadevapura-bangalore", name: "Mahadevapura", area: "Mahadevapura" },
  { slug: "nagarbhavi-bangalore", name: "Nagarbhavi", area: "West Bangalore" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return [
    ...LOCATIONS.map((loc) => loc.slug),
    ...ADDITIONAL_LOCATIONS.map((loc) => loc.slug as string),
  ];
}
