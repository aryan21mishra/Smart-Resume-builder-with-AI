import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { RiMenuLine } from "@remixicon/react";

export function ResponsiveOverlay({ children }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer">
          <RiMenuLine color="white" size={30} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black border-r-gray-600 border-r ">
        {children}
      </SheetContent>
    </Sheet>
  );
}
