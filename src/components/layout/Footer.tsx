import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-[#08081a] text-gray-500 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">
              Media<span className="text-[#e8505b]">Nest</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-[35ch]">
              Your digital growth partner. We help local businesses dominate
              online with expert marketing services.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-1.5 bg-[#e8505b] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d4444e] transition-all active:scale-[0.98]"
            >
              Get your free audit
              <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Website Creation", slug: "website-creation" },
                { label: "YouTube Automation", slug: "youtube-automation" },
                { label: "Social Media", slug: "social-media-management" },
                { label: "SEO", slug: "seo" },
                { label: "Etsy Service", slug: "etsy-service" },
                { label: "AI Tools Creation", slug: "ai-tools-creation" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              AI Tools
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/tools/pagesurge" className="hover:text-white transition-colors">
                  PageSurge — Facebook
                </Link>
              </li>
              <li>
                <Link href="/tools/pinsurge" className="hover:text-white transition-colors">
                  PinSurge — Pinterest
                </Link>
              </li>
              <li>
                <Link href="/services/ai-tools-creation" className="hover:text-white transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  All AI Tools
                </Link>
              </li>
              <li className="text-gray-600 italic">More tools coming soon</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About" },
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
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/393923952415?text=Hi%20MediaNest%21%20I%27d%20like%20to%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +39 392 395 2415
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-14 pt-6 text-xs text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} MediaNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
