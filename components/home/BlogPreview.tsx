"use client";
// components/home/BlogPreview.tsx
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const previewPosts = BLOG_POSTS.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <div className="container-luxury">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 animate-on-scroll">
          <div>
            <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
              Stories
            </span>
            <div className="divider-gold my-3 mx-0" aria-hidden="true" />
            <h2
              id="blog-heading"
              className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light"
            >
              Road Trip{" "}
              <span className="text-gold-gradient font-semibold italic">
                Guides
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A84C] text-sm uppercase tracking-widest whitespace-nowrap hover:gap-4 transition-all shrink-0"
          >
            All Stories
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post, i) => (
            <article
              key={post.slug}
              className="animate-on-scroll group rounded-xl overflow-hidden car-card-hover"
              style={{
                animationDelay: `${i * 100}ms`,
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Link href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>
                {/* Cover image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(22,22,22,0.8) 0%, transparent 60%)",
                    }}
                  />
                  {/* Tag */}
                  {post.tags[0] && (
                    <span
                      className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold"
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

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-[#444440] text-xs">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} aria-hidden="true" />
                      {post.readTime} read
                    </span>
                  </div>
                  <h3 className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-xl font-semibold leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#888880] text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#C9A84C] text-xs uppercase tracking-widest font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
