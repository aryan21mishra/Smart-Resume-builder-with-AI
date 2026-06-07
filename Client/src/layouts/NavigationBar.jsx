import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import { Button } from "../components/ui";
const NavigationBar = () => {
  const navigation = useNavigate();
  return (
    <nav className="w-full px-18 py-4 text-white font-montserratRegular flex justify-between items-center text-sm">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="flex gap-5 max-md:hidden">
        {[
          { name: "Templates", to: "/templates" },
          { name: "Features", to: "/features" },
          {
            name: "Dashboard",
            to: "/dashboard",
          },
        ].map((item, index) => (
          <NavLink
            to={item.to}
            key={index}
            className={"text-white/80 hover:text-white transition group"}>
            {item.name}
            <div className="w-0 mt-px bg-white h-px group-hover:w-full transition-all duration-200" />
          </NavLink>
        ))}
      </div>
      <div className="flex gap-5 max-md:hidden">
        <Button
          onClick={() => navigation("/auth/login")}
          className="h-fit bg-transparent! text-white! border border-[rgba(255,255,255,0.08)]!">
          Sign In
        </Button>
        <Button
          onClick={() => navigation("/auth/register")}
          className="h-fit bg-linear-to-r from-[#6C63FF] to-[#8B5CF6]   text-white font-medium hover:opacity-90 transition">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;
