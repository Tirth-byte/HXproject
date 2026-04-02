"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentRef = sectionRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const pillars = [
    {
      icon: "⚡",
      label: "Compete",
      description: "High-stakes hackathons with real prizes",
    },
    {
      icon: "🤝",
      label: "Connect",
      description: "Network with top developers and mentors",
    },
    {
      icon: "🚀",
      label: "Build",
      description: "Ship real projects with lasting impact",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0A0A0F] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block mb-4 text-[#00F0FF] text-[10px] font-black uppercase tracking-[0.2em] font-mono">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 leading-tight">
              A Community Built by <br className="hidden md:block" /> Builders,
              for Builders.
            </h2>

            <div className="space-y-6 text-lg text-[#9090AA] mb-12 leading-relaxed font-body">
              <p>
                XINITY is India&apos;s fastest-growing hackathon community,
                built to empower developers, designers, and innovators. We
                create spaces where ideas collide and products are born.
              </p>
              <p>
                From first-time coders to industry veterans — XINITY is where
                ambition meets opportunity.
              </p>
            </div>

            <div className="space-y-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#6C63FF]/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-[#6C63FF]/20 transition-colors">
                    <span className="text-xl">{pillar.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {pillar.label}
                    </h4>
                    <p className="text-[#5A5A72]">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Element (Card Cluster) */}
          <div
            className={`relative h-[500px] flex items-center justify-center transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Card 1: Active Hackathon */}
            <div className="absolute top-0 left-0 md:left-10 w-64 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-[#00F0FF] uppercase tracking-wider">
                  Active Hackathon
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <h4 className="text-white font-bold mb-3">AI Builders Summit</h4>
              <div className="flex gap-2">
                {[14, 0, 5, 22].map((num, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center py-2 bg-white/[0.05] rounded-lg"
                  >
                    <div className="text-white font-bold text-xs">{num}</div>
                    <div className="text-[8px] text-[#5A5A72] uppercase font-black">
                      {["d", "h", "m", "s"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: #1 Ranked */}
            <div className="absolute bottom-10 right-0 md:right-10 z-10 w-64 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-2xl animate-[float_6s_ease-in-out_infinite_1.5s]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-[#6C63FF] uppercase tracking-wider">
                  #1 Ranked Participant
                </span>
                <span className="text-orange-400">🏆</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F0FF] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-[#6C63FF]/20">
                  AK
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Arjun Kumar</h4>
                  <p className="text-[#5A5A72] text-[10px] font-bold">
                    2,450 XP
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Community Score */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-56 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-2xl animate-[float_6s_ease-in-out_infinite_3s] flex flex-col items-center">
              <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-4">
                Community Score
              </div>
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="32.65"
                    strokeLinecap="round"
                    fill="transparent"
                    className="text-[#6C63FF]"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white leading-none">
                    87
                  </span>
                  <span className="text-[8px] font-black text-[#9090AA] uppercase font-mono">
                    / 100
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[10px] font-bold text-[#00F0FF] animate-pulse uppercase tracking-widest">
                Growth Phase
              </p>
            </div>

            {/* Background Blob for depth */}
            <div className="absolute w-[400px] h-[400px] bg-[#6C63FF]/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
