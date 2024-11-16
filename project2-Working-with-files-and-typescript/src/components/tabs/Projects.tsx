import React from "react";
import Card from "../Card";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-[3rem] p-10 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => {
        return <Card title="Amazing Card" description="hello" key={index} />;
      })}
    </div>
  );
};

export default Projects;