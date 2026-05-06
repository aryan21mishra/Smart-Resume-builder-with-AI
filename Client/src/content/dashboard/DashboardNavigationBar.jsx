import {
  RiAi,
  RiCheckboxCircleLine,
  RiDashboardLine,
  RiFileList2Line,
  RiMenuSearchLine,
  RiPencilLine,
  RiSettings5Line,
  RiStarLine,
  RiUserLine,
} from "@remixicon/react";
import React from "react";
import TemplateSVG from "../../assets/svg/TemplateSVG";
import { Link, NavLink } from "react-router-dom";

const DashboardNavigationBar = () => {
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
      label: "Ai Feedback",
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

  return (
    <aside className=" lg:max-w-60 shadow-2xl h-full text-white border-r">
      {/* Header */}
      <div className="p-6 border-b border-white/20 ">
        <div className="flex items-center gap-3">
          <div>
            <RiAi size={20} color="white" />
          </div>
          <p className="text-xl uppercase font-montserratSemiBold text-white">
            Resume
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-4 flex flex-col gap-2">
        {/* main start here */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs uppercase font-montserratSemiBold text-[#fffff633] ">
            Main
          </h2>
          {mainMenu.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left transition-all duration-300 text-[#ffffff73] hover:bg-[#ffffff1a] hover:text-white ${isActive ? "bg-[#ffffff1a] text-white" : "bg-transparent text-[#ffffff73]"} `
                }>
                <Icon className="w-5 h-5" />
                <span className="font-montserratRegular">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
        {/* tools start here */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs uppercase font-montserratSemiBold text-[#fffff633] mb-2">
            Tools
          </h2>
          {tools.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.to}
                key={item.id}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left transition-all duration-300 text-[#ffffff73] hover:bg-[#ffffff1a] hover:text-white ${isActive ? "bg-[#ffffff1a] text-white" : ""}`
                }>
                <Icon className="w-5 h-5" />
                <span className="font-montserratRegular ">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
        {/* account start here */}
        <div className="flex flex-col mt-2 ">
          <h2 className="text-xs uppercase font-montserratSemiBold text-[#fffff633] mb-2">
            Account
          </h2>
          {account.map((item) => {
            const Icon = item.icon; 
           return (
              <NavLink
                to={item.to}
                key={item.id}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left transition-all duration-300 text-[#ffffff73] hover:bg-[#ffffff1a] hover:text-white ${isActive ? "bg-[#ffffff1a] text-white" : ""}`
                }>
                <Icon className="w-5 h-5" />
                <span className="font-montserratRegular">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-white/20 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-montserratExtraBold text-black text-xl">
          A
        </div>
        <div className="text-sm  font-montserratSemiBold text-white">
          <p>Aryan Mishra</p>
          <p className="text-[10px]">Software Engineer</p>
        </div>
      </div>
    </aside>
  );
};
export default DashboardNavigationBar;
