# Wheels On Deal — Complete Project Architecture

## Business Context
- **Brand**: Wheels On Deal
- **Domain**: wheelsondeal.in
- **Location**: Bangalore, India
- **Product**: Self-drive car rentals (Mahindra Thar & Thar Roxx)
- **Primary CTA**: WhatsApp lead generation
- **Primary Goal**: Rank #1 for Bangalore self-drive + university area keywords

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.x |
| Animations | Framer Motion + GSAP (subtle) |
| SEO | next-seo + custom metadata |
| Icons | Lucide React |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans) |
| Images | Next/Image (optimized) |
| Schema | JSON-LD (react-schemaorg) |
| Sitemap | next-sitemap |
| Analytics | (slot for GA4) |
| Deployment | Vercel (recommended) |

---

## Folder Structure

```
wheels-on-deal/
├── app/
│   ├── layout.tsx                    # Root layout with global SEO
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Design tokens + global styles
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── cars/
│   │   ├── page.tsx                  # Car listing page
│   │   └── [slug]/
│   │       └── page.tsx              # Individual car page (dynamic)
│   │
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx              # Individual blog post (dynamic)
│   │
│   ├── faq/
│   │   └── page.tsx
│   │
│   ├── privacy-policy/
│   │   └── page.tsx
│   │
│   ├── terms/
│   │   └── page.tsx
│   │
│   ├── rent/
│   │   └── [location]/
│   │       └── page.tsx              # SEO landing pages (50-60 pages)
│   │
│   ├── superadmin/
│   │   ├── layout.tsx                # Protected admin layout
│   │   ├── page.tsx                  # Admin dashboard
│   │   ├── cars/page.tsx
│   │   ├── blogs/page.tsx
│   │   └── settings/page.tsx
│   │
│   ├── sitemap.ts                    # Dynamic sitemap
│   └── robots.ts                    # Robots.txt
│
├── components/
│   ├── ui/                          # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── GlassCard.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   │
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedCars.tsx
│   │   ├── LuxuryExperience.tsx
│   │   ├── UniversitySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── WhatsAppCTA.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── FAQSection.tsx
│   │   └── StatsSection.tsx
│   │
│   ├── cars/
│   │   ├── CarCard.tsx
│   │   ├── CarGallery.tsx
│   │   ├── CarSpecs.tsx
│   │   └── CarFAQ.tsx
│   │
│   ├── seo/
│   │   ├── LocalBusinessSchema.tsx
│   │   ├── CarSchema.tsx
│   │   ├── FAQSchema.tsx
│   │   └── BreadcrumbSchema.tsx
│   │
│   └── blog/
│       ├── BlogCard.tsx
│       └── BlogContent.tsx
│
├── data/
│   ├── cars.ts                      # Car data
│   ├── blogs.ts                     # Blog posts data
│   ├── faqs.ts                      # FAQ data
│   ├── reviews.ts                   # Google reviews data
│   ├── locations.ts                 # SEO location data (50-60 entries)
│   ├── universities.ts              # University-specific data
│   └── config.ts                   # Site config (WhatsApp, contact)
│
├── lib/
│   ├── whatsapp.ts                  # WhatsApp URL builders
│   ├── seo.ts                       # SEO metadata generators
│   └── utils.ts                     # Utility functions
│
├── public/
│   ├── images/
│   │   ├── cars/
│   │   ├── hero/
│   │   └── blog/
│   └── og/                         # OG images
│
├── next.config.ts
├── tailwind.config.ts
├── next-sitemap.config.js
└── package.json
```

---

## SEO Architecture

### Target Keywords & Landing Pages

**Tier 1 — High Volume (City Level)**
- `/` → "self drive car rental Bangalore"
- `/cars/mahindra-thar` → "Thar rental Bangalore"
- `/cars/mahindra-thar-roxx` → "Thar Roxx rental Bangalore"
- `/rent/bangalore` → "car rental Bangalore"

**Tier 2 — University Area Pages (50-60 pages)**
```
/rent/msrit-bangalore
/rent/christ-university-bangalore
/rent/acharya-college-bangalore
/rent/bit-bangalore
/rent/rnsit-bangalore
/rent/sapthagiri-college-bangalore
/rent/yelahanka-bangalore
/rent/hebbal-bangalore
/rent/koramangala-bangalore
/rent/whitefield-bangalore
/rent/electronic-city-bangalore
/rent/jp-nagar-bangalore
... (50+ total)
```

**Tier 3 — Intent Pages**
```
/blog/best-self-drive-cars-bangalore
/blog/thar-rental-nandi-hills
/blog/why-students-prefer-thar-rentals
/blog/suv-rental-near-msrit
/blog/bangalore-weekend-trip-cars
```

### Technical SEO Implementation

1. **Dynamic Metadata** — Each page generates unique title/description
2. **OpenGraph** — Rich social previews per page
3. **JSON-LD Schema** — LocalBusiness, Car, FAQ, BreadcrumbList
4. **Canonical URLs** — Auto-generated per page
5. **Sitemap** — Auto-generated covering all 60+ location pages
6. **Robots.txt** — Blocks /superadmin, allows all else
7. **Image Alt Text** — SEO-optimized alt attributes
8. **Internal Linking** — Car pages ↔ Location pages ↔ Blog posts
9. **Core Web Vitals** — Optimized via Next.js Image + font loading

---

## Data Structures

### Car
```typescript
interface Car {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  highlights: string[];
  faqs: FAQ[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  relatedLocations: string[];
}
```

### Location (SEO Page)
```typescript
interface Location {
  slug: string;
  name: string;
  area: string;
  type: 'university' | 'locality' | 'area';
  landmark: string;
  description: string;
  nearbyAreas: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
  };
  faqs: FAQ[];
}
```

### Blog Post
```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX or rich text
  coverImage: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
```

---

## WhatsApp Architecture

All CTAs generate prefilled WhatsApp messages:

```typescript
// Car-specific
"Hi! I'm interested in renting the Mahindra Thar from Wheels On Deal in Bangalore."

// Location-specific
"Hi! I need a self-drive car rental near MSRIT Bangalore. Please share details."

// General
"Hi! I'd like to know more about self-drive car rentals in Bangalore."
```

---

## Design System

### Color Palette
```css
--black-deep: #0A0A0A
--black-rich: #111111
--black-soft: #1A1A1A
--gold-primary: #C9A84C
--gold-light: #E2C97E
--gold-dark: #8B6914
--white-pure: #FFFFFF
--white-muted: #F5F5F0
--gray-warm: #888880
```

### Typography
- **Display**: Cormorant Garamond (luxury serif)
- **Body**: DM Sans (clean, modern)

---

## Admin Architecture (/superadmin)

**Auth**: Simple password-based (env var) — no auth library needed
**Storage**: localStorage (JSON) for MVP, upgrade to DB later

**Features**:
1. Car management (add/edit/delete + image upload)
2. Blog management (CRUD)
3. SEO metadata editor
4. WhatsApp number updater
5. Site config editor

---

## npm Packages

```json
{
  "dependencies": {
    "next": "15.x",
    "react": "19.x",
    "framer-motion": "^11.x",
    "gsap": "^3.x",
    "lucide-react": "^0.x",
    "next-seo": "^6.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "next-sitemap": "^4.x",
    "@types/node": "^20.x",
    "typescript": "^5.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/typography": "^0.5.x"
  }
}
```

---

## Development Roadmap

### Phase 1 — Foundation (Week 1)
- [ ] Next.js 15 project init
- [ ] Tailwind design system setup
- [ ] Global layout (Navbar, Footer)
- [ ] Data files (cars, locations, blogs, config)
- [ ] WhatsApp utility functions

### Phase 2 — Core Pages (Week 2)
- [ ] Homepage (all sections)
- [ ] Car listing page
- [ ] Individual car pages
- [ ] About + Contact pages

### Phase 3 — SEO Engine (Week 3)
- [ ] 50-60 location landing pages (dynamic)
- [ ] Blog listing + post pages
- [ ] FAQ page
- [ ] Sitemap + robots.txt
- [ ] Schema markup (all pages)

### Phase 4 — Admin (Week 4)
- [ ] /superadmin dashboard
- [ ] Car management
- [ ] Blog management
- [ ] Settings editor

### Phase 5 — Polish (Week 5)
- [ ] Performance optimization
- [ ] Lighthouse audit
- [ ] Mobile testing
- [ ] SEO audit
- [ ] Launch prep

---

## Performance Strategy

1. **Images**: Next/Image with blur placeholders, WebP format
2. **Fonts**: `display: swap`, preloaded
3. **Animations**: `will-change: transform`, GPU acceleration
4. **Bundle**: Dynamic imports for heavy components (GSAP)
5. **Rendering**: SSG for all static/SEO pages, ISR for admin-edited content
6. **CSS**: Tailwind purge + critical CSS inlining
