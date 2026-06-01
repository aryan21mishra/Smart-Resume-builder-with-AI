import React from "react";

export default function ClassicTemplate() {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-white rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.05)] pt-14 px-12 pb-14 font-['Source_Serif_4','Times_New_Roman',Georgia,serif] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* ====== HEADER SECTION ====== */}
      <header className="text-center mb-6">
        <h1 className="font-['Playfair_Display','Times_New_Roman',serif] text-3xl font-extrabold tracking-widest uppercase text-zinc-950">
          Arjun Sharma
        </h1>
        <p className="font-['Playfair_Display',serif] text-xs uppercase tracking-widest text-zinc-500 italic mt-1.5">
          Full Stack Developer
        </p>

        {/* Contact Strip */}
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-[10px] tracking-wide text-zinc-600">
          <a href="mailto:arjun.sharma@email.com" className="hover:underline">
            arjun.sharma@email.com
          </a>
          <span className="text-zinc-300">|</span>
          <span>+91 98765 43210</span>
          <span className="text-zinc-300">|</span>
          <span>Bengaluru, India</span>
          <span className="text-zinc-300">|</span>
          <a
            href="https://linkedin.com/in/arjun"
            target="_blank"
            rel="noreferrer"
            className="hover:underline">
            linkedin.com/in/arjun
          </a>
          <span className="text-zinc-300">|</span>
          <a
            href="https://github.com/arjuns"
            target="_blank"
            rel="noreferrer"
            className="hover:underline">
            github.com/arjuns
          </a>
        </div>

        {/* Crisp Double Rule Separator line */}
        <div className="mt-4 space-y-[2px]">
          <div className="w-full h-[1.5px] bg-zinc-950" />
          <div className="w-full h-[0.5px] bg-zinc-400" />
        </div>
      </header>

      {/* ====== OBJECTIVE SECTION ====== */}
      <ClassicSection head="Objective">
        <p className="text-[11.5px] leading-relaxed text-zinc-800 text-justify font-normal">
          Final-year B.Tech Computer Science student seeking a full-time
          Software Development Engineer role. Demonstrated experience building
          production-grade full-stack applications using React, Node.js, and
          cloud infrastructure. Passionate about writing clean, maintainable
          code and solving complex engineering challenges at scale.
        </p>
      </ClassicSection>

      {/* ====== PROFESSIONAL EXPERIENCE ====== */}
      <ClassicSection head="Professional Experience">
        <ClassicExpItem
          company="TechCorp Pvt. Ltd."
          role="Software Engineering Intern"
          date="June 2024 – Present"
          location="Bengaluru, Karnataka, India"
          bullets={[
            "Developed and maintained RESTful APIs using Node.js and Express, reducing backend response latency overhead margins by 38%",
            "Built a modular, highly accessible React structural UI kit asset repository deployed uniformly across 5 internal products",
            "Integrated continuous validation pipelines using GitHub Actions and AWS CodeDeploy, decreasing production migration cycles by 60%",
            "Collaborated iteratively inside Agile development workflows containing daily standup synchronization parameters",
          ]}
        />
        <ClassicExpItem
          company="StartupX Technologies"
          role="Frontend Developer Intern"
          date="Dec 2023 – May 2024"
          location="Remote"
          bullets={[
            "Refactored complex state rendering systems inside core React and TypeScript views, gaining a 52% page-load speed acceleration factor",
            "Deployed real-time bi-directional pipeline notification structures with modern WebSockets answering 1,200+ parallel connections",
            "Engineered comprehensive performance optimization routines through code-splitting patterns reducing main asset bundles by 40%",
          ]}
        />
      </ClassicSection>

      {/* ====== EDUCATION SECTION ====== */}
      <ClassicSection head="Education">
        <div className="flex justify-between items-start text-left">
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-zinc-950 tracking-wide">
              Bachelor of Technology — Computer Science &amp; Engineering
            </h4>
            <p className="text-[11.5px] text-zinc-600 italic">
              VIT University, Vellore
            </p>
          </div>
          <div className="text-right font-mono text-[10.5px] text-zinc-500 space-y-1">
            <div className="font-semibold text-zinc-700">2021 – 2025</div>
            <div className="text-zinc-950 font-bold border border-zinc-950/10 px-1.5 py-0.5 rounded bg-zinc-50 inline-block">
              CGPA: 8.7 / 10
            </div>
          </div>
        </div>
      </ClassicSection>

      {/* ====== LOWER BALANCED MATRIX GRID ====== */}
      <div className="grid grid-cols-2 gap-8 mt-5 pt-1">
        {/* Left Column: Projects block */}
        <div className="space-y-4">
          <ClassicSectionHead>Projects</ClassicSectionHead>

          <ClassicExpItem
            company="Smart Resume Builder"
            date="2025"
            sublabel="React · Node.js · Claude API · PostgreSQL"
            bullets={[
              "AI-powered designer engine with parsing match validation metrics modules built internally",
              "Integrated LLM parsing pipelines handling asynchronous profile text structural rendering blocks",
            ]}
          />
          <ClassicExpItem
            company="E-Commerce Platform"
            date="2024"
            sublabel="Next.js · Stripe · MongoDB · Redis"
            bullets={[
              "Full-stack layout implementation tracking inventory systems paired with live transaction engines",
              "Maintained low latency speeds supporting 500+ micro transactions over localized caching nodes",
            ]}
          />
        </div>

        {/* Right Column: Skills & Credentials */}
        <div className="space-y-4">
          <div>
            <ClassicSectionHead>Technical Skills</ClassicSectionHead>
            <div className="text-[11.5px] leading-relaxed text-zinc-800 space-y-1">
              <p>
                <strong>Languages:</strong> JavaScript, TypeScript, Python, SQL
              </p>
              <p>
                <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS,
                HTML5, CSS3
              </p>
              <p>
                <strong>Backend:</strong> Node.js, Express.js, GraphQL, REST
                APIs
              </p>
              <p>
                <strong>Database:</strong> PostgreSQL, MongoDB, Redis, Prisma
                ORM
              </p>
              <p>
                <strong>DevOps:</strong> Docker, AWS (EC2, S3), GitHub Actions,
                CI/CD
              </p>
              <p>
                <strong>Tools:</strong> Git, Figma, Postman, VS Code, Jira
              </p>
            </div>
          </div>

          <div className="pt-2">
            <ClassicSectionHead>Certifications</ClassicSectionHead>
            <div className="text-[11.5px] leading-relaxed text-zinc-700 font-normal space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-zinc-900">
                  AWS Certified Developer Associate
                </span>
                <span className="font-mono text-[9px] text-zinc-400">2024</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-zinc-900">
                  Meta Frontend Developer Certificate
                </span>
                <span className="font-mono text-[9px] text-zinc-400">2023</span>
              </div>
            </div>
          </div>
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

      <ul className="pl-4 mt-2 list-disc space-y-1">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-[11.5px] leading-relaxed text-zinc-800 text-justify">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
