import { Search, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full min-h-[50px] shadow-md p-3 flex text-gray-500">
      <p className="grow-[2] font-bold text-lg text-gray-700 pl-1">All Notes</p>
      <div className="grow-[1] flex items-center space-x-3 min-w-[300px]">
        <div className="flex-1 flex items-center">
          <Search className="text-gray relative left-5" size={16} />
          <input
            type="text"
            placeholder="Search by title, content or tags..."
            className="w-full border border-gray-200 rounded py-1 pl-6 pr-3 text-[0.8rem]"
          />
        </div>
        <Settings className="" size={18} />
      </div>
    </header>
  );
};

export default Header;
