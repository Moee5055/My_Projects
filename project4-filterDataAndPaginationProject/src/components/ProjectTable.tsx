import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import SortingComponent, { UpdateFilterType } from "./SortingComponent";
import UserData from "./UserData";
import { data } from "../utils/data";

const ProjectTable = () => {
  // Remove allData state
  const [originalData, setOriginalData] = useState<UserData[]>(data);
  const [selectedKey, setSelectedKey] = useState("Sort");
  const [sortedData, setSortedData] = useState<UserData[]>([]);
  const [filteredData, setFilteredData] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Determine which data to display
  const displayData =
    filteredData.length > 0
      ? filteredData
      : sortedData.length > 0
      ? sortedData
      : originalData;

  // Calculate total pages
  const totalPages = Math.ceil(displayData.length / itemsPerPage);

  // Slice data for current page
  const paginatedData = displayData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSortData = (key: keyof UserData) => {
    const sortData = [...originalData].sort((a, b) => {
      if (a?.[key] < b?.[key]) return -1;
      if (b?.[key] < a?.[key]) return 1;
      return 0;
    });
    setSelectedKey(key);
    setSortedData(sortData);
    setCurrentPage(1);
  };

  const handleFilterData = (filters: UpdateFilterType) => {
    const filtered = originalData.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        const itemValue = String(item[key as keyof UserData]).toLowerCase();
        const filterValue = value.toLowerCase();

        return itemValue.includes(filterValue);
      });
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  return (
    <main className="flex-1 flex flex-col py-4 px-4 gap-3 overflow-y-auto">
      <SortingComponent
        handleSorting={handleSortData}
        handleFiltering={handleFilterData}
        selectedKey={selectedKey}
      />
      <UserData data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default ProjectTable;
