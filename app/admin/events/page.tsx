"use client";

import React, { useState } from "react";

export default function AdminEventsPage() {
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState("");

  const [events, setEvents] = useState([
    {
      id: "e1",
      title: "Code-A-Thon 2024: Open Innovation",
      status: "LIVE",
      participants: 1450,
      deadline: "Oct 15, 2026",
      prize: "₹15L",
    },
    {
      id: "e2",
      title: "FinTech Frontier Challenge",
      status: "UPCOMING",
      participants: 847,
      deadline: "Nov 02, 2026",
      prize: "₹8L",
    },
    {
      id: "e3",
      title: "Solana Summer Hacks India",
      status: "ENDED",
      participants: 2100,
      deadline: "Sep 20, 2026",
      prize: "₹50L",
    },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black font-display text-white mb-1">
            Event Management
          </h1>
          <p className="text-[#9090AA] text-sm font-medium">
            Create, edit, and oversee all platform hackathons.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2.5 bg-[#6C63FF] hover:bg-[#5A51E6] text-white text-sm font-bold rounded-lg shadow-lg active:scale-95 transition-all"
        >
          + Create New Event
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#111118] border border-[#2A2A38] rounded-xl overflow-x-auto shadow-2xl">
        <table className="w-full text-left text-sm text-[#9090AA]">
          <thead className="text-xs uppercase bg-[#0A0A0F] text-[#5A5A72] border-b border-[#2A2A38]">
            <tr>
              <th scope="col" className="px-6 py-4 font-black tracking-widest">
                Event Name
              </th>
              <th scope="col" className="px-6 py-4 font-black tracking-widest">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-black tracking-widest">
                Participants
              </th>
              <th scope="col" className="px-6 py-4 font-black tracking-widest">
                Deadline
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-black tracking-widest text-right"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((evt) => (
              <tr
                key={evt.id}
                className="border-b border-[#2A2A38] last:border-0 hover:bg-white/5 transition-colors group"
              >
                <td className="px-6 py-4 font-bold text-white whitespace-nowrap">
                  {evt.title}
                  <div className="text-[10px] text-[#5A5A72] font-mono mt-0.5">
                    Prize: {evt.prize}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase border ${
                      evt.status === "LIVE"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : evt.status === "UPCOMING"
                          ? "bg-[#6C63FF]/10 text-[#6C63FF] border-[#6C63FF]/20"
                          : "bg-[#5A5A72]/10 text-[#9090AA] border-[#5A5A72]/20"
                    }`}
                  >
                    {evt.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-white">
                  {evt.participants.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-[#9090AA] text-xs">
                  {evt.deadline}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button
                    onClick={() => {
                      setEditingEvent(evt);
                      setShowModal(true);
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-[#6C63FF] hover:text-white transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "/admin/submissions")
                    }
                    className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] hover:text-white transition-colors"
                  >
                    Submissions
                  </button>
                  <button
                    onClick={() => setDeleteId(evt.id)}
                    className="text-xs font-bold uppercase tracking-wider text-[#EF4444] hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#111118] border border-[#2A2A38] rounded-2xl w-full max-w-md p-6 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
            <h3 className="text-xl font-bold font-display text-white mb-2">
              Delete Event?
            </h3>
            <p className="text-[#9090AA] text-sm mb-6">
              This action is destructive and cannot be undone. To confirm, type
              the event name below.
            </p>
            <input
              type="text"
              placeholder="Type event name to confirm"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              className="w-full h-10 px-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#EF4444] transition-colors mb-6 font-mono"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setDeleteId(null);
                  setDeleteConfirm("");
                }}
                className="px-4 py-2 rounded-lg text-sm font-bold text-[#9090AA] hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                disabled={deleteConfirm.length < 5}
                onClick={() => {
                  alert("Event Deleted Successfully.");
                  setDeleteId(null);
                  setDeleteConfirm("");
                }}
                className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-[#EF4444] hover:bg-red-600 disabled:opacity-50 transition-colors"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111118] border border-[#2A2A38] rounded-2xl w-full max-w-2xl p-6 md:p-8 mt-10 md:mt-0 shadow-2xl animate-in slide-in-from-bottom-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-display text-white">
                {editingEvent ? "Edit Event" : "Event Configuration"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#5A5A72] hover:text-white"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                    Title
                  </label>
                  <input
                    type="text"
                    defaultValue={editingEvent?.title}
                    className="w-full h-10 px-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full h-10 px-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-[#9090AA] text-sm outline-none focus:border-[#6C63FF] [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full h-10 px-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-[#9090AA] text-sm outline-none focus:border-[#6C63FF] [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                    Prize Pool (₹)
                  </label>
                  <input
                    type="number"
                    className="w-full h-10 px-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-white font-mono text-sm outline-none focus:border-[#6C63FF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                    Max Team Size
                  </label>
                  <input
                    type="number"
                    defaultValue={4}
                    className="w-full h-10 px-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-white font-mono text-sm outline-none focus:border-[#6C63FF]"
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-[#5A5A72] uppercase tracking-widest">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 rounded-lg bg-[#0D0D14] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] resize-none"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-[#2A2A38] gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 text-sm font-bold text-[#9090AA] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert(
                      editingEvent
                        ? "Event Updated Successfully!"
                        : "Event Created Successfully!",
                    );
                    setShowModal(false);
                  }}
                  className="px-5 py-2 bg-white text-black text-sm font-bold rounded-lg shadow-lg hover:bg-neutral-200"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const FormattedCounter = ({
  count,
  suffix,
}: {
  count: number;
  suffix: string;
}) => {
  const cleanSuffix = suffix.replace(/,/g, "");

  return (
    <span>
      {count.toLocaleString()}
      {cleanSuffix}
    </span>
  );
};
