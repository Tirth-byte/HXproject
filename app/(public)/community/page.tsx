import React from "react";
import ProjectCard, { ProjectCardData } from "@/components/shared/ProjectCard";
import TopBuildersLeaderboard from "@/components/public/TopBuildersLeaderboard";
import CommunityStatsBar from "@/components/public/CommunityStatsBar";

// Sample Data Array
const allProjects: ProjectCardData[] = [
  {
    id: "p1",
    name: "NeuralSync Platform",
    eventName: "Code-A-Thon 2024",
    description:
      "Distributed neural network training utilizing idle browser processing power globally. Cuts ML training times by up to 60%.",
    stack: ["Rust", "React", "WebRTC"],
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
    stack: ["Solidity", "Next.js"],
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
    stack: ["Three.js", "C++"],
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
      "Decentralized civic identity verification for rural deployment in India.",
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
      "Mobile app computing respiratory diagnostics by listening to cough sounds.",
    stack: ["TensorFlow Lite", "Flutter"],
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
      "Drop-in authentication SDK enforcing zero-knowledge proof verification.",
    stack: ["Circom", "SnarkJS"],
    teamMembers: [{ id: "u14", name: "Neha" }],
    gradientFrom: "from-purple-500",
    gradientTo: "to-fuchsia-700",
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = React.useState("All Projects");

  const categories = [
    "All Projects",
    "Web3 / Crypto",
    "AI & ML",
    "Open Source",
    "Hardware & IoT",
    "Social Impact",
  ];

  const filteredProjects =
    activeTab === "All Projects"
      ? allProjects
      : allProjects.filter((p) => {
          if (activeTab === "Web3 / Crypto")
            return p.stack.includes("Solidity") || p.stack.includes("WebRTC");
          if (activeTab === "AI & ML")
            return (
              p.stack.includes("TensorFlow Lite") || p.name.includes("Neural")
            );
          if (activeTab === "Social Impact")
            return p.winnerBadge === "Social Impact";
          return true;
        });

  return (
    <div className="min-h-screen selection:bg-[#6C63FF]/30 overflow-hidden font-body">
      {/* Hero Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Abstract animated glow background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-500/10 via-[#6C63FF]/10 to-[#00F0FF]/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00F0FF]/10 to-transparent blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1200px] text-center z-10 relative">
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-pink-500 via-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent">
              Power
            </span>{" "}
            of XINITY.
          </h1>
          <p className="text-lg md:text-xl text-[#9090AA] max-w-3xl mx-auto font-medium">
            A high-density network of engineers, designers, and innovators
            building generation-defining software over sleepless weekend
            sprints.
          </p>
        </div>
      </div>

      {/* Embedded Stats Bar Strip */}
      <CommunityStatsBar />

      <main className="py-24 container mx-auto px-6 max-w-[1200px]">
        {/* Filter Row */}
        <div className="flex p-1 mb-12 bg-[#111118] border border-[#2A2A38] rounded-xl overflow-x-auto hidden-scrollbar max-w-full lg:inline-flex mx-auto">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === cat
                  ? "bg-[#6C63FF] text-white shadow-[0_0_20px_rgba(108,99,255,0.3)]"
                  : "text-[#9090AA] hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Masonry/Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="h-full animate-in fade-in zoom-in-95 duration-500"
            >
              <ProjectCard project={project} />
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-[#5A5A72] italic">
              No projects found in this category yet.
            </div>
          )}
        </div>

        {/* Paginated loading trigger (Visual Only) */}
        <div className="text-center mb-32">
          <button className="px-8 py-3 rounded-full border border-[#2A2A38] text-[#9090AA] text-sm font-bold uppercase tracking-wider hover:bg-white/5 hover:text-white transition-all shadow-xl bg-[#0A0A0F]">
            Load More Projects
          </button>
        </div>

        <hr className="border-[#2A2A38] mb-8" />

        {/* Global Leaderboard Element embedded directly within page */}
        <TopBuildersLeaderboard />
      </main>
    </div>
  );
}
