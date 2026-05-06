import React from "react";
import DashboardNavigationBar from "../../content/dashboard/DashboardNavigationBar";
import { Outlet } from "react-router-dom";
import { ResponsiveOverlay } from "../../components/common/ResponsiveOverlay";
import Logo from "@/components/common/Logo";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex w-full bg-black text-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-60 shrink-0 sticky top-0 h-screen">
        <DashboardNavigationBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center p-4 border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur-md z-40">
          <ResponsiveOverlay>
            <DashboardNavigationBar />
          </ResponsiveOverlay>
          <div className="flex-1 flex items-center justify-center">
            <Logo />
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
