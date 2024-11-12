type NoteProps = {
  note: {
    title: string;
    date: string;
    tags: string[];
  };
};
const Note = ({ note: { title, tags, date } }: NoteProps) => {
  return (
    <div className="flex flex-col space-y-2 hover:rounded-sm border-b border-b-gray-300 p-3 hover:bg-slate-200 cursor-pointer">
      <p className="font-semibold">{title}</p>
      <div className="flex flex-wrap items-center text-[0.7rem] gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="inline-block p-1 bg-gray-300 rounded-sm text-pretty"
          >
            {tag}
          </span>
        ))}
      </div>

      <p>{date}</p>
    </div>
  );
};

export default Note;
