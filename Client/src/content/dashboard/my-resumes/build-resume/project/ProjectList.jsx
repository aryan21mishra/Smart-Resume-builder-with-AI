import React from "react";
import {
  RiAddLine,
  RiGithubFill,
  RiGlobalLine,
  RiCodeSSlashLine,
  RiCalendarLine,
  RiPencilLine,
  RiDeleteBinLine,
} from "@remixicon/react";

import { Button } from "@/components/ui";

const dummyProjects = [
  {
    _id: "1",
    name: "AI Resume Builder",
    description:
      "An AI-powered resume builder that helps users generate professional resumes with ATS optimization and modern templates.",
    url: "https://airesume.dev",
    repoUrl: "https://github.com/techpyto/ai-resume-builder",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "OpenAI"],
    startDate: "2025-01",
    endDate: "2025-04",
  },
  {
    _id: "2",
    name: "DevConnect",
    description:
      "A developer networking platform with real-time messaging, project showcasing, and GitHub integration.",
    url: "https://devconnect.app",
    repoUrl: "https://github.com/techpyto/devconnect",
    tech: ["Next.js", "Socket.io", "Express", "PostgreSQL"],
    startDate: "2024-06",
    endDate: null,
  },
];

const formatDate = (date) => {
  if (!date) return "Present";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};



const ProjectList = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col gap-5 px-5 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-montserratBold text-white">
            Projects
          </h2>

          <p className="text-xs text-white/50 mt-1">
            Showcase your best work and technical projects.
          </p>
        </div>

        <Button
          type="button"
          variant="default"
          size="lg"
          onClick={() => setActiveTab?.("addProject")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-montserratBold"
        >
          <RiAddLine size={18} />
          Add Project
        </Button>
      </div>

      {/* Empty State */}
      {dummyProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl py-16 bg-white/[0.02]">
          <RiCodeSSlashLine size={42} className="text-white/20 mb-4" />

          <h3 className="text-white text-sm font-montserratSemiBold">
            No Projects Added
          </h3>

          <p className="text-white/40 text-xs mt-2 text-center max-w-sm">
            Add your personal, freelance, or professional projects to showcase
            your skills and achievements.
          </p>

          <Button
            type="button"
            variant="default"
            size="lg"
            onClick={() => setActiveTab?.("addProject")}
            className="mt-5 flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-montserratBold"
          >
            <RiAddLine size={18} />
            Add Your First Project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {dummyProjects.map((project) => (
            <div
              key={project._id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-5 transition hover:border-white/20"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-white text-base font-montserratBold">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                      <RiCalendarLine size={14} />

                      <span>
                        {formatDate(project.startDate)} —{" "}
                        {formatDate(project.endDate)}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition"
                  >
                    <RiPencilLine size={16} />
                  </button>

                  <button
                    className="w-9 h-9 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 flex items-center justify-center text-red-400 transition"
                  >
                    <RiDeleteBinLine size={16} />
                  </button>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#1b1b1b] border border-white/5 text-[11px] text-[#e8b86d] font-montserratMedium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-5">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-xs text-white/80 transition"
                  >
                    <RiGlobalLine size={15} />
                    Live Demo
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-xs text-white/80 transition"
                  >
                    <RiGithubFill size={15} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;