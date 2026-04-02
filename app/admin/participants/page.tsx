"use client";

import React from "react";

export default function ParticipantsManagement() {
  const participants = [
    {
      id: "p1",
      name: "Arjun Dev",
      email: "arjun.dev@example.com",
      events: 3,
      submissions: 2,
      joined: "Oct 01, 2026",
    },
    {
      id: "p2",
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      events: 1,
      submissions: 1,
      joined: "Sep 28, 2026",
    },
    {
      id: "p3",
      name: "Rahul Singh",
      email: "rahul.s@example.com",
      events: 4,
      submissions: 4,
      joined: "Aug 15, 2026",
    },
    {
      id: "p4",
      name: "Kavya Menon",
      email: "kavya@example.com",
      events: 1,
      submissions: 0,
      joined: "Oct 10, 2026",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#2A2A38] pb-6">
        <div>
          <h1 className="text-2xl font-black font-display text-white mb-1">
            Participants
          </h1>
          <p className="text-[#9090AA] text-sm">
            Manage users, view profiles, and handle event enrollments.
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5A72]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search emails or names..."
              className="w-full bg-[#111118] border border-[#2A2A38] text-white text-sm rounded-lg pl-10 pr-4 py-2 outline-none focus:border-[#6C63FF] transition-colors font-mono"
            />
          </div>
          <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold rounded-lg transition-all flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-[#111118] border border-[#2A2A38] rounded-xl overflow-x-auto shadow-2xl">
        <table className="w-full text-left text-sm text-[#9090AA]">
          <thead className="text-[10px] uppercase bg-[#0A0A0F] text-[#5A5A72] border-b border-[#2A2A38]">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-black tracking-widest cursor-pointer hover:text-white flex items-center gap-1"
              >
                Participant{" "}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-black tracking-widest cursor-pointer hover:text-white"
              >
                Events Joined
              </th>
              <th scope="col" className="px-6 py-4 font-black tracking-widest">
                Submissions
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-black tracking-widest cursor-pointer hover:text-white"
              >
                Join Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-black tracking-widest text-right"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[#2A2A38] last:border-0 hover:bg-white/5 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="font-bold text-white mb-0.5">{p.name}</div>
                  <div className="text-xs font-mono text-[#5A5A72]">
                    {p.email}
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-white">
                  <span className="w-6 h-6 inline-flex border border-[#2A2A38] rounded bg-[#1A1A24] items-center justify-center">
                    {p.events}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-white">
                  <span className="w-6 h-6 inline-flex border border-[#2A2A38] rounded bg-[#1A1A24] items-center justify-center">
                    {p.submissions}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs">{p.joined}</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-xs font-bold uppercase tracking-wider text-[#6C63FF] hover:text-white transition-colors">
                    View Profile
                  </button>
                  <button className="text-xs font-bold uppercase tracking-wider text-[#EF4444] hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
