"use client";

import React, { useState } from "react";
import SponsorModal from "@/components/shared/SponsorModal";

// Reusing tier data from Preview Component for consistency
const sponsorsList = [
  {
    name: "VERCEL",
    hue: "text-white",
    tier: "PLATINUM",
    logo: "https://assets.vercel.com/image/upload/v1607130548/repositories/vercel/logo.png",
    url: "https://vercel.com",
    tagline: "Develop. Preview. Ship.",
  },
  {
    name: "SUPABASE",
    hue: "text-[#3ECF8E]",
    tier: "GOLD",
    logo: "https://logo.clearbit.com/supabase.com",
    url: "https://supabase.com",
    tagline: "Open source Firebase alternative.",
  },
  {
    name: "POLYGON",
    hue: "text-[#8247E5]",
    tier: "GOLD",
    logo: "https://logo.clearbit.com/polygon.technology",
    url: "https://polygon.technology",
    tagline: "Bringing Web3 to the masses.",
  },
  {
    name: "CLOUDFLARE",
    hue: "text-[#F38020]",
    tier: "GOLD",
    logo: "https://logo.clearbit.com/cloudflare.com",
    url: "https://cloudflare.com",
    tagline: "A better Internet.",
  },
  {
    name: "AWS",
    hue: "text-[#FF9900]",
    tier: "SILVER",
    logo: "https://logo.clearbit.com/aws.amazon.com",
    url: "https://aws.amazon.com",
    tagline: "Cloud compute platforms.",
  },
  {
    name: "GITHUB",
    hue: "text-white",
    tier: "SILVER",
    logo: "https://logo.clearbit.com/github.com",
    url: "https://github.com",
    tagline: "Where the world builds software.",
  },
  {
    name: "FIGMA",
    hue: "text-[#F24E1E]",
    tier: "SILVER",
    logo: "https://logo.clearbit.com/figma.com",
    url: "https://figma.com",
    tagline: "The collaborative interface design tool.",
  },
  {
    name: "STRIPE",
    hue: "text-[#008CDD]",
    tier: "SILVER",
    logo: "https://logo.clearbit.com/stripe.com",
    url: "https://stripe.com",
    tagline: "Financial infrastructure for the internet.",
  },
];

export default function SponsorsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-[#6C63FF]/30 overflow-hidden font-body">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 text-center border-b border-[#2A2A38] bg-[#05050A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,99,255,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-[800px] relative z-10">
          <h1 className="text-5xl md:text-6xl font-black font-display text-white mb-6">
            Empower the Next Generation of{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] bg-clip-text text-transparent">
              Builders
            </span>
            .
          </h1>
          <p className="text-[#9090AA] text-lg mb-8 leading-relaxed">
            XINITY connects the world&apos;s most innovative companies with
            India&apos;s top software engineering talent. Our sponsors
            don&apos;t just put logos on websites—they actively shape the
            products of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-white text-sm shadow-[0_4px_14px_0_rgba(108,99,255,0.39)] bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-95 transition-all"
            >
              View Sponsor Deck
            </button>
            <button
              onClick={() => alert("Contact form coming soon!")}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#2A2A38] hover:border-white/20 text-[#9090AA] hover:text-white text-sm font-bold bg-[#111118] transition-all"
            >
              Contact Organizers
            </button>
          </div>
        </div>
      </div>

      <main className="py-24 container mx-auto px-6 max-w-[1200px]">
        {/* Why Sponsor Impact Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-black font-display text-white mb-12 text-center">
            Why Sponsor XINITY?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#111118] border border-[#2A2A38]">
              <div className="w-12 h-12 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Early Access to Top Talent
              </h3>
              <p className="text-[#9090AA] text-sm leading-relaxed">
                Source directly from leaderboards. Our hackers are highly
                proficient deeply focused engineers with proven execution
                capability.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#111118] border border-[#2A2A38]">
              <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                API & Tooling Adoption
              </h3>
              <p className="text-[#9090AA] text-sm leading-relaxed">
                Get thousands of developers actively building products using
                your SDKs, APIs, or open-source infrastructure in real-world
                scenarios.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#111118] border border-[#2A2A38]">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Brand Positioning
              </h3>
              <p className="text-[#9090AA] text-sm leading-relaxed">
                Establish massive organic mindshare among the demographic
                leading the AI, Web3, and startup ecosystem in India.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Sponsor Roster */}
        <section>
          <div className="flex justify-between items-end mb-12 border-b border-[#2A2A38] pb-4">
            <h2 className="text-3xl font-black font-display text-white">
              Our 2026 Partners
            </h2>
            <span className="text-sm font-bold text-[#6C63FF] uppercase tracking-wider">
              8 Companies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorsList.map((sp, i) => (
              <a
                key={i}
                href={sp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="h-full p-8 bg-[#111118] border border-[#2A2A38] rounded-2xl hover:border-[#6C63FF]/50 transition-all duration-300 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(108,99,255,0.05)]">
                  <div className="w-20 h-20 bg-[#0A0A0F] border border-[#2A2A38] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 transition-all shadow-inner px-4 overflow-hidden">
                    <img
                      src={sp.logo}
                      alt={sp.name}
                      className="max-w-full max-h-[40px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-white font-mono mb-2 group-hover:text-[#00F0FF] transition-colors tracking-tight">
                    {sp.name}
                  </h3>
                  <span
                    className={`text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full border mb-4 ${
                      sp.tier === "PLATINUM"
                        ? "bg-white/10 text-white border-white/20"
                        : sp.tier === "GOLD"
                          ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                          : "bg-[#9090AA]/10 text-[#9090AA] border-[#9090AA]/20"
                    }`}
                  >
                    {sp.tier} Partner
                  </span>
                  <p className="text-xs text-[#5A5A72] text-center leading-relaxed mt-auto font-medium">
                    {sp.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SponsorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
