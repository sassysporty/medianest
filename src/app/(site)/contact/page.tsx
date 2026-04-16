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
          {/* WhatsApp CTA */}
          <div className="mb-10 flex flex-col sm:flex-row items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl px-6 py-5">
            <svg className="h-8 w-8 text-[#25D366] shrink-0" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.004 2.002C8.28 2.002 2.004 8.278 2.004 15.998c0 2.484.65 4.904 1.888 7.042L2 30l7.18-1.882A13.94 13.94 0 0 0 16.004 30c7.72 0 13.996-6.278 13.996-13.998S23.724 2.002 16.004 2.002Zm0 25.594a11.55 11.55 0 0 1-5.896-1.616l-.424-.252-4.382 1.148 1.168-4.272-.276-.44a11.56 11.56 0 0 1-1.772-6.166c0-6.39 5.2-11.59 11.586-11.59 6.388 0 11.588 5.2 11.588 11.59 0 6.392-5.204 11.598-11.592 11.598Zm6.348-8.676c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.408.262-.756.088-.348-.174-1.468-.54-2.796-1.724-1.034-.92-1.732-2.058-1.936-2.406-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.89-1.074-2.588-.284-.68-.572-.588-.784-.598l-.668-.012a1.28 1.28 0 0 0-.928.436c-.32.348-1.22 1.192-1.22 2.908s1.248 3.372 1.422 3.604c.174.232 2.456 3.75 5.952 5.26.832.358 1.482.572 1.988.734.836.264 1.596.228 2.198.138.67-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.656-.088-.146-.32-.232-.668-.406Z" />
            </svg>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold text-gray-900">Prefer a quick chat?</p>
              <p className="text-sm text-gray-500">Get an instant reply on WhatsApp — no forms needed.</p>
            </div>
            <a
              href="https://wa.me/393923952415?text=Hi%20MediaNest%21%20I%27d%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98] shrink-0"
            >
              Chat on WhatsApp
            </a>
          </div>

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
