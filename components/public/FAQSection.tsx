"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "What is XINITY?",
    a: "XINITY is India's premium hackathon community platform, acting as a global hub connecting the boldest developers with top-tier technology partners to build generation-defining software.",
  },
  {
    q: "How do I register for a hackathon?",
    a: "Navigate to the Events page, select an active hackathon, and click 'Register'. Make sure your profile is updated with your GitHub URL and tech stack.",
  },
  {
    q: "Can I participate solo or do I need a team?",
    a: "You can participate solo or as part of a team. Most hackathons allow teams of up to 4 members. You can find teammates in our Discord community.",
  },
  {
    q: "What is the minimum age to join?",
    a: "You must be at least 16 years old to participate in XINITY events, unless explicitly specified otherwise in an event's rules.",
  },
  {
    q: "Are the hackathons free to participate?",
    a: "Yes. All hackathons hosted by XINITY are 100% free to enter. We believe in open access to innovation.",
  },
  {
    q: "How are projects judged?",
    a: "Projects are typically judged on Technical Complexity, Innovation, UI/UX, and Business/Social Impact by a panel of industry experts and sponsor engineers.",
  },
  {
    q: "When and how are prizes distributed?",
    a: "Prize distribution begins within 14 days of the hackathon's conclusion. Fiat prizes are wired, and crypto bounties are sent directly to your registered wallet address.",
  },
  {
    q: "Can I submit multiple projects?",
    a: "No. You or your team can only submit one primary project per hackathon event.",
  },
  {
    q: "How do I become a sponsor?",
    a: "Navigate to the Sponsors page and fill out the partnership inquiry form. Our organizing team will contact you within 24 hours.",
  },
  {
    q: "Where can I get help during the event?",
    a: "Our Discord server is the primary headquarters during all live events. Mentors, organizers, and sponsors have dedicated channels to assist you.",
  },
  {
    q: "How do I organize a hackathon on XINITY?",
    a: "To host your own event, navigate to the Partners portal and select 'Organize'. Our community team will review your proposal and provide you with a dedicated toolkit within 48 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#111118] border-y border-[#2A2A38]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <span className="inline-block py-1 px-4 mb-4 rounded-full border border-[#6C63FF]/20 bg-[#6C63FF]/10 text-[#6C63FF] text-[10px] font-black uppercase tracking-[0.2em] font-mono shadow-[0_0_20px_rgba(108,99,255,0.15)]">
                Got Questions?
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6">
                Everything you need to know.
              </h2>
              <p className="text-[#9090AA] text-lg mb-8 leading-relaxed max-w-md">
                Can&apos;t find your answer? Reach out to our organizing team on
                Discord or send us an email.
              </p>

              <a
                href="https://discord.gg/xinity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-[#2A2A38] bg-white/5 hover:bg-white/10 text-white font-bold transition-all group"
              >
                <svg
                  className="w-5 h-5 text-[#5865F2] group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Join the Discord
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#2A2A38]">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="py-2">
                    <button
                      onClick={() => toggleFAQ(i)}
                      aria-expanded={isOpen}
                      className="flex justify-between items-center w-full py-5 text-left group gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] rounded-lg px-2"
                    >
                      <span
                        className={`text-base font-bold transition-colors ${isOpen ? "text-[#00F0FF]" : "text-white group-hover:text-[#6C63FF]"}`}
                      >
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? "bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF] rotate-180" : "bg-transparent border-[#2A2A38] text-[#9090AA] group-hover:border-[#6C63FF]/50 group-hover:text-[#6C63FF]"}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out px-2 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[#9090AA] leading-relaxed text-sm pr-12">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
