"use client";

import React from "react";

export default function AnalyticsReporting() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#2A2A38]">
        <div>
          <h1 className="text-2xl font-black font-display text-white mb-1">
            Analytics Engine
          </h1>
          <p className="text-[#9090AA] text-sm">
            Metrics, geographic mapping, and conversion funnel data.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-[#111118] border border-[#2A2A38] text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-[#6C63FF]">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Year to Date</option>
          </select>
          <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold rounded-lg transition-all border-l">
            PDF Export
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* CHART 1: Daily Reg */}
        <div className="p-6 bg-[#111118] border border-[#2A2A38] rounded-xl flex flex-col h-80">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#9090AA] mb-4">
            Daily Audience Growth
          </h3>
          <div className="flex-1 border-b border-[#2A2A38] relative flex items-end">
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M0,80 L20,75 L40,60 L60,30 L80,20 L100,5"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0,80 L20,75 L40,60 L60,30 L80,20 L100,5 L100,100 L0,100 Z"
                fill="rgba(0,240,255,0.1)"
                stroke="none"
              />
            </svg>
          </div>
          <div className="flex justify-between text-[10px] text-[#5A5A72] font-mono mt-2">
            <span>D-7</span>
            <span>D-0</span>
          </div>
        </div>

        {/* CHART 2: Engagement Submissions VS Joins */}
        <div className="p-6 bg-[#111118] border border-[#2A2A38] rounded-xl h-80 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#9090AA]">
              Submissions vs Registrations
            </h3>
            <div className="flex gap-3 text-[10px] font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1 text-white">
                <span className="w-2 h-2 rounded-full bg-[#6C63FF]"></span> Reg
              </span>
              <span className="flex items-center gap-1 text-white">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span> Subs
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-around border-b border-[#2A2A38] pb-0 pt-6">
            <div className="flex gap-1 items-end h-[80%] w-16 group">
              <div className="w-1/2 bg-[#6C63FF] h-full rounded-t-sm"></div>
              <div className="w-1/2 bg-[#00F0FF] h-[30%] rounded-t-sm"></div>
            </div>
            <div className="flex gap-1 items-end h-[60%] w-16 group">
              <div className="w-1/2 bg-[#6C63FF] h-full rounded-t-sm"></div>
              <div className="w-1/2 bg-[#00F0FF] h-[50%] rounded-t-sm"></div>
            </div>
            <div className="flex gap-1 items-end h-[95%] w-16 group">
              <div className="w-1/2 bg-[#6C63FF] h-full rounded-t-sm"></div>
              <div className="w-1/2 bg-[#00F0FF] h-[80%] rounded-t-sm"></div>
            </div>
          </div>
          <div className="flex justify-around text-[10px] text-[#5A5A72] font-mono mt-2 uppercase text-center">
            <span className="w-16">E1: Open</span>
            <span className="w-16">E2: Web3</span>
            <span className="w-16">E3: Sol</span>
          </div>
        </div>

        {/* Heatmap/Geography mapping mockup */}
        <div className="lg:col-span-2 p-6 bg-[#0D0D14] border border-[#2A2A38] rounded-xl relative overflow-hidden h-[400px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 flex justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#9090AA] mb-1">
                Geographic Saturation
              </h3>
              <p className="text-white text-sm">
                Top Region:{" "}
                <span className="text-[#00F0FF] font-bold">
                  Maharashtra (32%)
                </span>
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 top-16 flex items-center justify-center">
            <div className="text-[#5A5A72] font-mono text-center space-y-2 opacity-50">
              <svg
                className="w-32 h-32 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.5"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p>[ Interactive Mapping System Initializing... ]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
