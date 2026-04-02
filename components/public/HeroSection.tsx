"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Counter = ({
  end,
  duration = 2000,
}: {
  end: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const endNum = parseInt(end.replace(/[^0-9]/g, ""));
  const suffix = end.replace(/[0-9]/g, "");

  useEffect(() => {
    // Guard: if endNum is 0 or NaN, there's nothing to count up to
    if (isNaN(endNum) || endNum <= 0) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = endNum / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [endNum, duration]);

  const cleanSuffix = suffix.replace(/,/g, "");

  return (
    <span>
      {count.toLocaleString()}
      {cleanSuffix}
    </span>
  );
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0A0A0F]">
      {/* ─── BACKGROUND EFFECTS ─── */}
      {/* Subtle animated grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#6C63FF_1px,transparent_1px),linear-gradient(to_bottom,#6C63FF_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[#0A0A0F] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,#000_100%)]" />
      </div>

      {/* Radial Blobs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#6C63FF]/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#00F0FF]/20 blur-[120px] rounded-full" />

      {/* ─── HERO CONTENT ─── */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Eyebrow Label */}
        <div
          className={`mb-8 flex items-center justify-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 text-[#00F0FF] text-[10px] font-black uppercase tracking-[0.2em] font-mono shadow-[0_0_20px_rgba(0,240,255,0.1)]">
            India&apos;s Premier Hackathon Community
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] text-white mb-10 overflow-hidden font-display">
          <div className="flex flex-col items-center">
            <span
              className={`inline-block transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-12 blur-xl"
              }`}
            >
              Build. Compete.
            </span>
            <span
              className={`inline-block mt-2 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-12 blur-xl"
              }`}
            >
              Innovate with{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent">
                XINITY.
              </span>
            </span>
          </div>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-2xl text-[#9090AA] max-w-[560px] mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 font-body ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Join 10,000+ developers across India in world-class hackathons, open
          challenges, and collaborative builds.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/events"
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-br from-[#6C63FF] to-[#00F0FF] text-white font-bold rounded-2xl shadow-2xl shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 hover:scale-[1.03] active:scale-95 transition-all text-lg"
          >
            Explore Hackathons
          </Link>
          <Link
            href="/register"
            className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-[#6C63FF]/50 text-white font-bold rounded-2xl hover:bg-white/5 transition-all active:scale-95 text-lg"
          >
            Join the Community
          </Link>
        </div>

        {/* Stats Row */}
        <div
          className={`hidden md:flex items-center justify-center gap-16 mt-24 py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-[2rem] transition-all duration-1000 delay-[1200ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center px-8">
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 font-display">
              <Counter end="10,000+" />
            </div>
            <div className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              Developers
            </div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center px-8">
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 font-display">
              <Counter end="120+" />
            </div>
            <div className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              Hackathons Hosted
            </div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center px-8">
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 font-display">
              <Counter end="₹50L+" />
            </div>
            <div className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              Prize Pool Awarded
            </div>
          </div>
        </div>

        {/* Mobile Stats (Simplified) */}
        <div
          className={`flex md:hidden flex-wrap items-center justify-center gap-8 mt-16 transition-all duration-1000 delay-[1200ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl font-black text-white mb-1 font-display">
              10,000+
            </div>
            <div className="text-[10px] uppercase font-black tracking-widest text-[#5A5A72]">
              Devs
            </div>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <div className="text-2xl font-black text-white mb-1 font-display">
              120+
            </div>
            <div className="text-[10px] uppercase font-black tracking-widest text-[#5A5A72]">
              Events
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-1000 delay-[1500ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] uppercase font-black tracking-widest text-[#5A5A72]">
          Scroll Dwn
        </span>
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1.5 relative">
          <div className="w-1.5 h-1.5 bg-gradient-to-b from-[#6C63FF] to-[#00F0FF] rounded-full animate-[scroll-indicator_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
