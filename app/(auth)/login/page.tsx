"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { loginSchema } from "@/lib/validations";

type Role = "PARTICIPANT" | "ADMIN";
type FieldErrors = Partial<Record<string, string>>;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [role, setRole] = useState<Role>("PARTICIPANT");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [shake, setShake] = useState(false);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);
    setFieldErrors({});

    // Client-side validation
    const result = loginSchema.safeParse({ email, password, role });
    if (!result.success) {
      const errs = result.error.flatten().fieldErrors;
      setFieldErrors({
        email: errs.email?.[0],
        password: errs.password?.[0],
      });
      triggerShake();
      return;
    }

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setGlobalError("Invalid email or password. Please try again.");
        triggerShake();
        return;
      }

      // Role-based redirect
      const destination =
        callbackUrl || (role === "ADMIN" ? "/admin" : "/dashboard");
      router.push(destination);
      router.refresh();
    } catch (err) {
      console.error("[Login] Unexpected error:", err);
      const msg = err instanceof Error ? err.message : "";
      if (
        msg.toLowerCase().includes("database") ||
        msg.toLowerCase().includes("prisma") ||
        msg.toLowerCase().includes("connect")
      ) {
        setGlobalError(
          "Database connection error. Please ensure the database is configured.",
        );
      } else {
        setGlobalError("Something went wrong. Please try again.");
      }
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0F] p-4">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#6C63FF]/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#00F0FF]/15 blur-[120px]" />
      </div>

      <div
        className={`relative w-full max-w-md ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
        style={shake ? undefined : undefined}
      >
        {/* Card */}
        <div className="relative bg-[#111118] border border-[#2A2A38] rounded-2xl p-8 shadow-[0_0_40px_rgba(108,99,255,0.12)]">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter text-white"
            >
              XINITY<span className="text-[#6C63FF]">.</span>
            </Link>
            <p className="mt-2 text-sm text-[#9090AA]">
              Welcome back to the community
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex p-1 mb-8 rounded-xl bg-[#1A1A24] border border-[#2A2A38]">
            {(["PARTICIPANT", "ADMIN"] as Role[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  setRole(r);
                  setGlobalError(null);
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  role === r
                    ? "bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] text-white shadow-lg"
                    : "text-[#9090AA] hover:text-white"
                }`}
              >
                {r === "PARTICIPANT" ? "Participant" : "Admin"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Global error */}
            {globalError && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-sm">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
                {globalError}
              </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="login-email"
                className="text-sm font-medium text-[#9090AA]"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className={`w-full h-12 px-4 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none transition-all
                  focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50
                  ${fieldErrors.email ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
              />
              {fieldErrors.email && (
                <p className="text-xs text-[#EF4444]">{fieldErrors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="text-sm font-medium text-[#9090AA]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#6C63FF] hover:text-[#00F0FF] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className={`w-full h-12 px-4 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none transition-all
                  focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50
                  ${fieldErrors.password ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
              />
              {fieldErrors.password && (
                <p className="text-xs text-[#EF4444]">{fieldErrors.password}</p>
              )}
            </div>

            {/* Submit */}
            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl font-semibold text-white text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed
                bg-gradient-to-r from-[#6C63FF] to-[#00F0FF]
                hover:opacity-90 active:scale-[0.98] shadow-[0_0_24px_rgba(108,99,255,0.4)]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                `Sign in as ${role === "ADMIN" ? "Admin" : "Participant"}`
              )}
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-6 text-center text-sm text-[#5A5A72]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#6C63FF] hover:text-[#00F0FF] font-semibold transition-colors"
            >
              Create one free
            </Link>
          </p>
        </div>
      </div>

      {/* Shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-8px); }
          30% { transform: translateX(8px); }
          45% { transform: translateX(-6px); }
          60% { transform: translateX(6px); }
          75% { transform: translateX(-4px); }
          90% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center font-bold">
          Loading...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
