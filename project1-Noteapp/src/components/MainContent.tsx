import { ArchiveRestore, Plus, Trash2 } from "lucide-react";
import Notes from "./Notes";
import NoteContent from "./NoteContent";

const MainContent = () => {
  return (
    <main className="flex-1 grid grid-cols-[250px_1fr_230px] overflow-y-auto pt-3 px-4">
      <div className="flex flex-col space-y-3 shadow-md pb-2 ">
        <button className="flex justify-center items-center rounded-md bg-sky-500 text-white w-[200px] py-[6px] px-3 text-[0.9rem] font-semibold space-x-1 hover:bg-blue-500">
          <Plus size={16} />
          <span>Create New Note</span>
        </button>
        {/* Notes */}
        <Notes />
      </div>
      {/* this is the middle section */}
      <NoteContent />
      {/* shortcut */}
      <div className="flex flex-col px-3 gap-3">
        <div className="flex items-center gap-2 border border-gray-300 px-2 rounded-md py-[0.4rem] hover:bg-slate-100 cursor-pointer">
          <ArchiveRestore size={18} />
          <span className="font-medium text-sm">Archive Note</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 px-2 rounded-md py-[0.4rem] hover:bg-slate-100 cursor-pointer">
          <Trash2 size={18} />
          <span className="font-medium text-sm">Delete Note</span>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
