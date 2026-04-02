"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ProjectCard, { ProjectCardData } from "@/components/shared/ProjectCard";

const mockProjects: ProjectCardData[] = [
  {
    id: "p1",
    name: "NeuralSync Platform",
    eventName: "Code-A-Thon 2024",
    description:
      "Distributed neural network training utilizing idle browser processing power globally.",
    stack: ["Rust", "WASM", "React", "WebRTC"],
    teamMembers: [
      { id: "u1", name: "Arjun Dev" },
      { id: "u2", name: "Sneha P" },
      { id: "u3", name: "Rahul S" },
    ],
    winnerBadge: "1st Place",
    gradientFrom: "from-[#6C63FF]",
    gradientTo: "to-[#00F0FF]",
  },
  {
    id: "p2",
    name: "DefiLend Smart Contract",
    eventName: "FinTech Frontier",
    description:
      "Self-collateralizing micro-loans built on top of the Polygon zkEVM architecture.",
    stack: ["Solidity", "Hardhat", "Next.js"],
    teamMembers: [
      { id: "u4", name: "Tirth Patel" },
      { id: "u5", name: "Vikram R" },
    ],
    winnerBadge: "Best Finance",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-700",
  },
  {
    id: "p3",
    name: "Voxel Engine WebGL",
    eventName: "Solana Summer Hacks",
    description:
      "High performance browser-based 3D engine supporting up to 10M voxels.",
    stack: ["WebGL", "Three.js", "C++"],
    teamMembers: [
      { id: "u6", name: "Kavi M" },
      { id: "u7", name: "Priya V" },
      { id: "u8", name: "Ashish" },
      { id: "u9", name: "Meera" },
    ],
    gradientFrom: "from-emerald-400",
    gradientTo: "to-teal-700",
  },
  {
    id: "p4",
    name: "OpenGov Identity",
    eventName: "Web3 For All India",
    description:
      "Decentralized civic identity verification for rural deployment.",
    stack: ["Polygon ID", "React Native"],
    teamMembers: [
      { id: "u10", name: "Zaid K" },
      { id: "u11", name: "Farah" },
    ],
    winnerBadge: "Social Impact",
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-700",
  },
  {
    id: "p5",
    name: "AeroAI Diagnostics",
    eventName: "MedTech Innovators",
    description:
      "Mobile app computing respiratory diagnostics by listening to cough sounds via the microphone.",
    stack: ["Python", "TensorFlow Lite", "Flutter"],
    teamMembers: [
      { id: "u12", name: "Dr. Singh" },
      { id: "u13", name: "Aarav" },
    ],
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-700",
  },
  {
    id: "p6",
    name: "ZeroKnowledge Auth",
    eventName: "Code-A-Thon 2024",
    description:
      "Drop-in authentication SDK enforcing zero-knowledge proof verification without server overhead.",
    stack: ["TypeScript", "Circom", "SnarkJS"],
    teamMembers: [{ id: "u14", name: "Neha" }],
    gradientFrom: "from-purple-500",
    gradientTo: "to-fuchsia-700",
  },
];

export default function CommunityShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const slideRow = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // rough width of one card + gap
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0A0A0F] border-t border-[#2A2A38] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Area */}
        <div
          className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-6 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <span className="inline-block py-1 px-4 mb-4 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[10px] font-black uppercase tracking-[0.2em] font-mono shadow-[0_0_20px_rgba(236,72,153,0.15)]">
              Hall of Fame
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
              Built by the Community.
            </h2>
            <p className="text-lg text-[#9090AA] font-body max-w-2xl">
              Explore award-winning projects, groundbreaking tools, and
              open-source contributions shipped by XINITY hackers.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/community"
              className="text-[#00F0FF] hover:text-white font-bold text-sm uppercase tracking-wider transition-colors"
            >
              See All Projects →
            </Link>
            <div className="hidden md:flex gap-2 ml-4">
              <button
                onClick={() => slideRow("left")}
                className="w-10 h-10 rounded-full border border-[#2A2A38] bg-[#111118] flex items-center justify-center text-[#9090AA] hover:text-white hover:border-[#6C63FF] transition-all"
              >
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
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => slideRow("right")}
                className="w-10 h-10 rounded-full border border-[#2A2A38] bg-[#111118] flex items-center justify-center text-[#9090AA] hover:text-white hover:border-[#6C63FF] transition-all"
              >
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
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div
        className={`w-full overflow-hidden transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 md:px-12 lg:px-24 pb-12 snap-x snap-mandatory hidden-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-[320px] max-w-[320px] lg:min-w-[380px] lg:max-w-[380px] snap-center shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
          {/* Spacer to allow full scroll of last item */}
          <div className="min-w-[50vw] shrink-0" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
