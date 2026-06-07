import React from "react";

export default function MinimalTemplate({ data }) {
  const resume = data || {};
  const personalInfo = resume.personalInfo || {};
  const experiences = resume.experience || [];
  const educations = resume.education || [];
  const skills = resume.skills || { technical: [], soft: [], languages: [], tools: [] };
  const projects = resume.projects || [];
  const certifications = resume.certifications || [];

  return (
    <div className="print-container w-full rounded-[3px] grid overflow-hidden shadow-[0_24px_80px_rgba(10,9,8,0.16),_0_4px_16px_rgba(10,9,8,0.08)] grid-cols-[220px_1fr] min-h-[700px] font-['DM_Sans',sans-serif] text-left">
      {/* ── SIDEBAR ── */}
      <aside className="bg-[#1a1a1a] px-[24px] py-[40px] flex flex-col text-left">
        {/* Name */}
        <div className="mb-[20px]">
          <div className="font-['DM_Serif_Display',serif] text-[24px] text-white leading-[1.1] tracking-[-0.3px]">
            {personalInfo.firstName || "Your"}
          </div>
          <div className="font-['DM_Serif_Display',serif] text-[24px] italic text-[rgba(255,255,255,0.55)] leading-[1.1] tracking-[-0.3px]">
            {personalInfo.lastName || "Name"}
          </div>
        </div>

        <div className="w-[32px] h-[3px] bg-[#c85a2a] rounded-[2px] my-[14px]" />

        {/* Contact */}
        {(personalInfo.email || personalInfo.phone || personalInfo.location) && (
          <SidebarSection head="Contact">
            {personalInfo.email && (
              <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px] break-all">
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px] break-all">
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px] break-all">
                {personalInfo.location}
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px] break-all hover:underline">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            )}
            {personalInfo.github && (
              <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px] break-all hover:underline">
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            )}
          </SidebarSection>
        )}

        {/* Education */}
        {educations.length > 0 && (
          <SidebarSection head="Education">
            {educations.map((edu, idx) => {
              const startYear = edu.startDate ? new Date(edu.startDate).getFullYear() : "";
              const endYear = edu.isCurrent ? "Present" : (edu.endDate ? new Date(edu.endDate).getFullYear() : "");
              const years = startYear && endYear ? `${startYear} – ${endYear}` : (startYear || endYear);
              return (
                <div key={idx} className="mb-3 last:mb-0">
                  <div className="text-[10px] text-[rgba(255,255,255,0.75)] font-medium mb-[4px]">
                    {edu.degree}
                  </div>
                  <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px]">
                    {edu.institution}
                  </div>
                  <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px]">
                    {years}
                  </div>
                  {edu.cgpa && (
                    <div className="text-[10px] text-[#5db87a] font-medium">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                </div>
              );
            })}
          </SidebarSection>
        )}

        {/* Tech Stack */}
        {Object.values(skills).some(arr => arr && arr.length > 0) && (
          <SidebarSection head="Skills">
            <div className="flex flex-wrap gap-1">
              {Object.entries(skills).flatMap(([key, items]) => 
                (items || []).map((s, idx) => (
                  <span
                    key={`${key}-${idx}`}
                    className="inline-block text-[9px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[3px] px-[6px] py-[1.5px]">
                    {s}
                  </span>
                ))
              )}
            </div>
          </SidebarSection>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <SidebarSection head="Certifications">
            {certifications.map((cert, idx) => (
              <div key={idx} className="mb-2 last:mb-0">
                <div className="text-[10px] text-[rgba(255,255,255,0.75)] mb-[4px]">
                  {cert.name}
                </div>
                {cert.issuer && (
                  <div className="text-[9px] text-[rgba(255,255,255,0.5)] leading-[1.4] mb-[2px]">
                    {cert.issuer}
                  </div>
                )}
                <div className="text-[9px] text-[rgba(255,255,255,0.4)]">
                  {cert.issueDate ? new Date(cert.issueDate).getFullYear() : ""}
                </div>
              </div>
            ))}
          </SidebarSection>
        )}
      </aside>

      {/* ── MAIN ── */}
      <main className="px-[36px] py-[40px] bg-white text-left">
        {personalInfo.title && (
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#c85a2a] mb-[12px]">
            {personalInfo.title}
          </div>
        )}

        {personalInfo.summary && (
          <p className="text-[11px] text-[#444] leading-[1.65] pb-[18px] border-b border-[#f0ece5]">
            {personalInfo.summary}
          </p>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <MinimalSection head="Work Experience">
            {experiences.map((exp, idx) => {
              const startStr = exp.startDate ? new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
              const endStr = exp.isCurrent ? "Present" : (exp.endDate ? new Date(exp.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "");
              const dateStr = startStr && endStr ? `${startStr} – ${endStr}` : (startStr || endStr);
              return (
                <MinimalExpItem
                  key={idx}
                  company={exp.company}
                  date={dateStr}
                  role={exp.title + (exp.location ? ` · ${exp.location}` : "")}
                  bullets={exp.bullets || []}
                />
              );
            })}
          </MinimalSection>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <MinimalSection head="Projects">
            {projects.map((proj, idx) => {
              const dateStr = proj.startDate ? new Date(proj.startDate).getFullYear().toString() : "";
              return (
                <MinimalExpItem
                  key={idx}
                  company={proj.name}
                  date={dateStr}
                  role={proj.tech ? proj.tech.join(" · ") : ""}
                  bullets={proj.description ? [proj.description] : []}
                />
              );
            })}
          </MinimalSection>
        )}
      </main>
    </div>
  );
}

function SidebarSection({ head, children }) {
  return (
    <div className="mb-[22px] text-left">
      <div className="text-[8.5px] font-bold tracking-[0.14em] uppercase text-[#c85a2a] mb-[9px]">
        {head}
      </div>
      {children}
    </div>
  );
}
function MinimalSection({ head, children }) {
  return (
    <div className="mt-[18px] text-left">
      <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#1a1a1a] border-b-[1.5px] border-[#1a1a1a] pb-[4px] mb-[10px]">
        {head}
      </div>
      {children}
    </div>
  );
}
function MinimalExpItem({ company, date, role, bullets }) {
  return (
    <div className="mb-[12px] text-left">
      <div className="flex justify-between items-baseline">
        <span className="text-[11.5px] font-semibold text-[#0f0e0d]">
          {company}
        </span>

        <span className="font-['DM_Mono',monospace] text-[9.5px] text-[#999] whitespace-nowrap">
          {date}
        </span>
      </div>

      <div className="text-[10.5px] text-[#c85a2a] font-medium mt-[1px]">
        {role}
      </div>

      {bullets && bullets.length > 0 && (
        <ul className="pl-[13px] mt-[4px] list-disc">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-[10.5px] text-[#333] leading-[1.6] mb-[2px]">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
