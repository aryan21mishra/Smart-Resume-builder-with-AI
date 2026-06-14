import React from "react";
import { RiAi } from "@remixicon/react";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <RiAi size={20} color="white" />
      </div>
      <p className="text-xl uppercase font-montserratSemiBold text-white">
        Resume
      </p>
    </div>
  );
};
export default Logo;
