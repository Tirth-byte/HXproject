"use client";

import React, { useState } from "react";

export default function SubmissionsManagement() {
  const [subs, setSubs] = useState([
    {
      id: "s1",
      participant: "Arjun Dev",
      email: "arjun@example.com",
      event: "Code-A-Thon 2024",
      project: "NeuralSync API",
      submittedAt: "2h ago",
      status: "PENDING_REVIEW",
      score: "-",
    },
    {
      id: "s2",
      participant: "Rahul Singh",
      email: "rahul@example.com",
      event: "Code-A-Thon 2024",
      project: "DefiLend Smart Contract",
      submittedAt: "1d ago",
      status: "REVIEWED",
      score: "88",
    },
    {
      id: "s3",
      participant: "Sneha Patel",
      email: "sneha@example.com",
      event: "FinTech Frontier",
      project: "UPI Payment SDK",
      submittedAt: "2d ago",
      status: "DISQUALIFIED",
      score: "0",
    },
  ]);

  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);
  const [editScore, setEditScore] = useState<string>("");
  const [editStatus, setEditStatus] = useState<string>("PENDING_REVIEW");

  const selectedSub = subs.find((s) => s.id === selectedSubId);

  const handleSelect = (id: string) => {
    const sub = subs.find((s) => s.id === id);
    if (sub) {
      setSelectedSubId(id);
      setEditScore(sub.score === "-" ? "" : sub.score);
      setEditStatus(sub.status);
    }
  };

  const handleSave = () => {
    if (!selectedSubId) return;

    setSubs((prev) =>
      prev.map((s) =>
        s.id === selectedSubId
          ? { ...s, score: editScore || "-", status: editStatus }
          : s,
      ),
    );

    alert(`Submission ${selectedSubId} updated successfully.`);
    setSelectedSubId(null);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] -mx-6 -my-6 lg:-mx-8 lg:-my-8 animate-in fade-in duration-500 overflow-hidden bg-[#0A0A0F]">
      {/* Main Table Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${selectedSubId ? "lg:mr-96 opacity-50 lg:opacity-100 pointer-events-none lg:pointer-events-auto" : ""}`}
      >
        <div className="p-6 lg:p-8 space-y-6 h-full flex flex-col">
          <div className="flex justify-between items-center border-b border-[#2A2A38] pb-6 shrink-0">
            <div>
              <h1 className="text-2xl font-black font-display text-white mb-1">
                Submissions
              </h1>
              <p className="text-[#9090AA] text-sm">
                Review, grade, and disqualify project submissions.
              </p>
            </div>
            <select className="bg-[#111118] border border-[#2A2A38] text-white text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[#6C63FF]">
              <option>Filter by Event: Code-A-Thon 2024</option>
              <option>Filter by Event: FinTech Frontier</option>
              <option>Filter by Event: Solana Hacks</option>
            </select>
          </div>

          <div className="bg-[#111118] border border-[#2A2A38] rounded-xl overflow-auto shadow-2xl flex-1">
            <table className="w-full text-left text-sm text-[#9090AA] whitespace-nowrap border-collapse">
              <thead className="text-[10px] uppercase bg-[#0A0A0F] text-[#5A5A72] border-b border-[#2A2A38] sticky top-0 z-10">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-4 font-black tracking-widest"
                  >
                    Project / Dev
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 font-black tracking-widest"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 font-black tracking-widest"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 font-black tracking-widest"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 font-black tracking-widest text-right"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {subs.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => handleSelect(s.id)}
                    className={`border-b border-[#2A2A38] last:border-0 hover:bg-[#6C63FF]/5 transition-colors cursor-pointer group ${selectedSubId === s.id ? "bg-[#6C63FF]/10 text-white" : ""}`}
                  >
                    <td className="px-5 py-4">
                      <div
                        className={`font-bold transition-colors ${selectedSubId === s.id ? "text-[#00F0FF]" : "text-white group-hover:text-[#00F0FF]"}`}
                      >
                        {s.project}
                      </div>
                      <div className="text-[10px] font-mono text-[#5A5A72]">
                        {s.participant}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs">{s.event}</td>
                    <td className="px-5 py-4 text-xs">{s.submittedAt}</td>
                    <td className="px-5 py-4 font-mono font-bold">
                      <span
                        className={`px-2 py-1 rounded border transition-colors ${selectedSubId === s.id ? "bg-[#6C63FF] text-white border-[#6C63FF]" : "bg-[#1A1A24] text-white border-[#2A2A38]"}`}
                      >
                        {s.score}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase border ${
                          s.status === "PENDING_REVIEW"
                            ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            : s.status === "REVIEWED"
                              ? "bg-green-500/10 text-green-400 border-green-500/20"
                              : "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20"
                        }`}
                      >
                        {s.status.replace("_", " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Side Panel (Grading) */}
      <div
        className={`fixed inset-y-0 right-0 w-full lg:w-96 bg-[#0D0D14] border-l border-[#2A2A38] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${selectedSubId ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-start mb-8 shrink-0">
            <div>
              <h2 className="text-xl font-black font-display text-white">
                Grading Panel
              </h2>
              <p className="text-[#5A5A72] text-xs font-mono mt-1">
                ID: #SYS-{selectedSubId}
              </p>
            </div>
            <button
              onClick={() => setSelectedSubId(null)}
              className="p-2 hover:bg-white/5 rounded-full text-[#9090AA] hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {selectedSub && (
            <div className="space-y-6 flex-1">
              <div className="p-4 rounded-xl bg-[#111118] border border-[#2A2A38]">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A72] mb-1">
                  Project Name
                </div>
                <div className="text-white font-bold mb-4">
                  {selectedSub.project}
                </div>

                <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A72] mb-1">
                  Demo link
                </div>
                <a
                  href="#"
                  className="text-[#00F0FF] text-sm block mb-4 hover:underline"
                >
                  https://demo.xinity.app/{selectedSub.id}
                </a>

                <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A72] mb-1">
                  GitHub Repo
                </div>
                <a
                  href="#"
                  className="text-[#00F0FF] text-sm block mb-4 hover:underline"
                >
                  https://github.com/dev/
                  {selectedSub.project.toLowerCase().replace(/ /g, "-")}
                </a>

                <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A72] mb-1">
                  Description
                </div>
                <p className="text-[#9090AA] text-xs leading-relaxed">
                  Comprehensive solution for {selectedSub.event} built using
                  modern stack. Features high performance synchronization and
                  distributed state management.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Assign Score (0-100)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={editScore}
                  onChange={(e) => setEditScore(e.target.value)}
                  placeholder="e.g. 85"
                  className="w-full h-12 px-4 rounded-lg bg-[#1A1A24] border border-[#2A2A38] text-white font-mono text-xl outline-none focus:border-[#6C63FF] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                  Change Status
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full h-12 px-3 rounded-lg bg-[#1A1A24] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] appearance-none"
                >
                  <option value="PENDING_REVIEW">Pending Review</option>
                  <option value="REVIEWED">Reviewed (Final)</option>
                  <option value="DISQUALIFIED">
                    Disqualified (Spam/Rules violation)
                  </option>
                </select>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-[#2A2A38] mt-6 shrink-0 flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] text-white font-black text-sm uppercase tracking-wide rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Save Verdict
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
