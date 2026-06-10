# Wheels On Deal — Complete Setup & Launch Guide

## 1. Quick Start (5 Minutes to Running)

```bash
# Unzip the project
unzip wheels-on-deal-complete.zip
cd wheels-on-deal

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 2. Before Launch — Critical Customizations

### Step 1: Update WhatsApp Number
Open `data/config.ts` and replace:
```ts
whatsapp: {
  number: "919876543210",   // ← Your actual number (91 + 10 digits, no spaces)
  display: "+91 98765 43210", // ← Display format
}
```

### Step 2: Update Contact Info
Still in `data/config.ts`:
```ts
contact: {
  email: "hello@wheelsondeal.in",   // ← Your email
  phone: "+91 98765 43210",         // ← Your phone
}
```

### Step 3: Update Social Links
```ts
social: {
  instagram: "https://instagram.com/wheelsondeal", // ← Your Instagram
}
```

### Step 4: Add Real Car Images
Replace Unsplash URLs in `data/cars.ts` with your actual Thar/Thar Roxx photos.
Recommended: Upload to `/public/images/cars/` and use local paths.

### Step 5: Update Admin Password
In `.env.local` (create this file):
```
NEXT_PUBLIC_ADMIN_PASSWORD=YourSecurePassword123
```

### Step 6: Add Google Verification Code
In `app/layout.tsx`, find:
```ts
verification: {
  google: "YOUR_GOOGLE_VERIFICATION_CODE",
}
```
Replace with your actual Search Console verification code.

---

## 3. Environment Variables

Create `.env.local` in the root:
```env
# Admin
NEXT_PUBLIC_ADMIN_PASSWORD=YourStrongPassword

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://wheelsondeal.in
```

---

## 4. Deploying to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then set environment variables in Vercel dashboard
```

Or connect via GitHub:
1. Push to GitHub
2. Import project at vercel.com/new
3. Add environment variables in Project Settings
4. Deploy

Vercel auto-detects Next.js — zero config needed.

---

## 5. Custom Domain Setup

In Vercel dashboard:
1. Go to Project → Settings → Domains
2. Add `wheelsondeal.in` and `www.wheelsondeal.in`
3. Update your domain DNS:
   - A record: `@` → `76.76.21.21` (Vercel IP)
   - CNAME: `www` → `cname.vercel-dns.com`

---

## 6. Google Search Console Setup

1. Go to search.google.com/search-console
2. Add property: `https://wheelsondeal.in`
3. Verify via HTML tag method → copy the verification code
4. Paste in `app/layout.tsx` → `verification.google`
5. Submit your sitemap: `https://wheelsondeal.in/sitemap.xml`

---

## 7. Google Business Profile (CRITICAL for Local SEO)

This is the #1 most important SEO step:

1. Go to business.google.com
2. Create/claim "Wheels On Deal" in Bangalore
3. Add:
   - Business category: "Car Rental Agency"
   - Phone, WhatsApp, address
   - Business hours
   - All your car photos (Thar, Thar Roxx)
   - Service areas (all 50+ locations)
4. Collect Google Reviews — this directly impacts local rankings

---

## 8. SEO Content Strategy

### Week 1-2: Technical Foundation
- [ ] Deploy site to wheelsondeal.in
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Verify all pages load correctly

### Week 3-4: Content & Links
- [ ] Add real car photos (professional quality)
- [ ] Publish 2 more blog posts
- [ ] Share on Instagram with location tags
- [ ] Ask early customers for Google reviews

### Month 2: Local Citations
- [ ] List on JustDial as "Car Rental"
- [ ] List on Sulekha
- [ ] List on IndiaMART
- [ ] Create Instagram Reels of Thar rides (huge for Bangalore)

### Month 3+: Link Building
- [ ] Guest posts on Bangalore travel blogs
- [ ] Partner with college fest organizers (MSRIT Tech Fest, etc.)
- [ ] Reach out to Bangalore travel influencers

---

## 9. Adding More SEO Location Pages

To add a new location page, open `data/locations.ts` and add to `ADDITIONAL_LOCATIONS`:
```ts
{ slug: "new-area-bangalore", name: "New Area", area: "New Area, Bangalore" }
```

For a full page with FAQs and long-form content, add a complete `Location` object to the `LOCATIONS` array.

The dynamic route `/app/rent/[location]/page.tsx` handles everything automatically.

---

## 10. Adding Blog Posts

Open `data/blogs.ts` and add a new `BlogPost` object to the `BLOG_POSTS` array:

```ts
{
  slug: "your-blog-slug",
  title: "Your Blog Title",
  excerpt: "Brief description...",
  content: `
# H1 Heading
## H2 Heading

Your content here. Use **bold** for emphasis.

- Bullet point 1
- Bullet point 2
  `,
  coverImage: "https://...",
  publishedAt: "2025-02-01",
  updatedAt: "2025-02-01",
  author: "Wheels On Deal Team",
  authorBio: "Your Bangalore self-drive experts",
  tags: ["tag1", "tag2"],
  readTime: "5 min",
  seo: {
    title: "SEO Title | Wheels On Deal",
    description: "Meta description...",
    keywords: ["keyword1", "keyword2"],
  },
  relatedCars: ["mahindra-thar"],
  relatedLocations: ["koramangala-bangalore"],
}
```

---

## 11. Admin Portal Usage

Access at: `https://wheelsondeal.in/superadmin`

Password: Set via `NEXT_PUBLIC_ADMIN_PASSWORD` env var (default: `WheelsAdmin2025`)

Features:
- **Dashboard**: Site stats overview
- **Cars**: View/edit fleet (edit SEO titles, descriptions, badges)
- **Blogs**: Create/edit/delete blog posts
- **Settings**: Update WhatsApp number, contact info, SEO defaults

> **Important**: The admin currently uses React state for edits (changes don't persist on refresh). To make it persistent, connect the Save buttons to Next.js API routes that write to your data files or a database. See "Production Integration" notes within each admin page.

---

## 12. Making Admin Persistent (Production Upgrade)

Create `/app/api/admin/settings/route.ts`:
```ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  const body = await req.json();
  const configPath = path.join(process.cwd(), 'data/config.ts');
  // Write updated config
  // (Use a proper template or JSON store in production)
  return NextResponse.json({ success: true });
}
```

For a full CMS, integrate **Sanity.io** (free tier available) — it works beautifully with Next.js and gives you a hosted content editor.

---

## 13. Performance Checklist

Before launch, run Lighthouse audit:
```bash
npm run build
npm start
# Then run Chrome Lighthouse in DevTools
```

Target scores:
- Performance: 90+
- SEO: 100
- Accessibility: 90+
- Best Practices: 95+

Key optimizations already built in:
- ✅ Next/Image for all images (WebP, lazy loading, blur placeholder)
- ✅ Font preloading via Google Fonts with `display=swap`
- ✅ Static generation for all SEO pages (SSG)
- ✅ Scroll-based animation with IntersectionObserver (no layout shift)
- ✅ CSS-only transitions where possible
- ✅ Schema markup on all key pages
- ✅ Canonical URLs on every page
- ✅ OpenGraph on every page

---

## 14. Analytics Setup

Add Google Analytics 4 in `app/layout.tsx`:
```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <Script id="ga4">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
    </Script>
  </>
)}
```

---

## 15. WhatsApp Business API (Future Upgrade)

Currently using direct `wa.me` links. For advanced tracking:
1. Set up WhatsApp Business API via Meta Business
2. Add UTM parameters to WhatsApp links for analytics
3. Use a CRM (like Zoho Free) to track leads

Track conversions by adding this to each WhatsApp link:
```
?text=Hi!...&utm_source=website&utm_medium=cta&utm_campaign=hero
```

---

## 16. File Structure Reference

```
wheels-on-deal/
├── app/                     # Next.js 15 App Router
│   ├── layout.tsx           # Root layout + global SEO
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Design tokens + global styles
│   ├── sitemap.ts           # Dynamic XML sitemap
│   ├── robots.ts            # robots.txt
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── cars/
│   │   ├── page.tsx         # Fleet listing
│   │   └── [slug]/page.tsx  # Individual car pages
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Individual blog posts
│   ├── rent/
│   │   ├── bangalore/page.tsx       # City-level SEO page
│   │   └── [location]/page.tsx     # 50+ location SEO pages
│   └── superadmin/
│       ├── layout.tsx       # Password-protected admin layout
│       ├── page.tsx         # Dashboard
│       ├── cars/page.tsx    # Car management
│       ├── blogs/page.tsx   # Blog management
│       └── settings/page.tsx # Site settings
│
├── components/
│   ├── layout/              # Navbar, Footer, WhatsAppFloat
│   ├── home/                # All homepage sections
│   └── ui/                  # Reusable UI (FAQAccordion)
│
├── data/                    # All content as TypeScript
│   ├── config.ts            # ⚡ UPDATE THIS FIRST
│   ├── cars.ts              # Car data + SEO
│   ├── locations.ts         # 50+ SEO location pages
│   ├── blogs.ts             # Blog posts
│   └── faqs.ts              # FAQs + Reviews
│
├── lib/
│   └── utils.ts             # WhatsApp URL builder + SEO utils
│
└── public/images/           # Add your car photos here
```

---

## 17. SEO Keywords Targeted

### High Priority (Rank for These First)
| Keyword | Target Page |
|---------|------------|
| self drive car rental bangalore | `/` |
| thar rental bangalore | `/cars/mahindra-thar` |
| mahindra thar on rent | `/cars/mahindra-thar` |
| thar roxx rental bangalore | `/cars/mahindra-thar-roxx` |
| SUV rental bangalore | `/cars` |
| self drive car near MSRIT | `/rent/msrit-bangalore` |
| self drive car near Christ University | `/rent/christ-university-bangalore` |
| car rental near me bangalore | `/` |

### Long Tail (Passive Traffic)
- nandi hills road trip car rental
- self drive car for college students bangalore
- thar rental for weekend trip bangalore
- car rental near engineering college bangalore

---

## Support

For technical questions about this codebase:
- All files are fully commented
- Each component is self-contained
- Data files are the single source of truth

**Replace `9876543210` with your real number before going live!**
