import { useState } from "react";
import Pagination from "./Pagination";
import SortingComponent from "./SortingComponent";
import UserData from "./UserData";
import { data } from "../utils/data";

const ProjectTable = () => {
  const [allData, setAllData] = useState<UserData[]>(data);
  const [selectedKey, setSelectedKey] = useState("Sort");
  const [sortedData, setSortedData] = useState<UserData[]>([]);

  const handleSortData = (key: keyof typeof UserData) => {
    const sortData = [...allData].sort((a, b) => {
      if (a?.[key] < b?.[key]) return -1;
      if (b?.[key] < a?.[key]) return 1;
      return 0;
    });
    setSelectedKey(key);
    setSortedData(sortData);
  };

  return (
    <main className="flex-1 flex flex-col py-4 px-4 gap-3 overflow-y-auto">
      {/* sorting section */}
      <SortingComponent
        handleSorting={handleSortData}
        selectedKey={selectedKey}
      />
      {/* table */}
      <UserData data={sortedData.length > 0 ? sortedData : allData} />
      {/* pagination */}
      <Pagination />
    </main>
  );
};

export default ProjectTable;
