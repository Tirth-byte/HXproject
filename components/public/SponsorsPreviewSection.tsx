"use client";

import React, { useRef, useState, useEffect } from "react";
import SponsorModal from "@/components/shared/SponsorModal";

// Since we don't have actual logos in /public/sponsors yet, we'll use stylized text placeholders
// that act like monochrome logos which scale and colorize on hover.
const TitleSponsor = {
  name: "VERCEL",
  hue: "text-white",
  logo: "https://assets.vercel.com/image/upload/v1607130548/repositories/vercel/logo.png",
};
const GoldSponsors = [
  {
    name: "SUPABASE",
    hue: "text-[#3ECF8E]",
    logo: "https://logo.clearbit.com/supabase.com",
  },
  {
    name: "POLYGON",
    hue: "text-[#8247E5]",
    logo: "https://logo.clearbit.com/polygon.technology",
  },
  {
    name: "CLOUDFLARE",
    hue: "text-[#F38020]",
    logo: "https://logo.clearbit.com/cloudflare.com",
  },
  {
    name: "APTOS",
    hue: "text-[#08E0BD]",
    logo: "https://logo.clearbit.com/aptoslabs.com",
  },
];
const SilverSponsors = [
  {
    name: "AWS",
    hue: "text-[#FF9900]",
    logo: "https://logo.clearbit.com/aws.amazon.com",
  },
  {
    name: "GITHUB",
    hue: "text-white",
    logo: "https://logo.clearbit.com/github.com",
  },
  {
    name: "TAILWIND",
    hue: "text-[#38B2AC]",
    logo: "https://logo.clearbit.com/tailwindcss.com",
  },
  {
    name: "FIGMA",
    hue: "text-[#F24E1E]",
    logo: "https://logo.clearbit.com/figma.com",
  },
  {
    name: "STRIPE",
    hue: "text-[#008CDD]",
    logo: "https://logo.clearbit.com/stripe.com",
  },
  {
    name: "RAILWAY",
    hue: "text-[#FFFFFF]",
    logo: "https://logo.clearbit.com/railway.app",
  },
  {
    name: "RENDER",
    hue: "text-[#46E3B7]",
    logo: "https://logo.clearbit.com/render.com",
  },
  {
    name: "RESEND",
    hue: "text-white",
    logo: "https://logo.clearbit.com/resend.com",
  },
];
const CommunitySponsors = Array(12).fill("COMMUNITY_PARTNER_");

export default function SponsorsPreviewSection() {
  const [modalOpen, setModalOpen] = useState(false);
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
    <>
      <section
        ref={sectionRef}
        className="py-24 bg-[#05050A] border-y border-[#2A2A38] relative overflow-hidden"
      >
        {/* Style for the marquee auto-scroll */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `,
          }}
        />

        <div className="container mx-auto px-6 max-w-[1200px]">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block py-1 px-4 mb-4 rounded-full border border-white/10 bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.2em] font-mono shadow-md">
              Trusted By
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
              Our Sponsors & Partners
            </h2>
            <p className="text-lg text-[#9090AA] font-body max-w-2xl mx-auto mb-8">
              Powering the next generation of Indian tech talent by bringing
              tools, APIs, and mentorship directly to builders.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 rounded-full font-bold text-white text-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#6C63FF]/50 hover:text-[#00F0FF] transition-all"
            >
              Become a Sponsor →
            </button>
          </div>

          <div
            className={`space-y-16 transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Tier 1: Title */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#6C63FF] mb-6 relative">
                <span className="absolute -inset-1 bg-[#6C63FF]/20 blur-sm rounded" />
                <span className="relative">Title Sponsor</span>
              </div>
              {/* Logo */}
              <div className="w-[240px] h-[80px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group cursor-pointer hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden px-6">
                <img
                  src={TitleSponsor.logo}
                  alt={TitleSponsor.name}
                  className="max-w-full max-h-[40px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Tier 2: Gold */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6 text-center">
                Gold Sponsors
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {GoldSponsors.map((sp, i) => (
                  <div
                    key={i}
                    className="w-[160px] h-[70px] bg-[#0A0A0F] border border-[#2A2A38] rounded-xl flex items-center justify-center group cursor-pointer transition-all duration-300 hover:border-[#6C63FF]/30 px-4"
                  >
                    <img
                      src={sp.logo}
                      alt={sp.name}
                      className="max-w-full max-h-[30px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 3: Silver */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">
                Silver Tooling
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {SilverSponsors.map((sp, i) => (
                  <div
                    key={i}
                    className="h-[60px] bg-[#0A0A0F] border border-[#2A2A38] rounded-lg flex items-center justify-center group cursor-pointer transition-all duration-300 hover:border-[#6C63FF]/20 px-4"
                  >
                    <img
                      src={sp.logo}
                      alt={sp.name}
                      className="max-w-full max-h-[24px] object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 4: Community Marquee */}
        <div
          className={`mt-24 pt-8 border-t border-[#2A2A38] overflow-hidden w-full transition-all duration-1000 delay-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {/* Render two sets of community sponsors to allow for infinite loop visually */}
            {[...CommunitySponsors, ...CommunitySponsors].map((sp, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center px-8 h-[40px] opacity-20 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer text-xs font-mono text-white tracking-widest"
              >
                {sp}
                {(i + 1).toString().padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SponsorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
