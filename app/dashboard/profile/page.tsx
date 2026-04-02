"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setToast("Profile updated successfully.");
      setTimeout(() => setToast(null), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="pb-6 border-b border-[#2A2A38]">
        <h1 className="text-3xl font-black font-display text-white mb-2">
          Profile Settings
        </h1>
        <p className="text-[#9090AA] text-sm">
          Update your identity, links, and how others see you on the
          leaderboard.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Avatar Section */}
        <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#111118] border border-[#2A2A38]">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F0FF] flex items-center justify-center text-3xl text-white font-black shadow-[0_0_30px_rgba(108,99,255,0.2)]">
            {session?.user?.name?.charAt(0) || "U"}
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:border-[#6C63FF]/50 transition-colors mb-2"
            >
              Change Avatar
            </button>
            <p className="text-[#5A5A72] text-xs">
              Recommended: 256x256px. Max 2MB.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#111118] border border-[#2A2A38]">
          <div className="space-y-1.5">
            <label className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={session?.user?.name || ""}
              className="w-full h-12 px-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              Email (Read Only)
            </label>
            <input
              type="email"
              readOnly
              defaultValue={session?.user?.email || ""}
              className="w-full h-12 px-4 rounded-xl bg-[#0A0A0F]/50 border border-[#2A2A38] text-[#5A5A72] text-sm cursor-not-allowed"
            />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              GitHub URL
            </label>
            <input
              type="url"
              placeholder="https://github.com/yourhandle"
              className="w-full h-12 px-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors font-mono"
            />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs uppercase font-black tracking-widest text-[#5A5A72]">
              Developer Bio
            </label>
            <textarea
              rows={3}
              placeholder="Full stack engineer focusing on Rust and React..."
              className="w-full p-4 rounded-xl bg-[#0A0A0F] border border-[#2A2A38] text-white text-sm outline-none focus:border-[#6C63FF] transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className="px-8 py-3 rounded-xl font-bold text-white text-sm shadow-[0_4px_14px_0_rgba(108,99,255,0.3)] bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>

          {/* Toast Notification */}
          {toast && (
            <div className="px-4 py-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold rounded-xl flex items-center gap-2 animate-in slide-in-from-left">
              <svg
                className="w-4 h-4"
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
              {toast}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
