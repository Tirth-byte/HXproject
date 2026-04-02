"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const navItems = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "My Events",
    href: "/dashboard/events",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    name: "Submissions",
    href: "/dashboard/submissions",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    name: "Results",
    href: "/dashboard/results",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#2A2A38] z-40 flex items-center justify-between px-4">
        <Link
          href="/dashboard"
          className="text-xl font-black tracking-tighter bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent"
        >
          XINITY
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#9090AA] hover:text-white pb-1"
        >
          <svg
            className="w-6 h-6"
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

      {/* Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111118] border-r border-[#2A2A38] transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-8 border-b border-[#2A2A38]">
          <Link
            href="/dashboard"
            className="text-2xl font-black tracking-tighter text-white"
          >
            XINITY<span className="text-[#6C63FF]">.</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto hidden-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#6C63FF]/20 to-transparent text-[#00F0FF] border-l-2 border-[#00F0FF]"
                    : "text-[#9090AA] hover:bg-white/5 hover:text-white border-l-2 border-transparent"
                }`}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={isActive ? "2.5" : "2"}
                    d={item.icon}
                  ></path>
                </svg>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Footer Container */}
        <div className="p-4 border-t border-[#2A2A38] bg-[#0A0A0F]/50">
          <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-[#2A2A38] hover:bg-white/5 transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F0FF] flex items-center justify-center text-white font-bold shrink-0">
              {session?.user?.name?.charAt(0) || "U"}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-white truncate">
                {session?.user?.name || "User"}
              </p>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-xs text-[#5A5A72] group-hover:text-[#EF4444] transition-colors font-semibold"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
