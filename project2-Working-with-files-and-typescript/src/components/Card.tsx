import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="shadow-md rounded-md bg-slate-100">
      <div className="bg-gray-300 w-full rounded-t-md h-[150px] flex items-center justify-center">
        <span className="text-3xl font-medium text-gray-500/70">400 x 300</span>
      </div>
      <div className="py-3 px-4">
        <p className="font-extrabold text-lg tracking-wide">{title}</p>
        <p className="text-sm text-gray-700">{description}</p>
        <button className="inline-block bg-neutral-200 shadow-lg px-3 py-1 rounded-md font-semibold text-sm mt-4 text-gray-800 hover:bg-neutral-500 hover:text-neutral-100">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
