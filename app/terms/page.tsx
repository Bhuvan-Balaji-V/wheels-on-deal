// app/terms/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Wheels On Deal",
  description: "Terms and conditions for using Wheels On Deal self-drive car rental service in Bangalore.",
  alternates: { canonical: `${SITE_CONFIG.url}/terms` },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-[#888880] text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-[#888880] text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              1. Eligibility
            </h2>
            <p>To rent a vehicle from Wheels On Deal, you must: (a) be at least 21 years of age; (b) hold a valid Indian Driving Licence for the LMV (Light Motor Vehicle) category for at least 1 year; (c) provide valid government-issued identity proof (Aadhaar card or passport).</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              2. Booking & Confirmation
            </h2>
            <p>Bookings are confirmed via WhatsApp after document verification and security deposit payment. Wheels On Deal reserves the right to refuse any booking at its sole discretion. Availability is subject to prior bookings and is not guaranteed until confirmed.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              3. Security Deposit
            </h2>
            <p>A refundable security deposit is required at the time of vehicle handover. The deposit amount will be communicated at booking. The deposit is refunded after the vehicle is returned in the same condition, with a full fuel tank.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              4. Fuel Policy
            </h2>
            <p>All vehicles are provided with a full fuel tank. The renter is responsible for returning the vehicle with a full tank. Failure to do so will result in a fuel surcharge deducted from the security deposit.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              5. Insurance & Liability
            </h2>
            <p>All vehicles carry comprehensive insurance. However, the renter is fully responsible for: (a) traffic violations and challans incurred during the rental period; (b) damage caused by rash or negligent driving; (c) damage not covered by the insurance policy. In the event of an accident, the renter must file an FIR and immediately inform Wheels On Deal.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              6. Prohibited Uses
            </h2>
            <p>The vehicle must not be: (a) driven under the influence of alcohol or drugs; (b) used for commercial purposes or sub-rented; (c) driven by anyone other than the registered renter; (d) taken outside India; (e) used for any illegal activity.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              7. Cancellation Policy
            </h2>
            <p>Cancellations made more than 24 hours before the rental start time are eligible for a full refund of any advance paid. Cancellations within 24 hours may be subject to a cancellation fee. No-shows are non-refundable.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              8. Late Returns
            </h2>
            <p>If the vehicle is returned late, additional charges will apply proportionally to the agreed rental rate. Please inform us in advance if you anticipate a late return.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              9. Governing Law
            </h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.</p>
          </section>

          <section>
            <h2 className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-3">
              10. Contact
            </h2>
            <p>For any queries regarding these terms, contact us at: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#C9A84C] hover:underline">{SITE_CONFIG.contact.email}</a> or WhatsApp us at {SITE_CONFIG.whatsapp.display}.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
