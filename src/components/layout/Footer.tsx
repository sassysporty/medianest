import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0d2e] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3">
              Media<span className="text-[#ff5e6c]">Nest</span>
            </h3>
            <p className="text-sm leading-relaxed mb-5">
              Your digital growth partner. We help local businesses dominate
              online with website creation, YouTube, social media, SEO, and
              Etsy services.
            </p>
            <Link
              href="/free-audit"
              className="inline-block bg-[#ff5e6c] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#e84d5b] transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Website Creation", slug: "website-creation" },
                { label: "YouTube Automation", slug: "youtube-automation" },
                { label: "Social Media", slug: "social-media-management" },
                { label: "SEO", slug: "seo" },
                { label: "Etsy Service", slug: "etsy-service" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "All Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/free-audit", label: "Free Audit" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-gray-500 italic">Address coming soon</li>
              <li className="text-gray-500 italic">Phone coming soon</li>
              <li className="text-gray-500 italic">Email coming soon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MediaNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
