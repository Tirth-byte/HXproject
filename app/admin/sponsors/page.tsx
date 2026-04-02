"use client";

import React from "react";

export default function SponsorsManagement() {
  const sponsors = [
    {
      id: "sp1",
      name: "Vercel",
      tier: "PLATINUM",
      url: "https://vercel.com",
      logo: "V",
    },
    {
      id: "sp2",
      name: "Supabase",
      tier: "GOLD",
      url: "https://supabase.com",
      logo: "S",
    },
    {
      id: "sp3",
      name: "Polygon",
      tier: "SILVER",
      url: "https://polygon.technology",
      logo: "P",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#2A2A38]">
        <div>
          <h1 className="text-2xl font-black font-display text-white mb-1">
            Sponsors Network
          </h1>
          <p className="text-[#9090AA] text-sm">
            Manage corporate partners and logo assets across the platform.
          </p>
        </div>
        <button className="px-5 py-2.5 bg-white text-black hover:bg-neutral-200 text-sm font-bold rounded-lg shadow-lg transition-all">
          + Add Sponsor Partner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ADD SPONSOR FORM BLOCK */}
        <div className="p-6 bg-[#0D0D14] border border-dashed border-[#2A2A38] rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              New Partner Request
            </h3>
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full h-9 px-3 rounded-md bg-[#111118] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Sponsorship Tier
                </label>
                <select className="w-full h-9 px-3 rounded-md bg-[#111118] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF]">
                  <option value="PLATINUM">Platinum Title</option>
                  <option value="GOLD">Gold Challenge</option>
                  <option value="SILVER">Silver Tooling</option>
                  <option value="BRONZE">Community</option>
                </select>
              </div>
              <div className="space-y-1 border border-[#2A2A38] bg-[#111118] p-4 text-center rounded-md border-dashed cursor-pointer hover:bg-white/5 transition-colors">
                <span className="text-xs font-bold text-[#6C63FF]">
                  Upload Logo Vector (SVG)
                </span>
              </div>
            </form>
          </div>
          <button className="w-full mt-6 py-2 bg-[#1A1A24] border border-[#2A2A38] text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors">
            Save to Registry
          </button>
        </div>

        {/* SPONSOR CARDS */}
        {sponsors.map((sp) => (
          <div
            key={sp.id}
            className="p-6 bg-[#111118] border border-[#2A2A38] rounded-2xl flex flex-col items-center text-center hover:border-[#6C63FF]/30 transition-all group"
          >
            <div className="w-20 h-20 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-3xl font-black text-white mb-4 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              {sp.logo}
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-1">
              {sp.name}
            </h3>
            <span
              className={`px-3 py-1 rounded text-[10px] font-black uppercase mb-4 border ${
                sp.tier === "PLATINUM"
                  ? "bg-slate-300/10 text-slate-200 border-slate-300/20"
                  : sp.tier === "GOLD"
                    ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    : "bg-gray-400/10 text-gray-400 border-gray-400/20"
              }`}
            >
              {sp.tier} Partner
            </span>
            <a
              href={sp.url}
              className="text-[#00F0FF] text-xs font-mono mb-6 hover:underline truncate w-full"
            >
              {sp.url}
            </a>
            <div className="flex gap-2 w-full mt-auto">
              <button className="flex-1 py-2 rounded border border-[#2A2A38] text-[#9090AA] text-xs font-bold uppercase hover:bg-white/5 transition-colors">
                Edit
              </button>
              <button className="flex-1 py-2 rounded border border-[#EF4444]/20 text-[#EF4444] text-xs font-bold uppercase hover:bg-[#EF4444]/10 transition-colors">
                Revoke
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
