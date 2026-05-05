import {
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

const DashboardNavigationBar = () => {
  const mainMenu = [
    { id: "dashboard", label: "Dashboard", icon: RiDashboardLine },
    { id: "my-resumes", label: "My Resumes", icon: RiFileList2Line },
    { id: "ai-feedback", label: "Ai Feedback", icon: RiStarLine },
  ];
  const tools = [
    {
      id: "templates",
      label: "Templates",
      icon: TemplateSVG,
    },
    { id: "keywords", label: "Keywords", icon: RiMenuSearchLine },
    { id: "rewrite", label: "Rewriter", icon: RiPencilLine },
  ];
  const account = [
    { id: "profile", label: "Profile", icon: RiUserLine },
    { id: "settings", label: "Settings", icon: RiSettings5Line },
  ];

  return (
    <aside className=" max-w-60 shadow-2xl h-full text-white">
      {/* Header */}
      <div className="p-6 border-b border-white/20 ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
            {/* <BrainCircuit className="w-6 h-6 text-white" /> */}
          </div>
          <div>
            <h1 className="text-lg text-gray-800">ATS Analyzer</h1>
            <p className="text-xs text-gray-600">AI-Powered Recruitment</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-8 flex flex-col gap-2">
        {/* main start here */}
        <div className="flex flex-col ">
          <h2 className="text-xs uppercase font-montserratSemiBold text-[#fffff633] mb-2">
            Main
          </h2>
          {mainMenu.map((item) => {
            const Icon = item.icon;
            // const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                //     onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left transition-all duration-300 bg-[#ffffff1a] text-xs`}>
                <Icon className="w-5 h-5" />
                <span className="font-montserratRegular">{item.label}</span>
              </button>
            );
          })}
        </div>
        {/* tools start here */}
        <div className="flex flex-col mt-2">
          <h2 className="text-xs uppercase font-montserratSemiBold text-[#fffff633] mb-2">
            Tools
          </h2>
          {tools.map((item) => {
            const Icon = item.icon;
            // const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                //     onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left transition-all duration-300 text-[#ffffff73]`}>
                <Icon className="w-5 h-5" />
                <span className="font-montserratRegular">{item.label}</span>
              </button>
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
            // const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                //     onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left transition-all duration-300 text-[#ffffff73]`}>
                <Icon className="w-5 h-5" />
                <span className="font-montserratRegular">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};
export default DashboardNavigationBar;
