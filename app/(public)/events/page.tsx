import React from "react";
import EventCard, { EventCardData } from "@/components/shared/EventCard";
import { prisma } from "@/lib/prisma";

// Full Events Page Layout
export default async function EventsPage() {
  // Fetch data representing the database fetch
  const events = await prisma.event.findMany({
    orderBy: { startDate: "desc" },
    include: {
      _count: {
        select: { participants: true },
      },
    },
  });

  const eventImages = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
  ];

  const allEvents: EventCardData[] = events.map((e, index) => ({
    slug: e.slug,
    title: e.title,
    theme: e.theme,
    prizePool: e.prizePool,
    endDate: e.endDate,
    status: e.status,
    participantCount: e._count.participants,
    bannerUrl: e.bannerUrl || eventImages[index % eventImages.length],
  }));

  return (
    <div className="min-h-screen selection:bg-[#6C63FF]/30 font-body">
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-[1200px]">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display text-white mb-4">
            Hackathons & Events
          </h1>
          <p className="text-lg text-[#9090AA] max-w-2xl">
            Discover technical challenges, open source sprints, and community
            meetups happening across the XINITY ecosystem.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Status Tabs */}
          <div className="flex p-1 bg-[#1A1A24] border border-[#2A2A38] rounded-xl overflow-x-auto scollbar-hide max-w-full">
            {["All", "Live", "Upcoming", "Ended"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                  tab === "All"
                    ? "bg-[#2A2A38] text-white shadow-md"
                    : "text-[#9090AA] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Secondary Filters & Search */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <select className="bg-[#1A1A24] border border-[#2A2A38] text-white text-sm rounded-xl px-4 py-2.5 outline-none focus:border-[#6C63FF] h-full w-full sm:w-auto">
              <option value="">All Categories</option>
              <option value="web3">Web3 & Crypto</option>
              <option value="ai">AI / ML</option>
              <option value="hardware">Hardware / IoT</option>
            </select>

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
                placeholder="Search events..."
                className="w-full bg-[#1A1A24] border border-[#2A2A38] text-white text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-[#6C63FF] transition-colors placeholder:text-[#5A5A72]"
              />
            </div>
          </div>
        </div>

        {/* Results Grid - Responsive: 1 mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}
