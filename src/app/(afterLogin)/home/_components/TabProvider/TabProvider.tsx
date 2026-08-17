"use client";

import { createContext, PropsWithChildren, useState } from "react";
import { HOME_TAB_TYPE, HomeTabType } from "../../_constants";

export interface TabContext {
  tab: HomeTabType,
  setTab: (tab: HomeTabType) => void;
}

export const TabContext = createContext<TabContext>({
  tab: HOME_TAB_TYPE.RECOMMEND,
  setTab: () => {},
});

interface TabProviderProps extends PropsWithChildren {}

const TabProvider = ({ children }: TabProviderProps) => {
  const [tab, setTab] = useState<HomeTabType>(HOME_TAB_TYPE.RECOMMEND);

  return (
    <TabContext.Provider value={{tab, setTab}}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
