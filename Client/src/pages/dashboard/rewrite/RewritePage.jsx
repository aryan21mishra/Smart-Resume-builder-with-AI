import React, { useState } from "react";
import {
  RiCpuLine,
  RiArrowDownSLine,
  RiFileTextLine,
  RiClipboardLine,
  RiSparklingLine,
  RiRefreshLine,
} from "@remixicon/react";
import { useGetAllResumeQuery } from "@/hooks/queries/useResumeQueries";
import { Button } from "@/components/ui";
import { toast } from "sonner";

const REWRITE_TONES = [
  {
    id: "star",
    name: "STAR Format",
    desc: "Focuses on Situation, Task, Action, Result",
  },
  {
    id: "metrics",
    name: "Quantified Metrics",
    desc: "Injects placeholders to showcase growth/impact",
  },
  {
    id: "corporate",
    name: "Executive Tone",
    desc: "Uses formal, high-impact leadership verbs",
  },
  {
    id: "technical",
    name: "Technical Depth",
    desc: "Accentuates core stack proficiency and domain terms",
  },
];

const RESUME_SECTIONS = [
  { id: "summary", name: "Professional Summary" },
  { id: "experience", name: "Work Experience Item" },
  { id: "project", name: "Project Highlight" },
  { id: "skills", name: "Skills/Certifications" },
];

const RewritePage = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
  const [selectedSection, setSelectedSection] = useState("experience");
  const [selectedTone, setSelectedTone] = useState("star");
  const [inputText, setInputText] = useState("");

  // Scanning state
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState("");
  const [rewriteResult, setRewriteResult] = useState(null);

  // Coming Soon Overlay State
  const [showOverlay, setShowOverlay] = useState(true);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch website resumes list
  const { data: resumesList, isLoading: resumesLoading } =
    useGetAllResumeQuery();
  const resumes = resumesList || [];

  const handleSelectResume = (resume) => {
    setSelectedResume(resume);
    setShowResumeDropdown(false);
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

  const runAiRewrite = () => {
    if (!inputText || inputText.trim() === "") {
      toast.error("Please enter the text you want to rewrite.");
      return;
    }

    setIsProcessing(true);
    setRewriteResult(null);

    const steps = [
      "Analyzing semantic structure...",
      "Extracting weak verbs and passive voice...",
      "Integrating professional STAR variables...",
      "Applying targeted tone weights...",
      "Formatting side-by-side revisions...",
    ];

    let currentStepIdx = 0;
    setProcessStep(steps[currentStepIdx]);

    const interval = setInterval(() => {
      currentStepIdx++;
      if (currentStepIdx < steps.length) {
        setProcessStep(steps[currentStepIdx]);
      } else {
        clearInterval(interval);

        // Simple client-side replacement algorithm to make it look active
        let rewritten = inputText;

        // Lowercase for checking, but we replace contextually
        const replacements = [
          {
            regex: /\b(worked on|help with|helped on)\b/gi,
            replacement: "architected and co-delivered",
          },
          {
            regex: /\b(responsible for|tasked to)\b/gi,
            replacement: "accountable for driving the engineering lifecycle of",
          },
          {
            regex: /\b(fixed|solved)\b/gi,
            replacement: "optimized and resolved critical bottlenecks within",
          },
          {
            regex: /\b(made|built|developed)\b/gi,
            replacement: "pioneered the engineering and deployment of",
          },
          {
            regex: /\b(led|run|guided)\b/gi,
            replacement: "spearheaded and managed the execution of",
          },
          {
            regex: /\b(managed to get|achieved)\b/gi,
            replacement:
              "successfully delivered measurable growth, resulting in",
          },
        ];

        replacements.forEach(({ regex, replacement }) => {
          rewritten = rewritten.replace(regex, replacement);
        });

        // Add tone specific adjustments
        if (selectedTone === "metrics") {
          rewritten +=
            " [resulting in a +35% improvement in processing efficiency and a 20% reduction in cloud cost footprints]";
        } else if (selectedTone === "technical") {
          rewritten +=
            " using automated CI/CD pipelines, containerized microservices, and modular design patterns to ensure maximum reliability.";
        } else if (selectedTone === "star") {
          rewritten =
            "Spearheaded initiative: " +
            rewritten +
            " to resolve operational overhead, successfully reducing manual workloads by [X]%.";
        } else if (selectedTone === "corporate") {
          rewritten =
            "Directly championed the strategy to: " +
            rewritten +
            ", leveraging agile practices to ensure high-impact alignment with core enterprise milestones.";
        }

        // Calculate visual scores
        const originalScore = Math.floor(Math.random() * 20) + 40; // 40-60
        const improvedScore = Math.floor(Math.random() * 20) + 78; // 78-98

        setRewriteResult({
          originalText: inputText,
          improvedText: rewritten,
          originalScore,
          improvedScore,
          changesDetected:
            replacements.filter(({ regex }) => regex.test(inputText)).length +
            1,
        });

        setIsProcessing(false);
        toast.success("AI suggestion generated!");
      }
    }, 550);
  };

  const handleCopy = () => {
    if (rewriteResult) {
      navigator.clipboard.writeText(rewriteResult.improvedText);
      toast.success("Copied to clipboard!");
    }
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
                AI Resume Rewriter
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                We are building an intelligent inline assistant to instantly
                rewrite weak statements, highlight achievements, and format
                impact bullets.
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-850 space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Coming Soon to Smart Resume Builder
                </span>

                {!isSubmitted ? (
                  <form
                    onSubmit={handleWaitlistSubmit}
                    className="flex gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-850 focus-within:border-zinc-700 transition">
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
                      className="bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold px-4 py-2 rounded-lg transition whitespace-nowrap cursor-pointer">
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
                className="text-[11px] font-semibold text-zinc-400 hover:text-white underline decoration-zinc-700 hover:decoration-white transition underline-offset-4 cursor-pointer">
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
            <span>AI Resume Rewriter</span>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-950/40 text-[10px] text-purple-400 font-mono tracking-wider border border-purple-900/50">
              COMING SOON
            </span>
          </h1>
          <p className="text-sm font-montserratRegular text-zinc-400 leading-relaxed">
            Instantly replace passive wording, enhance technical clarity, and
            inject measurable achievements into your resume section entries.
          </p>
        </div>
      </div>

      {/* ====== CORE CONTENT GRID ====== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Parameters Form */}
        <section className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-5 backdrop-blur-md">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Rewrite Options
            </h2>

            {/* Resume Select Dropdown */}
            <div className="space-y-2 relative">
              <label className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                Select Resume (Optional)
              </label>

              <button
                type="button"
                onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                className="w-full h-11 bg-zinc-950 border border-zinc-850 hover:border-zinc-700 rounded-xl px-4 flex items-center justify-between text-xs font-medium text-zinc-200 transition-all cursor-pointer">
                {selectedResume ? (
                  <div className="flex items-center gap-2">
                    <RiFileTextLine className="h-4 w-4 text-purple-400" />
                    <span>{selectedResume.title}</span>
                  </div>
                ) : (
                  <span className="text-zinc-500">Select target resume...</span>
                )}
                <RiArrowDownSLine
                  className={`h-4 w-4 text-zinc-400 transition-transform ${showResumeDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Items Box */}
              {showResumeDropdown && (
                <div className="absolute top-[72px] inset-x-0 bg-zinc-950 border border-zinc-900 rounded-xl shadow-2xl p-1.5 space-y-1 z-50 max-h-[160px] overflow-y-auto">
                  {resumesLoading ? (
                    <div className="text-[11px] text-zinc-500 p-2 font-mono">
                      Loading resumes...
                    </div>
                  ) : resumes.length === 0 ? (
                    <div className="text-[11px] text-zinc-500 p-2 font-mono">
                      No resumes found.
                    </div>
                  ) : (
                    resumes.map((resume) => (
                      <button
                        key={resume._id}
                        type="button"
                        onClick={() => handleSelectResume(resume)}
                        className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition cursor-pointer flex items-center gap-2">
                        <RiFileTextLine className="h-3.5 w-3.5 text-zinc-500" />
                        <span className="truncate">{resume.title}</span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Target Section */}
            <div className="space-y-2">
              <label className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                Resume Target Section
              </label>
              <div className="grid grid-cols-2 gap-2">
                {RESUME_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSelectedSection(sec.id)}
                    className={`h-9 text-xs rounded-xl border transition-all cursor-pointer font-medium ${
                      selectedSection === sec.id
                        ? "bg-white text-black border-white"
                        : "bg-zinc-950 text-zinc-400 border-zinc-850 hover:border-zinc-700"
                    }`}>
                    {sec.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone Selector */}
            <div className="space-y-2">
              <label className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                Desired Rewrite Tone
              </label>
              <div className="space-y-2">
                {REWRITE_TONES.map((tone) => (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => setSelectedTone(tone.id)}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                      selectedTone === tone.id
                        ? "bg-purple-950/20 border-purple-500/50"
                        : "bg-zinc-950 border-zinc-850 hover:border-zinc-800"
                    }`}>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-semibold ${selectedTone === tone.id ? "text-purple-400" : "text-zinc-200"}`}>
                        {tone.name}
                      </span>
                      {selectedTone === tone.id && (
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                      )}
                    </div>
                    <p className="text-[10px] text-zinc-500 leading-snug">
                      {tone.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input Area */}
            <div className="space-y-2">
              <label className="block text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                Original Text
              </label>
              <textarea
                rows={5}
                placeholder="Paste the statement you want to optimize. E.g., 'worked on a system that helped with server efficiency...'"
                className="w-full bg-zinc-950 border border-zinc-850 rounded-xl p-4 text-xs text-zinc-300 focus:outline-none focus:border-white transition resize-none font-sans"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            {/* Run Button */}
            <Button
              type="button"
              onClick={runAiRewrite}
              disabled={isProcessing || !inputText}
              className="w-full h-11 bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40">
              <RiCpuLine
                className={`h-4 w-4 ${isProcessing ? "animate-spin" : ""}`}
              />
              <span>
                {isProcessing ? "Analyzing Text..." : "Rewrite Statement"}
              </span>
            </Button>
          </div>
        </section>

        {/* Right Side: AI Output Box */}
        <section className="lg:col-span-7">
          {/* CONDITION 1: IDLE */}
          {!isProcessing && !rewriteResult && (
            <div className="h-full min-h-[400px] border border-dashed border-zinc-850 bg-zinc-900/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-6">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-xl border border-zinc-800 bg-zinc-900/20">
                <div className="absolute inset-0 rounded-xl border border-white/20 animate-ping opacity-25" />
                <RiSparklingLine
                  size={24}
                  className="text-white animate-pulse"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-200">
                  AI Rewriter Idle
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                  Enter your draft text and choose your target style parameters
                  to see instant improvements.
                </p>
              </div>
            </div>
          )}

          {/* CONDITION 2: PROCESSING */}
          {isProcessing && (
            <div className="h-full min-h-[400px] border border-zinc-850 bg-zinc-900/40 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-6">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-purple-500 rounded-full animate-spin duration-700" />
                <div className="absolute inset-2 border border-transparent border-b-white border-l-white rounded-full animate-spin-slow" />
                <RiCpuLine className="h-8 w-8 text-white animate-pulse" />
              </div>
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                  AI Process Pipeline
                </h4>
                <p className="text-xs text-zinc-400 font-mono animate-pulse">
                  {processStep}
                </p>
              </div>
            </div>
          )}

          {/* CONDITION 3: GENERATED RESPONSE */}
          {rewriteResult && (
            <div className="space-y-6 animate-fade-in">
              {/* Score comparisons */}
              <div className="bg-zinc-900 border border-zinc-850 rounded-2xl p-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-zinc-950/40 border border-zinc-850 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Before
                  </span>
                  <div className="text-2xl font-bold font-mono text-zinc-400">
                    {rewriteResult.originalScore}/100
                  </div>
                  <span className="text-[9px] text-zinc-500 block">
                    Baseline Impact
                  </span>
                </div>
                <div className="text-center p-4 bg-purple-950/10 border border-purple-500/20 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                    After AI
                  </span>
                  <div className="text-2xl font-bold font-mono text-purple-400">
                    {rewriteResult.improvedScore}/100
                  </div>
                  <span className="text-[9px] text-purple-400/70 block">
                    Optimized Score
                  </span>
                </div>
              </div>

              {/* Rewrite Output Card */}
              <div className="bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-zinc-850 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RiSparklingLine className="h-4 w-4 text-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                      Optimized Suggestion
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-800 cursor-pointer">
                    <RiClipboardLine className="h-3.5 w-3.5" />
                    <span>Copy Text</span>
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-xl font-mono text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap select-all selection:bg-purple-500 selection:text-white">
                    {rewriteResult.improvedText}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span>
                      Active vocabulary optimizations:{" "}
                      {rewriteResult.changesDetected}
                    </span>
                    <span className="text-purple-400/80 font-medium">
                      Ready to apply to your resume drafts
                    </span>
                  </div>
                </div>
              </div>

              {/* Before comparison text block */}
              <div className="bg-zinc-900/40 border border-zinc-850 rounded-2xl p-5 space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Original Text Submitted
                </h4>
                <p className="text-xs text-zinc-400 line-through decoration-red-900/80 leading-relaxed italic">
                  {rewriteResult.originalText}
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RewritePage;
