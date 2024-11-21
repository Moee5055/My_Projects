type TrendsProps = {
  title: string;
  author: string;
};

const Trends = ({ title, author }: TrendsProps) => {
  return (
    <div className="flex flex-col mb-3">
      <p className="font-bold text-[0.9rem] leading-[0.8rem] hover:underline cursor-pointer">
        {title}
      </p>
      <span className="text-[0.8rem] text-gray-500">By {author}</span>
    </div>
  );
};

export default Trends;
