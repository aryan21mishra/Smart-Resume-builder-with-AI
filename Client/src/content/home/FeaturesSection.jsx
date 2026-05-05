import {
  RiArrowRightLongLine,
  RiFileList2Line,
  RiLineChartLine,
  RiTargetFill,
} from "@remixicon/react";
import { Link } from "react-router-dom";

export default function FeaturesSection() {
  return (
    <section className="py-10">
      <div className="px-10 mx-auto ">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-5xl text-center font-montserratExtraBold text-white">
            One Platform. Endless Power.
          </h1>
          <p className="text-base font-montserratExtraLight text-white text-center mt-2 max-w-212">
            Every feature is built to close the gap between your resume and the
            job offer — faster than any tool you've used before.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {[
            {
              icon: <RiFileList2Line size={40} />,
              heading: "Resume Builder",
              paragraph:
                "Create professional, ATS-Friendly resumes with our easy builder and modern templates.",
              buttonName: "Build Now",
              navigationTo: "/builder/new",
            },
            {
              icon: <RiLineChartLine size={40} />,
              heading: "ATS Score Checker",
              paragraph:
                "Upload your resume and get an instant ATS score with detailed feedback and suggestions.",
              buttonName: "Check Score",
              navigationTo: "/dashboard",
            },
            {
              icon: <RiTargetFill size={40} />,
              heading: "Job Description Match",
              paragraph:
                "Match your resume with any job description and get a compatibility score instantly.",
              buttonName: "Match Now",
              navigationTo: "/dashboard",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg flex items-start gap-5 text-white">
              <div className="p-7 rounded-3xl bg-white/30">{item.icon}</div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-montserratSemiBold">
                  {item.heading}
                </h3>
                <p className="text-white/60 font-montserratMedium">
                  {item.paragraph}
                </p>
                <Link
                  to={item.navigationTo}
                  className="text-indigo-600  flex gap-2 font-montserratSemiBold items-center text-base">
                  {item.buttonName} <RiArrowRightLongLine />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-4 text-white">
          <div className="col-span-2 flex items-center border rounded-3xl">
            <div className="flex gap-3">
              <div className="feat-text">
                <div className="w-13 h-13">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="4"
                      y="3"
                      width="16"
                      height="18"
                      rx="2"
                      stroke="#c85a2a"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8 8h8M8 12h5M8 16h6"
                      stroke="#c85a2a"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="feat-title">Live Resume Builder</div>
                <p className="feat-desc">
                  A three-panel editor — form on the left, live resume preview
                  in the center, AI feedback on the right. Every keystroke
                  updates your resume in real time with a 300ms debounce. Switch
                  between 6 beautiful templates instantly. Autosaves every 30
                  seconds so you never lose progress.
                </p>
                <div className="feat-tag">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle
                      cx="6"
                      cy="6"
                      r="5"
                      stroke="currentColor"
                      stroke-width="1.2"
                    />
                    <path
                      d="M4 6l1.5 1.5 3-3"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Live Preview · 6 Templates · Autosave
                </div>
              </div>

              <div className="feat-visual">
                <div className="visual-builder">
                  <div className="vb-bar">
                    <div className="vb-dot"></div>
                    <div className="vb-dot"></div>
                    <div className="vb-dot"></div>
                  </div>
                  <div className="vb-body">
                    <div className="vb-sidebar">
                      <div className="vb-side-label">Sections</div>
                      <div className="vb-side-tab active">Personal</div>
                      <div className="vb-side-tab">Experience</div>
                      <div className="vb-side-tab">Education</div>
                      <div className="vb-side-tab">Skills</div>
                      <div className="vb-side-label" className="margin-top:8px">
                        Fields
                      </div>
                      <div className="vb-field"></div>
                      <div className="vb-field short"></div>
                      <div className="vb-field"></div>
                      <div className="vb-field short"></div>
                      <div className="vb-field"></div>
                    </div>
                    <div className="vb-preview">
                      <div className="vb-resume-mini">
                        <div className="vb-resume-bar"></div>
                        <div className="vb-resume-name">Arjun Sharma</div>
                        <div className="font-size:6px;color:var(--accent);font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-top:2px;">
                          Full Stack Developer
                        </div>
                        <div className="height:1px;background:var(--ink);margin:5px 0;"></div>
                        <div
                          className="vb-resume-line dark"
                          className="width:55%;margin-bottom:4px;"></div>
                        <div
                          className="vb-resume-line"
                          className="width:90%"></div>
                        <div
                          className="vb-resume-line"
                          className="width:75%"></div>
                        <div
                          className="vb-resume-line"
                          className="width:85%"></div>
                        <div
                          className="vb-resume-line dark"
                          className="width:55%;margin-top:8px;margin-bottom:4px;"></div>
                        <div
                          className="vb-resume-line"
                          className="width:80%"></div>
                        <div
                          className="vb-resume-line"
                          className="width:70%"></div>
                        <div
                          className="vb-resume-line dark"
                          className="width:40%;margin-top:8px;margin-bottom:4px;"></div>
                        <div className="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px;">
                          <span className="font-size:5.5px;background:var(--paper);border:1px solid var(--paper3);padding:1px 4px;border-radius:2px;color:var(--ink2);">
                            React
                          </span>
                          <span className="font-size:5.5px;background:var(--paper);border:1px solid var(--paper3);padding:1px 4px;border-radius:2px;color:var(--ink2);">
                            Node.js
                          </span>
                          <span className="font-size:5.5px;background:var(--paper);border:1px solid var(--paper3);padding:1px 4px;border-radius:2px;color:var(--ink2);">
                            AWS
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="vb-ai">
                      <div className="vb-ai-label">AI Score</div>
                      <div className="vb-ai-ring-row">
                        <div className="vb-ai-ring">
                          <svg width="30" height="30" viewBox="0 0 30 30">
                            <circle
                              cx="15"
                              cy="15"
                              r="12"
                              fill="none"
                              stroke="rgba(255,255,255,.08)"
                              stroke-width="3"
                            />
                            <circle
                              cx="15"
                              cy="15"
                              r="12"
                              fill="none"
                              stroke="#e8794a"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-dasharray="75"
                              stroke-dashoffset="20"
                            />
                          </svg>
                          <div className="vb-ai-ring-num">73</div>
                        </div>
                        <div>
                          <div className="vb-ai-score-label">ATS Score</div>
                          <div className="vb-ai-score-val">Good ↑</div>
                        </div>
                      </div>
                      <div className="vb-ai-sug">
                        <div
                          className="vb-ai-sug-dot"
                          className="background:#5db87a"></div>
                        <div className="vb-ai-sug-text">Strong metrics</div>
                      </div>
                      <div className="vb-ai-sug">
                        <div
                          className="vb-ai-sug-dot"
                          className="background:#e8c56a"></div>
                        <div className="vb-ai-sug-text">Add Agile keywords</div>
                      </div>
                      <div className="vb-ai-sug">
                        <div
                          className="vb-ai-sug-dot"
                          className="background:#e8736a"></div>
                        <div className="vb-ai-sug-text">Rewrite summary</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-card theme-teal reveal">
            <div className="feat-card-inner">
              <div className="feat-text">
                <div className="feat-number">02 — AI Powered</div>
                <div className="feat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#0d7a6a"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8 12l2.5 2.5 5.5-5.5"
                      stroke="#0d7a6a"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="feat-title">ATS Score Checker</div>
                <p className="feat-desc">
                  Get an instant compatibility score powered by Claude AI. See
                  exactly how well your resume performs across 4 dimensions —
                  content quality, keyword density, format readability, and
                  impact of your bullet points.
                </p>
                <div className="feat-tag">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1l1.5 3.5H11l-3 2 1.5 3.5L6 8 2.5 10 4 6.5 1 4.5h3.5z"
                      stroke="currentColor"
                      stroke-width="1.1"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Claude AI · Real-time · 4 Sub-scores
                </div>
              </div>
              <div className="feat-visual">
                <div className="visual-ats">
                  <div className="vats-top">
                    <div className="vats-ring">
                      <svg width="70" height="70" viewBox="0 0 70 70">
                        <circle
                          cx="35"
                          cy="35"
                          r="28"
                          fill="none"
                          stroke="rgba(255,255,255,.06)"
                          stroke-width="6"
                        />
                        <circle
                          cx="35"
                          cy="35"
                          r="28"
                          fill="none"
                          stroke="#5db87a"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-dasharray="176"
                          stroke-dashoffset="44"
                        />
                      </svg>
                      <div className="vats-ring-num">75</div>
                    </div>
                    <div className="vats-summary">
                      <strong>Good Score</strong>
                      Your resume passes most ATS filters. Adding quantified
                      results and industry keywords can push this to 90+.
                    </div>
                  </div>
                  <div className="vats-scores">
                    <div className="vats-score-card">
                      <div className="vats-score-label">Content</div>
                      <div className="vats-score-bar-track">
                        <div
                          className="vats-score-bar-fill"
                          className="width:82%;background:#5db87a"></div>
                      </div>
                      <div className="vats-score-val green">82</div>
                    </div>
                    <div className="vats-score-card">
                      <div className="vats-score-label">Keywords</div>
                      <div className="vats-score-bar-track">
                        <div
                          className="vats-score-bar-fill"
                          className="width:64%;background:#e8c56a"></div>
                      </div>
                      <div className="vats-score-val yellow">64</div>
                    </div>
                    <div className="vats-score-card">
                      <div className="vats-score-label">Format</div>
                      <div className="vats-score-bar-track">
                        <div
                          className="vats-score-bar-fill"
                          className="width:91%;background:#5db87a"></div>
                      </div>
                      <div className="vats-score-val green">91</div>
                    </div>
                    <div className="vats-score-card">
                      <div className="vats-score-label">Impact</div>
                      <div className="vats-score-bar-track">
                        <div
                          className="vats-score-bar-fill"
                          className="width:58%;background:#e8794a"></div>
                      </div>
                      <div className="vats-score-val orange">58</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-card theme-blue reveal">
            <div className="feat-card-inner">
              <div className="feat-text">
                <div className="feat-number">03 — Pro Feature</div>
                <div className="feat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="8"
                      height="10"
                      rx="1.5"
                      stroke="#2563eb"
                      stroke-width="1.5"
                    />
                    <rect
                      x="13"
                      y="3"
                      width="8"
                      height="10"
                      rx="1.5"
                      stroke="#2563eb"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7 19h10M12 16v3"
                      stroke="#2563eb"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="feat-title">Job Description Match</div>
                <p className="feat-desc">
                  Paste any job description and Claude compares it against your
                  resume. See which requirements you meet, which skills you're
                  missing, and exactly how to reframe your experience for that
                  specific role.
                </p>
                <div className="feat-tag">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Role-Specific · Skill Gap Analysis
                </div>
              </div>
              <div className="feat-visual">
                <div className="visual-match">
                  <div className="vmatch-header">
                    <div className="vmatch-title">
                      Google SDE II — Match Analysis
                    </div>
                    <div className="vmatch-score-badge">76% Match</div>
                  </div>
                  <div className="vmatch-jd-box">
                    <div className="vmatch-jd-label">
                      Job Description Detected
                    </div>
                    <div className="vmatch-jd-line" className="width:90%"></div>
                    <div className="vmatch-jd-line" className="width:70%"></div>
                    <div className="vmatch-jd-line" className="width:80%"></div>
                  </div>
                  <div className="vmatch-gaps">
                    <div className="vmatch-gap-row">
                      <div
                        className="vmatch-gap-dot"
                        className="background:#ef4444"></div>
                      <div className="vmatch-gap-label">
                        Agile / Scrum methodology
                      </div>
                      <div className="vmatch-gap-importance imp-critical">
                        Critical
                      </div>
                    </div>
                    <div className="vmatch-gap-row">
                      <div
                        className="vmatch-gap-dot"
                        className="background:#f59e0b"></div>
                      <div className="vmatch-gap-label">
                        Kubernetes / container orchestration
                      </div>
                      <div className="vmatch-gap-importance imp-important">
                        Important
                      </div>
                    </div>
                    <div className="vmatch-gap-row">
                      <div
                        className="vmatch-gap-dot"
                        className="background:#5db87a"></div>
                      <div className="vmatch-gap-label">
                        React.js + TypeScript
                      </div>
                      <div className="vmatch-gap-importance imp-nice">
                        ✓ Present
                      </div>
                    </div>
                    <div className="vmatch-gap-row">
                      <div
                        className="vmatch-gap-dot"
                        className="background:#5db87a"></div>
                      <div className="vmatch-gap-label">
                        REST API design + Node.js
                      </div>
                      <div className="vmatch-gap-importance imp-nice">
                        ✓ Present
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-card theme-purple reveal">
            <div className="feat-card-inner">
              <div className="feat-text">
                <div className="feat-number">04 — Smart Analysis</div>
                <div className="feat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 7h10M7 11h7M7 15h8"
                      stroke="#6c5ce7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="3"
                      stroke="#6c5ce7"
                      stroke-width="1.4"
                    />
                    <path
                      d="M20.5 20.5l2 2"
                      stroke="#6c5ce7"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="feat-title">Keyword Suggestions</div>
                <p className="feat-desc">
                  Claude scans your resume and identifies every keyword present
                  vs missing. See your keyword density score, which categories
                  you're weak in, and get a prioritized list of the most
                  impactful keywords to add.
                </p>
                <div className="feat-tag">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1l1.5 3.5H11l-3 2 1.5 3.5L6 8 2.5 10 4 6.5 1 4.5h3.5z"
                      stroke="currentColor"
                      stroke-width="1.1"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Present vs Missing · Density Score
                </div>
              </div>
              <div className="feat-visual">
                <div className="visual-keywords">
                  <div className="vkw-header">
                    <div className="vkw-title">Keyword Analysis</div>
                    <div className="vkw-sub">
                      Green = present · Red strikethrough = missing
                    </div>
                  </div>
                  <div className="vkw-chips">
                    <span className="kw-chip kw-present">React.js</span>
                    <span className="kw-chip kw-present">Node.js</span>
                    <span className="kw-chip kw-present">AWS</span>
                    <span className="kw-chip kw-present">CI/CD</span>
                    <span className="kw-chip kw-missing">Agile</span>
                    <span className="kw-chip kw-missing">Kubernetes</span>
                    <span className="kw-chip kw-present">TypeScript</span>
                    <span className="kw-chip kw-missing">System Design</span>
                    <span className="kw-chip kw-present">Docker</span>
                    <span className="kw-chip kw-missing">Microservices</span>
                  </div>
                  <div className="vkw-density">
                    <div className="vkw-density-label">
                      <span>Keyword Density Score</span>
                      <span className="color:var(--purple);font-weight:600;">
                        72/100
                      </span>
                    </div>
                    <div className="vkw-density-track">
                      <div className="vkw-density-fill"></div>
                    </div>
                  </div>
                  <div className="vkw-recs">
                    <div className="vkw-rec-label">Recommended Additions</div>
                    <div className="vkw-rec-chips">
                      <span className="vkw-rec-chip">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path
                            d="M4.5 1v7M1 4.5h7"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                          />
                        </svg>
                        Agile
                      </span>
                      <span className="vkw-rec-chip">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path
                            d="M4.5 1v7M1 4.5h7"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                          />
                        </svg>
                        Kubernetes
                      </span>
                      <span className="vkw-rec-chip">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path
                            d="M4.5 1v7M1 4.5h7"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                          />
                        </svg>
                        Microservices
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-card theme-gold reveal">
            <div className="feat-card-inner">
              <div className="feat-text">
                <div className="feat-number">05 — Pro Feature</div>
                <div className="feat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 20h9"
                      stroke="#b89a5a"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"
                      stroke="#b89a5a"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="feat-title">AI Content Rewriter</div>
                <p className="feat-desc">
                  Select any section — summary, experience bullet, or skills —
                  and Claude rewrites it to be more impactful, ATS-friendly, and
                  achievement-focused. See the before and after score side by
                  side.
                </p>
                <div className="feat-tag">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Before vs After · Score Improvement
                </div>
              </div>
              <div className="feat-visual">
                <div className="visual-rewrite">
                  <div className="vrw-header">
                    <div className="vrw-title">Rewriting: Summary Section</div>
                    <div className="vrw-badge">AI Rewrite</div>
                  </div>
                  <div className="vrw-before">
                    <div className="vrw-before-label">Before</div>
                    <div className="vrw-before-text">
                      I am a B.Tech student who is responsible for working on
                      web development projects and I have helped with React and
                      Node.js tasks at internships.
                    </div>
                  </div>
                  <div className="vrw-arrow">↓</div>
                  <div className="vrw-after">
                    <div className="vrw-after-label">
                      After — Claude Rewrite
                    </div>
                    <div className="vrw-after-text">
                      Final-year CSE student who shipped 3 production apps used
                      by 500+ users. Reduced API response time 38% at TechCorp
                      and cut load time 52% at StartupX using React, Node.js,
                      and AWS.
                    </div>
                  </div>
                  <div className="vrw-changes">
                    <span className="vrw-change">+ Quantified results</span>
                    <span className="vrw-change">+ Action verbs</span>
                    <span className="vrw-change">+ Keywords added</span>
                  </div>
                  <div className="vrw-scores">
                    <div className="vrw-score">
                      <div className="vrw-score-label">Before</div>
                      <div className="vrw-score-val red">34</div>
                    </div>
                    <div className="display:flex;align-items:center;font-size:18px;color:var(--gold);">
                      →
                    </div>
                    <div className="vrw-score">
                      <div className="vrw-score-label">After</div>
                      <div className="vrw-score-val green">87</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
