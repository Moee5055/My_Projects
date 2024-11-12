import { ChevronRight } from "lucide-react";

type ItemsProps = {
  title: string;
  icon: React.ReactNode;
};

const Items = ({ title, icon }: ItemsProps) => {
  return (
    <div className="flex justify-around items-center p-2 group relative hover:bg-slate-200/70 rounded-lg">
      <div className="flex items-center space-x-[3px] flex-1 text-gray-800 ">
        {icon}
        <span className="text-[0.9rem] md:text-[1rem] ">{title}</span>
      </div>
      <ChevronRight
        className="hidden group-hover:inline-block text-gray-700"
        size={18}
      />
      <div></div>
    </div>
  );
};

export default Items;
