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

const IconPrint = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 5V1h8v4M3 10H1V5h12v5h-2M3 8h8v5H3z"
      stroke="white"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ModernTemplate() {
  return (
    <div className="w-full bg-white rounded-[3px] relative shadow-[0_24px_80px_rgba(10,9,8,0.16),_0_4px_16px_rgba(10,9,8,0.08)] pt-[52px] px-[52px] pb-[60px] font-['DM_Sans',sans-serif] text-[#0f0e0d] h-full">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[5px] rounded-t-[3px] bg-[linear-gradient(90deg,#0f0e0d_0%,#c85a2a_100%)]" />

      {/* ── Header ── */}
      <div>
        <div className="font-['DM_Serif_Display',serif] text-[36px] leading-[1.1] tracking-[-0.5px] text-[#0f0e0d]">
          Arjun Sharma
        </div>

        <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#c85a2a] mt-[5px]">
          Full Stack Developer
        </div>

        <div className="flex flex-wrap gap-[14px] mt-3 pb-4 border-b-[1.5px] border-[#0f0e0d]">
          {[
            { icon: <IconEmail />, text: "arjun.sharma@email.com" },
            { icon: <IconPhone />, text: "+91 98765 43210" },
            { icon: <IconLocation />, text: "Bengaluru, India" },
            { icon: <IconLinkedIn />, text: "linkedin.com/in/arjun" },
            { icon: <IconGitHub />, text: "github.com/arjuns" },
          ].map(({ icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-[5px] text-[11px] text-[#5c5a56]">
              {icon}
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Summary ── */}
      <Section head="Professional Summary">
        <p className="text-[11.5px] text-[#2a2825] leading-[1.65]">
          Final-year B.Tech Computer Science student with hands-on experience in
          React, Node.js, and cloud services. Built 3 full-stack applications
          used by 500+ active users. Passionate about clean code, scalable
          architecture, and shipping products that solve real problems.
        </p>
      </Section>

      {/* ── Experience ── */}
      <Section head="Work Experience">
        <ModernExpItem
          company="TechCorp Pvt. Ltd."
          date="Jun 2024 – Present"
          role="Software Engineering Intern"
          location="Bengaluru"
          bullets={[
            "Developed RESTful APIs using Node.js/Express, reducing average response time by 38%",
            "Built reusable React component library adopted across 5 internal products and 3 teams",
            "Integrated CI/CD pipelines with GitHub Actions and AWS CodeDeploy cutting deploy time by 60%",
            "Collaborated with product team on 12 feature releases using Agile/Scrum methodology",
          ]}
        />
        <ModernExpItem
          company="StartupX Technologies"
          date="Dec 2023 – May 2024"
          role="Frontend Developer Intern"
          location="Remote"
          bullets={[
            "Rebuilt core dashboard UI in React + TypeScript, improving page load time by 52%",
            "Implemented real-time notifications using WebSockets serving 1,200+ concurrent users",
            "Reduced bundle size by 40% through code splitting and lazy loading strategies",
          ]}
        />
      </Section>

      {/* ── Two-col: Education + Skills ── */}
      <div className="grid grid-cols-2 gap-6 mt-5">
        {/* Education */}
        <div>
          <ModernSectionHead>Education</ModernSectionHead>

          <div className="flex justify-between items-start">
            <div>
              <div className="text-[12px] font-semibold text-[#0f0e0d]">
                B.Tech, Computer Science &amp; Engineering
              </div>

              <div className="text-[11px] text-[#5c5a56] mt-[2px]">
                VIT University, Vellore
              </div>
            </div>

            <div className="text-right font-['DM_Mono',monospace] text-[10.5px] text-[#9a9690]">
              <div>2021 – 2025</div>

              <div className="text-[#2a7a4a] font-semibold text-[11px] mt-[2px]">
                CGPA 8.7
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <ModernSectionHead>Technical Skills</ModernSectionHead>

          <div className="flex flex-wrap gap-[6px]">
            {[
              "React.js",
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "Docker",
              "AWS (EC2, S3)",
              "Python",
              "Redis",
              "GraphQL",
              "Tailwind CSS",
              "Git / GitHub",
              "Agile/Scrum",
            ].map((s) => (
              <span
                key={s}
                className="text-[10.5px] font-medium text-[#2a2825] bg-[#f7f4ef] border border-[#e5e1d8] px-[10px] py-[3px] rounded-[3px]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects ── */}
      <Section head="Projects">
        <ModernExpItem
          company="Smart Resume Builder"
          date="Final Year Project · 2025"
          role="React · Node.js · Anthropic Claude API · PostgreSQL"
          bullets={[
            "Built AI-powered resume builder with ATS scoring, real-time feedback, and 3 resume templates",
            "Integrated Claude API for keyword analysis, section rewriting, and job description matching",
            "Implemented PDF export using react-to-print and conversation history storage with Prisma",
          ]}
        />
        <ModernExpItem
          company="E-Commerce Platform"
          date="Personal Project · 2024"
          role="Next.js · Stripe · MongoDB · Redis"
          bullets={[
            "Full-stack e-commerce with real-time inventory, Stripe payments, and admin dashboard",
            "Handled 500+ concurrent users using Redis caching and optimized MongoDB queries",
          ]}
        />
      </Section>
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

      <ul className="mt-[5px] pl-[14px] list-disc">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[11px] text-[#2a2825] leading-[1.6] mb-[2px]">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
