"use client";

import React from "react";

export default function ResultsPage() {
  const leaderboard = [
    {
      rank: 1,
      name: "Arjun Dev",
      score: 9850,
      event: "FinTech Frontier Challenge",
      prize: "₹8,00,000",
      isMe: false,
    },
    {
      rank: 2,
      name: "Sneha Patel",
      score: 9420,
      event: "FinTech Frontier Challenge",
      prize: "₹4,00,000",
      isMe: false,
    },
    {
      rank: 3,
      name: "Tirth Patel",
      score: 8900,
      event: "FinTech Frontier Challenge",
      prize: "₹2,00,000",
      isMe: true,
    }, // Highlighted
    {
      rank: 4,
      name: "Rahul Singh",
      score: 8100,
      event: "FinTech Frontier Challenge",
      prize: "-",
      isMe: false,
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="pb-6 border-b border-[#2A2A38]">
        <h1 className="text-3xl font-black font-display text-white mb-2">
          Hall of Fame
        </h1>
        <p className="text-[#9090AA] text-sm">
          Global standings, recent event winners, and your lifetime results.
        </p>
      </div>

      <div className="p-1 mb-6 inline-flex bg-[#1A1A24] border border-[#2A2A38] rounded-xl overflow-x-auto max-w-full">
        <button className="px-6 py-2 rounded-lg text-sm font-bold bg-[#2A2A38] text-white shadow-md">
          Global Ranking
        </button>
        <button className="px-6 py-2 rounded-lg text-sm font-bold text-[#9090AA] hover:text-white transition-all">
          FinTech Challenge
        </button>
        <button className="px-6 py-2 rounded-lg text-sm font-bold text-[#9090AA] hover:text-white transition-all">
          Solana Hacks
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#2A2A38] bg-[#111118] shadow-2xl">
        <table className="w-full text-left text-sm text-[#9090AA]">
          <thead className="text-[10px] uppercase bg-[#0A0A0F] text-[#5A5A72] border-b border-[#2A2A38]">
            <tr>
              <th scope="col" className="px-6 py-5 font-black tracking-widest">
                Rank
              </th>
              <th scope="col" className="px-6 py-5 font-black tracking-widest">
                Participant
              </th>
              <th scope="col" className="px-6 py-5 font-black tracking-widest">
                Event
              </th>
              <th scope="col" className="px-6 py-5 font-black tracking-widest">
                Score
              </th>
              <th
                scope="col"
                className="px-6 py-5 font-black tracking-widest text-right"
              >
                Prize
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((row) => (
              <tr
                key={row.rank}
                className={`border-b border-[#2A2A38] last:border-0 transition-colors ${
                  row.isMe
                    ? "bg-[#6C63FF]/10 hover:bg-[#6C63FF]/20"
                    : "hover:bg-white/5"
                }`}
              >
                <td className="px-6 py-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                      row.rank === 1
                        ? "bg-amber-500/20 text-amber-500 border border-amber-500/50"
                        : row.rank === 2
                          ? "bg-gray-300/20 text-gray-300 border border-gray-300/50"
                          : row.rank === 3
                            ? "bg-orange-700/20 text-orange-400 border border-orange-700/50"
                            : row.isMe
                              ? "bg-[#6C63FF]/30 text-white"
                              : "text-[#5A5A72]"
                    }`}
                  >
                    #{row.rank}
                  </div>
                </td>
                <td
                  className={`px-6 py-4 font-bold ${row.isMe ? "text-[#00F0FF]" : "text-white"}`}
                >
                  {row.name} {row.isMe && "(You)"}
                </td>
                <td className="px-6 py-4">{row.event}</td>
                <td className="px-6 py-4 font-mono font-bold text-white">
                  {row.score.toLocaleString()} XP
                </td>
                <td
                  className={`px-6 py-4 text-right font-black ${row.prize !== "-" ? "text-[#6C63FF]" : "text-[#5A5A72]"}`}
                >
                  {row.prize}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
