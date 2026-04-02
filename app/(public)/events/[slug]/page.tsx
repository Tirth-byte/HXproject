import React from "react";
import Navbar from "@/components/shared/Navbar";
import { EventStatus } from "@prisma/client";

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // In a real app, fetch event data based on params.slug from Prisma
  const event = {
    title: "Code-A-Thon 2024: Open Innovation",
    slug: params.slug,
    prizePool: 1500000,
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    maxTeamSize: 4,
    status: EventStatus.LIVE,
    participantCount: 1450,
  };

  const formattedPrize = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(event.prizePool);

  return (
    <div className="bg-[#0A0A0F] min-h-screen selection:bg-[#6C63FF]/30">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF_1px,transparent_1px),linear-gradient(to_bottom,#6C63FF_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#6C63FF]/20 to-[#00F0FF]/15 blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-black uppercase tracking-widest rounded-full mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Live Now
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#9090AA] font-bold uppercase tracking-wider text-sm">
            <span>📅 Starts: Oct 12, 2026</span>
            <span>
              🏆 Prize Pool:{" "}
              <span className="text-[#00F0FF]">{formattedPrize}</span>
            </span>
            <span>👥 Team Size: 1 - {event.maxTeamSize}</span>
          </div>
        </div>
      </div>

      <main className="py-16 container mx-auto px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-black font-display text-white mb-6 border-l-4 border-[#6C63FF] pl-4">
                About the Hackathon
              </h2>
              <div className="text-[#9090AA] space-y-4 leading-relaxed bg-[#111118] p-8 rounded-2xl border border-[#2A2A38]">
                <p>
                  Join the ultimate test of engineering and creativity.
                  Code-A-Thon 2024 is an open innovation sprint where you are
                  given complete freedom to build solutions for real-world
                  problems. Whether it&apos;s Web3, AI, or Fintech, if your code
                  has an impact, this is your stage.
                </p>
                <p>
                  Over 48 hours, you&apos;ll collaborate with brilliant minds,
                  mentor under industry experts, and present your product to
                  top-tier VCs and engineering leads.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black font-display text-white mb-6 border-l-4 border-[#00F0FF] pl-4">
                Prizes Breakdown
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    place: "1st Place",
                    prize: "₹8,00,000",
                    bg: "bg-amber-500/10 border-amber-500/30",
                    text: "text-amber-500",
                  },
                  {
                    place: "2nd Place",
                    prize: "₹4,00,000",
                    bg: "bg-gray-300/10 border-gray-300/30",
                    text: "text-gray-300",
                  },
                  {
                    place: "3rd Place",
                    prize: "₹2,00,000",
                    bg: "bg-orange-700/10 border-orange-700/30",
                    text: "text-orange-500",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${p.bg} text-center`}
                  >
                    <div
                      className={`text-3xl font-black mb-2 font-display ${p.text}`}
                    >
                      {p.prize}
                    </div>
                    <div className="text-xs uppercase font-bold tracking-widest text-white/70">
                      {p.place}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black font-display text-white mb-6 border-l-4 border-[#6C63FF] pl-4">
                Mentors & Judges
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "Rahul Sharma",
                    role: "CTO @ TechLabs",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  },
                  {
                    name: "Priya Das",
                    role: "Senior Dev @ Google",
                    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                  },
                  {
                    name: "Amit Patel",
                    role: "Venture Partner @ PeakXV",
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
                  },
                  {
                    name: "Sneha Reddy",
                    role: "Web3 Lead @ Polygon",
                    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#111118] p-4 rounded-xl border border-[#2A2A38] group hover:border-[#6C63FF]/30 transition-all"
                  >
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <h4 className="font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                        {m.name}
                      </h4>
                      <p className="text-xs text-[#5A5A72] uppercase tracking-wider font-bold">
                        {m.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Registration Panel */}
          <div>
            <div className="sticky top-32 bg-[#111118]/80 backdrop-blur-xl border border-[#2A2A38] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 font-display">
                Registration Details
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[#9090AA] text-sm">Status</span>
                  <span className="text-green-400 font-bold text-sm bg-green-400/10 px-3 py-1 rounded-md">
                    Registration Open
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[#9090AA] text-sm">Ends In</span>
                  <span className="text-amber-500 font-bold text-sm">
                    3 Days 12 Hours
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-[#9090AA] text-sm">Registered</span>
                  <span className="text-white font-bold text-sm">
                    {event.participantCount} Devs
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  alert("Successfully Registered for " + event.title + "!")
                }
                className="w-full py-4 rounded-xl font-bold text-white text-lg shadow-[0_4px_20px_0_rgba(108,99,255,0.4)] bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-95 transition-all mb-4"
              >
                Register Now
              </button>
              <p className="text-center text-[#5A5A72] text-xs font-semibold">
                Free to participate for all developers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
