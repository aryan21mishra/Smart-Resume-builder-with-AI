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
import { useDispatch, useSelector } from "react-redux";
import { selectResumes, deleteProject } from "@/redux/resumes/resumeSlice";
import { useNavigate } from "react-router-dom";

const formatDate = (date) => {
  if (!date) return "Present";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const ProjectList = ({ setActiveTab, setEditIndex }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector(selectResumes)?.projects || [];
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
          onClick={() => {
            setEditIndex?.(null);
            setActiveTab?.("addProject");
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-montserratBold cursor-pointer"
        >
          <RiAddLine size={18} />
          Add Project
        </Button>
      </div>

      {/* Empty State */}
      {projects.length === 0 ? (
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
            onClick={() => {
              setEditIndex?.(null);
              setActiveTab?.("addProject");
            }}
            className="mt-5 flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-montserratBold cursor-pointer"
          >
            <RiAddLine size={18} />
            Add Your First Project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project, idx) => {
            const techArray = typeof project.tech === "string"
              ? project.tech.split(",").map(t => t.trim()).filter(Boolean)
              : (Array.isArray(project.tech) ? project.tech : []);

            return (
              <div
                key={project._id || idx}
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
                          {project.currentlyWorking ? "Present" : formatDate(project.endDate)}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setEditIndex?.(idx);
                        setActiveTab?.("addProject");
                      }}
                      className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition cursor-pointer"
                    >
                      <RiPencilLine size={16} />
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteProject(idx));
                      }}
                      className="w-9 h-9 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 flex items-center justify-center text-red-400 transition cursor-pointer"
                    >
                      <RiDeleteBinLine size={16} />
                    </button>
                  </div>
                </div>

                {/* Tech Stack */}
                {techArray.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {techArray.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-[#1b1b1b] border border-white/5 text-[11px] text-[#e8b86d] font-montserratMedium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {(project.url || project.repoUrl) && (
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
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Save & Continue bottom bar */}
      <div className="flex gap-4 items-center mt-6 pb-6 border-t border-white/5 pt-6">
        <Button
          variant="outline"
          onClick={() => {
            setEditIndex?.(null);
            setActiveTab?.("addProject");
          }}
          className="flex-1 border border-dashed border-white/10 hover:border-[#e8b86d]/40 hover:text-[#e8b86d] bg-transparent text-white/60 py-3! rounded-xl font-montserratMedium text-sm cursor-pointer transition">
          + Add Project
        </Button>
        <Button
          variant="default"
          onClick={() => navigate("/dashboard/my-resumes/build-resume/skills")}
          className="flex-1 bg-[#e8b86d] hover:bg-[#e8b86d]/90 text-black py-3! rounded-xl font-montserratBold text-sm tracking-wide cursor-pointer transition">
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default ProjectList;