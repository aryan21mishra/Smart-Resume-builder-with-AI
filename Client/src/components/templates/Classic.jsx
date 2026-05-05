export default function ClassicTemplate() {
  return (
    <div className="w-full bg-white rounded-xs shadow-[0_24px_80px_rgba(10,9,8,0.16),_0_4px_16px_rgba(10,9,8,0.08)] pt-[52px] px-[60px] pb-[60px] font-['Source_Serif_4','Times_New_Roman',Georgia,serif] text-[#111]">
      {/* Header */}
      <div className="text-center mb-[18px]">
        <div className="font-['Playfair_Display','Times_New_Roman',serif] text-[34px] font-bold tracking-[2px] uppercase text-[#0d0d0d]">
          Arjun Sharma
        </div>
        <div className="font-['Playfair_Display',serif] text-[13px] italic text-[#555] mt-[5px]">
          Full Stack Developer
        </div>
        <div className="flex items-center justify-center flex-wrap mt-[10px] text-[11px] text-[#555]">
          {[
            "arjun.sharma@email.com",
            "+91 98765 43210",
            "Bengaluru, India",
            "linkedin.com/in/arjun",
            "github.com/arjuns",
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center">
              {item}
              {i < arr.length - 1 && (
                <span className="mx-[10px] text-[#bbb]">|</span>
              )}
            </span>
          ))}
        </div>
        <hr className="mt-[14px] border-0 border-t-2 border-[#111]" />
        <hr className="mt-[3px] border-0 border-t-[0.5px] border-[#555]" />
      </div>

      {/* Objective */}
      <ClassicSection head="Objective">
        <p className="text-[11.5px] leading-[1.65] text-[#222] text-justify">
          Final-year B.Tech Computer Science student seeking a full-time
          Software Development Engineer role. Demonstrated experience building
          production-grade full-stack applications using React, Node.js, and
          cloud infrastructure. Passionate about writing clean, maintainable
          code and solving complex engineering challenges at scale.
        </p>
      </ClassicSection>

      {/* Experience */}
      <ClassicSection head="Professional Experience">
        <ClassicExpItem
          company="TechCorp Pvt. Ltd."
          role="Software Engineering Intern"
          date="June 2024 – Present"
          location="Bengaluru, Karnataka, India"
          bullets={[
            "Developed and maintained RESTful APIs using Node.js and Express, reducing response time by 38%",
            "Built a reusable React component library that was adopted across 5 internal products",
            "Integrated CI/CD pipelines with GitHub Actions and AWS CodeDeploy, reducing deployment time by 60%",
            "Participated in daily standups, sprint planning, and retrospectives using Agile/Scrum methodology",
          ]}
        />
        <ClassicExpItem
          company="StartupX Technologies"
          role="Frontend Developer Intern"
          date="December 2023 – May 2024"
          location="Remote"
          bullets={[
            "Rebuilt core dashboard UI in React and TypeScript, improving page load time by 52%",
            "Implemented real-time push notifications using WebSockets serving 1,200+ concurrent users",
            "Reduced JavaScript bundle size by 40% through code splitting and lazy loading",
          ]}
        />
      </ClassicSection>

      {/* Education */}
      <ClassicSection head="Education">
        <div className="flex justify-between items-baseline mb-2">
          <div>
            <div className="text-[12px] font-bold text-[#0d0d0d]">
              Bachelor of Technology — Computer Science &amp; Engineering
            </div>
            <div className="text-[11.5px] text-[#555] italic mt-[1px]">
              VIT University, Vellore
            </div>
          </div>
          <div className="text-right text-[11px] text-[#666]">
            <div>2021 – 2025</div>
            <div className="text-[#1a5c32] font-bold">CGPA: 8.7 / 10</div>
          </div>
        </div>
      </ClassicSection>

      {/* Two-col: Projects + Skills */}
      <div className="grid grid-cols-2 gap-7 mb-4.5">
        {/* Projects */}
        <div>
          <ClassicSectionHead>Projects</ClassicSectionHead>
          <ClassicExpItem
            company="Smart Resume Builder"
            date="2025"
            sublabel="React · Node.js · Claude API · PostgreSQL"
            bullets={[
              "AI-powered resume builder with ATS scoring and real-time feedback",
              "Claude API integration for keyword analysis and section rewriting",
            ]}
          />
          <ClassicExpItem
            company="E-Commerce Platform"
            date="2024"
            sublabel="Next.js · Stripe · MongoDB · Redis"
            bullets={[
              "Full-stack platform with real-time inventory and Stripe payments",
              "Handled 500+ concurrent users with Redis caching",
            ]}
          />
        </div>

        {/* Skills + Certs */}
        <div>
          <ClassicSectionHead>Technical Skills</ClassicSectionHead>
          <p style={{ fontSize: "11.5px", lineHeight: 1.7, color: "#222" }}>
            <strong>Languages:</strong> JavaScript, TypeScript, Python, SQL
            <br />
            <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, HTML5,
            CSS3
            <br />
            <strong>Backend:</strong> Node.js, Express.js, GraphQL, REST APIs
            <br />
            <strong>Database:</strong> PostgreSQL, MongoDB, Redis, Prisma ORM
            <br />
            <strong>DevOps:</strong> Docker, AWS (EC2, S3), GitHub Actions,
            CI/CD
            <br />
            <strong>Tools:</strong> Git, Figma, Postman, VS Code, Jira
            <br />
            <strong>Methodology:</strong> Agile, Scrum, TDD
          </p>

          <ClassicSectionHead style={{ marginTop: "16px" }}>
            Certifications
          </ClassicSectionHead>
          <p style={{ fontSize: "11.5px", lineHeight: 1.7, color: "#222" }}>
            AWS Certified Developer Associate — Amazon Web Services, 2024
            <br />
            Meta Frontend Developer Certificate — Coursera, 2023
          </p>
        </div>
      </div>
    </div>
  );
}

function ClassicSectionHead({ children, style }) {
  return (
    <div
      className="font-['Playfair_Display',serif] text-[13px] font-bold tracking-[0.1em] uppercase text-[#0d0d0d] border-b-[1.5px] border-[#111] pb-[4px] mb-[10px]"
      style={style}>
      {children}
    </div>
  );
}
function ClassicSection({ head, children }) {
  return (
    <div className="mt-4/5">
      <ClassicSectionHead>{head}</ClassicSectionHead>
      {children}
    </div>
  );
}
function ClassicExpItem({ company, role, date, location, sublabel, bullets }) {
  return (
    <div className="mb-3" style={{ marginBottom: "12px" }}>
      <div className="flex justify-between items-baseline">
        <div className="flex-1">
          <span className="text-xs font-bold text-[#0d0d0d]">{company}</span>
          {role && (
            <>
              <span className="text-[#555] mx-1.25">—</span>
              <span className="text-xs text-[#333] italic">{role}</span>
            </>
          )}
        </div>
        <span className="text-[11px] text-[#666] whitespace-nowrap ml-[12px]">
          {date}
        </span>
      </div>
      {location && (
        <div className="text-[10.5px] text-[#888] mt-[1px]">{location}</div>
      )}
      {sublabel && (
        <div className="text-[10.5px] text-[#888] mt-[1px]">{sublabel}</div>
      )}
      <ul className="pl-[18px] mt-[4px] list-disc">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[11.5px] leading-[1.6] text-[#222] mb-[2px]">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
