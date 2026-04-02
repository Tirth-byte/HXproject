"use client";

import React from "react";
import Link from "next/link";

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-black font-display text-white">
          System Overview
        </h1>
        <button
          onClick={() => alert("Report generation started...")}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
        >
          Download Full Report
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          {
            label: "Total Participants",
            value: "9,842",
            trend: "+12.5%",
            trendColor: "text-green-400",
          },
          {
            label: "Active Events",
            value: "3",
            trend: "Live Now",
            trendColor: "text-[#6C63FF]",
          },
          {
            label: "Submissions This Week",
            value: "487",
            trend: "+5.1%",
            trendColor: "text-green-400",
          },
          {
            label: "Total Prize Awarded",
            value: "₹50L+",
            trend: "All Time",
            trendColor: "text-[#5A5A72]",
          },
        ].map((kpi, i) => (
          <div
            key={i}
            className="p-6 bg-[#111118] border border-[#2A2A38] rounded-xl flex flex-col justify-between h-36 hover:border-[#6C63FF]/50 transition-all hover:shadow-[0_0_20px_rgba(108,99,255,0.05)]"
          >
            <span className="text-[#9090AA] text-xs font-bold uppercase tracking-widest">
              {kpi.label}
            </span>
            <div className="flex items-baseline justify-between mt-auto">
              <span className="text-3xl font-black font-display text-white">
                {kpi.value}
              </span>
              <span className={`text-xs font-bold ${kpi.trendColor}`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts / Data Row */}
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 p-8 bg-[#111118] border border-[#2A2A38] rounded-2xl h-[340px] flex flex-col">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#9090AA] mb-8">
            Registrations Over Time (Last 30 Days)
          </h3>
          {/* Chart area with better internal margins */}
          <div className="flex-1 w-full relative mb-4">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 Q15,75 30,85 T50,45 T70,55 T85,15 T100,5"
                fill="none"
                stroke="#6C63FF"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
              <path
                d="M0,90 Q15,75 30,85 T50,45 T70,55 T85,15 T100,5 L100,100 L0,100 Z"
                fill="url(#chartGradient)"
              />
            </svg>
          </div>
          <div className="flex justify-between text-[10px] text-[#5A5A72] font-mono mt-auto pt-4 border-t border-[#2A2A38] uppercase tracking-tighter">
            <span>Mar 01</span>
            <span>Mar 08</span>
            <span>Mar 15</span>
            <span>Mar 22</span>
            <span>Mar 30</span>
          </div>
        </div>

        <div className="lg:col-span-2 p-8 bg-[#111118] border border-[#2A2A38] rounded-2xl h-[340px] flex flex-col">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#9090AA] mb-8">
            Event Participation
          </h3>
          <div className="flex-1 flex flex-col justify-center gap-6">
            {/* Fake bar chart with better spacing */}
            <div className="w-full group">
              <div className="flex justify-between text-xs text-white mb-2 font-bold">
                <span className="group-hover:text-[#00F0FF] transition-colors">
                  FinTech Frontier
                </span>
                <span className="font-mono text-[#9090AA]">4.2k</span>
              </div>
              <div className="w-full h-3 bg-[#1A1A24] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#00F0FF] to-[#6C63FF] w-[85%] rounded-full" />
              </div>
            </div>
            <div className="w-full group">
              <div className="flex justify-between text-xs text-white mb-2 font-bold">
                <span className="group-hover:text-[#6C63FF] transition-colors">
                  Code-A-Thon 2024
                </span>
                <span className="font-mono text-[#9090AA]">2.1k</span>
              </div>
              <div className="w-full h-3 bg-[#1A1A24] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] w-[45%] rounded-full" />
              </div>
            </div>
            <div className="w-full group">
              <div className="flex justify-between text-xs text-white mb-2 font-bold">
                <span className="group-hover:text-amber-500 transition-colors">
                  MedTech Innovators
                </span>
                <span className="font-mono text-[#9090AA]">840</span>
              </div>
              <div className="w-full h-3 bg-[#1A1A24] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-amber-500 to-red-500 w-[15%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events Table */}
      <div className="bg-[#111118] border border-[#2A2A38] rounded-xl overflow-hidden mt-6">
        <div className="p-5 border-b border-[#2A2A38] flex justify-between items-center bg-[#0A0A0F]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Recent Events
          </h3>
          <Link
            href="/admin/events"
            className="text-xs text-[#6C63FF] hover:text-[#00F0FF] font-bold uppercase"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#9090AA]">
            <thead className="text-[10px] uppercase bg-[#111118] text-[#5A5A72] border-b border-[#2A2A38]">
              <tr>
                <th
                  scope="col"
                  className="px-5 py-4 font-black tracking-widest"
                >
                  Event Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 font-black tracking-widest"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 font-black tracking-widest"
                >
                  Participants
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 font-black tracking-widest"
                >
                  Deadline
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Code-A-Thon 2024",
                  status: "LIVE",
                  p: 1450,
                  d: "In 3 Days",
                },
                {
                  name: "FinTech Frontier",
                  status: "UPCOMING",
                  p: 847,
                  d: "In 15 Days",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#2A2A38] last:border-0 hover:bg-white/5"
                >
                  <td className="px-5 py-3 font-bold text-white">{row.name}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${row.status === "LIVE" ? "bg-green-500/10 text-green-400" : "bg-[#6C63FF]/10 text-[#6C63FF]"}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-mono">{row.p}</td>
                  <td className="px-5 py-3">{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
