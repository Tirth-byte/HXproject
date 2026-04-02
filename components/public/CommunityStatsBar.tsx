"use client";

import React from "react";

export default function CommunityStatsBar() {
  const stats = [
    {
      label: "Members",
      value: "10,000+",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      label: "Cities Rep'd",
      value: "48",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      label: "Projects Shipped",
      value: "320+",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      label: "Countries",
      value: "12",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  return (
    <div className="w-full bg-[#111118]/80 backdrop-blur-md border-y border-[#2A2A38] py-8 relative overflow-hidden">
      {/* Background visual artifact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[100px] bg-gradient-to-r from-[#6C63FF]/5 via-[#00F0FF]/5 to-[#6C63FF]/5 blur-[50px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#2A2A38]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center ${i > 1 ? "pt-8 md:pt-0" : ""} ${i % 2 === 1 && i < 2 ? "pt-0" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6C63FF] mb-4">
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
                    d={stat.icon}
                  ></path>
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-black font-display text-white mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A72]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
