"use client";

import React, { useEffect, useRef, useState } from "react";
import EventCard, { EventCardData } from "@/components/shared/EventCard";
import Link from "next/link";
import { EventStatus } from "@prisma/client";

// Mock data for initial preview layout
const MOCK_EVENTS: EventCardData[] = [
  {
    slug: "code-a-thon-2024",
    title: "Code-A-Thon 2024: Open Innovation",
    theme: ["AI/ML", "Web3", "Hardware"],
    prizePool: 1500000,
    endDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), // +3 days
    status: EventStatus.LIVE,
    participantCount: 1450,
    bannerUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "fintech-frontier",
    title: "FinTech Frontier Challenge",
    theme: ["Finance", "DeFi", "Security"],
    prizePool: 800000,
    endDate: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), // +15 days
    status: EventStatus.UPCOMING,
    participantCount: 847,
    bannerUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  },
];

interface EventsPreviewSectionProps {
  initialEvents?: EventCardData[];
}

export default function EventsPreviewSection({
  initialEvents,
}: EventsPreviewSectionProps) {
  const events = initialEvents || MOCK_EVENTS;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0A0A0F] relative overflow-hidden"
    >
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6C63FF]/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Area */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block py-1 px-4 mb-4 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 text-[#00F0FF] text-[10px] font-black uppercase tracking-[0.2em] font-mono shadow-[0_0_20px_rgba(0,240,255,0.1)]">
            Explore Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
            Upcoming Hackathons
          </h2>
          <p className="text-lg text-[#9090AA] font-body max-w-2xl mx-auto">
            Find your next challenge. Compete. Build. Win. Join thousands of
            high-velocity developers reshaping the future.
          </p>
        </div>

        {/* Featured Events Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {events.map((event) => (
            <div key={event.slug} className="flex justify-center">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#6C63FF]/50 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:text-[#00F0FF] transition-all group"
          >
            View All Events
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
