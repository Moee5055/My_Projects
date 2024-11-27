const Pagination = () => {
  return (
    <div className="flex items-center justify-end text-white mt-3 space-x-3">
      <button className="inline-block px-2 py-1 font-semibold capitalize bg-gray-700 text-sm rounded-md">
        Previous
      </button>
      <span className="text-sm">Page 2 of 2</span>
      <button className="inline-block px-2 py-1 font-semibold capitalize bg-gray-700 text-sm rounded-md">
        Next
      </button>
    </div>
  );
};

export default Pagination;
