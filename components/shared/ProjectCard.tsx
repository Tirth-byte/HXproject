import React from "react";
import Link from "next/link";

export type ProjectCardData = {
  id: string;
  name: string;
  eventName: string;
  description: string;
  stack: string[];
  teamMembers: { id: string; avatarUrl?: string; name: string }[];
  winnerBadge?: string; // e.g., "1st Place", "Best UX"
  gradientFrom: string;
  gradientTo: string;
};

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  const displayTeam = project.teamMembers.slice(0, 3);
  const extraMembers = project.teamMembers.length - 3;

  return (
    <div className="group flex flex-col bg-[#111118] border border-[#2A2A38] rounded-2xl overflow-hidden hover:border-[#6C63FF]/50 hover:shadow-[0_0_30px_rgba(108,99,255,0.1)] transition-all duration-300 h-full">
      {/* Banner */}
      <div
        className={`h-32 w-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded text-[10px] font-black uppercase text-white tracking-widest">
            {project.eventName}
          </div>
          {project.winnerBadge && (
            <div className="px-2.5 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded text-[10px] font-black uppercase text-amber-500 tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center gap-1">
              🏆 {project.winnerBadge}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-[#00F0FF] transition-colors line-clamp-1">
          {project.name}
        </h3>
        <p className="text-sm text-[#9090AA] mb-4 line-clamp-2 min-h-[40px]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-[#5A5A72] uppercase"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-[#5A5A72] uppercase">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Footer Row */}
        <div className="flex items-center justify-between pt-4 border-t border-[#2A2A38]">
          {/* Team Bubbles */}
          <div className="flex -space-x-2">
            {displayTeam.map((member) => (
              <div
                key={member.id}
                className="w-8 h-8 rounded-full border-2 border-[#111118] bg-[#1A1A24] flex items-center justify-center text-[10px] font-bold text-white relative z-10 hover:z-20 transition-transform hover:scale-110"
                title={member.name}
              >
                {member.name.charAt(0)}
              </div>
            ))}
            {extraMembers > 0 && (
              <div className="w-8 h-8 rounded-full border-2 border-[#111118] bg-[#2A2A38] flex items-center justify-center text-[10px] font-bold text-[#9090AA] relative z-0">
                +{extraMembers}
              </div>
            )}
          </div>

          <Link
            href={`/community/projects/${project.id}`}
            className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider hover:text-white flex items-center gap-1 transition-colors"
          >
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
