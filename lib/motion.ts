// lib/motion.ts
import { Variants } from "framer-motion";

// Defines if user prefers reduced motion (can be read via CSS media queries or React hooks)
// Fallback logic inside components should just use standard rendering if true.

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const containerStaggerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // 80ms stagger
    },
  },
};

export const pageTransitionVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const dashboardSlideVariant: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.15 } },
};

export const modalVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

// Reusable standard viewport config for intersection observers
export const defaultViewport = { once: true, amount: 0.15 };
