import React from "react";

const ExperienceList = ({ setActiveTab }) => {
  const experiences = [
    {
      jobTitle: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      jobType: "Full-time",
      startDate: "Jan 2022",
      endDate: "",
      currentlyWorkHere: true,
      description: `• Built scalable internal tools for cloud infrastructure
• Improved frontend performance by 35%
• Mentored junior developers and conducted code reviews`,
    },

    {
      jobTitle: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      jobType: "Full-time",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      currentlyWorkHere: false,
      description: `• Developed reusable React components
• Collaborated with UI/UX team for dashboard redesign
• Reduced API response handling time significantly`,
    },

    {
      jobTitle: "Software Engineering Intern",
      company: "Amazon",
      location: "Remote",
      jobType: "Internship",
      startDate: "Jan 2020",
      endDate: "May 2020",
      currentlyWorkHere: false,
      description: `• Built admin analytics dashboard
• Wrote optimized backend APIs using Node.js
• Participated in agile sprint planning`,
    },
  ];
  return (
    <div className="flex flex-col gap-4 px-5">
      {experiences.map((exp, index) => (
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
              <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white transition" >
                Edit
              </button>

              <button className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs text-red-400 transition">
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

      {/* Add Button */}
      <button className="w-full border border-dashed border-white/10 hover:border-[#e8b86d]/40 rounded-2xl py-4 text-sm text-white/60 hover:text-[#e8b86d] transition" onClick={()=>setActiveTab("addExperience")}>
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceList;
