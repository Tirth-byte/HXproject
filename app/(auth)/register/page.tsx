"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerSchema, SKILL_OPTIONS } from "@/lib/validations";

type FieldErrors = Partial<Record<string, string>>;
type Step = 1 | 2;

const EyeIcon = ({ open }: { open: boolean }) => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {open ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-9C5.373 3 1 8.373 1 12s4.373 9 11 9 11-4.373 11-9-4.373-9-11-9z"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    )}
  </svg>
);

export default function RegisterPage() {
  const router = useRouter();

  // Form state
  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [githubUrl, setGithubUrl] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [shake, setShake] = useState(false);
  const [pwVisible, setPwVisible] = useState(false);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const validateStep1 = () => {
    const result = registerSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
      skills,
      githubUrl,
    });
    const errs = result.success ? {} : result.error.flatten().fieldErrors;
    const step1Errors: FieldErrors = {};
    const step1Keys = ["name", "email", "password", "confirmPassword"] as const;
    step1Keys.forEach((k) => {
      if (errs[k]?.[0]) step1Errors[k] = errs[k]![0];
    });
    return step1Errors;
  };

  const handleStep1Next = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      triggerShake();
      return;
    }
    setFieldErrors({});
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleStep1Next();
      return;
    }

    setGlobalError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, skills, githubUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 422 && data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        } else {
          setGlobalError(
            data.error || "Registration failed. Please try again.",
          );
          triggerShake();
        }
        setLoading(false);
        return;
      }

      // Auto-login after successful registration
      const loginRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (loginRes?.error) {
        setGlobalError("Account created! Please log in manually.");
        router.push("/login");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setGlobalError("Something went wrong. Please try again.");
      triggerShake();
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0F] p-4 py-12">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#6C63FF]/20 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#00F0FF]/15 blur-[120px]" />
      </div>

      <div
        className={`relative w-full max-w-lg ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
      >
        {/* Card */}
        <div className="relative bg-[#111118] border border-[#2A2A38] rounded-2xl p-8 shadow-[0_0_40px_rgba(108,99,255,0.12)]">
          {/* Header */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter text-white"
            >
              XINITY<span className="text-[#6C63FF]">.</span>
            </Link>
            <p className="mt-2 text-sm text-[#9090AA]">
              Join the developer community
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {([1, 2] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= s
                      ? "bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] text-white"
                      : "bg-[#1A1A24] border border-[#2A2A38] text-[#5A5A72]"
                  }`}
                >
                  {s}
                </div>
                {s < 2 && (
                  <div
                    className={`h-px w-12 transition-all ${step > s ? "bg-[#6C63FF]" : "bg-[#2A2A38]"}`}
                  />
                )}
              </div>
            ))}
            <span className="ml-3 text-xs text-[#9090AA]">
              {step === 1 ? "Account Details" : "Skills & GitHub"}
            </span>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

            {/* ── Step 1: Account Details ─────────────────────────── */}
            {step === 1 && (
              <>
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="reg-name"
                    className="text-sm font-medium text-[#9090AA]"
                  >
                    Full Name
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tirth Patel"
                    autoComplete="name"
                    className={`w-full h-12 px-4 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none transition-all focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50 ${fieldErrors.name ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
                  />
                  {fieldErrors.name && (
                    <p className="text-xs text-[#EF4444]">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="reg-email"
                    className="text-sm font-medium text-[#9090AA]"
                  >
                    Email address
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`w-full h-12 px-4 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none transition-all focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50 ${fieldErrors.email ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-[#EF4444]">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="reg-password"
                    className="text-sm font-medium text-[#9090AA]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="reg-password"
                      type={pwVisible ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 8 chars, 1 uppercase, 1 number"
                      autoComplete="new-password"
                      className={`w-full h-12 px-4 pr-12 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none transition-all focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50 ${fieldErrors.password ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
                    />
                    <button
                      type="button"
                      onClick={() => setPwVisible((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5A5A72] hover:text-[#9090AA] transition-colors"
                    >
                      <EyeIcon open={pwVisible} />
                    </button>
                  </div>
                  {fieldErrors.password && (
                    <p className="text-xs text-[#EF4444]">
                      {fieldErrors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="reg-confirm"
                    className="text-sm font-medium text-[#9090AA]"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="reg-confirm"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className={`w-full h-12 px-4 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none transition-all focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50 ${fieldErrors.confirmPassword ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
                  />
                  {fieldErrors.confirmPassword && (
                    <p className="text-xs text-[#EF4444]">
                      {fieldErrors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Next button */}
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="w-full h-12 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(108,99,255,0.3)]"
                >
                  Continue →
                </button>
              </>
            )}

            {/* ── Step 2: Skills & GitHub ─────────────────────────── */}
            {step === 2 && (
              <>
                {/* Skills multi-select */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-[#9090AA]">
                      Your Skills
                    </label>
                    <span className="text-xs text-[#5A5A72]">
                      {skills.length} / 15 selected
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-[#1A1A24] border border-[#2A2A38] min-h-[80px]">
                    {SKILL_OPTIONS.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        disabled={
                          !skills.includes(skill) && skills.length >= 15
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all select-none ${
                          skills.includes(skill)
                            ? "bg-gradient-to-r from-[#6C63FF]/80 to-[#00F0FF]/80 text-white border border-[#6C63FF]/50"
                            : "bg-[#0A0A0F] border border-[#2A2A38] text-[#9090AA] hover:border-[#6C63FF]/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* GitHub URL */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="reg-github"
                    className="text-sm font-medium text-[#9090AA]"
                  >
                    GitHub Profile{" "}
                    <span className="text-[#5A5A72]">(optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A72] font-mono text-xs">
                      github.com/
                    </span>
                    <input
                      id="reg-github"
                      type="url"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/yourhandle"
                      className={`w-full h-12 pl-24 pr-4 rounded-xl bg-[#1A1A24] border text-white placeholder:text-[#5A5A72] text-sm outline-none font-mono transition-all focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]/50 ${fieldErrors.githubUrl ? "border-[#EF4444]" : "border-[#2A2A38]"}`}
                    />
                  </div>
                  {fieldErrors.githubUrl && (
                    <p className="text-xs text-[#EF4444]">
                      {fieldErrors.githubUrl}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 h-12 rounded-xl font-semibold text-[#9090AA] text-sm bg-[#1A1A24] border border-[#2A2A38] hover:bg-[#2A2A38] hover:text-white transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    id="register-submit"
                    type="submit"
                    disabled={loading}
                    className="flex-[2] h-12 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-[#6C63FF] to-[#00F0FF] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(108,99,255,0.3)]"
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
                        Creating account...
                      </span>
                    ) : (
                      "Create Account & Join 🚀"
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Footer Link */}
          <p className="mt-6 text-center text-sm text-[#5A5A72]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#6C63FF] hover:text-[#00F0FF] font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

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
