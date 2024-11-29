type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-end text-white mt-3 space-x-3">
      <button
        className="inline-block px-2 py-1 font-semibold capitalize bg-gray-700 text-sm rounded-md cursor-pointer"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="inline-block px-2 py-1 font-semibold capitalize bg-gray-700 text-sm rounded-md cursor-pointer"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
