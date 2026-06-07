import React from "react";

const IconEmail = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    className="text-[#9a9690] flex-shrink-0">
    <rect
      x="1"
      y="2"
      width="9"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <path
      d="M1 3l4.5 3.5L10 3"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);
const IconPhone = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    className="text-[#9a9690] flex-shrink-0">
    <path
      d="M2 2.5a.5.5 0 01.5-.5h1.3l.8 2-1 .7c.6 1.2 1.5 2.1 2.7 2.7l.7-1 2 .8v1.3a.5.5 0 01-.5.5C4.1 9 2 6.9 2 2.5z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
  </svg>
);
const IconLocation = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    className="text-[#9a9690] flex-shrink-0">
    <path
      d="M5.5 1C3.5 1 2 2.5 2 4.5c0 3 3.5 5.5 3.5 5.5S9 7.5 9 4.5C9 2.5 7.5 1 5.5 1z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <circle cx="5.5" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);
const IconLinkedIn = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    className="text-[#9a9690] flex-shrink-0">
    <rect
      x="1"
      y="1"
      width="9"
      height="9"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <path
      d="M3.5 4.5v3M3.5 3v.2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M5.5 7.5V5.5c0-.6.4-1 1-1s1 .4 1 1v2"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);
const IconGitHub = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    className="text-[#9a9690] flex-shrink-0">
    <path
      d="M5.5 1C3 1 1 3 1 5.5c0 2 1.3 3.7 3.1 4.3.2 0 .3-.1.3-.3V8.7c-1.3.3-1.6-.6-1.6-.6-.2-.5-.5-.7-.5-.7-.4-.3.1-.3.1-.3.5 0 .7.5.7.5.4.7 1.1.5 1.4.4 0-.3.2-.5.3-.6-1-.1-2.1-.5-2.1-2.4 0-.5.2-1 .5-1.3 0-.1-.2-.7.1-1.4 0 0 .4-.1 1.4.5.4-.1.8-.2 1.3-.2.5 0 .9.1 1.3.2 1-.7 1.4-.5 1.4-.5.3.7.1 1.3.1 1.4.3.3.5.8.5 1.3 0 1.9-1.1 2.3-2.1 2.4.2.1.3.4.3.8v1.2c0 .2.1.3.3.3C9.2 9.2 10 7.5 10 5.5 10 3 8 1 5.5 1z"
      fill="currentColor"
    />
  </svg>
);

export default function ModernTemplate({ data }) {
  const resume = data || {};
  const personalInfo = resume.personalInfo || {};
  const experiences = resume.experience || [];
  const educations = resume.education || [];
  const skills = resume.skills || { technical: [], soft: [], languages: [], tools: [] };
  const projects = resume.projects || [];
  const certifications = resume.certifications || [];

  // Build contact items array dynamically
  const contacts = [
    personalInfo.email && { icon: <IconEmail />, text: personalInfo.email },
    personalInfo.phone && { icon: <IconPhone />, text: personalInfo.phone },
    personalInfo.location && { icon: <IconLocation />, text: personalInfo.location },
    personalInfo.linkedin && { icon: <IconLinkedIn />, text: personalInfo.linkedin },
    personalInfo.github && { icon: <IconGitHub />, text: personalInfo.github },
  ].filter(Boolean);

  return (
    <div className="print-container w-full bg-white rounded-[3px] relative shadow-[0_24px_80px_rgba(10,9,8,0.16),_0_4px_16px_rgba(10,9,8,0.08)] pt-[52px] px-[52px] pb-[60px] font-['DM_Sans',sans-serif] text-[#0f0e0d] h-full text-left">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[5px] rounded-t-[3px] bg-[linear-gradient(90deg,#0f0e0d_0%,#c85a2a_100%)] no-print" />

      {/* ── Header ── */}
      <div>
        <div className="font-['DM_Serif_Display',serif] text-[36px] leading-[1.1] tracking-[-0.5px] text-[#0f0e0d]">
          {personalInfo.firstName || "Your"} {personalInfo.lastName || "Name"}
        </div>

        {personalInfo.title && (
          <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#c85a2a] mt-[5px]">
            {personalInfo.title}
          </div>
        )}

        {contacts.length > 0 && (
          <div className="flex flex-wrap gap-[14px] mt-3 pb-4 border-b-[1.5px] border-[#0f0e0d]">
            {contacts.map(({ icon, text }, idx) => (
              <span
                key={idx}
                className="flex items-center gap-[5px] text-[11px] text-[#5c5a56] break-all">
                {icon}
                {text}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Summary ── */}
      {personalInfo.summary && (
        <Section head="Professional Summary">
          <p className="text-[11.5px] text-[#2a2825] leading-[1.65]">
            {personalInfo.summary}
          </p>
        </Section>
      )}

      {/* ── Experience ── */}
      {experiences.length > 0 && (
        <Section head="Work Experience">
          {experiences.map((exp, i) => {
            const startStr = exp.startDate ? new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
            const endStr = exp.isCurrent ? "Present" : (exp.endDate ? new Date(exp.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "");
            const dateStr = startStr && endStr ? `${startStr} – ${endStr}` : (startStr || endStr);
            return (
              <ModernExpItem
                key={i}
                company={exp.company}
                date={dateStr}
                role={exp.title}
                location={exp.location}
                bullets={exp.bullets || []}
              />
            );
          })}
        </Section>
      )}

      {/* ── Two-col: Education + Skills ── */}
      <div className="grid grid-cols-2 gap-6 mt-5">
        {/* Education */}
        <div>
          {educations.length > 0 && (
            <>
              <ModernSectionHead>Education</ModernSectionHead>
              {educations.map((edu, i) => {
                const startStr = edu.startDate ? new Date(edu.startDate).getFullYear() : "";
                const endStr = edu.isCurrent ? "Present" : (edu.endDate ? new Date(edu.endDate).getFullYear() : "");
                const dateStr = startStr && endStr ? `${startStr} – ${endStr}` : (startStr || endStr);
                return (
                  <div key={i} className="flex justify-between items-start mb-3 last:mb-0">
                    <div>
                      <div className="text-[12px] font-semibold text-[#0f0e0d]">
                        {edu.degree} {edu.field ? `in ${edu.field}` : ""}
                      </div>
                      <div className="text-[11px] text-[#5c5a56] mt-[2px]">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="text-right font-['DM_Mono',monospace] text-[10.5px] text-[#9a9690]">
                      <div>{dateStr}</div>
                      {edu.cgpa && (
                        <div className="text-[#2a7a4a] font-semibold text-[11px] mt-[2px]">
                          CGPA {edu.cgpa}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* Skills */}
        <div>
          {Object.values(skills).some((arr) => arr && arr.length > 0) && (
            <>
              <ModernSectionHead>Technical Skills</ModernSectionHead>
              <div className="flex flex-wrap gap-[6px]">
                {Object.entries(skills).flatMap(([key, items]) => 
                  (items || []).map((s, idx) => (
                    <span
                      key={`${key}-${idx}`}
                      className="text-[10.5px] font-medium text-[#2a2825] bg-[#f7f4ef] border border-[#e5e1d8] px-[10px] py-[3px] rounded-[3px]">
                      {s}
                    </span>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <Section head="Projects">
          {projects.map((proj, i) => {
            const dateStr = proj.startDate ? new Date(proj.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
            return (
              <ModernExpItem
                key={i}
                company={proj.name}
                date={dateStr}
                role={proj.tech ? proj.tech.join(" · ") : ""}
                bullets={proj.description ? [proj.description] : []}
              />
            );
          })}
        </Section>
      )}

      {/* ── Certifications ── */}
      {certifications.length > 0 && (
        <Section head="Certifications">
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-[#f0ece5] pb-1">
                <div>
                  <span className="text-[12px] font-semibold text-[#0f0e0d]">
                    {cert.name}
                  </span>
                  {cert.issuer && (
                    <span className="text-[11px] text-[#5c5a56] ml-2">
                      ({cert.issuer})
                    </span>
                  )}
                </div>
                <span className="font-['DM_Mono',monospace] text-[10px] text-[#9a9690] whitespace-nowrap">
                  {cert.issueDate ? new Date(cert.issueDate).getFullYear() : ""}
                </span>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

/* helpers for Modern */
function ModernSectionHead({ children }) {
  return (
    <div className="text-[9px] font-bold tracking-[0.14em] uppercase text-[#c85a2a] border-b border-[#e5e1d8] pb-[5px] mb-[12px]">
      {children}
    </div>
  );
}
function Section({ head, children }) {
  return (
    <div className="mt-[20px]">
      <ModernSectionHead>{head}</ModernSectionHead>
      {children}
    </div>
  );
}
function ModernExpItem({ company, date, role, location, bullets }) {
  return (
    <div className="mb-[14px]">
      <div className="flex justify-between items-baseline">
        <span className="text-[12.5px] font-semibold text-[#0f0e0d]">
          {company}
        </span>

        <span className="font-['DM_Mono',monospace] text-[10px] text-[#9a9690]">
          {date}
        </span>
      </div>

      <div className="text-[11px] text-[#c85a2a] font-medium mt-[2px]">
        {role}
        {location && (
          <span className="text-[10px] text-[#9a9690] ml-[4px]">
            · {location}
          </span>
        )}
      </div>

      {bullets && bullets.length > 0 && (
        <ul className="mt-[5px] pl-[14px] list-disc">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-[11px] text-[#2a2825] leading-[1.6] mb-[2px]">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
