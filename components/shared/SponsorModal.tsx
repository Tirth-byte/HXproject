"use client";

import React, { useEffect, useState } from "react";

export default function SponsorModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    tier: "GOLD",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-[#111118] border border-[#2A2A38] rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Comparison Table */}
        <div className="w-full md:w-1/2 bg-[#0A0A0F] border-b md:border-b-0 md:border-r border-[#2A2A38] p-8 space-y-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black font-display text-white mb-2">
              Partner with XINITY
            </h2>
            <p className="text-[#9090AA] text-sm">
              Access the top 1% of Indian engineering talent.
            </p>
          </div>

          <div className="space-y-4 text-sm mt-8">
            <div className="flex justify-between items-center pb-2 border-b border-[#2A2A38]">
              <div className="font-bold text-[#6C63FF]">Platinum Title</div>
              <div className="font-mono text-white text-right">
                Naming rights, Keynote,
                <br />
                Unlimited APIs
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#2A2A38]">
              <div className="font-bold text-amber-500">Gold Challenge</div>
              <div className="font-mono text-white text-right">
                Custom Track, Workshop,
                <br />
                Recruiting Data
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#2A2A38]">
              <div className="font-bold text-gray-300">Silver Tooling</div>
              <div className="font-mono text-white text-right">
                Product Credits, Mentorship,
                <br />
                Logo placement
              </div>
            </div>
            <div className="flex justify-between items-center pb-2">
              <div className="font-bold text-[#9090AA]">Community</div>
              <div className="font-mono text-white text-right">
                Swag partner, Media shoutouts
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2A2A38] text-[10px] text-[#5A5A72] uppercase font-bold tracking-widest text-center">
            Priced dynamically per event
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 bg-[#111118]">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-[#5A5A72] hover:text-white transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Company Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full h-10 px-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Contact Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full h-10 px-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Tier Interest
                </label>
                <select className="w-full h-10 px-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors">
                  <option value="PLATINUM">Platinum Title</option>
                  <option value="GOLD">Gold Challenge</option>
                  <option value="SILVER">Silver Tooling</option>
                  <option value="COMMUNITY">Community / Swag</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full p-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 rounded-xl font-bold text-white text-sm shadow-[0_4px_14px_0_rgba(108,99,255,0.39)] bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 pt-10">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
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
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
              <p className="text-[#9090AA] text-sm">
                Our organizer team will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
