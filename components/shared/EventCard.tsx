import React from "react";
import Link from "next/link";
import { EventStatus } from "@prisma/client";

export type EventCardData = {
  slug: string;
  title: string;
  theme: string[];
  prizePool: number;
  endDate: Date;
  status: EventStatus;
  participantCount: number;
  bannerUrl?: string | null;
  isRegistered?: boolean;
};

export default function EventCard({ event }: { event: EventCardData }) {
  // Format prize pool to Indian Rupees
  const formattedPrize = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(event.prizePool);

  // Time remaining calculation (naive for static display)
  const now = new Date();
  const diffTime = Math.abs(event.endDate.getTime() - now.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);

  // Status Badge configurations
  const statusConfig = {
    LIVE: {
      label: "LIVE",
      color: "text-green-400 bg-green-400/10 border-green-400/20",
      indicator: "bg-green-400 animate-pulse",
    },
    UPCOMING: {
      label: "UPCOMING",
      color: "text-[#6C63FF] bg-[#6C63FF]/10 border-[#6C63FF]/20",
      indicator: "bg-[#6C63FF]",
    },
    ENDED: {
      label: "ENDED",
      color: "text-[#5A5A72] bg-[#5A5A72]/10 border-[#5A5A72]/20",
      indicator: "bg-[#5A5A72]",
    },
  };

  const currentStatus = statusConfig[event.status];

  return (
    <div className="group relative flex flex-col bg-[#111118] border border-[#2A2A38] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#6C63FF]/50 hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] flex-1 min-w-[300px]">
      {/* Banner Area */}
      <div className="relative h-[200px] w-full bg-[#1A1A24] overflow-hidden">
        <img
          src={
            event.bannerUrl ||
            "https://images.unsplash.com/photo-1540317580384-e5d418a6293b?auto=format&fit=crop&q=80&w=1200"
          }
          alt={event.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
        />

        {/* Status Badge */}
        <div
          className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-black tracking-widest uppercase backdrop-blur-md ${currentStatus.color}`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${currentStatus.indicator}`}
          />
          {currentStatus.label}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-[#00F0FF] transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Theme Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.theme.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase font-bold text-[#9090AA] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {event.theme.length > 3 && (
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase font-bold text-[#9090AA]">
              +{event.theme.length - 3}
            </span>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="block text-[10px] uppercase font-black tracking-widest text-[#5A5A72] mb-1">
              Prize Pool
            </span>
            <span className="block font-bold text-[#6C63FF]">
              {formattedPrize}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-black tracking-widest text-[#5A5A72] mb-1">
              Deadline
            </span>
            <span className="block font-medium text-amber-500">
              {event.status === "ENDED"
                ? "Completed"
                : `Ends in ${diffDays}d ${diffHours}h`}
            </span>
          </div>
          <div className="col-span-2 flex items-center gap-2 text-[#9090AA] text-sm">
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <span className="font-semibold text-white">
              {event.participantCount}
            </span>{" "}
            registered
          </div>
        </div>

        {/* Small Host label */}
        <div className="mt-auto mb-6 text-[10px] text-[#5A5A72] uppercase font-bold tracking-wider">
          Presented by XINITY
        </div>

        {/* Card Footer Options */}
        <div className="flex gap-3">
          <Link
            href={`/events/${event.slug}`}
            className="block flex-1 border border-[#2A2A38] text-center py-2.5 rounded-xl font-semibold text-white text-sm hover:bg-[#2A2A38] transition-colors"
          >
            View Details
          </Link>

          {event.isRegistered ? (
            <button
              disabled
              className="flex-1 bg-white/5 border border-white/10 text-[#9090AA] rounded-xl font-semibold text-sm cursor-not-allowed flex items-center justify-center gap-2"
            >
              Registered
              <svg
                className="w-4 h-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          ) : event.status !== "ENDED" ? (
            <Link
              href={`/events/${event.slug}`}
              className="flex-1 text-center py-2.5 rounded-xl font-bold text-white text-sm shadow-[0_4px_14px_0_rgba(108,99,255,0.39)] bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-95 transition-all"
            >
              Register Now
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
