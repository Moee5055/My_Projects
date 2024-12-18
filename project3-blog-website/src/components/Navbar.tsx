import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import AddNewBlog from "./AddNewBlog";

const Navbar = () => {
  return (
    <header className="flex items-center py-2 px-3 rounded-sm border">
      {/* left side of navigation */}
      <div className="flex items-center gap-5 mr-auto">
        <h1
          style={{
            fontFamily: "Playfair Display",
          }}
          className="text-3xl font-semibold"
        >
          Medium
        </h1>
        <div className="flex items-center bg-[#F9F9F9] rounded-full border py-1 px-2 gap-2 text-gray-500">
          <Search size={18} />
          <input
            type="text"
            className="focus:outline-none font-normal bg-[#F9F9F9] text-gray-700 text-sm"
            placeholder="Search"
            style={{
              fontFamily: "Playfair Display",
            }}
          />
        </div>
      </div>
      {/* 
      right side of navigation */}
      <div className="flex items-center gap-3 md:gap-5">
        <AddNewBlog />
        <Bell size={20} className="text-gray-500" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
