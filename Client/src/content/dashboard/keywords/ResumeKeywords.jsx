import React, { useState } from "react";
import {
  RiFocus3Line,
  RiListCheck,
  RiDashboard3Line,
  RiArrowDownSLine,
  RiFileTextLine,
  RiCpuLine,
  RiCheckDoubleLine,
  RiAlertLine,
  RiLightbulbLine
} from "@remixicon/react";
import { useGetAllResumeQuery } from "@/hooks/queries/useResumeQueries";
import { Button } from "@/components/ui";
import { toast } from "sonner";

// Predefined catalog of common technical and professional keywords to check for
const KEYWORDS_DICTIONARY = [
  "React", "React.js", "Next.js", "Vue", "Angular", "Svelte",
  "Node.js", "Express", "NestJS", "Django", "Flask", "FastAPI",
  "Spring Boot", "Ruby on Rails", "Laravel", "ASP.NET",
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Ruby", "PHP", "SQL",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "Firebase",
  "Git", "GitHub", "Docker", "Kubernetes", "AWS", "Google Cloud", "GCP", "Azure", "Terraform",
  "REST API", "GraphQL", "WebSockets", "Microservices", "CI/CD", "Jenkins",
  "Machine Learning", "Deep Learning", "NLP", "AI", "PyTorch", "TensorFlow", "Pandas",
  "Unit Testing", "Jest", "Cypress", "Selenium", "TDD", "Agile", "Scrum", "Jira", "System Design",
  "UI/UX", "Tailwind CSS", "Bootstrap", "Webpack", "Vite"
];

// Serializes backend resume schema structure to plain text
const serializeResumeToText = (resume) => {
  if (!resume) return "";
  let text = "";
  if (resume.title) text += `Title: ${resume.title}\n\n`;

  if (resume.personalInfo) {
    const p = resume.personalInfo;
    text += `PERSONAL:\nName: ${p.firstName || ""} ${p.lastName || ""}\nSummary: ${p.summary || ""}\n\n`;
  }

  if (resume.experience && resume.experience.length > 0) {
    text += `EXPERIENCE:\n`;
    resume.experience.forEach((exp) => {
      text += `- Role: ${exp.title || ""}\n  Company: ${exp.company || ""}\n  Description: ${exp.description || ""}\n`;
    });
    text += `\n`;
  }

  if (resume.education && resume.education.length > 0) {
    text += `EDUCATION:\n`;
    resume.education.forEach((edu) => {
      text += `- School: ${edu.institution || ""}\n  Degree: ${edu.degree || ""}\n`;
    });
    text += `\n`;
  }

  if (resume.skills) {
    const sk = resume.skills;
    const technical = Array.isArray(sk.technical) ? sk.technical.join(", ") : sk.technical || "";
    const soft = Array.isArray(sk.soft) ? sk.soft.join(", ") : sk.soft || "";
    const tools = Array.isArray(sk.tools) ? sk.tools.join(", ") : sk.tools || "";
    const languages = Array.isArray(sk.languages) ? sk.languages.join(", ") : sk.languages || "";
    text += `SKILLS:\nTechnical: ${technical}\nSoft: ${soft}\nTools: ${tools}\nLanguages: ${languages}\n\n`;
  }

  if (resume.projects && resume.projects.length > 0) {
    text += `PROJECTS:\n`;
    resume.projects.forEach((proj) => {
      text += `- Project: ${proj.name || ""}\n  Description: ${proj.description || ""}\n  Tech: ${Array.isArray(proj.tech) ? proj.tech.join(", ") : proj.tech || ""}\n`;
    });
    text += `\n`;
  }

  if (resume.certifications && resume.certifications.length > 0) {
    text += `CERTIFICATIONS:\n`;
    resume.certifications.forEach((c) => {
      text += `- Name: ${c.name || ""}\n  Issuer: ${c.issuer || ""}\n`;
    });
    text += `\n`;
  }

  return text;
};

const ResumeKeywords = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  
  // Scanning state
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState("");
  const [results, setResults] = useState(null);

  // Coming Soon Overlay State
  const [showOverlay, setShowOverlay] = useState(true);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch website resumes list
  const { data: resumesList, isLoading: resumesLoading } = useGetAllResumeQuery();
  const resumes = resumesList || [];

  const handleSelectResume = (resume) => {
    setSelectedResume(resume);
    setShowDropdown(false);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitted(true);
    toast.success("Thank you! You've been added to the waitlist.");
  };

  const runKeywordAudit = () => {
    if (!selectedResume) {
      toast.error("Please select a resume first.");
      return;
    }
    if (!jobDescription || jobDescription.trim() === "") {
      toast.error("Please paste the target job description.");
      return;
    }

    setIsScanning(true);
    setResults(null);

    // Simulate multi-phase scan steps
    const steps = [
      "Tokenizing job description...",
      "Extracting key skill requirements...",
      "Serializing selected resume...",
      "Evaluating keyword matches and weight density...",
      "Compiling final audit reports..."
    ];

    let currentStepIdx = 0;
    setScanStep(steps[currentStepIdx]);

    const interval = setInterval(() => {
      currentStepIdx++;
      if (currentStepIdx < steps.length) {
        setScanStep(steps[currentStepIdx]);
      } else {
        clearInterval(interval);
        
        // Run keyword match algorithm in client
        const jdUpper = jobDescription.toUpperCase();
        const resumeText = serializeResumeToText(selectedResume);
        const resumeUpper = resumeText.toUpperCase();

        // Find which keywords in our dictionary are present in the JD
        const targetKeywords = KEYWORDS_DICTIONARY.filter(keyword => {
          const regex = new RegExp(`\\b${keyword.replace(".", "\\.")}\\b`, "i");
          return regex.test(jdUpper);
        });

        if (targetKeywords.length === 0) {
          // If no keywords matched, seed default ones based on JD content or general ones
          // Just fall back to a small general list
          targetKeywords.push("React", "Node.js", "TypeScript", "Git", "REST API");
        }

        // Check which target keywords are present in the resume
        const present = [];
        const missing = [];

        targetKeywords.forEach(keyword => {
          const regex = new RegExp(`\\b${keyword.replace(".", "\\.")}\\b`, "i");
          if (regex.test(resumeUpper)) {
            present.push(keyword);
          } else {
            missing.push(keyword);
          }
        });

        // Calculate score
        const score = Math.round((present.length / targetKeywords.length) * 100);

        // Generate context recommendations
        const recommendations = missing.slice(0, 3).map(kw => {
          return {
            keyword: kw,
            suggestion: `Add '${kw}' contextually. E.g. "Developed scalable features using ${kw} to improve maintainability."`
          };
        });

        setResults({
          score,
          present,
          missing,
          recommendations
        });
        setIsScanning(false);
        toast.success("Keyword scan completed successfully!");
      }
    }, 550);
  };

  return (
    <div className="relative w-full min-h-screen bg-zinc-950 text-zinc-50 p-6 lg:p-12 antialiased selection:bg-white selection:text-black">
      {/* ====== COMING SOON OVERLAY ====== */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 backdrop-blur-md p-6">
          <div className="max-w-md w-full bg-zinc-900/90 border border-zinc-850 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Icon with gradient ring */}
            <div className="relative mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="absolute inset-0 rounded-2xl border border-purple-500/30 animate-pulse" />
              <RiCpuLine className="h-8 w-8 text-purple-400" />
            </div>

            <div className="space-y-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-950/50 text-[10px] text-purple-400 font-semibold tracking-wider border border-purple-900 uppercase">
                Feature Preview
              </span>
              <h2 className="font-montserratBold text-2xl text-white tracking-tight">
                AI Keyword Optimizer
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                We are building a powerful ATS sequence matcher to scan resumes, identify missing keywords, and suggest perfect phrasing to bypass automatic screening.
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-850 space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Coming Soon to Smart Resume Builder
                </span>
                
                {!isSubmitted ? (
                  <form onSubmit={handleWaitlistSubmit} className="flex gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-850 focus-within:border-zinc-700 transition">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email for early access"
                      className="bg-transparent border-none text-xs text-zinc-200 focus:outline-none flex-1 px-3"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold px-4 py-2 rounded-lg transition whitespace-nowrap cursor-pointer"
                    >
                      Notify Me
                    </button>
                  </form>
                ) : (
                  <div className="p-3 bg-purple-950/30 border border-purple-900/30 rounded-xl text-xs text-purple-400 font-medium">
                    ✨ You have been added to the waitlist!
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowOverlay(false)}
                className="text-[11px] font-semibold text-zinc-400 hover:text-white underline decoration-zinc-700 hover:decoration-white transition underline-offset-4 cursor-pointer"
              >
                Explore Interactive Preview Interface
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====== HEADER ====== */}
      <div className="mb-10 max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-zinc-900 pb-8">
        <div className="max-w-xl">
          <h1 className="font-montserratBold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 text-3xl lg:text-4xl tracking-tight mb-2 flex items-center gap-2 flex-wrap">
            <span>Keyword Optimizer</span>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-950/40 text-[10px] text-purple-400 font-mono tracking-wider border border-purple-900/50">
              COMING SOON
            </span>
          </h1>
          <p className="text-sm font-montserratRegular text-zinc-400 leading-relaxed">
            Audit your resume keyword density against job descriptions. Match automatic Applicant Tracking System (ATS) criteria sequences.
          </p>
        </div>
      </div>

      {/* ====== CORE CONTENT GRID ====== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Parameters Form */}
        <section className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-5 backdrop-blur-md">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Audit Parameters
            </h2>

            {/* Resume Select Dropdown */}
            <div className="space-y-2 relative">
              <label className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                Select Resume
              </label>
              
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full h-11 bg-zinc-950 border border-zinc-850 hover:border-zinc-700 rounded-xl px-4 flex items-center justify-between text-xs font-medium text-zinc-200 transition-all cursor-pointer"
              >
                {selectedResume ? (
                  <div className="flex items-center gap-2">
                    <RiFileTextLine className="h-4 w-4 text-purple-400" />
                    <span>{selectedResume.title}</span>
                  </div>
                ) : (
                  <span className="text-zinc-500">Choose from website resumes...</span>
                )}
                <RiArrowDownSLine className={`h-4 w-4 text-zinc-400 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Items Box */}
              {showDropdown && (
                <div className="absolute top-[72px] inset-x-0 bg-zinc-950 border border-zinc-900 rounded-xl shadow-2xl p-1.5 space-y-1 z-50 max-h-[160px] overflow-y-auto">
                  {resumesLoading ? (
                    <div className="text-[11px] text-zinc-500 p-2 font-mono">Loading resumes...</div>
                  ) : resumes.length === 0 ? (
                    <div className="text-[11px] text-zinc-500 p-2 font-mono">No resumes found. Create one first!</div>
                  ) : (
                    resumes.map((resume) => (
                      <button
                        key={resume._id}
                        type="button"
                        onClick={() => handleSelectResume(resume)}
                        className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition cursor-pointer flex items-center gap-2"
                      >
                        <RiFileTextLine className="h-3.5 w-3.5 text-zinc-500" />
                        <span className="truncate">{resume.title}</span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Job Description Textarea */}
            <div className="space-y-2">
              <label className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                Target Job Description
              </label>
              <textarea
                rows={8}
                placeholder="Paste the complete job description here to analyze missing core keyword variables..."
                className="w-full bg-zinc-950 border border-zinc-850 rounded-xl p-4 text-xs text-zinc-300 focus:outline-none focus:border-white transition resize-none font-sans"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            {/* Run Button */}
            <Button
              type="button"
              onClick={runKeywordAudit}
              disabled={isScanning || !selectedResume || !jobDescription}
              className="w-full h-11 bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
            >
              <RiCpuLine className={`h-4 w-4 ${isScanning ? "animate-spin" : ""}`} />
              <span>{isScanning ? "Evaluating Stream..." : "Run Audit Scan"}</span>
            </Button>
          </div>
        </section>

        {/* Right Side: Audit Reports Visual Stage */}
        <section className="lg:col-span-7">
          {/* CONDITION 1: IDLE */}
          {!isScanning && !results && (
            <div className="h-full min-h-[400px] border border-dashed border-zinc-850 bg-zinc-900/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-6">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-xl border border-zinc-800 bg-zinc-900/20">
                <div className="absolute inset-0 rounded-xl border border-white/20 animate-ping opacity-25" />
                <RiFocus3Line size={24} className="text-white animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-200">
                  Keywords Optimizer Idle
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                  Configure your resume and copy the job description on the left to initiate the ATS pattern matcher.
                </p>
              </div>
            </div>
          )}

          {/* CONDITION 2: SCANNING */}
          {isScanning && (
            <div className="h-full min-h-[400px] border border-zinc-850 bg-zinc-900/40 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-6">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Outer spin borders */}
                <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-purple-500 rounded-full animate-spin duration-700" />
                <div className="absolute inset-2 border border-transparent border-b-white border-l-white rounded-full animate-spin-slow" />
                <RiCpuLine className="h-8 w-8 text-white animate-pulse" />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                  Scanning Repository
                </h4>
                <p className="text-xs text-zinc-400 font-mono animate-pulse">
                  {scanStep}
                </p>
              </div>
            </div>
          )}

          {/* CONDITION 3: SCAN COMPLETED SUMMARY */}
          {results && (
            <div className="space-y-6 animate-fade-in">
              {/* Score dashboard and recommendations */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Circular score dial indicator */}
                <div className="md:col-span-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* SVG Progress Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="rgba(39, 39, 42, 0.5)"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="url(#purpleGradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={263.89}
                        strokeDashoffset={263.89 - (263.89 * results.score) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#c084fc" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-black text-white font-mono tracking-tighter">
                        {results.score}%
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-500 font-mono">
                        KEYWORDS MATCH
                      </span>
                    </div>
                  </div>

                  <span className={`mt-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                    results.score >= 80 
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : results.score >= 50
                        ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                        : "text-red-400 bg-red-500/10 border-red-500/20"
                  }`}>
                    {results.score >= 80 ? "Optimized profile" : results.score >= 50 ? "Moderate profile gap" : "Critical gap weight"}
                  </span>
                </div>

                {/* Score narrative summary */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center gap-1.5">
                    <RiCheckDoubleLine className="h-4 w-4 text-purple-400" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Evaluation Report
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Out of the core technology keywords requested inside the target role description, your profile matches <strong className="text-white">{results.present.length}</strong> and misses <strong className="text-white">{results.missing.length}</strong>. 
                    {results.score >= 80 
                      ? " Excellent job! Your resume has very high keyword matches which will easily bypass standard ATS keyword index weights."
                      : " Inject the suggested terms into your experience description paragraphs to maximize keyword density scores."}
                  </p>
                </div>
              </div>

              {/* Keyword comparison split boards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Missing Keywords Column */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center gap-1.5 text-red-400">
                    <RiAlertLine className="h-4 w-4" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Gaps ({results.missing.length})
                    </h3>
                  </div>

                  {results.missing.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {results.missing.map((kw, i) => (
                        <span
                          key={i}
                          className="text-xs bg-red-950/20 text-red-400 border border-dashed border-red-900/50 px-2 py-1 rounded-lg"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-500 italic">No missing keywords found.</p>
                  )}
                </div>

                {/* Identified Keywords Column */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <RiCheckDoubleLine className="h-4 w-4" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Identified ({results.present.length})
                    </h3>
                  </div>

                  {results.present.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {results.present.map((kw, i) => (
                        <span
                          key={i}
                          className="text-xs bg-emerald-950/10 text-emerald-400 border border-emerald-900/40 px-2 py-1 rounded-lg"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-500 italic font-mono">No matches scanned.</p>
                  )}
                </div>
              </div>

              {/* Suggested Phrasing Box */}
              {results.recommendations.length > 0 && (
                <div className="bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden">
                  <div className="p-4 border-b border-zinc-850 flex items-center gap-2">
                    <RiLightbulbLine className="h-4 w-4 text-purple-400" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Interactive Phrasing Guides
                    </h3>
                  </div>
                  <div className="divide-y divide-zinc-850">
                    {results.recommendations.map((rec, i) => (
                      <div key={i} className="p-4 flex items-start gap-3.5 hover:bg-zinc-900/30 transition-colors">
                        <span className="font-mono text-xs text-purple-400 pt-0.5 font-bold">
                          {(i + 1).toString().padStart(2, "0")}/
                        </span>
                        <div className="space-y-1">
                          <span className="inline-block px-1.5 py-0.5 bg-red-950/30 border border-red-900/30 text-[9px] font-mono text-red-400 rounded uppercase font-bold">
                            MISSING: {rec.keyword}
                          </span>
                          <p className="text-xs text-zinc-400 leading-relaxed italic">
                            "{rec.suggestion}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ResumeKeywords;
