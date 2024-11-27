import { ArrowDownAz, ChevronDown, SlidersHorizontal } from "lucide-react";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import UserData from "./UserData";

type SortingComponentProps = {
  handleSorting: (key: keyof typeof UserData) => void;
  selectedKey: string;
  handleFiltering: (filters: UpdateFilterType) => void;
};

export type UpdateFilterType = {
  [key: string]: string;
};

const sortingType = ["Name", "Country", "Date"];

const filteringType = [
  {
    label: "Filter By Name",
    name: "name",
  },
  {
    label: "Filter By Country",
    name: "country",
  },
  {
    label: "Filter By Email",
    name: "email",
  },
  {
    label: "Filter By Project",
    name: "project",
  },
  {
    label: "Filter By Status",
    name: "status",
  },
];

const SortingComponent = ({
  handleSorting,
  selectedKey = "sort",
  handleFiltering,
}: SortingComponentProps) => {
  const [openMenu, setOpenMenu] = useState({
    sortOpenMenu: false,
    filterOpenMenu: false,
  });

  const [updatefilter, setUpdateFilter] = useState<UpdateFilterType>({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        sortRef.current &&
        !sortRef.current.contains(event.target as Node)
      ) {
        setOpenMenu({
          sortOpenMenu: false,
          filterOpenMenu: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenSortMenu = (openType: string) => {
    openType === "sort"
      ? setOpenMenu((prevState) => ({
          filterOpenMenu: false, // Close other menu
          sortOpenMenu: !prevState.sortOpenMenu,
        }))
      : setOpenMenu((prevState) => ({
          sortOpenMenu: false, // Close other menu
          filterOpenMenu: !prevState.filterOpenMenu,
        }));
  };

  const handleUpdateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = {
      ...updatefilter,
      [name]: value,
    };
    setUpdateFilter(newFilters);
    handleFiltering(newFilters);
  };

  return (
    <div className="flex gap-2 relative z-[100]">
      {/* sorting */}
      <div
        ref={sortRef}
        className="relative flex items-center py-1 px-2 text-gray-300 border border-gray-700 rounded-md shadow-lg gap-1 cursor-pointer"
        onClick={() => handleOpenSortMenu("sort")}
      >
        <span>
          <ArrowDownAz size={20} />
        </span>
        <span className="font-medium text-[0.9rem] capitalize">
          {selectedKey}
        </span>
        <span
          className={`transition-transform duration-200 ${
            openMenu.sortOpenMenu ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={20} />
        </span>
        <div
          className={`${
            openMenu.sortOpenMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } absolute top-full left-0 right-0 mt-[0.5rem] border border-gray-700 cursor-pointer space-y-1 rounded-md bg-gray-900 overflow-hidden transition-all duration-200 shadow-lg`}
        >
          {sortingType.map((type) => (
            <span
              className="block px-2 py-1 hover:bg-gray-700 transition-colors"
              key={type}
              onClick={() =>
                handleSorting(type.toLowerCase() as keyof typeof UserData)
              }
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* filtering */}
      <div
        ref={filterRef}
        className="relative flex items-center py-1 px-2 text-gray-300 border border-gray-700 rounded-md shadow-lg gap-1 cursor-pointer"
        onClick={() => handleOpenSortMenu("filter")}
      >
        <span>
          <SlidersHorizontal size={20} />
        </span>
        <span className="font-medium text-[0.9rem]">Filters</span>
        <span
          className={`transition-transform duration-200 ${
            openMenu.filterOpenMenu ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={20} />
        </span>
        <div
          className={`${
            openMenu.filterOpenMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } absolute top-full left-0 mt-[0.5rem] min-w-[200px] border border-gray-700 rounded-md bg-gray-900 flex flex-col justify-around py-4 px-2 gap-2 shadow-lg transition-all duration-200`}
          onClick={(e) => e.stopPropagation()}
        >
          {filteringType.map(({ name, label }) => (
            <div key={label} className="px-2 space-y-1">
              <label htmlFor={name} className="text-sm block text-gray-300">
                {label}:
              </label>
              <input
                type="text"
                name={name}
                id={name}
                className="bg-gray-800 text-white w-full px-2 py-1.5 rounded-md text-sm border border-gray-700 focus:border-gray-500 focus:outline-none transition-colors"
                value={updatefilter[name]}
                onChange={handleUpdateFilter}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingComponent;
