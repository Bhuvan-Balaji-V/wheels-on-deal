"use client";
// app/superadmin/cars/page.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Edit2, Trash2, ExternalLink, Star } from "lucide-react";
import { CARS } from "@/data/cars";

export default function AdminCarsPage() {
  const [cars, setCars] = useState(CARS);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]">
            Fleet Management
          </h1>
          <p className="text-[#888880] text-sm mt-1">
            Manage your self-drive car inventory
          </p>
        </div>
        <button
          className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest"
          onClick={() => alert("In production: opens add car form/modal")}
        >
          <Plus size={14} />
          Add Car
        </button>
      </div>

      <div className="space-y-5">
        {cars.map((car) => (
          <div
            key={car.id}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Car image */}
              <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                <Image
                  src={car.images.thumbnail}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                {car.badge && (
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-widest rounded-full font-semibold"
                    style={{
                      background: "rgba(201,168,76,0.2)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      color: "#C9A84C",
                    }}
                  >
                    {car.badge}
                  </span>
                )}
              </div>

              {/* Car details */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]">
                      {car.name}
                    </h2>
                    <p className="text-[#C9A84C] text-xs uppercase tracking-wider mt-1">
                      {car.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#C9A84C] shrink-0">
                    <Star size={12} className="fill-current" />
                    <span className="text-xs text-[#888880]">4.9</span>
                  </div>
                </div>

                <p className="text-[#888880] text-sm leading-relaxed mb-4 line-clamp-2">
                  {car.description}
                </p>

                {/* Specs preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.specifications.slice(0, 3).map((spec) => (
                    <span
                      key={spec.label}
                      className="px-3 py-1.5 text-xs rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#888880",
                      }}
                    >
                      <span className="text-[#C9A84C]">{spec.label}:</span> {spec.value}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setEditingId(editingId === car.id ? null : car.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest text-[#C9A84C] transition-all hover:bg-[#C9A84C10]"
                    style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    <Edit2 size={12} />
                    {editingId === car.id ? "Cancel Edit" : "Edit"}
                  </button>
                  <Link
                    href={`/cars/${car.slug}`}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest text-[#888880] transition-all hover:text-[#F5F5F0]"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <ExternalLink size={12} />
                    View Page
                  </Link>
                  <button
                    onClick={() => {
                      if (confirm(`Delete ${car.name}? This cannot be undone.`)) {
                        setCars(cars.filter((c) => c.id !== car.id));
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest text-red-400 transition-all hover:bg-red-400/10"
                    style={{ border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    <Trash2 size={12} />
                    Delete
                  </button>
                </div>

                {/* Inline edit form (simplified) */}
                {editingId === car.id && (
                  <div
                    className="mt-6 p-5 rounded-xl space-y-4"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold mb-4">
                      Edit Car Details
                    </p>
                    {[
                      { label: "Car Name", defaultValue: car.name },
                      { label: "Tagline", defaultValue: car.tagline },
                      { label: "SEO Title", defaultValue: car.seo.title },
                      { label: "SEO Description", defaultValue: car.seo.description },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
                          {field.label}
                        </label>
                        {field.label.includes("Description") ? (
                          <textarea
                            defaultValue={field.defaultValue}
                            rows={2}
                            className="w-full px-3 py-2 rounded-lg text-sm text-[#F5F5F0] focus:outline-none resize-none"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          />
                        ) : (
                          <input
                            type="text"
                            defaultValue={field.defaultValue}
                            className="w-full px-3 py-2 rounded-lg text-sm text-[#F5F5F0] focus:outline-none"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          />
                        )}
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => {
                          setEditingId(null);
                          alert("In production: saves to data file or database");
                        }}
                        className="btn-gold px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-5 py-2.5 rounded-lg text-xs text-[#888880] hover:text-[#F5F5F0] transition-colors"
                        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-8 p-5 rounded-xl text-sm text-[#888880]"
        style={{
          background: "rgba(201,168,76,0.04)",
          border: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <p className="text-[#C9A84C] font-semibold mb-2 text-xs uppercase tracking-wider">
          Developer Note
        </p>
        <p>
          In production, car edits are saved to <code className="text-[#C9A84C] bg-[#C9A84C10] px-1.5 py-0.5 rounded">/data/cars.ts</code> via an API route, or connected to a headless CMS (Sanity, Contentful) or database. The UI above is the complete admin interface — wire it to your backend of choice.
        </p>
      </div>
    </div>
  );
}
