import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Dashboard | XINITY",
  description: "Participant Dashboard for XINITY",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-[#6C63FF]/30 font-body flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all">
        {/* Top bar for desktop (optional, notifications/search) */}
        <header className="hidden lg:flex h-20 items-center justify-between px-8 border-b border-[#2A2A38] bg-[#0A0A0F]/50 backdrop-blur-md sticky top-0 z-30">
          <div className="text-[#9090AA] text-sm font-semibold tracking-wider uppercase">
            Participant Portal
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#9090AA] hover:text-white transition-colors bg-[#111118] border border-[#2A2A38] rounded-full">
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-[#EF4444] rounded-full animate-pulse border-2 border-[#111118]" />
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Spacer */}
        <div className="h-16 lg:hidden" />

        {/* Content Area */}
        <main className="flex-1 p-6 lg:p-10 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
