"use client";
// app/superadmin/settings/page.tsx
import { useState } from "react";
import { Save, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface SettingsState {
  whatsappNumber: string;
  whatsappDisplay: string;
  contactEmail: string;
  contactPhone: string;
  businessHours: string;
  instagramUrl: string;
  seoTitle: string;
  seoDescription: string;
  adminPassword: string;
}

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState<SettingsState>({
    whatsappNumber: SITE_CONFIG.whatsapp.number,
    whatsappDisplay: SITE_CONFIG.whatsapp.display,
    contactEmail: SITE_CONFIG.contact.email,
    contactPhone: SITE_CONFIG.contact.phone,
    businessHours: SITE_CONFIG.businessHours,
    instagramUrl: SITE_CONFIG.social.instagram,
    seoTitle: SITE_CONFIG.seo.defaultTitle,
    seoDescription: SITE_CONFIG.seo.defaultDescription,
    adminPassword: "",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    // In production: POST to /api/settings or write to config file
    console.log("Settings saved:", settings);
  };

  const updateField = (key: keyof SettingsState, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const SECTIONS = [
    {
      title: "WhatsApp Configuration",
      description: "Controls all booking CTAs across the site",
      fields: [
        {
          key: "whatsappNumber" as const,
          label: "WhatsApp Number (with country code, no +)",
          placeholder: "919876543210",
          help: "Used in all wa.me links. Format: 91XXXXXXXXXX",
        },
        {
          key: "whatsappDisplay" as const,
          label: "Display Number",
          placeholder: "+91 98765 43210",
          help: "Human-readable number shown in footer and contact page",
        },
      ],
    },
    {
      title: "Contact Information",
      description: "Shown in footer, contact page, and schema markup",
      fields: [
        {
          key: "contactEmail" as const,
          label: "Email Address",
          placeholder: "hello@wheelsondeal.in",
          help: "",
        },
        {
          key: "contactPhone" as const,
          label: "Phone Number (display)",
          placeholder: "+91 98765 43210",
          help: "",
        },
        {
          key: "businessHours" as const,
          label: "Business Hours",
          placeholder: "Mon–Sun: 6:00 AM – 10:00 PM",
          help: "",
        },
        {
          key: "instagramUrl" as const,
          label: "Instagram URL",
          placeholder: "https://instagram.com/wheelsondeal",
          help: "",
        },
      ],
    },
    {
      title: "Default SEO",
      description: "Homepage and default metadata",
      fields: [
        {
          key: "seoTitle" as const,
          label: "Default SEO Title",
          placeholder: "Wheels On Deal | Luxury Self-Drive...",
          help: "Keep under 60 characters",
          isTextarea: false,
        },
        {
          key: "seoDescription" as const,
          label: "Default Meta Description",
          placeholder: "Rent Mahindra Thar in Bangalore...",
          help: "Keep under 160 characters",
          isTextarea: true,
        },
      ],
    },
    {
      title: "Admin Security",
      description: "Change admin portal password",
      fields: [
        {
          key: "adminPassword" as const,
          label: "New Admin Password",
          placeholder: "Leave blank to keep current",
          help: "Minimum 8 characters recommended",
          isPassword: true,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]">
            Site Settings
          </h1>
          <p className="text-[#888880] text-sm mt-1">
            Configure WhatsApp number, contact info, and SEO defaults
          </p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all ${
            saved ? "bg-green-500/20 text-green-400 border border-green-500/30" : "btn-gold"
          }`}
        >
          {saved ? (
            <>
              <CheckCircle size={14} />
              Saved!
            </>
          ) : (
            <>
              <Save size={14} />
              Save All Changes
            </>
          )}
        </button>
      </div>

      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="px-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <h2 className="text-lg font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]">
                {section.title}
              </h2>
              <p className="text-[#888880] text-xs mt-0.5">{section.description}</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.fields.map((field) => (
                <div
                  key={field.key}
                  className={field.isTextarea ? "md:col-span-2" : ""}
                >
                  <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
                    {field.label}
                  </label>
                  {field.isTextarea ? (
                    <textarea
                      rows={3}
                      value={settings[field.key]}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none resize-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  ) : (
                    <input
                      type={field.isPassword ? "password" : "text"}
                      value={settings[field.key]}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  )}
                  {field.help && (
                    <p className="text-[#444440] text-[10px] mt-1">{field.help}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Deploy note */}
      <div
        className="mt-8 p-5 rounded-xl"
        style={{
          background: "rgba(201,168,76,0.04)",
          border: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <p className="text-[#C9A84C] font-semibold mb-2 text-xs uppercase tracking-wider">
          Production Integration
        </p>
        <p className="text-[#888880] text-sm leading-relaxed">
          Connect the Save button to a <code className="text-[#C9A84C] bg-[#C9A84C10] px-1.5 py-0.5 rounded text-xs">POST /api/admin/settings</code> route that writes to an environment variable store (Vercel Environment Variables), a JSON config file, or a database. On Vercel, use the Vercel API to update env vars programmatically and trigger a redeploy.
        </p>
      </div>
    </div>
  );
}
