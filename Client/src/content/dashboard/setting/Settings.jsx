import React, { useState } from "react";
import {
  RiUserLine,
  RiLockPasswordLine,
  RiDeleteBin7Line,
  RiEqualizerLine,
  RiEyeLine,
  RiEyeOffLine,
} from "@remixicon/react";

const Settings = () => {
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 p-6 lg:p-12 antialiased selection:bg-white selection:text-black">
      <header className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <RiEqualizerLine size={12} className="text-zinc-500" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
              System Configuration
            </span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white font-montserratBold">
            Account Settings
          </h1>
        </div>
        <div className="font-mono text-[10px] text-zinc-500 bg-zinc-900/20 border border-zinc-900 px-3 py-1.5 rounded-lg">
          Session Profile: Active
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-10">
        {/* ================= SECTION 1: PROFILE VECTORS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-900 pb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-white font-semibold text-xs uppercase tracking-wider font-mono">
              <RiUserLine size={14} className="text-zinc-400" />
              <span>Identity Profile</span>
            </div>
            <p className="text-[11px] text-zinc-500 font-montserratRegular leading-relaxed">
              Your public operational metadata attached to published resume
              exports.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Aryan Mishra"
                className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-700 focus:outline-none transition-colors font-montserratRegular"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Professional Title
              </label>
              <input
                type="text"
                defaultValue="Software Engineer"
                className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-700 focus:outline-none transition-colors font-montserratRegular"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Contact Email Address
              </label>
              <input
                type="email"
                defaultValue="aryan.mishra@example.com"
                className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-700 focus:outline-none transition-colors font-mono"
              />
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: CHANGE PASSWORD ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-900 pb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-white font-semibold text-xs uppercase tracking-wider font-mono">
              <RiLockPasswordLine size={14} className="text-zinc-400" />
              <span>Security Access</span>
            </div>
            <p className="text-[11px] text-zinc-500 font-montserratRegular leading-relaxed">
              Update authentication credentials to safeguard access parameters
              across active sessions.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {/* Current Password Field */}
            <div className="space-y-1.5 relative">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPass.current ? "text" : "password"}
                  placeholder="••••••••••••"
                  className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-lg pl-3 pr-10 py-2 text-xs text-white focus:outline-none transition-colors font-mono"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPass({ ...showPass, current: !showPass.current })
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
                  {showPass.current ? (
                    <RiEyeOffLine size={14} />
                  ) : (
                    <RiEyeLine size={14} />
                  )}
                </button>
              </div>
            </div>

            {/* Split Grid for New Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 relative">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPass.new ? "text" : "password"}
                    placeholder="••••••••••••"
                    className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-lg pl-3 pr-10 py-2 text-xs text-white focus:outline-none transition-colors font-mono"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPass({ ...showPass, new: !showPass.new })
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
                    {showPass.new ? (
                      <RiEyeOffLine size={14} />
                    ) : (
                      <RiEyeLine size={14} />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5 relative">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPass.confirm ? "text" : "password"}
                    placeholder="••••••••••••"
                    className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-lg pl-3 pr-10 py-2 text-xs text-white focus:outline-none transition-colors font-mono"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPass({ ...showPass, confirm: !showPass.confirm })
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
                    {showPass.confirm ? (
                      <RiEyeOffLine size={14} />
                    ) : (
                      <RiEyeLine size={14} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DESTRUCTIVE AREA (DELETE ACCOUNT) ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-400 font-semibold text-xs uppercase tracking-wider font-mono">
              <RiDeleteBin7Line size={14} className="text-zinc-500" />
              <span>Danger Zone</span>
            </div>
            <p className="text-[11px] text-zinc-500 font-montserratRegular leading-relaxed">
              Irreversible profile transactions. Executing this process purges
              your operational metadata permanently.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="border border-red-950/40 bg-red-950/10 rounded-xl p-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-200 block">
                  Purge Identity Workspace
                </span>
                <span className="text-[11px] text-red-400/70 block leading-relaxed">
                  Deleting your profile wipes all synchronized database lookup
                  clusters, stored document matrices, and generated AI feedback
                  timelines. This execution cannot be reverted.
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-wider text-red-400/80 block">
                  To confirm verification, type{" "}
                  <span className="font-bold text-white select-all bg-red-950/60 px-1 py-0.5 rounded border border-red-900/40 font-mono">
                    DELETE
                  </span>{" "}
                  below:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                    placeholder="DELETE"
                    className="flex-1 bg-zinc-950 border border-red-950/80 focus:border-red-800 rounded-lg px-3 py-2 text-xs font-mono text-red-200 placeholder-zinc-800 focus:outline-none transition-colors"
                  />
                  <button
                    disabled={deleteConfirmation !== "DELETE"}
                    className={`
                      px-4 py-2 font-semibold text-xs rounded-lg tracking-wide transition-all duration-200 whitespace-nowrap
                      ${
                        deleteConfirmation === "DELETE"
                          ? "bg-red-600 text-white hover:bg-red-500 cursor-pointer shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
                          : "bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed opacity-50"
                      }
                    `}>
                    Confirm Deletion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL SAVE CONTEXT BAR ================= */}
        <footer className="pt-6 border-t border-zinc-900 flex justify-end gap-3">
          <button className="px-4 py-2 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 font-medium text-xs rounded-lg transition-colors tracking-wide font-mono">
            Reset Layout
          </button>
          <button className="px-5 py-2 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 transition-colors tracking-wide">
            Save Structural Changes
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Settings;
