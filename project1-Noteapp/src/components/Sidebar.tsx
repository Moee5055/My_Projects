import { NotepadText, PencilLine, ArchiveRestore } from "lucide-react";
import Items from "./Items";
import TagItems from "./TagItems";

const tagsItems = [
  "Cooking",
  "Dev",
  "Finance",
  "Health",
  "Travel",
  "Food",
  "School",
  "Typescript",
];

const Sidebar = () => {
  return (
    <aside className="basis-[200px] flex-1 max-w-[220px] min-w-[180px] border-r border-r-slate-200 shadow-md p-2 flex flex-col">
      <div className="flex flex-col space-y-3 border-b border-b-gray-300 pb-2">
        <div className="flex items-center space-x-2">
          <PencilLine className="text-blue-500" />
          <span className="font-['Cursive'] text-[1.8rem]">Notes</span>
        </div>

        <div className="flex flex-col">
          <Items
            title="All Notes"
            icon={
              <NotepadText
                size={20}
                className="text-gray-500 group-hover:text-sky-400"
              />
            }
          />
          <Items
            title="Archived Notes"
            icon={
              <ArchiveRestore
                size={20}
                className="text-gray-500 group-hover:text-sky-400"
              />
            }
          />
        </div>
      </div>

      {/* Tags Items */}
      <div className="flex-1 pt-2">
        <p className="text-gray-500 font-semibold text-[0.9rem] mb-3">Tags</p>
        {tagsItems.map((tag) => (
          <TagItems title={tag} key={tag} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
