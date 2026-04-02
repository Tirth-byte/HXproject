# XINITY - Information Architecture

XINITY is a premium hackathon community platform for the Indian developer ecosystem. It functions as a world-class event management and community hub.

## 1. Full Sitemap

### Public Pages

- `/` - **Home / Landing Page**: Hero, About, Events Preview, Community Showcase, Sponsors, FAQ, Footer.
- `/events` - **Event Listings**: All searchable hackathons.
- `/events/[slug]` - **Event Details**: Deep dive into individual events, prizes, and registration.
- `/community` - **Community Showcase**: Projects, leaderboard, and member spotlight.
- `/sponsors` - **Partners**: Corporate sponsors and partnership tiers.
- `/login` - **Unified Login**: Login gateway with role-selection options.
- `/register` - **Participant Setup**: Detailed registration for participants.

### Authenticated Routes (Participants)

- `/dashboard` - **Overview**: Summary of progress, events, and notifications.
- `/dashboard/events` - **My Events**: Current and upcoming event participation.
- `/dashboard/submissions` - **Submissions**: Project tracking and submission portal.
- `/dashboard/profile` - **Settings**: Personal bio, skills, and portfolio management.
- `/dashboard/results` - **Leaderboard**: Event results and personal awards.

### Authenticated Routes (Admins)

- `/admin` - **Overview**: Global management dashboard.
- `/admin/events` - **Event Management**: CRUD operations for event listings.
- `/admin/participants` - **User Review**: All registered users and their status.
- `/admin/submissions` - **Project Moderation**: Evaluation and review of all submissions.
- `/admin/sponsors` - **Partner Management**: Control sponsor tiers and visibility.
- `/admin/analytics` - **Engagement Hub**: Registration trends, traffic, and stats.

---

## 2. Route Table & Access Levels

| Route            | Accessibility | Required Role   | Redirect if Unauthorized         |
| :--------------- | :------------ | :-------------- | :------------------------------- |
| `/`              | PUBLIC        | -               | -                                |
| `/events`        | PUBLIC        | -               | -                                |
| `/events/[slug]` | PUBLIC        | -               | -                                |
| `/community`     | PUBLIC        | -               | -                                |
| `/sponsors`      | PUBLIC        | -               | -                                |
| `/login`         | GUEST         | -               | `/dashboard` (already logged in) |
| `/register`      | GUEST         | -               | `/dashboard` (already logged in) |
| `/dashboard/*`   | AUTH          | **PARTICIPANT** | `/login`                         |
| `/admin/*`       | AUTH          | **ADMIN**       | `/login`                         |

**Post-Login Redirect Logic:**

- **ADMIN Login** → Redirect to `/admin`
- **PARTICIPANT Login** → Redirect to `/dashboard`
- Accessing `/admin` as a Participant → Redirect to `/dashboard` (Not Authorized)

---

## 3. Folder Structure Specification

```text
/xinity
├── app/ (App Router)
│   ├── (public)/            # Site-wide public pages
│   │   ├── events/
│   │   ├── community/
│   │   ├── sponsors/
│   │   └── page.tsx         # / Landing Page
│   ├── (auth)/              # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/           # Participant dashboard
│   ├── admin/               # Admin dashboard
│   ├── api/                 # Server-side APIs (NextAuth, Prisma)
│   ├── layout.tsx           # Global layouts
│   └── globals.css          # Tailwind base
├── components/              # React components
│   ├── public/              # Landing page sections
│   ├── auth/                # Auth forms
│   ├── dashboard/           # Participant dashboard elements
│   ├── admin/               # Admin dashboard elements
│   └── shared/              # Navbar, Footer, UI Kit (Badge, Card, Modal, Button)
├── lib/                     # Utils, Auth, Prisma, API Helpers
├── store/                   # Zustand (Client-side state)
├── prisma/                  # Database Schema (PostgreSQL)
├── hooks/                   # Custom Hooks
├── types/                   # Shared TypeScript interfaces
├── public/                  # Assets (Images, Icons)
└── middleware.ts            # RBAC (Role-Based Access Control)
```
