import React from "react";
import FilterButton from "../filter/filter-button";
import { Button } from "../ui/button";
import { ListFilter, UserPlus, Globe } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full h-14 flex items-center">
      {/* Left half */}
      <div className="w-1/2 flex items-center justify-start pl-4 gap-4">
        <Button className="bg-blue-200 hover:bg-blue-100border  py-3 border-black text-black">
          <UserPlus className="text-black mr-2" /> Buyer Signal
        </Button>
        <Button className="bg-white hover:bg-white   py-3 border-black text-black">
          <Globe className="text-black mr-2" /> ICP Triggers
        </Button>
      </div>

      {/* Right half */}
      <div className="w-1/2 flex items-center justify-start pl-4 gap-4 ml-16">
        <FilterButton />
        <Button className="bg-white hover:bg-white border rounded-2xl py-3 border-black text-black">
          <ListFilter className="text-black mr-2" /> Sort
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
