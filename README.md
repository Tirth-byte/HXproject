# 🌌 XINITY | Premium Hackathon Ecosystem

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Managed-4169E1?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

**XINITY** is a high-performance, aesthetically-driven hackathon management platform designed for the modern developer ecosystem. Built with a focus on speed, community, and administrative control, it bridges the gap between organizers and brilliant engineering minds.

---

## ✨ Key Features

### 👤 For Participants

- **Seamless Registration:** Rapid entry into global hackathons with minimal friction.
- **Community Showcase:** A live masonry board of the most innovative projects shipped on the platform.
- **Real-time Leaderboard:** Track your standing among the "Top Builders" based on consistency and quality.
- **Event Discovery:** Filter and discover upcoming hackathons, AI sprints, and Web3 challenges.

### 🛡️ For Organizers (Admin Suite)

- **Interactive Dashboards:** Track registration vs. submission metrics with high-fidelity charts.
- **Submission Grading:** A robust "Decision Hub" for admins to review, accept, or reject submissions with internal notes.
- **Event Lifecycle Control:** Manage drafts, live events, and ended sprints from a single command center.
- **KPI Monitoring:** Real-time visibility into total participants, prize breakdown, and growth trends.

---

## 🛠️ Technology Stack

| Layer          | Technology                                       |
| :------------- | :----------------------------------------------- |
| **Frontend**   | Next.js 15 (App Router), React 19                |
| **Styling**    | Tailwind CSS (Premium Dark Theme), Framer Motion |
| **Database**   | PostgreSQL                                       |
| **ORM**        | Prisma                                           |
| **Auth**       | NextAuth.js                                      |
| **Icons**      | Lucide-React / Phosphor Icons                    |
| **Deployment** | Vercel (Optimized for Serverless)                |

---

## 🚀 Getting Started

### 1. Prerequisite

- Node.js 20+
- A PostgreSQL instance (Local or Managed)
- NPM or PNPM

### 2. Installation

```bash
git clone https://github.com/Tirth-byte/HXproject.git
cd xinity
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/xinity"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Database Setup

```bash
npx prisma generate
npx prisma db push
```

### 5. Running in Development

```bash
npm run dev
```

---

## 📸 Platform Preview

- **Hero Experience:** Immersive animations with real-time community counters.
- **Glassmorphic Navigation:** Dynamic navbar that blends seamlessly into the premium dark UI.
- **Masonry Showcase:** High-density project cards with tech-stack labels and team bubbles.

---

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request for any feature additions or bug fixes.

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">Made with ❤️ by the XINITY Core Team</p>
