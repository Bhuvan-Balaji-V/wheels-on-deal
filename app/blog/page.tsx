// app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { SITE_CONFIG } from "@/data/config";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Self-Drive Car Rental Guides & Road Trip Tips Bangalore",
  description:
    "Road trip guides, self-drive tips, and car rental advice for Bangalore. From Nandi Hills sunrise drives to student rental guides — your Bangalore adventure resource.",
  keywords:
    "bangalore road trip blog, self drive car tips, thar rental guide, nandi hills road trip, bangalore weekend trips",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="container-luxury text-center">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-semibold">Stories</span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond',serif] font-light text-[#F5F5F0] mb-4">
            Road Trip{" "}
            <span className="text-gold-gradient font-semibold italic">Guides</span>
          </h1>
          <p className="text-[#888880] max-w-lg mx-auto text-sm">
            Self-drive tips, destination guides, and everything you need to explore Bangalore and beyond.
          </p>
        </div>
      </div>

      <main className="container-luxury py-16" role="main">
        {/* Featured post */}
        <article
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 rounded-2xl overflow-hidden"
          style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.05)" }}
          aria-label={`Featured: ${featured.title}`}
        >
          <div className="relative h-64 lg:h-auto min-h-[300px]">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, rgba(22,22,22,1))" }}
            />
            <span
              className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full font-semibold"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
              }}
            >
              Featured
            </span>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 text-[#444440] text-xs">
              <span>{formatDate(featured.publishedAt)}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {featured.readTime} read
              </span>
            </div>
            <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3 leading-snug">
              {featured.title}
            </h2>
            <p className="text-[#888880] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full text-[#888880]"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="inline-flex items-center gap-2 text-[#C9A84C] text-sm uppercase tracking-widest hover:gap-4 transition-all font-semibold"
            >
              Read Full Guide
              <ArrowRight size={14} />
            </Link>
          </div>
        </article>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl overflow-hidden car-card-hover"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <Link href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(22,22,22,0.8) 0%, transparent 60%)" }}
                  />
                  {post.tags[0] && (
                    <span
                      className="absolute bottom-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-widest rounded-full font-semibold"
                      style={{
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        color: "#C9A84C",
                      }}
                    >
                      {post.tags[0]}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-[#444440] text-xs">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-xl font-semibold leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[#888880] text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-xs uppercase tracking-widest font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
