import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user/userSlice";
import { useLogoutMutation } from "@/hooks/mutations/useAuthMutations";
import {
  RiAiGenerate,
  RiDashboardLine,
  RiFileList2Line,
  RiStarLine,
  RiMenuSearchLine,
  RiPencilLine,
  RiUserLine,
  RiSettings5Line,
  RiLogoutBoxRLine,
} from "@remixicon/react";
import TemplateSVG from "../../assets/svg/TemplateSVG";
const mainMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: RiDashboardLine,
    to: "/dashboard",
  },
  {
    id: "my-resumes",
    label: "My Resumes",
    icon: RiFileList2Line,
    to: "/dashboard/my-resumes",
  },
  {
    id: "ai-feedback",
    label: "AI Feedback",
    icon: RiStarLine,
    to: "/dashboard/ai-feedback",
  },
];

const tools = [
  {
    id: "templates",
    label: "Templates",
    icon: TemplateSVG,
    to: "/dashboard/templates",
  },
  {
    id: "keywords",
    label: "Keywords",
    icon: RiMenuSearchLine,
    to: "/dashboard/keywords",
  },
  {
    id: "rewrite",
    label: "Rewriter",
    icon: RiPencilLine,
    to: "/dashboard/rewrite",
  },
];

const account = [
  {
    id: "profile",
    label: "Profile",
    icon: RiUserLine,
    to: "/dashboard/profile",
  },
  {
    id: "settings",
    label: "Settings",
    icon: RiSettings5Line,
    to: "/dashboard/settings",
  },
];
const DashboardNavigationBar = () => {
  const user = useSelector(selectUser);
  const { mutate: logout } = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  const fullName = user
    ? [user.firstName, user.lastName].filter(Boolean).join(" ")
    : "Guest User";

  const initials = user
    ? [user.firstName, user.lastName]
        .filter(Boolean)
        .map((n) => n[0].toUpperCase())
        .join("")
    : "G";

  return (
    <aside className="w-full max-w-[240px] h-screen bg-zinc-950 border-r border-zinc-900 flex flex-col justify-between text-zinc-400 selection:bg-white selection:text-black antialiased">
      <div className="p-5 border-b border-zinc-900 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-black">
          <RiAiGenerate size={16} className="stroke-[2]" />
        </div>
        <span className="text-sm font-bold tracking-widest text-white uppercase font-montserratSemiBold">
          Resume.AI
        </span>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-7 scrollbar-none">
        {/* Section: Main Menu */}
        <div className="space-y-1">
          <h4 className="px-3 text-[10px] uppercase tracking-widest font-mono text-zinc-600 font-bold mb-3">
            Main Pipeline
          </h4>
          {mainMenu.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `
                  relative w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium font-montserratRegular transition-all duration-200 group
                  ${
                    isActive
                      ? "text-white bg-zinc-900 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                  }
                `}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="w-[2px] h-4 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-r" />
                    )}
                    <Icon
                      size={16}
                      className={`${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Section: Tools */}
        <div className="space-y-1">
          <h4 className="px-3 text-[10px] uppercase tracking-widest font-mono text-zinc-600 font-bold mb-3">
            Core Toolkit
          </h4>
          {tools.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `
                  relative w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium font-montserratRegular transition-all duration-200 group
                  ${
                    isActive
                      ? "text-white bg-zinc-900 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                  }
                `}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="w-[2px] h-4 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-r" />
                    )}
                    <Icon
                      size={16}
                      className={`${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Section: Account */}
        <div className="space-y-1">
          <h4 className="px-3 text-[10px] uppercase tracking-widest font-mono text-zinc-600 font-bold mb-3">
            Preferences
          </h4>
          {account.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) => `
                  relative w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium font-montserratRegular transition-all duration-200 group
                  ${
                    isActive
                      ? "text-white bg-zinc-900 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                  }
                `}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="w-[2px] h-4 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-r" />
                    )}
                    <Icon
                      size={16}
                      className={`${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <footer className="p-4 border-t border-zinc-900 bg-zinc-950 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-8 h-8 rounded-full border border-zinc-800 object-cover shrink-0"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold text-white select-none shrink-0">
              {initials || "U"}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-wide text-white truncate font-montserratSemiBold">
              {fullName || "User Profile"}
            </p>
            <p className="text-[10px] font-mono text-zinc-500 tracking-wide truncate">
              {user?.email || "active session"}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          title="Sign Out"
          className="p-1.5 hover:bg-zinc-900 rounded-lg text-zinc-500 hover:text-red-400 transition-colors cursor-pointer shrink-0">
          <RiLogoutBoxRLine size={16} />
        </button>
      </footer>
    </aside>
  );
};

export default DashboardNavigationBar;
