"use client";

import React from "react";

export default function SubmissionsPage() {
  const submissions = [
    {
      id: "sub-1",
      event: "Code-A-Thon 2024: Open Innovation",
      projectName: "NeuralSync API",
      submittedAt: "2 days ago",
      status: "UNDER_REVIEW", // DRAFT, SUBMITTED, UNDER_REVIEW, GRADED
      score: null,
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="pb-6 border-b border-[#2A2A38]">
        <h1 className="text-3xl font-black font-display text-white mb-2">
          My Submissions
        </h1>
        <p className="text-[#9090AA] text-sm">
          Track your hackathon projects and review feedback.
        </p>
      </div>

      {submissions.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-[#2A2A38] rounded-2xl bg-[#0A0A0F]/50">
          <svg
            className="w-16 h-16 mx-auto text-[#5A5A72] mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          <h3 className="text-xl font-bold text-white mb-2">No code shipped</h3>
          <p className="text-[#9090AA]">
            You haven&apos;t submitted any projects yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#111118] border border-[#2A2A38] hover:border-[#6C63FF]/50 rounded-2xl transition-all shadow-md group"
            >
              <div className="space-y-3 mb-6 md:mb-0">
                <div className="inline-flex py-1 px-3 border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] uppercase font-black tracking-widest rounded-full">
                  {sub.status.replace("_", " ")}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display mb-1 group-hover:text-[#00F0FF] transition-colors">
                    {sub.projectName}
                  </h3>
                  <p className="text-[#9090AA] text-sm">{sub.event}</p>
                </div>
                <div className="text-xs font-semibold text-[#5A5A72] flex items-center gap-2">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  {sub.submittedAt}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2.5 rounded-xl border border-[#2A2A38] text-white font-semibold text-sm hover:bg-white/5 transition-all">
                  Edit Details
                </button>
                <button className="px-6 py-2.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] shadow-[0_0_15px_rgba(108,99,255,0.3)] hover:opacity-90 active:scale-95 transition-all">
                  View Source
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
