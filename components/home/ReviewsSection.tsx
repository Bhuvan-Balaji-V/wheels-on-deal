"use client";
// components/home/ReviewsSection.tsx
import { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/data/faqs";

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      aria-labelledby="reviews-heading"
      style={{ background: "#0D0D0D" }}
    >
      <div className="container-luxury">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
            Reviews
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h2
            id="reviews-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond',serif] font-light"
          >
            What Renters{" "}
            <span className="text-gold-gradient font-semibold italic">Say</span>
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < 5 ? "fill-[#C9A84C] text-[#C9A84C]" : "text-[#444440]"}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-2xl font-semibold">
              4.9
            </span>
            <span className="text-[#888880] text-sm">
              on Google · 50+ reviews
            </span>
          </div>
        </div>

        {/* Review cards — scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 px-4 pb-4 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-max md:min-w-0 animate-on-scroll">
            {REVIEWS.map((review, i) => (
              <article
                key={i}
                className="w-72 md:w-auto flex flex-col p-6 rounded-xl relative"
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.05)",
                  animationDelay: `${i * 80}ms`,
                }}
                aria-label={`Review from ${review.name}`}
              >
                {/* Quote icon */}
                <Quote
                  size={20}
                  className="absolute top-5 right-5 opacity-10"
                  style={{ color: "#C9A84C" }}
                  aria-hidden="true"
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} stars`}>
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className={
                        j < review.rating
                          ? "fill-[#C9A84C] text-[#C9A84C]"
                          : "text-[#444440]"
                      }
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-[#888880] text-sm leading-relaxed flex-1 mb-5 line-clamp-4">
                  &ldquo;{review.review}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold font-['DM_Sans',sans-serif] shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #8B6914)",
                      color: "#0A0A0A",
                    }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-[#F5F5F0] text-sm font-semibold leading-tight">
                      {review.name}
                    </p>
                    <p className="text-[#444440] text-xs">{review.location}</p>
                  </div>
                  {/* Google G logo */}
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google review">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
