"use client";
// components/home/FAQSection.tsx
import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/faqs";

const HOMEPAGE_FAQS = FAQS.slice(0, 8);

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      className="py-24 md:py-32 relative"
      aria-labelledby="faq-heading"
      style={{ background: "#0D0D0D" }}
    >
      <div className="container-luxury max-w-3xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-['DM_Sans',sans-serif] font-semibold">
            FAQs
          </span>
          <div className="divider-gold my-3" aria-hidden="true" />
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light"
          >
            Common{" "}
            <span className="text-gold-gradient font-semibold italic">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-2 animate-on-scroll" role="list">
          {HOMEPAGE_FAQS.map((faq, i) => (
            <div
              key={i}
              role="listitem"
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === i ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.02)",
                border: openIndex === i
                  ? "1px solid rgba(201,168,76,0.2)"
                  : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-[#F5F5F0] font-['DM_Sans',sans-serif] font-medium text-sm leading-snug group-hover:text-[#C9A84C] transition-colors pr-4">
                  {faq.question}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i
                      ? "rgba(201,168,76,0.15)"
                      : "rgba(255,255,255,0.04)",
                    color: openIndex === i ? "#C9A84C" : "#888880",
                    border: "1px solid",
                    borderColor: openIndex === i
                      ? "rgba(201,168,76,0.3)"
                      : "rgba(255,255,255,0.08)",
                  }}
                  aria-hidden="true"
                >
                  {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: openIndex === i ? "400px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="px-6 pb-5 text-[#888880] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 animate-on-scroll">
          <a
            href="/faq"
            className="text-[#C9A84C] text-sm uppercase tracking-widest hover:underline underline-offset-4"
          >
            View All FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}
