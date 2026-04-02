---
title: XINITY Platform Architecture & Technical Implementation
description: Complete authoritative technical specification integrating all platform systems.
---

# XINITY Platform Architecture

This document serves as the authoritative technical specification for the XINITY Hackathon Community Platform.

## 📁 System Folder Structure & Component Map

```text
/xinity
├── /app                          # Next.js 14 App Router
│   ├── /(public)                 # Public route group
│   │   ├── page.tsx              # Landing page (Hero, About, Events, Community)
│   │   ├── /events               # Events listing + detail grid
│   │   ├── /community            # Community showcase & top builders
│   │   └── /sponsors             # Sponsors page & partnership tiers
│   ├── /(auth)                   # Auth route group
│   │   ├── /login                # Secure login boundary
│   │   └── /register             # Participant onboarding
│   ├── /dashboard                # Participant dashboard (Protected)
│   │   ├── page.tsx              # Overview (KPIs, active status)
│   │   ├── /events               # Joined & past hackathons
│   │   ├── /submissions          # Code upload workflows
│   │   ├── /results              # Individual performance & leaderboards
│   │   └── /profile              # User settings & avatar handling
│   ├── /admin                    # Admin console (Protected: Server-side RBAC)
│   │   ├── page.tsx              # Admin overview (Charts, top-level KPIs)
│   │   ├── /events               # CRUD Event management
│   │   ├── /participants         # Participant registry & actions
│   │   ├── /submissions          # Review & Grading Panel
│   │   ├── /sponsors             # Partner grid & forms
│   │   └── /analytics            # Geographic & Funnel mapping
│   └── /api                      # Next.js Serverless API endpoints
│       ├── /auth/[...nextauth]   # NextAuth bindings
│       ├── /events
│       ├── /submissions
│       ├── /participants
│       └── /admin
├── /components
│   ├── /public                   # Presentational UI Blocks
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EventsPreviewSection.tsx
│   │   ├── CommunityShowcaseSection.tsx
│   │   ├── SponsorsPreviewSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── TopBuildersLeaderboard.tsx
│   ├── /dashboard                # Authenticated App Modules
│   │   ├── Sidebar.tsx
│   │   └── OverviewWidgets.tsx
│   ├── /admin                    # Admin Workflows
│   │   └── AdminSidebar.tsx
│   └── /shared                   # Design System Core
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── ProjectCard.tsx
│       ├── EventCard.tsx
│       ├── SponsorModal.tsx
│       └── ToastProvider.tsx
├── /lib
│   ├── prisma.ts                 # Prisma Client Singleton
│   ├── motion.ts                 # Framer Motion UX Defaults
│   └── auth.ts                   # JWT & Credential strategy logic
├── /prisma
│   ├── schema.prisma             # Primary Data Source Modeling
│   └── seed.ts                   # Admin bootstrap
├── middleware.ts                 # Vercel Edge Middleware (Route Protection)
└── tailwind.config.ts            # Configuration wrapping tokens & keyframes
```

---

## 🔐 Authentication Integration Map

The platform uses custom credential authentication routed through `next-auth@4`.

- **`lib/auth.ts`**: Contains the NextAuth config parsing incoming credentials against `bcryptjs` hashed passwords in the Prisma DB. Secures JWT logic carrying `{ id, role, email }`.
- **`middleware.ts`**: Actively maps incoming URL paths. Evaluates tokens across boundaries:
  - Any access to `/dashboard/*` requires `role: PARTICIPANT` or `role: ADMIN`.
  - Any access to `/admin/*` aggressively restricts to `role: ADMIN` only.
- **API Endpoint Protection**: `getServerSession()` acts as the absolute barrier before Prisma performs any read/write operations mapping non-authenticated requests to `401 Unauthorized`.
- **Client Render Hooks**: Layouts use `useSession()` logic directly mapping avatar generation and name mapping strings.

---

## 🎨 Stitch Implementation Tracking

All primary layout blocks have been directly informed by the Stitch UI MCP generative designs:

- **Public Core**: Generated the overarching deep space (`#0A0A0F`) typography architecture, glassmorphism logic, and horizontal scroll carousels.
- **Auth Shell**: Provided the minimalist floating credentials modal mappings.
- **Participant Core**: Dictated the 240px rigid sidebar scaling against the active content feed.
- **Admin Layout**: Deployed the darker `#0D0D14` utilitarian tables and strict grading panels devoid of celebratory UI components.

---

## 📡 Data Flow Dynamics

The platform operates utilizing a robust Hybrid rendering approach native to the App Router:

- **Public Pages**: Operate strictly on Static generation or Incremental Static Regeneration (`revalidate: 60s`) pulling basic event previews caching heavily to handle high-traffic bursts without database strain.
- **Dashboard & Admin Panels**: Strictly Server-Side Rendering (SSR). Components inherently block rendering out of context via session validation rules before fetching dynamic row-level context.
- **API Flow**: Forms route `POST` and `PUT` requests over standard REST principles utilizing specific Zod schemas bound against the Prisma Schema.

---

## 📈 Scalability Roadmap

The platform begins lightly localized but is architected for massive volume scales:

1. **Database Upgrade**: Currently running local/managed Postgres. At global scale transition data management fully to PlanetScale (for horizontal sharding) or Supabase (combining relational scaling).
2. **Auth Scaling**: NextAuth is sufficient for ~100k users. For robust Enterprise SSO bridging consider transitioning logic to **Clerk** allowing automatic Okta/SAML configurations.
3. **Storage Abstraction**: Move image handling and logo loading from `/public` directly onto heavily cached **Cloudinary** buckets or AWS S3 pools.
4. **Analytics Upgrades**: Expand internal Admin Charts by routing metric ping events via PostHog enabling dense funnel tracking absent of React performance drags.

---

## 🌐 Deployment & Environment Configuration

### Required Internal Variables Let/Set

```env
DATABASE_URL="postgresql://user:password@host:port/xinity"
NEXTAUTH_SECRET="generated-base64-random-token"
NEXTAUTH_URL="http://localhost:3000"

# Mail Config (Future SMTP Abstraction / Nodemailer)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

### Vercel / GitHub Delivery Checklist

1. **GitHub Flow**: Any pushes to `main` branch trigger Vercel CI workflows.
2. **Database Provisioning**: Supabase instance mapping via `DATABASE_URL` is hardcoded into the Vercel branch config.
3. **Build Target**: Run `npx prisma generate` globally within the Vercel Build Step bridging schemas to the deployed Next instances.
4. **Domain Resolution**: Attach domains securely ensuring `NEXTAUTH_URL` reflects the exact target `https://` scope effectively protecting Edge Middleware cookie parsing functionality.
