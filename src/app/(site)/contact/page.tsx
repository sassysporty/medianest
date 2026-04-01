import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactSidebar from "@/components/sections/ContactSidebar";
import CalBookingWrapper from "@/components/sections/CalBookingWrapper";

export const metadata: Metadata = {
  title: "Contact Us | MediaNest",
  description:
    "Get in touch for a free consultation. We help local businesses grow online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to grow your business? Get in touch for a free consultation. We'll respond within 24 hours."
        tag="Let's Talk"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <ContactSidebar />
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">
              Prefer to Talk? Book a Free Call
            </h2>
            <p className="text-gray-500">
              Schedule a 30-minute strategy call with our team. No pressure, no
              obligations.
            </p>
          </div>
          <CalBookingWrapper />
        </div>
      </section>
    </>
  );
}
