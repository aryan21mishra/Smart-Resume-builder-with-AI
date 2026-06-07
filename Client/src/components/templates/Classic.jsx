import React from "react";

export default function ClassicTemplate({ data }) {
  const resume = data || {};
  const personalInfo = resume.personalInfo || {};
  const experiences = resume.experience || [];
  const educations = resume.education || [];
  const skills = resume.skills || { technical: [], soft: [], languages: [], tools: [] };
  const projects = resume.projects || [];
  const certifications = resume.certifications || [];

  return (
    <div className="print-container w-full max-w-[800px] mx-auto bg-white rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.05)] pt-14 px-12 pb-14 font-['Source_Serif_4','Times_New_Roman',Georgia,serif] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* ====== HEADER SECTION ====== */}
      <header className="text-center mb-6">
        <h1 className="font-['Playfair_Display','Times_New_Roman',serif] text-3xl font-extrabold tracking-widest uppercase text-zinc-950">
          {personalInfo.firstName || "Your"} {personalInfo.lastName || "Name"}
        </h1>
        {personalInfo.title && (
          <p className="font-['Playfair_Display',serif] text-xs uppercase tracking-widest text-zinc-500 italic mt-1.5">
            {personalInfo.title}
          </p>
        )}

        {/* Contact Strip */}
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-[10px] tracking-wide text-zinc-600">
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="hover:underline">
              {personalInfo.email}
            </a>
          )}
          {personalInfo.phone && (
            <>
              {personalInfo.email && <span className="text-zinc-300">|</span>}
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.location && (
            <>
              {(personalInfo.email || personalInfo.phone) && <span className="text-zinc-300">|</span>}
              <span>{personalInfo.location}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              {(personalInfo.email || personalInfo.phone || personalInfo.location) && <span className="text-zinc-300">|</span>}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline">
                linkedin
              </a>
            </>
          )}
          {personalInfo.github && (
            <>
              {(personalInfo.email || personalInfo.phone || personalInfo.location || personalInfo.linkedin) && <span className="text-zinc-300">|</span>}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline">
                github
              </a>
            </>
          )}
        </div>

        {/* Crisp Double Rule Separator line */}
        <div className="mt-4 space-y-[2px]">
          <div className="w-full h-[1.5px] bg-zinc-950" />
          <div className="w-full h-[0.5px] bg-zinc-400" />
        </div>
      </header>

      {/* ====== OBJECTIVE SECTION ====== */}
      {personalInfo.summary && (
        <ClassicSection head="Objective">
          <p className="text-[11.5px] leading-relaxed text-zinc-800 text-justify font-normal">
            {personalInfo.summary}
          </p>
        </ClassicSection>
      )}

      {/* ====== PROFESSIONAL EXPERIENCE ====== */}
      {experiences.length > 0 && (
        <ClassicSection head="Professional Experience">
          {experiences.map((exp, i) => {
            const startStr = exp.startDate ? new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
            const endStr = exp.isCurrent ? "Present" : (exp.endDate ? new Date(exp.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "");
            const dateStr = startStr && endStr ? `${startStr} – ${endStr}` : (startStr || endStr);
            return (
              <ClassicExpItem
                key={i}
                company={exp.company}
                role={exp.title}
                date={dateStr}
                location={exp.location}
                bullets={exp.bullets || []}
              />
            );
          })}
        </ClassicSection>
      )}

      {/* ====== EDUCATION SECTION ====== */}
      {educations.length > 0 && (
        <ClassicSection head="Education">
          {educations.map((edu, i) => {
            const startStr = edu.startDate ? new Date(edu.startDate).getFullYear() : "";
            const endStr = edu.isCurrent ? "Present" : (edu.endDate ? new Date(edu.endDate).getFullYear() : "");
            const dateStr = startStr && endStr ? `${startStr} – ${endStr}` : (startStr || endStr);
            return (
              <div key={i} className="flex justify-between items-start text-left mb-3 last:mb-0">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-zinc-950 tracking-wide">
                    {edu.degree} {edu.field ? `— ${edu.field}` : ""}
                  </h4>
                  <p className="text-[11.5px] text-zinc-600 italic">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right font-mono text-[10.5px] text-zinc-500 space-y-1">
                  <div className="font-semibold text-zinc-700">{dateStr}</div>
                  {edu.cgpa && (
                    <div className="text-zinc-950 font-bold border border-zinc-950/10 px-1.5 py-0.5 rounded bg-zinc-50 inline-block">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </ClassicSection>
      )}

      {/* ====== LOWER BALANCED MATRIX GRID ====== */}
      <div className="grid grid-cols-2 gap-8 mt-5 pt-1">
        {/* Left Column: Projects block */}
        <div className="space-y-4">
          {projects.length > 0 && (
            <>
              <ClassicSectionHead>Projects</ClassicSectionHead>
              {projects.map((proj, i) => {
                const dateStr = proj.startDate ? new Date(proj.startDate).getFullYear().toString() : "";
                return (
                  <ClassicExpItem
                    key={i}
                    company={proj.name}
                    date={dateStr}
                    sublabel={proj.tech ? proj.tech.join(" · ") : ""}
                    bullets={proj.description ? [proj.description] : []}
                  />
                );
              })}
            </>
          )}
        </div>

        {/* Right Column: Skills & Credentials */}
        <div className="space-y-4">
          {Object.values(skills).some((arr) => arr && arr.length > 0) && (
            <div>
              <ClassicSectionHead>Technical Skills</ClassicSectionHead>
              <div className="text-[11.5px] leading-relaxed text-zinc-800 space-y-1">
                {skills.technical && skills.technical.length > 0 && (
                  <p>
                    <strong>Languages/Frameworks:</strong> {skills.technical.join(", ")}
                  </p>
                )}
                {skills.soft && skills.soft.length > 0 && (
                  <p>
                    <strong>Soft Skills:</strong> {skills.soft.join(", ")}
                  </p>
                )}
                {skills.tools && skills.tools.length > 0 && (
                  <p>
                    <strong>Tools/DevOps:</strong> {skills.tools.join(", ")}
                  </p>
                )}
                {skills.languages && skills.languages.length > 0 && (
                  <p>
                    <strong>Languages:</strong> {skills.languages.join(", ")}
                  </p>
                )}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="pt-2">
              <ClassicSectionHead>Certifications</ClassicSectionHead>
              <div className="text-[11.5px] leading-relaxed text-zinc-700 font-normal space-y-1.5">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <span className="font-semibold text-zinc-900">
                      {cert.name} {cert.issuer ? `(${cert.issuer})` : ""}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-400">
                      {cert.issueDate ? new Date(cert.issueDate).getFullYear() : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ====== LAYOUT ATOMIC COMPONENTS ======

function ClassicSectionHead({ children }) {
  return (
    <h3 className="font-['Playfair_Display',serif] text-[12.5px] font-bold tracking-widest uppercase text-zinc-950 border-b border-zinc-900 pb-1 mb-3">
      {children}
    </h3>
  );
}

function ClassicSection({ head, children }) {
  return (
    <section className="mt-5 pt-1">
      <ClassicSectionHead>{head}</ClassicSectionHead>
      {children}
    </section>
  );
}

function ClassicExpItem({ company, role, date, location, sublabel, bullets }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-baseline gap-4">
        <div className="truncate">
          <span className="text-xs font-bold text-zinc-950 tracking-wide">
            {company}
          </span>
          {role && (
            <>
              <span className="text-zinc-300 mx-1.5">—</span>
              <span className="text-[11.5px] text-zinc-600 italic font-medium">
                {role}
              </span>
            </>
          )}
        </div>
        <span className="font-mono text-[10px] text-zinc-500 whitespace-nowrap">
          {date}
        </span>
      </div>

      {(location || sublabel) && (
        <div className="text-[10.5px] text-zinc-400 font-mono tracking-wide mt-0.5">
          {location || sublabel}
        </div>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="pl-4 mt-2 list-disc space-y-1">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-[11.5px] leading-relaxed text-zinc-800 text-justify">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
