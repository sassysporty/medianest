"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, serviceSubLinks, aiToolsSubLinks } from "@/config/site";

const dropdownMap: Record<string, { href: string; label: string }[]> = {
  Services: serviceSubLinks,
  "AI Tools": aiToolsSubLinks,
};
import { CaretDown, List, X } from "@phosphor-icons/react";

const spring = { type: "spring" as const, stiffness: 200, damping: 25 };

export default function Header() {
  const pathname = usePathname();
  const isPageSurge = pathname?.startsWith("/tools/pagesurge");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled
          ? "mt-0 mx-0"
          : "mt-4 mx-4 md:mx-8"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-[#08081a]/95 backdrop-blur-2xl border-b border-white/[0.06] rounded-none px-4 sm:px-6 lg:px-8"
            : "bg-[#08081a]/80 backdrop-blur-2xl ring-1 ring-white/[0.08] rounded-2xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            Media<span className="text-[#e8505b]">Nest</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              dropdownMap[link.label] ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-white/[0.05] flex items-center gap-1"
                  >
                    {link.label}
                    <CaretDown
                      weight="bold"
                      className={`w-3 h-3 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-[#0f0f1a] ring-1 ring-white/[0.08] rounded-2xl py-2 w-64 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                          <Link
                            href={link.href}
                            className="block px-4 py-2.5 text-sm text-white font-semibold hover:bg-white/[0.05] border-b border-white/[0.06] mx-2 rounded-lg"
                          >
                            {link.label === "Services" ? "All Services" : `All ${link.label}`}
                          </Link>
                          {dropdownMap[link.label].map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] mx-2 rounded-lg transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-white/[0.05]"
                >
                  {link.label}
                </Link>
              )
            )}
            {isPageSurge ? (
              <a
                href="mailto:medianestonline@gmail.com?subject=PageSurge%20Inquiry"
                className="ml-2 bg-emerald-500 text-[#08081a] px-5 py-2 rounded-full font-semibold text-sm hover:bg-emerald-400 transition-all duration-300 active:scale-[0.98]"
              >
                Get PageSurge
              </a>
            ) : (
              <Link
                href="/free-audit"
                className="ml-2 bg-[#e8505b] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#d4444e] transition-all duration-300 active:scale-[0.98]"
              >
                Free Audit
              </Link>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X weight="bold" className="w-5 h-5" />
            ) : (
              <List weight="bold" className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-[#08081a]/95 backdrop-blur-3xl z-[-1]"
          >
            <div className="flex flex-col justify-center items-center min-h-[100dvh] gap-2 px-8">
              {navLinks.map((link, i) =>
                dropdownMap[link.label] ? (
                  <div key={link.href} className="w-full max-w-xs">
                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, ...spring }}
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex items-center justify-between w-full py-3 text-2xl font-bold text-white"
                    >
                      {link.label}
                      <CaretDown
                        weight="bold"
                        className={`w-5 h-5 transition-transform ${mobileOpenDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {mobileOpenDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {dropdownMap[link.label].map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 pl-4 text-lg text-gray-400 hover:text-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, ...spring }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-2xl font-bold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ...spring }}
                className="w-full max-w-xs mt-4"
              >
                {isPageSurge ? (
                  <a
                    href="mailto:medianestonline@gmail.com?subject=PageSurge%20Inquiry"
                    className="block bg-emerald-500 text-[#08081a] py-4 rounded-full text-center font-semibold text-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get PageSurge
                  </a>
                ) : (
                  <Link
                    href="/free-audit"
                    className="block bg-[#e8505b] text-white py-4 rounded-full text-center font-semibold text-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    Free Audit
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
