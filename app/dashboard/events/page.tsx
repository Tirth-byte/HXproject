"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EventStatus } from "@prisma/client";
import EventCard, { EventCardData } from "@/components/shared/EventCard";

export default function MyEventsPage() {
  const [activeTab, setActiveTab] = useState("joined");

  const joinedEvents = [
    {
      id: "1",
      title: "Code-A-Thon 2024: Open Innovation",
      status: "LIVE",
      timeRemaining: "3d 12h",
      submissionStatus: "Pending", // Pending, Submitted
    },
    {
      id: "2",
      title: "FinTech Frontier Challenge",
      status: "UPCOMING",
      timeRemaining: "Starts in 15d",
      submissionStatus: "-",
    },
  ];

  const discoverEvents: EventCardData[] = [
    {
      slug: "solana-summer-hacks",
      title: "Solana Summer Hacks India",
      theme: ["Solana", "Rust", "Crypto"],
      prizePool: 5000000,
      endDate: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000),
      status: EventStatus.LIVE,
      participantCount: 2100,
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#2A2A38]">
        <div>
          <h1 className="text-3xl font-black font-display text-white mb-2">
            My Events
          </h1>
          <p className="text-[#9090AA] text-sm">
            Manage your joined hackathons and discover new challenges.
          </p>
        </div>
        <div className="flex p-1 bg-[#1A1A24] border border-[#2A2A38] rounded-xl flex-shrink-0">
          {["joined", "discover"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                activeTab === tab
                  ? "bg-[#2A2A38] text-white shadow-md"
                  : "text-[#9090AA] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "joined" && (
        <div className="space-y-4">
          {joinedEvents.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#2A2A38] rounded-2xl bg-[#0A0A0F]/50">
              <svg
                className="w-16 h-16 mx-auto text-[#5A5A72] mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">
                No joined events
              </h3>
              <p className="text-[#9090AA] mb-6">
                Looks like you haven&apos;t entered the arena yet.
              </p>
              <button
                onClick={() => setActiveTab("discover")}
                className="px-6 py-3 rounded-full font-bold text-white text-sm shadow-[0_4px_14px_0_rgba(108,99,255,0.39)] bg-gradient-to-r from-[#6C63FF] to-[#00F0FF]"
              >
                Explore Hackathons →
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-[#2A2A38] bg-[#111118]">
              <table className="w-full text-left text-sm text-[#9090AA]">
                <thead className="text-xs uppercase bg-[#1A1A24] text-[#5A5A72] border-b border-[#2A2A38]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-black tracking-widest"
                    >
                      Hackathon
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-black tracking-widest"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-black tracking-widest"
                    >
                      Countdown
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-black tracking-widest"
                    >
                      Submission
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-black tracking-widest text-right"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {joinedEvents.map((evt) => (
                    <tr
                      key={evt.id}
                      className="border-b border-[#2A2A38] last:border-0 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-white whitespace-nowrap">
                        {evt.title}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                            evt.status === "LIVE"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-[#6C63FF]/10 text-[#6C63FF]"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${evt.status === "LIVE" ? "bg-green-400 animate-pulse" : "bg-[#6C63FF]"}`}
                          />
                          {evt.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-amber-500">
                        {evt.timeRemaining}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`font-semibold ${evt.submissionStatus === "Pending" ? "text-[#9090AA]" : "text-white"}`}
                        >
                          {evt.submissionStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/dashboard/submissions`}
                          className="text-[#00F0FF] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                        >
                          Manage →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === "discover" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {discoverEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
