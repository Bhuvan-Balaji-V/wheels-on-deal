"use client";
// components/ui/FAQAccordion.tsx
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2" role="list">
      {faqs.map((faq, i) => (
        <div
          key={i}
          role="listitem"
          className="rounded-xl overflow-hidden transition-all duration-300"
          style={{
            background:
              openIndex === i
                ? "rgba(201,168,76,0.05)"
                : "rgba(255,255,255,0.02)",
            border:
              openIndex === i
                ? "1px solid rgba(201,168,76,0.2)"
                : "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            aria-expanded={openIndex === i}
            aria-controls={`faq-${i}`}
          >
            <span className="text-[#F5F5F0] font-['DM_Sans',sans-serif] font-medium text-sm leading-snug group-hover:text-[#C9A84C] transition-colors pr-4">
              {faq.question}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background:
                  openIndex === i
                    ? "rgba(201,168,76,0.15)"
                    : "rgba(255,255,255,0.04)",
                color: openIndex === i ? "#C9A84C" : "#888880",
                border: "1px solid",
                borderColor:
                  openIndex === i
                    ? "rgba(201,168,76,0.3)"
                    : "rgba(255,255,255,0.08)",
              }}
              aria-hidden="true"
            >
              {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
            </span>
          </button>
          <div
            id={`faq-${i}`}
            role="region"
            className="overflow-hidden transition-all duration-400"
            style={{
              maxHeight: openIndex === i ? "500px" : "0",
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
  );
}
