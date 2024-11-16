import React, { useContext } from "react";
import { tabsData } from "../data/tabsData";
import { TabContext } from "../../Contex";
import About from "./tabs/About";
import Projects from "./tabs/Projects";
import Courses from "./tabs/Courses";
import Contact from "./tabs/Contact";
import Home from "./tabs/Home";

const getCurrentTabContent = (tab: string) => {
  switch (tab) {
    case "about":
      return <About />;
    case "projects":
      return <Projects />;
    case "courses":
      return <Courses />;
    case "contact":
      return <Contact />;
    default:
      return <Home />;
  }
};

const TabsSection = () => {
  const context = useContext(TabContext);
  if (!context) return null;

  const { currentTab, changeCurrentTab } = context;

  return (
    <div className="mt-8">
      {/* tabs */}
      <ul className="grid grid-cols-5 shadow-md">
        {tabsData.map((tab) => {
          return (
            <li
              key={tab.id}
              className="flex items-center justify-center gap-3 border-y border-r py-3 text-gray-600/80 font-semibold cursor-pointer"
              onClick={() => changeCurrentTab(tab.id)}
            >
              {tab.icon}
              {tab.title}
            </li>
          );
        })}
      </ul>
      {getCurrentTabContent(currentTab)}
    </div>
  );
};

export default TabsSection;
