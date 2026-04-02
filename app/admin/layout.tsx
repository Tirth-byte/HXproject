import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Admin Terminal | XINITY",
  description: "Secure Admin Management System for XINITY",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-[#EF4444]/30 font-body flex">
      <AdminSidebar />
      <div className="flex-1 lg:ml-[260px] flex flex-col min-h-screen transition-all">
        {/* Admin Top bar */}
        <header className="hidden lg:flex h-16 items-center justify-between px-8 border-b border-[#2A2A38] bg-[#0A0A0F] sticky top-0 z-30">
          <div className="text-[#9090AA] text-xs font-black tracking-widest uppercase flex items-center gap-4">
            <span className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
            System Control Panel
          </div>
          <div className="text-xs font-mono text-[#5A5A72]">
            SERVER TIME: {new Date().toISOString().split("T")[0]} {"//"} SECURE
            CONNECTION
          </div>
        </header>

        {/* Mobile Spacer */}
        <div className="h-16 lg:hidden" />

        {/* Content Area - Full width for tables */}
        <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
