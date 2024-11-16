import React, { createContext, useState } from "react";

type ContextType = {
  currentTab: string;
  changeCurrentTab: (tabName: string) => void;
};

export const TabContext = createContext<ContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTab, setCurrentTab] = useState("home");
  const changeCurrentTab = (tabName: string) => {
    console.log("Changing", tabName, "to", currentTab);
    setCurrentTab(tabName);
  };
  console.log(currentTab);
  return (
    <TabContext.Provider value={{ currentTab, changeCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default ContextProvider;
