import { Tag } from "lucide-react";

type TagItemsProps = {
  title: string;
};

const TagItems = ({ title }: TagItemsProps) => {
  return (
    <div className="flex items-center space-x-2 p-2 text-gray-700 rounded-md hover:bg-gray-200">
      <Tag size={16} />
      <p className="text-[0.9rem] font-normal">{title}</p>
    </div>
  );
};

export default TagItems;
