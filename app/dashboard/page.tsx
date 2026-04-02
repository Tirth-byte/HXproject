import React from "react";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function DashboardOverview() {
  const session = await getServerSession();
  const userName = session?.user?.name || "Developer";

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Card */}
      <div className="relative p-8 rounded-[2rem] border border-[#2A2A38] bg-[#111118]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#6C63FF]/20 to-[#00F0FF]/10 blur-[100px] rounded-full -z-10" />
        <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-2">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent">
            {userName.split(" ")[0]}
          </span>
          .
        </h1>
        <p className="text-[#9090AA] text-lg font-medium">
          Ready to build? You have{" "}
          <span className="text-amber-500 font-bold">1 active hackathon</span>.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stat 1 */}
        <div className="p-6 rounded-2xl bg-[#1A1A24] border border-[#2A2A38] hover:border-[#6C63FF]/30 transition-all flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <span className="text-white font-bold tracking-widest uppercase text-xs">
              Events Joined
            </span>
            <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <span className="text-4xl font-black font-display text-white">
              4
            </span>
            <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] w-[40%]" />
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="p-6 rounded-2xl bg-[#1A1A24] border border-[#2A2A38] hover:border-[#00F0FF]/30 transition-all flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <span className="text-white font-bold tracking-widest uppercase text-xs">
              Active Submissions
            </span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-2" />
          </div>
          <div>
            <span className="text-4xl font-black font-display text-white">
              1
            </span>
            <p className="text-[#5A5A72] text-xs font-semibold mt-2 uppercase">
              Pending Review
            </p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="p-6 rounded-2xl bg-[#1A1A24] border border-[#2A2A38] hover:border-amber-500/30 transition-all flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <span className="text-white font-bold tracking-widest uppercase text-xs">
              Current Rank
            </span>
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <span className="text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Top 12%
            </span>
            <p className="text-[#5A5A72] text-xs font-semibold mt-2 uppercase">
              Based on past 3 events
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 p-8 rounded-[2rem] bg-[#111118] border border-[#2A2A38]">
          <h2 className="text-xl font-black font-display text-white mb-6 border-l-4 border-[#6C63FF] pl-4">
            Recent Activity
          </h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {/* Activity Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1A1A24] group-[.is-active]:bg-[#6C63FF] text-[#9090AA] group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#2A2A38] bg-[#1A1A24]/50 shadow">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-bold text-white text-sm">
                    Submitted Project
                  </div>
                  <time className="text-xs font-medium text-[#6C63FF]">
                    2 hours ago
                  </time>
                </div>
                <div className="text-[#5A5A72] text-xs font-medium">
                  Code-A-Thon 2024: Open Innovation
                </div>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1A1A24] text-[#9090AA] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#2A2A38] bg-[#1A1A24]/50 shadow">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-bold text-white text-sm">
                    Joined Event
                  </div>
                  <time className="text-xs font-medium text-[#9090AA]">
                    Yesterday
                  </time>
                </div>
                <div className="text-[#5A5A72] text-xs font-medium">
                  FinTech Frontier Challenge
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Mini */}
        <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#111118] to-[#0A0A0F] border border-[#2A2A38]">
          <h2 className="text-xl font-black font-display text-white mb-6 border-l-4 border-[#00F0FF] pl-4">
            Next Deadline
          </h2>
          <div className="p-6 rounded-2xl bg-[#1A1A24] border border-[#6C63FF]/30 shadow-[0_0_30px_rgba(108,99,255,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-full m-4 animate-pulse" />
            <h3 className="font-bold text-white text-lg leading-tight mb-2">
              Code-A-Thon 2024 Submissions Close
            </h3>
            <p className="text-[#9090AA] text-xs font-semibold mb-6">
              Final call for all project repos.
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { l: "Days", v: "03" },
                { l: "Hrs", v: "12" },
                { l: "Min", v: "45" },
                { l: "Sec", v: "22" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 py-2 rounded-lg border border-white/10"
                >
                  <div className="text-white font-black font-mono text-lg">
                    {t.v}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-[#5A5A72]">
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
