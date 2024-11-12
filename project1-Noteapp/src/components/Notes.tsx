import Note from "./Note";

const notes = [
  {
    title: "React Basics",
    date: "2024-11-11",
    tags: ["dev", "react", "frontend", "javascript"],
  },
  {
    title: "Node.js Introduction",
    date: "2024-10-15",
    tags: ["backend", "nodejs", "javascript", "server"],
  },
  {
    title: "CSS Flexbox Guide",
    date: "2024-09-20",
    tags: ["frontend", "css", "layout", "design"],
  },
  {
    title: "MongoDB Aggregations",
    date: "2024-08-30",
    tags: ["database", "mongodb", "backend", "data"],
  },
  {
    title: "Redux State Management",
    date: "2024-11-01",
    tags: ["state", "redux", "react", "dev"],
  },
  {
    title: "Express Middleware",
    date: "2024-10-08",
    tags: ["express", "backend", "nodejs", "api"],
  },
  {
    title: "GraphQL Fundamentals",
    date: "2024-07-22",
    tags: ["api", "graphql", "backend", "query"],
  },
];
const Notes = () => {
  return (
    <div className="flex flex-col">
      {notes.map((note, _i) => (
        <Note key={_i} note={note} />
      ))}
    </div>
  );
};

export default Notes;
