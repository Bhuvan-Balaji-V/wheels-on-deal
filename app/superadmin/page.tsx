"use client";
// app/superadmin/page.tsx
import Link from "next/link";
import { Car, FileText, Settings, ExternalLink, TrendingUp } from "lucide-react";
import { CARS } from "@/data/cars";
import { BLOG_POSTS } from "@/data/blogs";
import { LOCATIONS, ADDITIONAL_LOCATIONS } from "@/data/locations";
import { SITE_CONFIG } from "@/data/config";

const STAT_CARDS = [
  {
    label: "Cars in Fleet",
    value: CARS.length,
    icon: Car,
    href: "/superadmin/cars",
    color: "#C9A84C",
  },
  {
    label: "Blog Posts",
    value: BLOG_POSTS.length,
    icon: FileText,
    href: "/superadmin/blogs",
    color: "#25D366",
  },
  {
    label: "SEO Location Pages",
    value: LOCATIONS.length + ADDITIONAL_LOCATIONS.length,
    icon: TrendingUp,
    href: "/rent/bangalore",
    color: "#60A5FA",
  },
];

const QUICK_ACTIONS = [
  { label: "Add New Car", href: "/superadmin/cars", icon: Car },
  { label: "Write Blog Post", href: "/superadmin/blogs", icon: FileText },
  { label: "Edit Settings", href: "/superadmin/settings", icon: Settings },
  { label: "View Live Site", href: "/", icon: ExternalLink, external: true },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]">
          Dashboard
        </h1>
        <p className="text-[#888880] text-sm mt-1">
          Welcome back. Here&apos;s a summary of your Wheels On Deal content.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {STAT_CARDS.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="p-6 rounded-2xl transition-all hover:border-opacity-50 group"
            style={{
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
            >
              <stat.icon size={18} style={{ color: stat.color }} aria-hidden="true" />
            </div>
            <p
              className="text-4xl font-['Cormorant_Garamond',serif] font-semibold mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </p>
            <p className="text-[#888880] text-xs uppercase tracking-wider">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="text-lg font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              className="flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all hover:border-[#C9A84C40] group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-[#C9A84C20] transition-colors"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <action.icon size={16} style={{ color: "#C9A84C" }} aria-hidden="true" />
              </div>
              <span className="text-[#888880] text-xs group-hover:text-[#F5F5F0] transition-colors">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Site config summary */}
      <div
        className="p-6 rounded-2xl"
        style={{
          background: "#161616",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <h2 className="text-lg font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-4">
          Site Configuration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            { label: "Domain", value: SITE_CONFIG.domain },
            { label: "WhatsApp Number", value: SITE_CONFIG.whatsapp.display },
            { label: "Email", value: SITE_CONFIG.contact.email },
            { label: "Operating Hours", value: SITE_CONFIG.businessHours },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span className="text-[#888880] text-xs uppercase tracking-wider">{item.label}</span>
              <span className="text-[#F5F5F0] text-xs font-medium">{item.value}</span>
            </div>
          ))}
        </div>
        <Link
          href="/superadmin/settings"
          className="mt-4 inline-flex items-center gap-2 text-[#C9A84C] text-xs uppercase tracking-widest hover:underline"
        >
          Edit Settings →
        </Link>
      </div>
    </div>
  );
}
