"use client";

import { createContext, PropsWithChildren, useState } from "react";
import { TAB_TYPE, TabType } from "../../_constatns";

export interface TabContext {
  tab: TabType,
  setTab: (tab: TabType) => void;
}

export const TabContext = createContext<TabContext>({
  tab: TAB_TYPE.RECOMMEND,
  setTab: () => {},
});

interface TabProviderProps extends PropsWithChildren {}

const TabProvider = ({ children }: TabProviderProps) => {
  const [tab, setTab] = useState<TabType>(TAB_TYPE.RECOMMEND);

  return (
    <TabContext.Provider value={{tab, setTab}}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
