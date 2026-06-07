import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  ArrowUpRight, 
  Plus, 
  Code, 
  Zap, 
  Briefcase 
} from "lucide-react";
import { RiBardFill, RiCheckLine, RiCloseLine } from "@remixicon/react";

const HeroDashboardMockup = () => {
  const [activeTab, setActiveTab] = useState("builder"); // builder, score, match
  const [atsScore, setAtsScore] = useState(62);
  const [isFixing, setIsFixing] = useState(false);
  const [fixedItems, setFixedItems] = useState({
    kubernetes: false,
    impact: false,
    format: false
  });

  // Animate initial score load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (atsScore < 72 && !isFixing) {
        setAtsScore(72);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAiFix = () => {
    if (isFixing || atsScore >= 96) return;
    setIsFixing(true);
    
    // Simulate steps of AI fixing
    setTimeout(() => {
      setFixedItems(prev => ({ ...prev, kubernetes: true }));
      setAtsScore(81);
    }, 1000);

    setTimeout(() => {
      setFixedItems(prev => ({ ...prev, impact: true }));
      setAtsScore(91);
    }, 2000);

    setTimeout(() => {
      setFixedItems(prev => ({ ...prev, format: true }));
      setAtsScore(96);
      setIsFixing(false);
    }, 3000);
  };

  const resetSimulation = () => {
    setAtsScore(72);
    setFixedItems({
      kubernetes: false,
      impact: false,
      format: false
    });
    setIsFixing(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 bg-[#0c0c0e]/90 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-violet-950/10 backdrop-blur-xl relative z-20">
      {/* Top Window Bar */}
      <div className="bg-[#121215]/80 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="text-xs text-zinc-500 font-mono ml-4 select-none">AI-Workspace_v2.0.sh</span>
        </div>
        
        {/* Tab Controls */}
        <div className="flex bg-[#070708] p-0.5 rounded-lg border border-zinc-800/80">
          <button 
            onClick={() => setActiveTab("builder")}
            className={`px-3 py-1 text-xs rounded-md font-montserratMedium transition-all flex items-center gap-1.5 ${
              activeTab === "builder" 
                ? "bg-zinc-800 text-white shadow-sm" 
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Code size={12} /> Live Builder
          </button>
          <button 
            onClick={() => setActiveTab("score")}
            className={`px-3 py-1 text-xs rounded-md font-montserratMedium transition-all flex items-center gap-1.5 ${
              activeTab === "score" 
                ? "bg-zinc-800 text-white shadow-sm" 
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Sparkles size={12} /> ATS Score
          </button>
          <button 
            onClick={() => setActiveTab("match")}
            className={`px-3 py-1 text-xs rounded-md font-montserratMedium transition-all flex items-center gap-1.5 ${
              activeTab === "match" 
                ? "bg-zinc-800 text-white shadow-sm" 
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Briefcase size={12} /> Job Matcher
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-900/60 px-2.5 py-1 rounded-md border border-zinc-800/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Cloud Sync
        </div>
      </div>

      {/* Main Workspace Panels */}
      <div className="grid grid-cols-12 h-[480px] text-zinc-300">
        
        {/* PANEL 1: Left Form / Control Panel */}
        <div className="col-span-12 md:col-span-4 border-r border-zinc-800 bg-[#09090b]/80 p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-montserratBold">Resume Editor</h4>
              <span className="text-[10px] text-zinc-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">Personal Info</span>
            </div>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 block font-mono">FULL_NAME</label>
                <div className="bg-[#121215] border border-zinc-800 rounded px-2.5 py-1.5 text-xs font-montserratRegular text-white">
                  Arjun Sharma
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 block font-mono">PROFESSIONAL_SUMMARY</label>
                <div className="bg-[#121215] border border-zinc-800 rounded p-2 text-xs font-montserratRegular leading-relaxed text-zinc-400">
                  Full Stack Engineer with 3+ years experience building highly-scalable web architectures...
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] text-zinc-500 font-mono">WORK_EXPERIENCE (Google)</label>
                  <span className="text-[9px] text-indigo-400">Editing...</span>
                </div>
                <div className="bg-[#121215] border border-zinc-800 rounded p-2 text-[11px] font-mono text-indigo-200/90 leading-relaxed min-h-[90px] relative overflow-hidden">
                  {fixedItems.impact ? (
                    <span className="text-emerald-400 transition-all duration-500">
                      - Architected microservices with Node.js, increasing application throughput by <span className="underline font-bold">42%</span> and saving $12k/month.
                    </span>
                  ) : (
                    <span className="text-zinc-400">
                      - Worked on microservices with Node.js and helped improve speed and code quality.
                    </span>
                  )}
                  <div className="mt-1">
                    - Led deployment of cloud infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-500">
              <span>Template: <strong className="text-zinc-300">Modern Slate</strong></span>
              <span>v1.2</span>
            </div>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-white/80 inline-block cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-blue-900 border border-transparent inline-block cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-emerald-900 border border-transparent inline-block cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-amber-900 border border-transparent inline-block cursor-pointer"></span>
            </div>
          </div>
        </div>

        {/* PANEL 2: Center Live Preview */}
        <div className="col-span-12 md:col-span-4 bg-[#050506] p-5 flex flex-col relative overflow-hidden justify-between border-r border-zinc-800">
          <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] bg-[size:16px_16px] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Minimal Resume Sheet Mock */}
            <div className="bg-zinc-900 border border-zinc-800 shadow-xl rounded-lg p-5 flex-1 flex flex-col justify-start">
              <div className="text-center border-b border-zinc-800 pb-3 mb-3">
                <h3 className="text-sm font-bold text-white tracking-wide">ARJUN SHARMA</h3>
                <p className="text-[8px] text-zinc-400 mt-0.5 font-mono">arjun.dev@gmail.com · San Francisco, CA</p>
              </div>

              <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                {/* Education section */}
                <div>
                  <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Education</h4>
                  <div className="flex justify-between text-[7px] text-zinc-400 font-medium">
                    <span>B.S. Computer Science, UC Berkeley</span>
                    <span>2020 - 2024</span>
                  </div>
                </div>

                {/* Experience section */}
                <div className="space-y-1">
                  <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Experience</h4>
                  <div className="flex justify-between text-[8px] text-white font-medium">
                    <span>Software Engineer II · Google</span>
                    <span>2024 - Present</span>
                  </div>
                  
                  {/* Glowing highlights depending on fix actions */}
                  <div className="space-y-1 text-[7px] leading-relaxed text-zinc-400">
                    <p className={`p-1 rounded transition-colors duration-500 ${
                      fixedItems.impact 
                        ? "bg-emerald-950/20 border border-emerald-500/20 text-emerald-300" 
                        : "hover:bg-zinc-800/40"
                    }`}>
                      {fixedItems.impact 
                        ? "✓ Architected microservices with Node.js, increasing application throughput by 42% and saving $12k/month."
                        : "• Worked on microservices with Node.js and helped improve speed and code quality."}
                    </p>

                    <p className={`p-1 rounded transition-colors duration-500 ${
                      fixedItems.kubernetes 
                        ? "bg-violet-950/20 border border-violet-500/20 text-violet-300" 
                        : "hover:bg-zinc-800/40"
                    }`}>
                      • Configured docker templates & pipelines. {fixedItems.kubernetes && <strong className="text-violet-400 font-bold ml-1">Kubernetes orchestrated.</strong>}
                    </p>
                  </div>
                </div>

                {/* Skills section */}
                <div>
                  <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {["React.js", "Node.js", "AWS", "Docker", "TypeScript"].map(s => (
                      <span key={s} className="bg-zinc-800 px-1.5 py-0.5 rounded text-[7px] text-zinc-300 font-medium">{s}</span>
                    ))}
                    {fixedItems.kubernetes && (
                      <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 px-1.5 py-0.5 rounded text-[7px] font-bold transition-all duration-300 scale-105">
                        Kubernetes
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <span className="text-[10px] text-zinc-500 select-none">Real-time PDF Layout Engine active</span>
            </div>
          </div>
        </div>

        {/* PANEL 3: Right AI Score Analyzer */}
        <div className="col-span-12 md:col-span-4 bg-[#0a0a0c] p-5 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-violet-400 animate-pulse" />
                <h4 className="text-xs font-montserratBold text-zinc-200">AI Recruiter Audit</h4>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Claude-3.5-Sonnet</span>
            </div>

            {/* ATS Score Dial */}
            <div className="bg-zinc-950/70 border border-zinc-900 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#1e1e24"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="3"
                    strokeDasharray="94.2"
                    strokeDashoffset={94.2 - (94.2 * atsScore) / 100}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-base font-montserratBold text-white leading-none">{atsScore}</span>
                  <span className="text-[6px] text-zinc-500 font-bold uppercase mt-0.5">ATS</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-zinc-200">
                  {atsScore < 80 ? (
                    <span className="text-amber-400">Needs Optimizing</span>
                  ) : atsScore < 90 ? (
                    <span className="text-violet-400">Highly Competitive</span>
                  ) : (
                    <span className="text-emerald-400">Exceptional Rank!</span>
                  )}
                </div>
                <p className="text-[10px] text-zinc-500 leading-normal mt-1">
                  {atsScore < 80 
                    ? "Add missing core skills and quantify work bullet points to bypass enterprise filters." 
                    : "Excellent keywords and metrics. Top-tier ATS readability index."}
                </p>
              </div>
            </div>

            {/* Suggestions Checklist */}
            <div className="space-y-2.5">
              <h5 className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Priority Suggestions</h5>
              
              {/* Suggestion 1 */}
              <div className={`p-2.5 rounded-lg border transition-all duration-500 ${
                fixedItems.kubernetes 
                  ? "bg-emerald-950/10 border-emerald-500/20 text-emerald-400" 
                  : "bg-zinc-950 border-zinc-900 text-zinc-400"
              } flex items-start justify-between gap-2`}>
                <div className="flex gap-2">
                  {fixedItems.kubernetes ? (
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={13} className="text-red-400 shrink-0 mt-0.5 animate-pulse" />
                  )}
                  <div className="text-[11px] leading-tight">
                    <p className={`font-semibold ${fixedItems.kubernetes ? "text-zinc-300" : "text-white"}`}>
                      Missing core skill: <code className="bg-zinc-800 text-purple-400 px-1 rounded font-mono text-[9px]">Kubernetes</code>
                    </p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">Required by Google SDE II role</p>
                  </div>
                </div>
                <span className="text-[9px] text-purple-400 font-bold shrink-0">+9 pts</span>
              </div>

              {/* Suggestion 2 */}
              <div className={`p-2.5 rounded-lg border transition-all duration-500 ${
                fixedItems.impact 
                  ? "bg-emerald-950/10 border-emerald-500/20 text-emerald-400" 
                  : "bg-zinc-950 border-zinc-900 text-zinc-400"
              } flex items-start justify-between gap-2`}>
                <div className="flex gap-2">
                  {fixedItems.impact ? (
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={13} className="text-amber-500 shrink-0 mt-0.5" />
                  )}
                  <div className="text-[11px] leading-tight">
                    <p className={`font-semibold ${fixedItems.impact ? "text-zinc-300" : "text-white"}`}>
                      Quantify work bullet points
                    </p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">e.g., mention metrics, growth %, or dollars saved</p>
                  </div>
                </div>
                <span className="text-[9px] text-purple-400 font-bold shrink-0">+19 pts</span>
              </div>

              {/* Suggestion 3 */}
              <div className={`p-2.5 rounded-lg border transition-all duration-500 ${
                fixedItems.format 
                  ? "bg-emerald-950/10 border-emerald-500/20 text-emerald-400" 
                  : "bg-zinc-950 border-zinc-900 text-zinc-400"
              } flex items-start justify-between gap-2`}>
                <div className="flex gap-2">
                  {fixedItems.format ? (
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={13} className="text-zinc-500 shrink-0 mt-0.5" />
                  )}
                  <div className="text-[11px] leading-tight">
                    <p className="font-semibold text-zinc-300">Format & structure adjustments</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">Optimize vertical grid heights</p>
                  </div>
                </div>
                <span className="text-[9px] text-purple-400 font-bold shrink-0">+6 pts</span>
              </div>

            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-zinc-900 flex gap-2">
            {atsScore < 96 ? (
              <button 
                onClick={handleAiFix}
                disabled={isFixing}
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-montserratMedium py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-md shadow-violet-950/30 transition active:scale-[0.98] disabled:opacity-50"
              >
                {isFixing ? (
                  <>
                    <RefreshCw size={13} className="animate-spin" /> Rewriting Bullet Points...
                  </>
                ) : (
                  <>
                    <Zap size={13} /> Rewrite & Auto-Fix with AI
                  </>
                )}
              </button>
            ) : (
              <button 
                onClick={resetSimulation}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-montserratMedium py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
              >
                <RefreshCw size={13} /> Reset Mock Simulation
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroDashboardMockup;
