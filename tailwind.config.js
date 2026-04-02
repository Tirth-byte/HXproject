/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#00F0FF",
        background: "#0A0A0F",
        surface: "#111118",
        elevated: "#1A1A24",
        borderSubtle: "#2A2A38",
        textPrimary: "#F0F0FF",
        textSecondary: "#9090AA",
        textMuted: "#5A5A72",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        24: "96px",
        32: "128px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        "card-glow": "0 0 40px rgba(108, 99, 255, 0.12)",
        "accent-glow": "0 0 24px rgba(0, 240, 255, 0.2)",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        micro: "150ms",
        standard: "300ms",
        emphasis: "500ms",
      },
    },
  },
  plugins: [],
};
