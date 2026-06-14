import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
// import { Github, Linkedin, Twitter, ArrowRight, Heart } from "@remixicon/react";
const Footer = () => {
  return (
    <footer className="w-full bg-[#050507] border-t border-zinc-900 text-zinc-400 font-montserratRegular py-16 relative overflow-hidden">
      {/* Background ambient accents inside footer */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              Build ATS-friendly, professional resumes and get instant AI
              feedback. Enhance your career options and land your dream tech
              interview.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-montserratBold uppercase text-white tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/dashboard" className="hover:text-white transition">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/ai-feedback"
                  className="hover:text-white transition">
                  ATS Checker
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/keywords"
                  className="hover:text-white transition">
                  Keyword Match
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/templates"
                  className="hover:text-white transition">
                  Templates Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Resource Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-montserratBold uppercase text-white tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#blog" className="hover:text-white transition">
                  Career Blog
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-white transition">
                  ATS Optimization
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-montserratBold uppercase text-white tracking-wider">
              Stay Updated
            </h4>
            <p className="text-xs text-zinc-500 leading-normal">
              Subscribe to get resume hacks, interview tips, and product feature
              announcements.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#09090b] border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 font-montserratRegular"
              />
              <button
                type="submit"
                className="bg-zinc-800 hover:bg-zinc-750 text-white p-2 rounded-lg border border-zinc-750 transition flex items-center justify-center shrink-0 active:scale-95">
                {/* <ArrowRight size={14} /> */}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <div>
            &copy; {new Date().getFullYear()} ResumeAI. All rights reserved.
            Built for job-seekers globally.
          </div>
          <div className="flex items-center gap-1">
            Made with by developers, for developers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
