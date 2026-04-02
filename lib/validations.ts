import { z } from "zod";

// ─── Auth Schemas ─────────────────────────────────────────────────────────

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["PARTICIPANT", "ADMIN"]).default("PARTICIPANT"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name is too long"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number"),
    confirmPassword: z.string(),
    skills: z.array(z.string()).max(15).default([]),
    githubUrl: z
      .string()
      .url("Must be a valid URL")
      .startsWith("https://github.com", "Must be a GitHub URL")
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ─── Derived Types ────────────────────────────────────────────────────────

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

// ─── Constants ────────────────────────────────────────────────────────────

export const SKILL_OPTIONS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Go",
  "Rust",
  "Java",
  "C++",
  "Machine Learning",
  "AI/LLMs",
  "Web3/Solidity",
  "DevOps",
  "Docker",
  "AWS",
  "GCP",
  "Azure",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Figma / UI Design",
  "Mobile (Flutter)",
  "Mobile (React Native)",
] as const;

export type Skill = (typeof SKILL_OPTIONS)[number];
