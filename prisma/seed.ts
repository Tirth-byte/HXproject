import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { EventStatus, Role, SponsorTier } from "@prisma/client";

async function main() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@xinity.in";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "Admin@xinity2024";

  console.log("🌱 Seeding XINITY database...");

  // 1. ADMIN USER
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });
  let adminId: string;

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12);
    const admin = await prisma.user.create({
      data: {
        name: "XINITY Admin",
        email: adminEmail,
        password: hashedPassword,
        role: Role.ADMIN,
        skills: ["Next.js", "PostgreSQL", "Infrastructure"],
      },
    });
    adminId = admin.id;
    console.log(`✓ Admin seeded: ${admin.email}`);
  } else {
    adminId = existingAdmin.id;
    console.log(`✓ Admin already exists: ${adminEmail}`);
  }

  // 2. EVENTS
  const eventsData = [
    {
      slug: "code-a-thon-2024",
      title: "Code-A-Thon 2024: Open Innovation",
      description:
        "India's biggest open innovation hackathon returns for its 4th edition. Focused on solving high-complexity engineering blocks in open-source.",
      prizePool: 1500000,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: EventStatus.LIVE,
      theme: ["AI/ML", "Web3", "Hardware"],
      createdBy: adminId,
    },
    {
      slug: "fintech-frontier-2024",
      title: "FinTech Frontier Challenge",
      description:
        "Build the future of decentralized finance. We're looking for high-security, high-throughput financial primitives.",
      prizePool: 800000,
      startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000),
      status: EventStatus.UPCOMING,
      theme: ["Finance", "DeFi", "Security"],
      createdBy: adminId,
    },
    {
      slug: "solana-summer-hacks",
      title: "Solana Summer Hacks India",
      description:
        "Deploy lightning-fast dApps on Solana. Special focus on consumer apps and gaming abstractions.",
      prizePool: 5000000,
      startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      status: EventStatus.ENDED,
      theme: ["Solana", "Rust", "Crypto"],
      createdBy: adminId,
    },
  ];

  for (const event of eventsData) {
    await prisma.event.upsert({
      where: { slug: event.slug },
      update: {},
      create: event,
    });
  }
  console.log(`✓ ${eventsData.length} Events seeded.`);

  // 3. SPONSORS
  const sponsorsData = [
    {
      name: "VERCEL",
      tier: SponsorTier.PLATINUM,
      website: "https://vercel.com",
    },
    {
      name: "SUPABASE",
      tier: SponsorTier.GOLD,
      website: "https://supabase.com",
    },
    {
      name: "POLYGON",
      tier: SponsorTier.GOLD,
      website: "https://polygon.technology",
    },
  ];

  for (const sp of sponsorsData) {
    await prisma.sponsor.upsert({
      where: { id: sp.name.toLowerCase() }, // Using name as ID for seed consistency
      update: {},
      create: { ...sp, id: sp.name.toLowerCase() },
    });
  }
  console.log(`✓ ${sponsorsData.length} Sponsors seeded.`);

  console.log("🚀 Seeding complete.");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
