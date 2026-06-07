import { selectResumes, deleteExperience } from "@/redux/resumes/resumeSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui";

const ExperienceList = ({ setActiveTab, setEditIndex }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const experiences = useSelector(selectResumes)?.experiences;
  console.log("experiences => ", experiences);
  return (
    <div className="flex flex-col gap-4 px-5">
      {experiences?.map((exp, index) => (
        <div
          key={index}
          className="bg-[#121212] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
          {/* Top Section */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white text-lg font-montserratBold">
                {exp.jobTitle}
              </h3>

              <p className="text-[#e8b86d] text-sm font-montserratMedium mt-1">
                {exp.company}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-white/50">
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.jobType}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  setEditIndex(index);
                  setActiveTab("addExperience");
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white transition cursor-pointer">
                Edit
              </button>

              <button 
                onClick={() => {
                  dispatch(deleteExperience(index));
                }}
                className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs text-red-400 transition cursor-pointer">
                Delete
              </button>
            </div>
          </div>

          {/* Dates */}
          <div className="text-xs text-white/40 font-montserratRegular">
            {exp.startDate} — {exp.currentlyWorkHere ? "Present" : exp.endDate}
          </div>

          {/* Description */}
          {exp.description && (
            <div className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
              {exp.description}
            </div>
          )}
        </div>
      ))}

      {/* Actions Segment */}
      <div className="flex gap-4 items-center mt-6 pb-6">
        <Button
          variant="outline"
          onClick={() => {
            setEditIndex(null);
            setActiveTab("addExperience");
          }}
          className="flex-1 border border-dashed border-white/10 hover:border-[#e8b86d]/40 hover:text-[#e8b86d] bg-transparent text-white/60 py-3! rounded-xl font-montserratMedium text-sm cursor-pointer transition">
          + Add Experience
        </Button>

        <Button
          variant="default"
          onClick={() => navigate("/dashboard/my-resumes/build-resume/education")}
          className="flex-1 bg-[#e8b86d] hover:bg-[#e8b86d]/90 text-black py-3! rounded-xl font-montserratBold text-sm tracking-wide cursor-pointer transition">
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default ExperienceList;
