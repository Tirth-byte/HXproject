"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
  success: (message: string) => void;
  error: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const triggerToast = useCallback(
    (message: string, type: ToastType = "info") => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => {
        // Stack max 3, discard oldest
        const newStack = [...prev, { id, type, message }];
        if (newStack.length > 3) return newStack.slice(1);
        return newStack;
      });

      // 4s Auto-dismiss
      setTimeout(() => removeToast(id), 4000);
    },
    [removeToast],
  );

  const value = {
    toast: triggerToast,
    success: (msg: string) => triggerToast(msg, "success"),
    error: (msg: string) => triggerToast(msg, "error"),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Toast Render Portal Location */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className={`pointer-events-auto min-w-[300px] overflow-hidden rounded-xl border bg-[#0D0D14]/90 backdrop-blur-md shadow-2xl relative
                ${t.type === "success" ? "border-green-500/30" : ""}
                ${t.type === "error" ? "border-red-500/30" : ""}
                ${t.type === "warning" ? "border-amber-500/30" : ""}
                ${t.type === "info" ? "border-[#6C63FF]/30" : ""}
              `}
            >
              <div className="px-4 py-3 flex items-start gap-3">
                <div className="mt-0.5">
                  {t.type === "success" && (
                    <span className="text-green-400">✓</span>
                  )}
                  {t.type === "error" && (
                    <span className="text-red-400">✕</span>
                  )}
                  {t.type === "warning" && (
                    <span className="text-amber-400">⚠</span>
                  )}
                  {t.type === "info" && (
                    <span className="text-[#6C63FF]">ℹ</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {t.message}
                </p>
              </div>

              {/* Progress Bar (4s sync) */}
              <div className="h-[2px] w-full bg-[#1A1A24]">
                <div
                  className={`h-full animate-toast-progress
                   ${t.type === "success" ? "bg-green-500" : ""}
                   ${t.type === "error" ? "bg-red-500" : ""}
                   ${t.type === "warning" ? "bg-amber-500" : ""}
                   ${t.type === "info" ? "bg-[#6C63FF]" : ""}
                 `}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
