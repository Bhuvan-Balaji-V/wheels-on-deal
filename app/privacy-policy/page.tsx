// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Wheels On Deal",
  description: "Privacy policy for Wheels On Deal self-drive car rental service in Bangalore.",
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
          Privacy Policy
        </h1>
        <p className="text-[#888880] text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-[#888880] text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              1. Information We Collect
            </h2>
            <p>When you contact us through WhatsApp or our website, we may collect your name, phone number, driving licence details, and identity proof as required for the rental process. We collect only what is necessary to provide our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              2. How We Use Your Information
            </h2>
            <p>Your information is used exclusively to process your rental booking, verify your eligibility, provide customer support, and comply with legal requirements under Indian law. We do not use your data for marketing without consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              3. Data Sharing
            </h2>
            <p>We do not sell, trade, or share your personal information with third parties except as required by law or to fulfil the rental service (e.g., insurance providers). WhatsApp communications are subject to WhatsApp&apos;s own privacy policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              4. Data Retention
            </h2>
            <p>We retain your rental records for up to 2 years as required for insurance and legal compliance. After this period, your data is securely deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              5. Cookies & Analytics
            </h2>
            <p>Our website may use cookies and analytics tools (such as Google Analytics) to understand user behaviour and improve our services. No personal data is collected through cookies. You may disable cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              6. Your Rights
            </h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data. Contact us at {SITE_CONFIG.contact.email} for any data-related requests.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              7. Contact
            </h2>
            <p>For privacy-related queries, contact us at: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#C9A84C] hover:underline">{SITE_CONFIG.contact.email}</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
