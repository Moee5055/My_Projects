import { Home, Search, Settings2, User2 } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-[80px] bg-black/90 flex flex-col py-2 pr-2">
      {/* top icons */}
      <div className="text-white flex-1 flex flex-col gap-3 items-center py-2">
        <Home size={25} />
        <User2 size={25} />
        <Search size={25} />
      </div>
      {/* bottom icons */}
      <div className="text-white flex flex-col gap-3 items-center py-2">
        <Settings2 size={25} />
        <User2 size={25} />
      </div>
    </aside>
  );
};

export default Sidebar;
