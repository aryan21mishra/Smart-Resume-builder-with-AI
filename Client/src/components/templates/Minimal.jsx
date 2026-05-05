export default function MinimalTemplate() {
  return (
    <div className="w-full rounded-[3px] grid overflow-hidden shadow-[0_24px_80px_rgba(10,9,8,0.16),_0_4px_16px_rgba(10,9,8,0.08)] grid-cols-[220px_1fr] min-h-[700px] font-['DM_Sans',sans-serif]">
      {/* ── SIDEBAR ── */}
      <aside className="bg-[#1a1a1a] px-[24px] py-[40px] flex flex-col">
        {/* Name */}
        <div className="mb-[20px]">
          <div className="font-['DM_Serif_Display',serif] text-[24px] text-white leading-[1.1] tracking-[-0.3px]">
            Arjun
          </div>
          <div className="font-['DM_Serif_Display',serif] text-[24px] italic text-[rgba(255,255,255,0.55)] leading-[1.1] tracking-[-0.3px]">
            Sharma
          </div>
        </div>

        <div className="w-[32px] h-[3px] bg-[#c85a2a] rounded-[2px] my-[14px]" />

        {/* Contact */}
        <SidebarSection head="Contact">
          {[
            "arjun.sharma@email.com",
            "+91 98765 43210",
            "Bengaluru, India",
            "linkedin.com/in/arjun",
            "github.com/arjuns",
          ].map((t) => (
            <div
              key={t}
              className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px] break-all">
              {t}
            </div>
          ))}
        </SidebarSection>

        {/* Education */}
        <SidebarSection head="Education">
          <div className="text-[10px] text-[rgba(255,255,255,0.75)] font-medium mb-[4px]">
            B.Tech — CSE
          </div>
          <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px]">
            VIT University
          </div>
          <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[4px]">
            2021 – 2025
          </div>
          <div className="text-[10px] text-[#5db87a] font-medium">
            CGPA: 8.7 / 10
          </div>
        </SidebarSection>

        {/* Tech Stack */}
        <SidebarSection head="Tech Stack">
          <div>
            {[
              "React.js",
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Python",
              "Redis",
              "GraphQL",
              "Next.js",
              "Git",
              "Agile",
            ].map((s) => (
              <span
                key={s}
                className="inline-block text-[9.5px] text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[3px] px-[7px] py-[2px] m-[2px_2px_2px_0]">
                {s}
              </span>
            ))}
          </div>
        </SidebarSection>

        {/* Certifications */}
        <SidebarSection head="Certifications">
          <div className="text-[10px] text-[rgba(255,255,255,0.75)] mb-[4px]">
            AWS Certified Developer
          </div>
          <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55] mb-[6px]">
            Amazon Web Services · 2024
          </div>
          <div className="text-[10px] text-[rgba(255,255,255,0.75)] mb-[4px]">
            Meta Frontend Developer
          </div>
          <div className="text-[10px] text-[rgba(255,255,255,0.5)] leading-[1.55]">
            Coursera · 2023
          </div>
        </SidebarSection>
      </aside>

      {/* ── MAIN ── */}
      <main className="px-[36px] py-[40px] bg-white">
        <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#c85a2a] mb-[12px]">
          Full Stack Developer
        </div>

        <p className="text-[11px] text-[#444] leading-[1.65] pb-[18px] border-b border-[#f0ece5]">
          Final-year B.Tech Computer Science student with hands-on experience in
          React, Node.js, and cloud services. Built 3 full-stack applications
          used by 500+ active users. Passionate about clean code and scalable
          architecture that ships fast.
        </p>

        {/* Experience */}
        <MinimalSection head="Work Experience">
          <MinimalExpItem
            company="TechCorp Pvt. Ltd."
            date="Jun 2024 – Present"
            role="Software Engineering Intern · Bengaluru"
            bullets={[
              "Developed RESTful APIs using Node.js, reducing response time by 38%",
              "Built React component library adopted across 5 internal products",
              "Integrated CI/CD with GitHub Actions and AWS CodeDeploy cutting deploy time 60%",
            ]}
          />
          <MinimalExpItem
            company="StartupX Technologies"
            date="Dec 2023 – May 2024"
            role="Frontend Developer Intern · Remote"
            bullets={[
              "Rebuilt dashboard in React + TypeScript, improving load time by 52%",
              "Implemented WebSocket notifications for 1,200+ concurrent users",
              "Reduced bundle size by 40% through lazy loading and code splitting",
            ]}
          />
        </MinimalSection>

        {/* Projects */}
        <MinimalSection head="Projects">
          <MinimalExpItem
            company="Smart Resume Builder"
            date="Final Year · 2025"
            role="React · Node.js · Claude API · PostgreSQL"
            bullets={[
              "AI-powered resume builder with ATS scoring and Claude-powered feedback",
              "Keyword analysis, section rewriting, job description matching features",
              "PDF export, 3 templates, conversation history for continuous AI context",
            ]}
          />
          <MinimalExpItem
            company="E-Commerce Platform"
            date="Personal · 2024"
            role="Next.js · Stripe · MongoDB · Redis"
            bullets={[
              "Full-stack platform with real-time inventory and Stripe payment integration",
              "Handled 500+ concurrent users with Redis caching and optimized queries",
            ]}
          />
        </MinimalSection>
      </main>
    </div>
  );
}

function SidebarSection({ head, children }) {
  return (
    <div className="mb-[22px]">
      <div className="text-[8.5px] font-bold tracking-[0.14em] uppercase text-[#c85a2a] mb-[9px]">
        {head}
      </div>
      {children}
    </div>
  );
}
function MinimalSection({ head, children }) {
  return (
    <div className="mt-[18px]">
      <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#1a1a1a] border-b-[1.5px] border-[#1a1a1a] pb-[4px] mb-[10px]">
        {head}
      </div>
      {children}
    </div>
  );
}
function MinimalExpItem({ company, date, role, bullets }) {
  return (
    <div className="mb-[12px]">
      <div className="flex justify-between items-baseline">
        <span className="text-[11.5px] font-semibold text-[#0f0e0d]">
          {company}
        </span>

        <span className="font-['DM_Mono',monospace] text-[9.5px] text-[#999]">
          {date}
        </span>
      </div>

      <div className="text-[10.5px] text-[#c85a2a] font-medium mt-[1px]">
        {role}
      </div>

      <ul className="pl-[13px] mt-[4px] list-disc">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[10.5px] text-[#333] leading-[1.6] mb-[2px]">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
