"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, serviceSubLinks } from "@/config/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#16123f] sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            Media<span className="text-[#ff5e6c]">Nest</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white font-medium transition-colors text-sm flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2 w-56">
                          <Link
                            href="/services"
                            className="block px-4 py-2.5 text-sm text-gray-900 font-semibold hover:bg-gray-50 border-b border-gray-100"
                          >
                            All Services
                          </Link>
                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#ff5e6c] hover:bg-gray-50 transition-colors"
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
                  className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/free-audit"
              className="bg-[#ff5e6c] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#e84d5b] transition-colors text-sm"
            >
              Free Audit
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-4 border-t border-white/10 pt-4">
                {navLinks.map((link) =>
                  link.label === "Services" ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full py-2 text-gray-300 hover:text-white font-medium"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <Link
                              href="/services"
                              className="block py-2 pl-4 text-sm text-gray-400 hover:text-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              All Services
                            </Link>
                            {serviceSubLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="block py-2 pl-4 text-sm text-gray-400 hover:text-white"
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
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-gray-300 hover:text-white font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  href="/free-audit"
                  className="block mt-3 bg-[#ff5e6c] text-white px-5 py-2 rounded-lg text-center font-semibold hover:bg-[#e84d5b]"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Audit
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
