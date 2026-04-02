"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0A0A0F]/80 backdrop-blur-xl py-4 border-white/5 shadow-2xl"
            : "bg-transparent py-7 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="group flex items-center space-x-2">
            <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              XINITY
            </span>
          </Link>

          {/* Nav Links Center */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all hover:text-white ${
                  pathname === link.href ? "text-white" : "text-[#9090AA]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-6 py-2.5 text-sm font-semibold text-[#9090AA] hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] text-white rounded-full shadow-lg shadow-[#6C63FF]/20 hover:shadow-[#6C63FF]/40 hover:scale-[1.03] transition-all active:scale-95"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[150] transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#0A0A0F] border-l border-white/10 shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent">
                XINITY
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-neutral-500 hover:text-white transition-colors"
                aria-label="Close Menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="space-y-8 flex flex-col mb-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold tracking-tight text-neutral-400 hover:text-white transition-all transform hover:translate-x-3"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-4 pt-10">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-4 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] text-white font-bold shadow-xl shadow-[#6C63FF]/30 transition-all"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
