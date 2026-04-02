import React from "react";
import HeroSection from "@/components/public/HeroSection";
import AboutSection from "@/components/public/AboutSection";
import EventsPreviewSection from "@/components/public/EventsPreviewSection";
import CommunityShowcaseSection from "@/components/public/CommunityShowcaseSection";
import SponsorsPreviewSection from "@/components/public/SponsorsPreviewSection";
import FAQSection from "@/components/public/FAQSection";
import { prisma } from "@/lib/prisma";
import { EventCardData } from "@/components/shared/EventCard";

export default async function LandingPage() {
  let formattedEvents: EventCardData[] = [];

  try {
    // Fetch only top 3 featured/live events for preview
    const events = await prisma.event.findMany({
      take: 3,
      orderBy: { startDate: "desc" },
      include: {
        _count: {
          select: { participants: true },
        },
      },
    });

    // Map Prisma data to Component Props shape
    formattedEvents = events.map((e) => ({
      slug: e.slug,
      title: e.title,
      theme: e.theme,
      prizePool: e.prizePool,
      endDate: e.endDate,
      status: e.status,
      participantCount: e._count.participants,
    }));
  } catch (error) {
    console.error("Prisma Fetch Error:", error);
    // Fallback events handled by component defaults if empty
  }

  return (
    <div className="selection:bg-[#6C63FF]/30">
      <main>
        <HeroSection />
        <AboutSection />
        <EventsPreviewSection initialEvents={formattedEvents} />
        <CommunityShowcaseSection />
        <SponsorsPreviewSection />
        <FAQSection />
      </main>
    </div>
  );
}
