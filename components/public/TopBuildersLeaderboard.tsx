"use client";

import React, { useState } from "react";

export default function TopBuildersLeaderboard() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Expanded version shows 10, default shows 5 on mobile/desktop initially.
  const leaderboard = [
    {
      rank: 1,
      name: "Arjun Dev",
      events: 5,
      points: 14200,
      badge: "Grandmaster",
      bg: "bg-amber-500/10 border border-amber-500/30",
      text: "text-amber-500",
      label: "Gold Rank",
    },
    {
      rank: 2,
      name: "Sneha Patel",
      events: 4,
      points: 12850,
      badge: "Elite Builder",
      bg: "bg-gray-300/10 border border-gray-300/30",
      text: "text-gray-300",
      label: "Silver Rank",
    },
    {
      rank: 3,
      name: "Rahul Singh",
      events: 6,
      points: 11900,
      badge: "Innovator",
      bg: "bg-orange-700/10 border border-orange-700/30",
      text: "text-orange-400",
      label: "Bronze Rank",
    },
    {
      rank: 4,
      name: "Kavya Menon",
      events: 3,
      points: 8400,
      badge: "Rising Star",
      bg: "border-b border-[#2A2A38]",
      text: "text-[#9090AA]",
      label: "Rank #4",
    },
    {
      rank: 5,
      name: "Aarav Sharma",
      events: 4,
      points: 8150,
      badge: "Hacker",
      bg: "border-b border-[#2A2A38]",
      text: "text-[#9090AA]",
      label: "Rank #5",
    },
    {
      rank: 6,
      name: "Zara Ali",
      events: 2,
      points: 5600,
      badge: "Creator",
      bg: "border-b border-[#2A2A38]",
      text: "text-[#5A5A72]",
      label: "Rank #6",
    },
    {
      rank: 7,
      name: "Vikram R.",
      events: 3,
      points: 4300,
      badge: "Builder",
      bg: "border-b border-[#2A2A38]",
      text: "text-[#5A5A72]",
      label: "Rank #7",
    },
    {
      rank: 8,
      name: "Priya V.",
      events: 2,
      points: 3800,
      badge: "Builder",
      bg: "border-[#2A2A38]",
      text: "text-[#5A5A72]",
      label: "Rank #8",
    },
  ];

  const displayedBuilders = isExpanded ? leaderboard : leaderboard.slice(0, 5);

  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-2">
          Top Builders This Season
        </h2>
        <p className="text-[#9090AA] text-sm">
          The ultimate XINITY global rankings based on hackathon wins, points,
          and shipped projects.
        </p>
      </div>

      <div className="bg-[#111118] border border-[#2A2A38] rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
        {/* Desktop View (Table) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0A0A0F] border-b border-[#2A2A38]">
              <tr>
                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-[#5A5A72]">
                  Rank
                </th>
                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-[#5A5A72]">
                  Hacker
                </th>
                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-[#5A5A72]">
                  Events
                </th>
                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-[#5A5A72] text-right">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedBuilders.map((b) => (
                <tr
                  key={b.rank}
                  className={`group hover:bg-white/5 transition-colors ${b.bg || ""}`}
                >
                  <td className="px-6 py-4 w-24">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${b.rank <= 3 ? "bg-black/20" : "bg-[#1A1A24] text-white"} ${b.text}`}
                    >
                      #{b.rank}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1A24] to-[#2A2A38] flex items-center justify-center text-white font-bold shrink-0">
                        {b.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white mb-0.5">
                          {b.name}
                        </div>
                        <div
                          className={`text-[10px] font-bold uppercase tracking-widest ${b.rank <= 3 ? b.text : "text-[#5A5A72]"}`}
                        >
                          {b.badge}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-white">{b.events}</span>{" "}
                    <span className="text-[#5A5A72] text-xs">shipped</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`font-mono font-bold text-lg ${b.rank <= 3 ? b.text : "text-white"}`}
                    >
                      {b.points.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Card List) */}
        <div className="md:hidden">
          {displayedBuilders.map((b) => (
            <div
              key={b.rank}
              className={`p-4 flex items-center justify-between border-b ${b.bg || "border-[#2A2A38]"}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${b.rank <= 3 ? "bg-black/20" : "bg-[#1A1A24] text-white"} ${b.text}`}
                >
                  #{b.rank}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{b.name}</div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest ${b.rank <= 3 ? b.text : "text-[#5A5A72]"}`}
                  >
                    {b.badge}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-mono font-bold ${b.rank <= 3 ? b.text : "text-white"}`}
                >
                  {b.points.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {leaderboard.length > 5 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 rounded-full border border-[#2A2A38] text-[#9090AA] text-xs font-bold uppercase tracking-wider hover:bg-[#111118] hover:text-white transition-all shadow-md"
          >
            {isExpanded ? "Collapse List" : "View Full Leaderboard"}
          </button>
        </div>
      )}
    </section>
  );
}
