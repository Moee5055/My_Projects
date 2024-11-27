import { useState } from "react";
import Pagination from "./Pagination";
import SortingComponent, { UpdateFilterType } from "./SortingComponent";
import UserData from "./UserData";
import { data } from "../utils/data";

const ProjectTable = () => {
  const [allData, setAllData] = useState<UserData[] | []>(data);
  const [selectedKey, setSelectedKey] = useState("Sort");
  const [sortedData, setSortedData] = useState<UserData[]>([]);
  const [filteredData, setFilteredData] = useState<UserData[]>([]);

  const handleSortData = (key: keyof typeof UserData) => {
    const sortData = [...allData].sort((a, b) => {
      if (a?.[key] < b?.[key]) return -1;
      if (b?.[key] < a?.[key]) return 1;
      return 0;
    });
    setSelectedKey(key);
    setSortedData(sortData);
  };

  const handleFilterData = (filters: UpdateFilterType) => {
    // Implement multi-filter logic
    const filtered = allData.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        // Convert both to lowercase for case-insensitive comparison
        const itemValue = String(item[key as keyof UserData]).toLowerCase();

        // console.log("itemvalue: ", itemValue);
        const filterValue = value.toLowerCase();

        // Check if the item value includes the filter value
        return itemValue.includes(filterValue);
      });
    });
    // console.log("Inside filtered data : ", filtered);
    setFilteredData(filtered);
  };

  // console.log("filtered data", filteredData);

  return (
    <main className="flex-1 flex flex-col py-4 px-4 gap-3 overflow-y-auto">
      {/* sorting section */}
      <SortingComponent
        handleSorting={handleSortData}
        handleFiltering={handleFilterData}
        selectedKey={selectedKey}
      />
      {/* table */}
      <UserData
        data={
          filteredData.length > 0
            ? filteredData
            : sortedData.length > 0
            ? sortedData
            : allData
        }
      />
      {/* pagination */}
      <Pagination />
    </main>
  );
};

export default ProjectTable;
