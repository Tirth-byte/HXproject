import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// ─── Validation Schema ────────────────────────────────────────────────────
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  skills: z
    .array(z.string())
    .max(15, "Maximum 15 skills allowed")
    .optional()
    .default([]),
  githubUrl: z
    .string()
    .url("Must be a valid URL")
    .startsWith("https://github.com", "Must be a GitHub URL")
    .optional()
    .or(z.literal("")),
});

// ─── Rate Limit (simple in-memory; replace with Redis/Upstash in prod) ────
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ─── POST /api/register ───────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting (skipped in development)
  if (process.env.NODE_ENV !== "development") {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many registration attempts. Please try again in 15 minutes.",
        },
        { status: 429 },
      );
    }
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Validate
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { error: "Validation failed.", fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, password, skills, githubUrl } = parsed.data;

  // Check for existing user
  const existing = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() },
  });
  if (existing) {
    // Intentionally vague to prevent user enumeration
    return NextResponse.json(
      { error: "An account with this email already exists." },
      { status: 409 },
    );
  }

  // Hash password with bcrypt (salt rounds: 12)
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: "PARTICIPANT", // Public registration is always PARTICIPANT
      skills: skills ?? [],
      githubUrl: githubUrl || null,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return NextResponse.json({ success: true, user }, { status: 201 });
}
